import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entitie";
import { TUsersArrayResponse } from "../../interfaces/users.interfaces";
import { usersArraySchemaResponse } from "../../schemas/users.schema";

const listAllUsersService = async (): Promise<TUsersArrayResponse> => {
  const usersRepository = AppDataSource.getRepository(User);

  const users: User[] | null = await usersRepository.find();

  return usersArraySchemaResponse.parse(users);
};

export { listAllUsersService };
