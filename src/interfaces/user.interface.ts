import { ObjectId } from "mongoose";

export interface UserInterface {
  names: string;
  email: string;
  phone: string;
  password: string;
  role: string;
  tokens: string[];
  online: boolean;
  avatar?: string;
  city?: string;
  account?: number;
  currency?: string;
  services?: string[];
  location?: string;
  testimonies?: ObjectId[];
  favorites: ObjectId[];
}
