import { Router } from "express"
import { createOrder, getOrderById } from "../controllers/orders.controller"

export const orderRoutes = Router()

orderRoutes.post("/", createOrder)
orderRoutes.get("/:id", getOrderById)
