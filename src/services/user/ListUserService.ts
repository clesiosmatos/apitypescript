import prismaClient from "../../infrastructure/database/prisma";

class ListUserService {
  async execute() {
    const users = await prismaClient.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return users;
  }
}

export default ListUserService;
