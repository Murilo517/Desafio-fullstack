import {Request,Response} from "express"
import { UserRequestType } from "../interfaces/users.interfaces"
import { createUserService } from "../services/users/createUser.service"
import { deleteUserService } from "../services/users/deleteUser.service"


const createUserController = async (req:Request,res: Response) => {

  const userData:UserRequestType = req.body
  const newUser = await createUserService(userData)

return res.status(201).json(newUser)

}

const deleteUserController = async (req: Request, res: Response) => {
  const id: string = req.params.id

  await deleteUserService(id);

  return res.status(204).send();
};


export {createUserController, deleteUserController}