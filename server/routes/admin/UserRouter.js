var express = require('express');
const UserController = require('../../controllers/admin/UserController');
var UserRouter = express.Router();
//图片上传
const muter=require('multer')
const upload=muter({dest:'public/avataruploads/'})
/* GET home page. */
UserRouter.post("/adminapi/user/login",UserController.login)
//更新数据信息
UserRouter.post("/adminapi/user/upload",upload.single('file'),UserController.upload)
 //添加数据 
UserRouter.post("/adminapi/user/add",upload.single('file'),UserController.add)
//获取数据所以表格
UserRouter.get("/adminapi/user/list",UserController.getlist)
UserRouter.get("/adminapi/user/list/:id",UserController.getlist)
//更新数据
UserRouter.put("/adminapi/user/list/:id",UserController.putList)
//删除数据
UserRouter.delete("/adminapi/user/list/:id",UserController.deleteList)

module.exports = UserRouter;
