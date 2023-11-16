var express = require('express');
var ProductRouter = express.Router();

const ProductController = require('../../controllers/web/ProductController');
//获取商品信息
ProductRouter.get("/webapi/product/list",ProductController.getList)


module.exports = ProductRouter;
