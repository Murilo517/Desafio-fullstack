import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entitie";
import {
  TUserRequest,
  TUserResponse,
} from "../../interfaces/users.interfaces";
import { hashSync } from "bcryptjs";
import { userSchemaResponse } from "../../schemas/users.schema";
import { AppError } from "../../errors/AppError";

const createUserService = async (
  userdata: TUserRequest
): Promise<TUserResponse> => {
  const newData = userdata;
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOne({
    where: {
      email: userdata.email
    },
  });
  if (findUser) {
    throw new AppError("User already exists",409);
  }

  const hashedPassword = hashSync(newData.password, 10);

  const user = userRepository.create({
     ...newData,
    password: hashedPassword,
  });

  await userRepository.save(user);

  return userSchemaResponse.parse(user);
};

export { createUserService };
