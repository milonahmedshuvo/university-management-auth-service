import express, { Application } from 'express'
import cors from 'cors'
const app:Application = express()
import userRoute from "./App/mudules/users/user.route"



// cors using
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



app.use("/api/v1/user", userRoute.router)









// testing parpus
// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello World!')
// })




export default app
