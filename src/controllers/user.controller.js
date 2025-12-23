import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import {User} from "../models/user.model.js"
import {uploadOnCloudinary}  from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js";

const resgisterUser = asyncHandler(async (req , res )=> {
    // get user details from frontend 
    // validation 
    // check if user already exist or not  hy username and email.
    // upload them to cloudinary , avatar
    // create user object - create entry in the db 
    // remove password and refresh token  feild from  response 
    // check for user creation 
    // return response

    const { fullName , email , username ,password    } = req.body

    // if(fullName ==""){
    //     ApiError(400 ,"fullname is required" )
    // }

       if([ fullName , email , username ,password ].some((feild)=>
        feild?.trim() === "" )){
        ApiError(400 ,"all feild are required" )
    }
    console.log("emai=l", email ,"password=", password, "done")

   const  existedUser = User.findOne({
        $or:[{username},{email}]
    })

    if (existedUser) {
        throw new ApiError(409, "user with email  or username already exist ")
    }

      const avatarLocalPath =  req.files?.avatar[0]?.path;
      const coverImgLocalPath =  req.files?.coverImage[0]?.path;

      if(!avatarLocalPath){
        throw new  ApiError(400 , "avatar file is required");
      }
       if(!coverImgLocalPath){
        throw new  ApiError(400 , "coverimg file is required");
      }

      const avatarImg =  await uploadOnCloudinary(avatarLocalPath)
      const coverImg =  await uploadOnCloudinary(avatarLocalPath)

      if(!avatarImg){
        throw new ApiError(400 , "avatarImg is required")
      }

     const user = await User.create({
        fullName,
        avatar : avatarImg.url,
        coverImage :coverImg.url || "" ,
        email, 
        password,
        username:username.toLowercase()

      })

     const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
     )

     if(!createdUser) {
        throw new ApiError(500,"something went wrong while restering the user")
     }

     return res.status(201).json(
        new ApiResponse(200,createdUser , "registered successfully")
     )

})

export  {resgisterUser}