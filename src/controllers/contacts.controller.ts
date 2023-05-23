import { Request, Response } from "express";
import { createContactsService } from "../services/contacts/createContact.service";
import { listContactsByIdService } from "../services/contacts/listContactsById.service";
import { TContactsUpdateRequest } from "../interfaces/contacts.interfaces";
import { updateContactService } from "../services/contacts/updateContact.service";
import { deleteContactService } from "../services/contacts/deleteContact.service";

const createContactController = async (req: Request, res: Response) => {
  const userId: string = res.locals.userId;
  const newContact = await createContactsService(req.body, userId);

  return res.status(201).json(newContact);
};

const listContactsController = async (req: Request, res: Response) => {
  const userId: string = res.locals.userId;

  const contacts = await listContactsByIdService(userId);

  return res.json(contacts);
};

const updateContactController = async (req: Request, res: Response) => {
  const contactId: string = req.params.id;
  const updateData: TContactsUpdateRequest = req.body;

  const updateContact = await updateContactService(updateData, contactId);

  return res.json(updateContact);
};

const deleteContactController = async (req: Request, res: Response) => {
  const contactId: string = req.params.id;
  await deleteContactService(contactId);

  return res.status(204).send();
};

export {
  createContactController,
  listContactsController,
  updateContactController,
  deleteContactController,
};
