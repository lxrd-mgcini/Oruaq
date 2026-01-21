import { z } from "zod";

const nameSchema = z.string().trim().min(1).max(255);
const descriptionSchema = z.string().trim().max(4096);
const imgUrlSchema = z.string().url();
const priceSchema = z.number().min(0);
const tagsSchema = z.array(z.string());

export const productIdSchema = z
  .string()
  .trim()
  .min(1, { message: "Product ID is required" });

export const createProductSchema = z.object({
  name: nameSchema,
  description: descriptionSchema,
  imgUrl: imgUrlSchema,
  price: priceSchema,
  tags: tagsSchema,
});

export const getProductsByTagsSchema = z.array(z.string());
