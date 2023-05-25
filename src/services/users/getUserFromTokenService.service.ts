import jwt from "jsonwebtoken";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entitie";
import { AppError } from "../../errors/AppError";
import { returnUserFromTokenSchema } from "../../schemas/users.schema";
import { TUserResponseGetFromToken } from "../../interfaces/users.interfaces";


export const getUserFromTokenService = async (token: string): Promise<TUserResponseGetFromToken> => {
    try {
      const decodedToken: any = jwt.verify(token, process.env.SECRET_KEY!);
  
      const usersRepository = AppDataSource.getRepository(User);
  
      const user = await usersRepository.findOneBy({ id: decodedToken.subject });
  
      if (!user) {
        throw new AppError("User not found", 404);
      }
  
      return returnUserFromTokenSchema.parse(user)
    } catch (error) {
      throw new AppError("Invalid token", 401);
    }
  };
  