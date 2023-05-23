import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import {
  TUserResponse,
  TUserUpdateRequest,
} from "../../interfaces/users.interfaces";
import { User } from "../../entities/user.entitie";
import { userSchemaResponse } from "../../schemas/users.schema";
import { AppError } from "../../errors/AppError";

const updateUserService = async (
  userData: TUserUpdateRequest,
  userId: string
): Promise<TUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const userOldData: User | null = await userRepository.findOneBy({
    id: userId,
  });

  if (!userOldData) {
    throw new AppError("User not found", 404);
  }

  const NewUserData: User = userRepository.create({
    ...userOldData,
    ...userData,
  });

  await userRepository.save(NewUserData);

  return userSchemaResponse.parse(NewUserData);
};

export { updateUserService };
