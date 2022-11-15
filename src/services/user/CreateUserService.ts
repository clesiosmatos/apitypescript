import prismaClient from "../../infrastructure/database/prisma";
import { hash } from "bcryptjs";

interface UserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ name, email, password }: UserRequest) {
    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email,
      },
    });

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const passwordHash = await hash(password, 8);

    const user = await prismaClient.user.create({
      data: { name, email, password: passwordHash },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return user;
  }
}

export default CreateUserService;
