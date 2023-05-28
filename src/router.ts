import { Router } from "express";

const router = Router()

router.get("/api",(req,res)=>{
    res.json({msg: "hello world"})
})


export default router