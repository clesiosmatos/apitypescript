import prismaClient from "../../infrastructure/database/prisma";

class ListClientService {
  async execute() {
    const clients = await prismaClient.client.findMany({
      include: {
        address: true,
      },
    });

    return clients;
  }
}

export default ListClientService;
