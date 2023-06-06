import express from 'express'
import userControral from './user.controral'
const router  = express.Router()


router.post("/createUser", userControral.createUserControl)



export default {
    router
}



