const mongoose=require("mongoose")
const schema=mongoose.Schema
//创建模型集合
const UserType={
    username:String,
    password:String,
    gender:Number,
    introduction:String,//人的简介
    avatar:String,
    role:Number//管理员1 ，编辑员2
} 
const UserModel= mongoose.model("user",new schema(UserType))
module.exports=UserModel