import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entitie";
import { User } from "../../entities/user.entitie";
import { AppError } from "../../errors/AppError";
import {
  TContactRequest,
  TContactResponse,
} from "../../interfaces/contacts.interfaces";
import { contactSchema } from "../../schemas/contacts.schema";

const createContactsService = async (
  data: TContactRequest,
  userId: string
): Promise<TContactResponse> => {
  const contactsRepository = AppDataSource.getRepository(Contact);
  const usersRepository = AppDataSource.getRepository(User);

  const user: User | null = await usersRepository.findOneBy({
    id: userId,
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const contact: Contact | null = contactsRepository.create({
    ...data,
    user,
  });

  await contactsRepository.save(contact);

  return contactSchema.parse(contact);
};

export { createContactsService };
