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
import { listUserByIdService } from "../services/users/listUserById.service";

const createUserController = async (req: Request, res: Response) => {
  const userData: TUserRequest = req.body;
  const newUser = await createUserService(userData);

  return res.status(201).json(newUser);
};

const listAllUsersController = async (req: Request, res: Response) => {
  const users: TUsersArrayResponse = await listAllUsersService();

  return res.json(users);
};

const listUserbyIdController = async (req: Request, res: Response) => {
  const userId: string = req.params.id;

  const user = await listUserByIdService(userId);

  return res.json(user);
};

const updateUserController = async (req: Request, res: Response) => {
  const userId: string = req.params.id;
  const updateData: TUserUpdateRequest = req.body;

  const updateUser = await updateUserService(updateData, userId);

  return res.json(updateUser);
};

const deleteUserController = async (req: Request, res: Response) => {
  const id: string = req.params.id;

  await deleteUserService(id);

  return res.status(204).send();
};

export {
  createUserController,
  listAllUsersController,
  listUserbyIdController,
  updateUserController,
  deleteUserController,
};
