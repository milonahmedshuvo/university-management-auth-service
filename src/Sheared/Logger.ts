import { createLogger, format, transports } from 'winston';
import path from 'path'
import  DailyRotateFile from 'winston-daily-rotate-file';





const { combine, timestamp, label, printf, prettyPrint } = format;

const myFormat= printf (({level, message, timestamp, label })=> {
  const date= new Date(timestamp)
  const month= date.getMonth()
  const hours= date.getHours()
  const minite= date.getMinutes()
 return ` ${label} ${level} ${message} ${date.toDateString()} month soru: ${month},: ${hours} ${minite}`
})








const logger = createLogger({
  level: 'info',
  format: combine(
    label({ label: 'PH' }),
    timestamp(),
    myFormat,
    prettyPrint()
  ),


  transports: [ 
    new transports.Console(),
      new DailyRotateFile({
        filename: path.join(process.cwd(), 'logs', 'winston', 'success', 'phu-%DATE%-success.log'),
        datePattern: 'YYYY-DD-MM-HH',
        zippedArchive: true,
        maxSize: '20m',
        maxFiles: '14d'
      })  
  ],
});







const errorLogger = createLogger({
  level: 'error',
  format: combine(
     label({ label: "PH" }),
     timestamp(),
     myFormat
     ),
  transports: [
    
    new transports.Console(),
      new DailyRotateFile({
        filename: path.join(process.cwd(), 'logs', 'winston', 'error', 'phu-%DATE%-error.log'),
        datePattern: 'YYYY-DD-MM-HH',
        zippedArchive: true,
        maxSize: '20m',
        maxFiles: '14d'
      })
      
  ],
});




export  {
  logger,
  errorLogger
}