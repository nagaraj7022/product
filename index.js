const express = require('express')

const { connection } = require('./config/connection')

const { userRouter } = require('./router/userrouter')

const {productRouter}= require('./router/productrouter')


const cookieParser = require('cookie-parser')

require('dotenv').config()

const app = express()

app.use(express.json())

app.use(cookieParser())

app.use("/user", userRouter)

app.use("/product",productRouter)


app.all("*" , (req,res)=>{
    res.send("Invalid URl !! Error 404")
})






app.listen(process.env.port , async (req,res)=>{

    try {

        await connection
        console.log("Connected to db. server running !")
        

    } 
    
    catch (error) {
        console.log(error)
    }

})