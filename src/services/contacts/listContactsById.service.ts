import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entitie";
import { User } from "../../entities/user.entitie";
import { AppError } from "../../errors/AppError";
import { TContactsArrayResponse } from "../../interfaces/contacts.interfaces";
import { contactsArraySchemaResponse } from "../../schemas/contacts.schema";

const listContactsByIdService = async (
  userId: string
): Promise<TContactsArrayResponse> => {
  const contactsRepository = AppDataSource.getRepository(Contact);
  const usersRepository = AppDataSource.getRepository(User);

  const user: User | null = await usersRepository.findOneBy({
    id: userId,
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const contacts: Contact[] = await contactsRepository.find({
    where: {
      user: user,
    },
  });

  return contactsArraySchemaResponse.parse(contacts);
};

export { listContactsByIdService };
