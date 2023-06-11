import mongoose from 'mongoose'
import app from './App'
import config from './Config/index'
import {logger, errorLogger} from './Sheared/Logger'





async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('Database Connected success')


    
    

    app.listen(config.port, () => {
      logger.info(` Application app listening on port ${config.port}`)

    })




  } catch (err) {
    errorLogger.error('Database Connect Filed', err)
  }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

main()
