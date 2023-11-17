import mongoose from 'mongoose';
import dotenv from 'dotenv';
import express from 'express';

const app = express();
const PORT = 8085;

app.listen(PORT, ()=>{
    console.log("app is listening oin the port" + PORT)
})