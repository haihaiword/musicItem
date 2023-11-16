var express = require('express');
var ProductRouter = express.Router();
//图片上传
const muter=require('multer');
const ProductController = require('../../controllers/admin/ProductController');
const upload=muter({dest:'public/Productuploads/'})
/* 创建产品  涉及文件上传*/
ProductRouter.post("/adminapi/product/add",upload.single("file"),ProductController.add,)
//获取商品信息
ProductRouter.get("/adminapi/product/list",ProductController.getList)
ProductRouter.get("/adminapi/product/list/:id",ProductController.getList)
// NewsRouter.get("/adminapi/news/list/:id",NewsController.getList)
// //发布商品
// NewsRouter.put("/adminapi/news/publish",NewsController.pubList)
//删除商品
ProductRouter.delete("/adminapi/product/list/:id",ProductController.delList)
//改变商品信息
ProductRouter.post("/adminapi/product/list",upload.single("file"),ProductController.updateList)


module.exports = ProductRouter;
