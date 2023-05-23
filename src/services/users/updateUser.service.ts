// import { Repository } from "typeorm";
// import { AppDataSource } from "../../data-source";
// import { User } from "../../entities";
// import { updateUserType } from "../../interfaces/users.interfaces";
// import { returnUserSchema } from "../../schemas/users.schemas";

// const updateUserService = async (
//   userData: updateUserType,
//   userId: number
// ): Promise<updateUserType> => {
//   const userRepository: Repository<User> = AppDataSource.getRepository(User);

//   const userOldData: User | null = await userRepository.findOneBy({
//     id: userId,
//   });

//   const user: User = userRepository.create({
//     ...userOldData,
//     ...userData,
//   });

//   await userRepository.save(user);

//   const updatedUser: updateUserType = returnUserSchema.parse(user);

//   return updatedUser;
// };

// export { updateUserService };
