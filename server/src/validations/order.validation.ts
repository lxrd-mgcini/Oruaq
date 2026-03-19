import z from "zod";

const orderItemSchema = z.object({
    productId: z.string().trim(),
    quantity: z.number().min(1)
})

export const createOrderSchema = z.object({
    items: z.array(orderItemSchema),
})

export const orderIdSchema = z
  .string()
  .trim()
  .min(1, { message: "Order ID is required" });