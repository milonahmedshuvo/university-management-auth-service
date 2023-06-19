import {  Schema, model } from 'mongoose'
import { IUser, UserModel } from './users.interface'



const userSchema = new Schema<IUser, UserModel>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
},
{
  timestamps: true
}
)

export const User = model<IUser, UserModel>('Users', userSchema)
