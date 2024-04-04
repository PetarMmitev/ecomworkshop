import joi, { string } from "joi";

export const productSchema = joi.object({
  title: joi.string().min(3).required(),
  stock: joi.number().min(3).required(),
  description: string().min(3).required(),
  price: number().min(1).required(),
  rating: number().min(1).max(5).required(),
});
