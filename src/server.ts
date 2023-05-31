import mongoose from 'mongoose';
import app from './App'
import config from "./Config/index"


async function main() {
    
    try{
        await mongoose.connect(config.database_url as string);
        console.log("Database Connected success")



        app.listen(config.port, () => {
            console.log(` Application app listening on port ${config.port}`)
          })

    }catch(err){
        console.log("Database Connect Filed", err)
    }
  
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }


  main()

  