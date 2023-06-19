import express from 'express'
import { UserController } from './user.controral'
const router  = express.Router()


router.post("/createUser", UserController.createUserControl)



export const UserRoutes= router



