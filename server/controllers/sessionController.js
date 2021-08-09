import SessionInfo from "../models/userModel";
class SessionController{
    static signupSession = async(req,res)=>{
        const session = await SessionInfo.create(req.body);
         
        if(!session){
            return res.status(400).json({
                status:400,
                message:"failed to register"

            });
        }
        return res.status(200).json({
            status:200,
            message: "successfully",
            data: session
        });
    }
    static getAllSession = async (req,res)=>{
        const sessions = await SessionInfo.find();
        if(!sessions){
            return res.status (400).json({
                status:404,
                message:"failed to get all sessions"

            });
        }
        return res.status(200).json({
            status:200,
            message:"successful",
            data:sessions
        });
    }
    static getOneSession = async (req,res)=>{
        const user = await SessionInfo.findById(req.params.id);
        if(!user){
            return res.status (400).json({
                status:404,
                message:"failed to get one session"

            });
        }
        return res.status(200).json({
            status:200,
            message:"successful",
            data:session
        });
    } 

    static updateOneSession = async (req,res)=>{
        const session = await SessionInfo.findByIdAndUpdate(req.params.id,req.body);
        if(!session){
            return res.status (400).json({
                status:404,
                message:"failed to update one session"

            });
        }
        const updateSession = await SessionInfo.findById(req.params.id);
        return res.status(200).json({
            status:200,
            message:"successful",
            data: updateSession
        });
    } 
    static deleteOneSession = async (req,res)=>{
        const session = await SessionInfo.findByIdAndDelete(req.params.id);
        if(!session){
            return res.status (400).json({
                status:404,
                message:"failed to delete one session"

            });
        }

        return res.status(200).json({
            status:200,
            message:"successful deleted",
            data: session
        });
    } 

}
export default SessionController;
