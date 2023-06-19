import { RequestHandler } from "express"
import { UserService } from "./user.service"



const createUserControl:RequestHandler = async ( req, res, next )=> {

  

        try{
            const {user}= req.body
            const userValue= await UserService.createUser(user)
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


export const UserController = {
    createUserControl
}