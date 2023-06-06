import {Request, Response} from "express"
import userService from "./user.service"



const createUserControl = async (req: Request, res: Response )=> {

  

         const {user}= req.body
         const userValue= await userService.createUser(user)
    res.status(200).json({
        success: true,
        massage: "Succesfull user created",
        data: userValue
    })
    

}



export default {
    createUserControl
}