import UserInfo from "../models/userModel";
class UserController{
    static signupUser = async(req,res)=>{
        const user = await UserInfo.create(req.body);
         
        if(!user){
            return res.status(400).json({
                status:400,
                message:"failed to register"

            });
        }
        return res.status(200).json({
            status:200,
            message: "successfully",
            data:user
        });
    }
    static getAllUsers = async (req,res)=>{
        const users = await UserInfo.find();
        if(!users){
            return res.status (400).json({
                status:404,
                message:"failed to get all users"

            });
        }
        return res.status(200).json({
            status:200,
            message:"successful",
            data:users
        });
    }
    static getOneUser = async (req,res)=>{
        const user = await UserInfo.findById(req.params.id);
        if(!user){
            return res.status (400).json({
                status:404,
                message:"failed to get one user"

            });
        }
        return res.status(200).json({
            status:200,
            message:"successful",
            data:user
        });
    } 

    static updateOneUser = async (req,res)=>{
        const user = await UserInfo.findByIdAndUpdate(req.params.id,req.body);
        if(!user){
            return res.status (400).json({
                status:404,
                message:"failed to update one user"

            });
        }
        const updateUser = await UserInfo.findById(req.params.id);
        return res.status(200).json({
            status:200,
            message:"successful",
            data: updateUser
        });
    } 
    static deleteOneUser = async (req,res)=>{
        const user = await UserInfo.findByIdAndDelete(req.params.id);
        if(!user){
            return res.status (400).json({
                status:404,
                message:"failed to delete one user"

            });
        }

        return res.status(200).json({
            status:200,
            message:"successful deleted",
            data: user
        });
    } 

}
export default UserController;