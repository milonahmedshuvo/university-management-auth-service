import express, { Application, Request, Response, NextFunction } from 'express'
import cors from 'cors'
const app:Application = express()
import { UserRoutes } from './App/mudules/users/user.route'
import goloberErrorHandler from './App/middlewares/golobarErrorHandiling'
import ApiError from './Errors/ApiErrors'
import { error } from 'winston'



// cors using
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



app.use("/api/v1/user", UserRoutes )





// testing parpus
app.get('/', async(req: Request, res: Response, next: NextFunction) => {
//   throw new ApiError(200, "ore baba error" )
    // next("next error ata golober jabe")
    // Promise.reject( (new Error("promise new error dise")))
    throw new Error("testing new error")
    
})





app.use(goloberErrorHandler )




export default app
