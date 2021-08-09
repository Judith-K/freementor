import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./server/routes/userRoutes";
import bodyParser from "body-parser";
import sessionRoutes from "./server/routes/sessionroutes";


dotenv.config({path:"./.env"});

const app = express();
app.use(bodyParser.json());


app.use("/freementor/v1/user",userRouter);
app.use("/freementor/v1/session",sessionRoutes);

app.use("/",(req,res,next)=>{
     res.status(404).send*({
         status:404,
         message:"this route not exist"
     })

})

const port=process.env.PORT;
const databaseurl = process.env.DATABASE;

mongoose.connect(databaseurl,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true,useFindAndModify:false}).then(()=>console.log("database connected successfully")); 
app.listen(port,()=>{
    
    console.log("server is running on port ${port}");
})
export default app;
