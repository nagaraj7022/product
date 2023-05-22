const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    
    
    productname:{type:String },
    quantity:{type:Number},

   
   

},

    {versionKey:false}

)
 

const ProductModel = mongoose.model("product", productSchema)

module.exports = {
    ProductModel
}