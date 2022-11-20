import prismaClient from "../../infrastructure/database/prisma";

interface IClientRequest {
  name: string;
  alias: string;
  cnpj: string;
}

class CreateClientService {
  async execute({ name, alias, cnpj }: IClientRequest) {
    const client = await prismaClient.client.create({
      data: {
        name,
        alias,
        cnpj,
      },
    });

    return client;
  }
}

export default CreateClientService;
