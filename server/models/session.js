import mongoose from "mongoose";

const SessionSchema = new mongoose.Schema({
    firstName: {
       type: String,
       required: [true, "first-name required"]
    },
    lastName: String,
    email: String,
    password: String,
      phone: String,
       gender: String,
       age: Number
});
const SessionInfo = mongoose.model("Session", SessionSchema);
export default SessionInfo;
