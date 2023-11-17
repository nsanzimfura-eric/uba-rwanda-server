import mongoose, { Model, Schema, model } from "mongoose";
import { UserInterface } from "#/interfaces/user.interface";
import { USER_ROLES } from "#/utils/roles.utils";
import {
  validatePhoneNumber,
  validateEmail,
} from "#/validators/userDetails.validator";

const userSchema = new Schema<UserInterface>(
  {
    names: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      validate: {
        validator: validateEmail,
        message: (props) => `${props.value} is not a valid Email!`,
      },
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: validatePhoneNumber,
        message: (props) => `${props.value} is not a valid phone number!`,
      },
    },
    password: { type: String, required: true },
    online: { type: Boolean, required: true, default: false },
    role: {
      type: String,
      required: true,
      enum: Object.values(USER_ROLES),
      default: USER_ROLES.passenger,
    },
    tokens: [String],
    avatar: { type: String, required: false },
    city: { type: String, required: false },
    account: { type: Number, required: false },
    currency: { type: String, required: false },
    services: [String],
    location: { type: String, required: false },
    testimonies: [{ type: Schema.Types.ObjectId, ref: "Testimony" }],
    favorites: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

export default model("User", userSchema) as Model<UserInterface>;
