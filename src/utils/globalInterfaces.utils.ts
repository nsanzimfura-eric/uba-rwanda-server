import { ObjectId } from "mongoose";

// user interfaces
export interface TestimonyInterface {
  from: {
    id: string;
    names: string;
    avatar: string;
    role: string;
  };
  to: {
    id: string;
    names: string;
    avatar: string;
    role: string;
  };
  testimony: string;
  rating: number;
}

export interface UserInterface {
  names: string;
  email: string;
  phone: string;
  password: string;
  avatar: string;
  role: string;
  city: string;
  online: boolean;
  tokens: string[];
  account?: number;
  currency?: string;
  services?: string[];
  location?: string;
  testimonies?: ObjectId[];
}
