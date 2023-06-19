import mongoose from 'mongoose'
import app from './App'
import config from './Config/index'
import {logger, errorLogger} from './Sheared/Logger'
import {Server}from 'http'


process.on("uncaughtException", (error) => {
  errorLogger.error(error)
  process.exit(1)
})



let server:Server;
async function main() {

  try {
    await mongoose.connect(config.database_url as string)
    logger.info('Database Connected success')


    
    

   server =app.listen(config.port, () => {
      logger.info(` Application app listening on port ${config.port}`)

    })

  } catch (err) {
    errorLogger.error('Database Connect Filed', err)
  }








   process.on("unhandledRejection", error => {

       console.log("unhandler Reaction promise thake dibeeeee, amder server close hobe")
         
       if(server){
        
        server.close(   ()=> {
          errorLogger.error(error)
          process.exit(1)
        })
       }else{
        process.exit(1)
        console.log('santo server')
       }

   })



  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

main()


process.on("SIGTERM", ( ) => {
  logger.info("sigterm to error this code singnal")
  console.log('sigterm error')
  if(server){
    server.close()
  }
})







// console.log(x)