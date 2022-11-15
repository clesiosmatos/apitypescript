import express from "express";
import userRoute from "./routes/user.route";

const route = express();

route.use("/users", userRoute);

export default route;
