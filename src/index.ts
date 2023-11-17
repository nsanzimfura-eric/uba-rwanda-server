import { Console } from 'console';
import express from 'express';

const app = express();
const PORT = 8085;

app.listen(PORT, ()=>{
    console.log("app is listening oin the port" + PORT)
})