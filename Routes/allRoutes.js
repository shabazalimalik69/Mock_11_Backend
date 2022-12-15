const express = require('express');
const { createApi, getApi, bookmarkApi, deleteApi, getBookApi } = require('../Controller/productController');

const Router = express.Router();

Router.post('/create',createApi);
Router.get('/display',getApi);
Router.get('/bookmark/',getBookApi);
Router.post('/bookmark/:id',bookmarkApi);
Router.delete('/delete/:id',deleteApi);

module.exports = Router;