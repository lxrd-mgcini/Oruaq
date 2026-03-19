import { Request, Response, Router } from "express"


export const healthRoutes = Router()

healthRoutes.get("/", (req:Request, res:Response)=>{
    res.json({
        message:"Server is running"
    })
})