import { Router } from "express"
import { createOrder, getOrderById } from "../controllers/orders.controller"
import { isAuthenticated } from "../middlewares/auth.middleware"

export const orderRoutes = Router()

orderRoutes.post("/", isAuthenticated, createOrder)
orderRoutes.get("/:id", isAuthenticated,getOrderById)
