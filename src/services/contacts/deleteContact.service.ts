import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entitie";
import { AppError } from "../../errors/AppError";

const deleteContactService = async (contactId: string): Promise<void> => {
  const contactsRepository = AppDataSource.getRepository(Contact);

  const contact: Contact | null = await contactsRepository.findOneBy({
    id: contactId,
  });

  if (!contact) {
    throw new AppError("contact not found", 404);
  }

  contactsRepository.remove(contact);
};

export { deleteContactService };
