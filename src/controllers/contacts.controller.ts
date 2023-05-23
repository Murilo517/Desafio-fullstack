import { Request, Response } from "express";
import { createContactsService } from "../services/contacts/createContact.service";

const createContactController = async (req: Request, res: Response) => {
   const userId = res.locals.userId
   const newContact = await createContactsService(req.body,userId)

   return res.status(201).json(newContact)

};

const listContactsController = async (req: Request, res: Response) => {


};

const updateContactController = async (req: Request, res: Response) => {


};

const deleteContactController = async (req: Request, res: Response) => {


};

export {
  createContactController,
  listContactsController,
  updateContactController,
  deleteContactController,
};
