import { Request, Response } from "express";
import {
  TUserRequest,
  TUserUpdateRequest,
  TUsersArrayResponse,
} from "../interfaces/users.interfaces";
import { createUserService } from "../services/users/createUser.service";
import { deleteUserService } from "../services/users/deleteUser.service";
import { updateUserService } from "../services/users/updateUser.service";
import { listAllUsersService } from "../services/users/listAllUsers.service";

const createUserController = async (req: Request, res: Response) => {
  const userData: TUserRequest = req.body;
  const newUser = await createUserService(userData);

  return res.status(201).json(newUser);
};

const listAllUsersController = async (req: Request, res: Response) => {
  const users: TUsersArrayResponse = await listAllUsersService();

  return res.json(users);
};

const updateUserController = async (req: Request, res: Response) => {
  const contactId: string = req.params.id;
  const updateData: TUserUpdateRequest = req.body;

  const updateContact = await updateUserService(updateData, contactId);

  return res.json(updateContact);
};

const deleteUserController = async (req: Request, res: Response) => {
  const id: string = req.params.id;

  await deleteUserService(id);

  return res.status(204).send();
};

export {
  createUserController,
  listAllUsersController,
  updateUserController,
  deleteUserController,
};
