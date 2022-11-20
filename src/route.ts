import express from "express";
import clientRoute from "./routes/client.route";
import userRoute from "./routes/user.route";

const route = express();

route.use("/users", userRoute);
route.use("/clients", clientRoute);

export default route;
