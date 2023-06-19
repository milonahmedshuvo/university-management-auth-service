/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
import { ErrorRequestHandler } from "express";
import Config from "../../Config";
import { IGenericErrorMessage } from "../../Interfarce/Error";
import handleValidationError from "../../Errors/handleValidationError";
import ApiError from "../../Errors/ApiErrors";
import { errorLogger } from "../../Sheared/Logger";





const goloberErrorHandler:ErrorRequestHandler =(error, req, res, next) => {
    

   //   res.status(400).json({golobelError: err})
     
     Config.env === 'development'?

     console.log("golobal thke error asse", error) :
     errorLogger.error("golobal error handler ata logger vitor jabe", error)
   






     
     let statusCode=500
     let message = "Defaul error and new common error !"
     let errorMessage: IGenericErrorMessage[] = []




     if(error?.name === "ValidationError"){
      const simplifiedError = handleValidationError(error)

      statusCode = simplifiedError?.statusCode
      message = simplifiedError.message
      errorMessage= simplifiedError.errorMessage

     } else if(error instanceof ApiError){
         statusCode = error?.statusCode;
         message = error?.message;
         errorMessage = error?.message?
         [
            {
              path:'',
              message: error?.message
            }
         ]:[]
         
     }else if(error instanceof Error ){
         message = error?.message;
         errorMessage = error?.message ?
         [
            {
              path: "",
              message: error?.message
            }
         ]:[]
     }



     res.status( statusCode ).json({
        success: false,
        message,
        errorMessage,
        stack: Config.env !== "production" ? error?.stack : undefined 
     })


     next()    

}


export default goloberErrorHandler


