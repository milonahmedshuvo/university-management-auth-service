import { IGenericErrorMessage } from "./Error";

export type IGenericErrorResponse ={
    statusCode: number
    message: string;
    errorMessage: IGenericErrorMessage[]
    
}