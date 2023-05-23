import { compare } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entitie";
import { AppError } from "../../errors/AppError";
import { TloginRequest} from "../../interfaces/login.interfaces";
import jwt from "jsonwebtoken";
import "dotenv/config";

const createTokenService = async ({
  email,
  password,
}: TloginRequest): Promise<string> => {
  const usersRepository = AppDataSource.getRepository(User);

  const user = await usersRepository.findOne({
    where: {
      email,
    },
  });

  if (!user) {
    throw new AppError("invalid credentials", 403);
  }

  const checkPassword = await compare(password, user.password);

  if (!checkPassword) {
    throw new AppError("invalid credentials", 403);
  }

  const token = jwt.sign({ username: user.name, admin: user.isAdmin }, process.env.SECRET_KEY!, {
    expiresIn: "1h",
    subject: user.id,
  });

  return token
};

export {createTokenService}