const mongoose=require("mongoose")
const schema=mongoose.Schema
//创建模型集合
const NewsType={
    title:String,
    content:String,
    category:Number,//类别
    cover:String,//封面
    isPublish:Number,//未发布和已发布
    role:Number,
    editTime:Date//发布的时间
} 
const UserModel= mongoose.model("news",new schema(NewsType))
module.exports=UserModel