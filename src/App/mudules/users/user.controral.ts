import {NextFunction, Request, Response} from "express"
import userService from "./user.service"



const createUserControl = async (req: Request, res: Response, next:NextFunction )=> {

  

        try{
            const {user}= req.body
            const userValue= await userService.createUser(user)
            res.status(200).json({
                success: true,
                massage: "Succesfull user created",
                data: userValue
               })


        }catch(err){
            // res.status(400).json({
            //     success: false,
            //     message: "user create filed"
            //     error: err
            //     global modde dibo error ta
                
            // })

            next(err)
        }
    

}



export default {
    createUserControl
}