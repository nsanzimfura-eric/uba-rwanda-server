import express from "express";
import "dotenv/config";
// import "./db";
import router from "./routers";

const app = express();
const PORT = process.env.PORT || 5000;

// middlewares configs
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//assign routes
app.get("/", async (req, res) => {
  res
    .status(200)
    .send("Welcome to the Uber App Home! Head to /api/auth/signup to register");
});

app.use("/api", router);

app.listen(PORT, () => {
  console.log("app is listening oin the port: " + PORT);
});
