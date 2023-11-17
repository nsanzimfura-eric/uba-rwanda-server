import express from "express";
import "dotenv/config";
import "./db";

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("app is listening oin the port" + PORT);
});
