const {Router} = require('express')

const productRouter = Router()

const {productModel} = require('../models/productmodel')

const { Auth } = require('../middleware/auth')


const mongoose = require('mongoose')

const { UserModel } = require('../models/usermodel')

const { verifyRole } = require('../middleware/verifyrole')




const productAdd=async(req,res)=>{
    const {productname,quantity}=req.body;
    try {
        const product=new ProductModel({productname,quantity});
        await product.save();
        return res.status(200).send(product)
    } catch (error) {
        res.status(400).send({error:error.message});
    }
}

const productDelete=async(req,res)=>{
    try {
        const data=await ProductModel.deleteMany({});
        return res.status(200).send(`all product are deleted form database!`)
    } catch (error) {
        res.status(400).send({error:error.message});
    }
}

const productGetAll=async(req,res)=>{
    try {
        let allproducts=await ProductModel.find()
        return res.status(200).send(allproducts)
    } catch (error) {
        res.status(400).send({error:error.message});
    }
}


productRoute.post("/addproducts",auth,verifyRole(["Seller"]),productAdd)

productRoute.get("/products",auth,verifyRole(["User","Seller"]),productGetAll)

productRoute.delete("/deleteproducts",auth,verifyRole(["Seller"]),productDelete)









module.exports = {
    productRouter
}