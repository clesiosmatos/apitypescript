import express from "express";
import CreateUserController from "../controllers/user/CreateUserController";
import ListUserController from "../controllers/user/ListUserController";

const userRoute = express.Router();

userRoute.get("/", new ListUserController().handle);
userRoute.post("/", new CreateUserController().handle);

export default userRoute;
