import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entitie";
import { AppError } from "../../errors/AppError";
import {
  TContactResponse,
  TContactsUpdateRequest,
} from "../../interfaces/contacts.interfaces";
import { contactSchema } from "../../schemas/contacts.schema";

const updateContactService = async (
  data: TContactsUpdateRequest,
  contactId: string
): Promise<TContactResponse> => {
  const contactsRepository = AppDataSource.getRepository(Contact);

  const oldContact: Contact | null = await contactsRepository.findOneBy({
    id: contactId,
  });

  if (!oldContact) {
    throw new AppError("contact not found", 404);
  }

  const newContactData = contactsRepository.create({
    ...oldContact,
    ...data,
  });

  await contactsRepository.save(newContactData);

  return contactSchema.parse(newContactData);
};

export { updateContactService };
