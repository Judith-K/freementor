import express from "express";
import SessionController from "../controllers/SessionController";

const sessionRouter = express.Router();
sessionRouter.post("/signup",SessionController.signupSession);
sessionRouter.get("/all",SessionController.getAllSession);
sessionRouter.get('/:id',SessionController.getOneSession);
sessionRouter.patch('/:id',SessionController.updateOneSession);
sessionRouter.delete('/:id',SessionController.deleteOneSession);


export default sessionRouter;