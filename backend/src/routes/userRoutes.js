import {Router} from 'express'
const router=Router()

console.log("user routes are atleast getting triggered ")

router.get('/',(req,res)=>{
    console.log("api v hit ho rha hai ")
    res.send("User route is working")
})

export default router