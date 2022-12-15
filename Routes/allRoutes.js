const express = require('express');
const { createApi, getApi, bookmarkApi, deleteApi } = require('../Controller/productController');

const Router = express.Router();

Router.post('/create',createApi);
Router.get('/display',getApi);
Router.post('/bookmark/:id',bookmarkApi);
Router.delete('/delete/:id',deleteApi);

module.exports = Router;