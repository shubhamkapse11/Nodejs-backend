// require('dotenv').config({path : './env'})
// import mongoose from "mongoose";
// import {DB_NAME} from "./constants";
import dotenv from "dotenv";
import connectDB from "./db/db.js";

// dotenv.config({ path: "./env" });
dotenv.config();   // will automatically load ".env"


connectDB();









// import express from "express"
// const app = express();

// ;(async()=>{
// try{
//    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//    app.on('error' ,(err)=>{
// console.log(err)
// throw err
//    })

//    app.listen(process.env.PORT , ()=>{
//     console.log("listening to my app" , process.env.PORT)
//    })
// }catch(err){
//     console.log("err hamppen  ehile connecin to db")
//     console.error("err", err)
//     throw err
// }
// })()