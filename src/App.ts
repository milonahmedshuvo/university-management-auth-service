import express, { Application, NextFunction, Request, Response, request, response } from 'express'
import cors from 'cors'
const app:Application = express()
import userRoute from "./App/mudules/users/user.route"
import goloberErrorHandler from './App/middlewares/golobarErrorHandiling'



// cors using
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



app.use("/api/v1/user", userRoute.router)





// testing parpus
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   throw new Error("ore baba error" )
//     // next("next error ata golober jabe")
// })

app.use(goloberErrorHandler )




export default app
