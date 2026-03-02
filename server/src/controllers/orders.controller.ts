import { Request, Response } from "express";
import { asyncHandler } from "../middlewares/asyncHandler.middleware";
import { getProductByIdService } from "../services/product.services";
import ProductModel from "../models/product.model";
import {
  createOrderSchema,
  orderIdSchema,
} from "../validations/order.validation";
import OrderModel from "../models/order.model";

export const createOrder = asyncHandler(async (req: Request, res: Response) => {
  const { items, userId } = createOrderSchema.parse(req.body);

  // Create Order
  const order = await OrderModel.create({ items, userId });

  // Send response
  res.json({
    message: "Order successfully made",
    data: { order: order },
  });
});

export const getOrderById = asyncHandler(
  async (req: Request, res: Response) => {
    const orderId = orderIdSchema.parse(req.params.id);

    const order = await OrderModel.findById(orderId)
      .lean()
      .populate({ path: "items.productId", model: ProductModel });

      // Calculate the total

      console.log(order)

      const total = order?.items.reduce((acc ,item)=>{
        const price = item.productId.price
        const quantity = item.quantity

        return acc + (price * quantity)
      }, 0)


    // Send response
    res.json({
      message: "Order successfully retrieved",
      data: { ...order, total },
    });
  },
);
