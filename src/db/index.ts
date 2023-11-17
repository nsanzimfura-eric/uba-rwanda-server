import mongoose from "mongoose";
import { MONGO_URI } from "#/utils/constants.utils";

mongoose.set("strictQuery", true);
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error: Error) => {
    console.log("Error connecting to database", error);
  });
