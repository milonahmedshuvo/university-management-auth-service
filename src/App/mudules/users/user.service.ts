import Config from "../../../Config";
import userUtilitis from "./user.utilitis";
import { IUser } from "./users.interface";
import { User } from "./users.models";

const createUser = async (user: IUser):Promise<IUser | null> => {

       if( !user.password ){
        user.password = Config.user_password as string
       }
 
        
       const id = await userUtilitis.generatedUserId()
       
         user.id = id


       const createdUser = await User.create(user)
    
       if(!createUser){
        throw new Error("not user create")
       }

    
       return createdUser

}




export default {
    createUser
}