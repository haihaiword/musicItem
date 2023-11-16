var express = require('express');
const UserController = require('../../controllers/admin/UserController');
var NewsRouter = express.Router();
//图片上传
const muter=require('multer');
const NewsController = require('../../controllers/admin/NewsController');
const upload=muter({dest:'public/newsuploads/'})
/* 创建新闻  涉及文件上传*/
NewsRouter.post("/adminapi/news/add",upload.single("file"),NewsController.add,)
//获取商品信息
NewsRouter.get("/adminapi/news/list",NewsController.getList)
NewsRouter.get("/adminapi/news/list/:id",NewsController.getList)
//发布商品
NewsRouter.put("/adminapi/news/publish",NewsController.pubList)
//删除商品
NewsRouter.delete("/adminapi/news/list/:id",NewsController.delList)
//改变商品信息
NewsRouter.post("/adminapi/news/list",upload.single("file"),NewsController.updateList)


module.exports = NewsRouter;
