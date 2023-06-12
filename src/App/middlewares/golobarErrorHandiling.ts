import { NextFunction, Request, Response } from "express";




const goloberErrorHandler =(err, req:Request, res:Response, next:NextFunction) => {
    console.log(err)

     res.status(400).json({golobelError: err})
     next()    

}


export default goloberErrorHandler


