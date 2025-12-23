import { asyncHandler } from "../utils/asyncHandler.js";

const resgisterUser = asyncHandler(async (req , res )=> {
    // get user details from frontend 
    // validation 
    // check if user already exist or not  hy username and email.
    // upload them to cloudinary , avatar
    // create user object - create entry in the db 
    // remove password and refresh token  feild from  response 
    // check for user creation 
    // return response

    const { fullName   } = req.body
})

export  {resgisterUser}