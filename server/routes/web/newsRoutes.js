var express = require('express');
var NewsRouter = express.Router();
//图片上传
const muter=require('multer');
const NewsController = require('../../controllers/web/NewsController');
const upload=muter({dest:'public/newsuploads/'})

//获取商品信息
NewsRouter.get("/webapi/news/list",NewsController.getList)
NewsRouter.get("/webapi/news/topList",NewsController.getTopList)
NewsRouter.get("/webapi/news/list/:id",NewsController.getList)



module.exports = NewsRouter;
