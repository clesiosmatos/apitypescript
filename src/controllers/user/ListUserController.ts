import { Request, Response } from "express";
import ListUserService from "../../services/user/ListUserService";

class ListUserController {
  async handle(req: Request, res: Response) {
    const listUserService = new ListUserService();
    try {
      const users = await listUserService.execute();

      return res.status(200).json(users);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({
          message: error.message,
        });
      }
    }
  }
}

export default ListUserController;
