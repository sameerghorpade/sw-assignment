module.exports = (app) => {
    const productController = require('../controller/product.controller'); 
    var router = require('express').Router();
   
    router.get('/:consumption', productController.get);

    app.use('/api/products', router);
};