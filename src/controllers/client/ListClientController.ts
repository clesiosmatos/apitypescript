import { Request, Response } from "express";
import ListClientService from "../../services/client/ListClientService";

class ListClientController {
  async handle(req: Request, res: Response) {
    try {
      const listClientService = new ListClientService();
      const clients = await listClientService.execute();

      return res.status(200).json(clients);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({
          message: error.message,
        });
      }
    }
  }
}

export default ListClientController;
