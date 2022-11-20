import { Request, Response } from "express";
import CreateClientService from "../../services/client/CreateClientService";

class CreateClientController {
  async handle(req: Request, res: Response) {
    const { name, alias, cnpj } = req.body;

    try {
      const createClientService = new CreateClientService();
      const client = await createClientService.execute({ name, alias, cnpj });

      return res.status(201).json(client);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({
          message: error.message,
        });
      }
    }
  }
}

export default CreateClientController;
