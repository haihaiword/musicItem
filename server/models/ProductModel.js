const mongoose=require("mongoose")
const schema=mongoose.Schema
//创建模型集合
const ProductType={
    title:String,
    introduction:String,
    cover:String,//封面
    detail:String,
    editTime:Date//发布的时间
} 
const ProductModel= mongoose.model("Product",new schema(ProductType))
module.exports=ProductModel