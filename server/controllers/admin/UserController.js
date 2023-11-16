const UserService = require("../../services/admin/UserService")
const JWT = require("../../util/JWT")
require('../../util/JWT')
const UserController = {
    login: async (req, res) => {
        //数据库查询
        var result = await UserService.login(req.body)
        if (result.length === 0) {
            res.send({
                code: "-1",
                error: ' 用户名或者密码不匹配 '
            })
        } else {
            //生成token
            const token = JWT.generate({
                _id: result[0]._id,
                username: result[0].username
            }, "1d")

            res.header("Authorization", token)
            res.send({
                ActionType: 'OK',
                data: {
                    username: result[0].username,
                    gender: result[0].gender?result[0].gender:0,
                    introduction: result[0].introduction,//人的简介
                    avatar: result[0].avatar,
                    role:result[0].role
                }
            })
        }
    },
    upload:async(req,res)=>{
        console.log(req.body,req.file);
        // 调用serve模块更新数据
        const {username,introduction,gender}=req.body
        // console.log(req.file);
        const avatar=req.file?`/avataruploads/${req.file.filename}`:''
        const token = req.headers["authorization"].split(" ")[1]
        var playload=JWT.verify(token)
        await UserService.upload({_id:playload._id,username,introduction,gender:Number(gender),avatar})
        if(avatar){
            res.send({
                ActionType:"OK",
                data:{
                    username,introduction,gender:Number(gender),avatar
                }
            })
        }else{
            res.send({
                ActionType:"OK",
                data:{
                    username,introduction,gender:Number(gender)
                }
            })
        }
    },

    add:async(req,res)=>{
        console.log(req.body,req.file);
        // 调用serve模块更新数据
        const {username,introduction,gender,role,password}=req.body
        // console.log(req.file);
        const avatar=req.file?`/avataruploads/${req.file.filename}`:''
        // var playload=JWT.verify(token)
        await UserService.add({username,introduction,gender:Number(gender),avatar,role:Number(role),password})
        res.send({
            ActionType:"OK",
        })
    },
    getlist:async(req,res)=>{
        const result= await UserService.getlist(req.params)
        res.send({
            ActionType:'ok',
            data:result
        })
    },
    deleteList:async(req,res)=>{
        // console.log(req.params.id);
        const result= await UserService.deleteList({_id:req.params.id})
        res.send({
            ActionType:'ok',
            data:result
        })
    },
    putList:async(req,res)=>{
        const result= await UserService.putList(req.body)
        res.send({
            ActionType:'ok',
            data:result
        })
    }
}
module.exports = UserController
