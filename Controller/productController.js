const Product = require('../Model/productModel')
const BookmarkProduct = require('../Model/bookmarkModel')
const createApi = async(req,res)=>{
    try {
        let products = await Product.create(req.body);
        products.save();
        return res.status(200).send({message:'Added',products})
    } catch (error) {
        res.status(500).send(error.message)
    }
};

const getApi = async(req,res)=>{
    let {
        page = 1,
        limit = 10,
        sortBy = "id",
        order = "asc",
      
      } = req.query;
    try {
        let products = await Product.find({}).skip((page - 1) * limit)
        .limit(limit)
        .sort({ [sortBy]: order === "asc" ? 1 : -1 });;
        return res.status(200).send({message:'Displayed',products})
    } catch (error) {
        res.status(500).send(error.message)
    }
};

const bookmarkApi = async(req,res)=>{
    const {id} = req.params;
    try {
        let products = await BookmarkProduct.create(id);
        return res.status(200).send({message:'BookMark Data Displayed',products})
    } catch (error) {
        res.status(500).send(error.message)
    }
};

const deleteApi = async(req,res)=>{
    const {id} = req.params;
    try {
        await Product.findByIdAndDelete(id);
        return res.status(200).send({message:'Product Deleted'})
    } catch (error) {
        res.status(500).send(error.message)
    }
};

module.exports = {createApi,getApi,bookmarkApi,deleteApi}