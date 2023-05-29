import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entitie";
import { returnUserFromTokenSchema } from "../../schemas/users.schema";
import { TUserResponseGetFromToken } from "../../interfaces/users.interfaces";


export const getUserFromTokenService = async (id: string): Promise<TUserResponseGetFromToken> => {

  
      const usersRepository = AppDataSource.getRepository(User);
  
      const user = await usersRepository.findOneBy({ id: id });
    

      return returnUserFromTokenSchema.parse(user)
     
  };
  