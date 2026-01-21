import { Router } from "express"
import { getUserCart } from "../controllers/cart.controller"

const cartRoutes = Router()

cartRoutes.get("/", getUserCart)