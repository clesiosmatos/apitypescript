import express from "express";
import CreateClientController from "../controllers/client/CreateClientController";
import ListClientController from "../controllers/client/ListClientController";

const clientRoute = express.Router();

clientRoute.get("/", new ListClientController().handle);
clientRoute.post("/", new CreateClientController().handle);

export default clientRoute;
