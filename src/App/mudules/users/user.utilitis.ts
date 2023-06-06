import { User } from "./users.models"



const findLastIdInDatabase = async ( ) => {
        const lastUserId = await User.findOne({}, {id: 1, _id: 0}).sort({ createdAt: -1}).lean()

        return lastUserId?.id
        
}





const generatedUserId =  async ( ) => {
    const currentId = await findLastIdInDatabase() || (0).toString().padStart( 5 , "0")
    const incrementId= (parseInt(currentId) + 1).toString().padStart(5, "0")
    return incrementId
}


export default {
    generatedUserId
}