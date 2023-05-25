import {z} from 'zod'
import { returnUserFromTokenSchema, userSchema, userSchemaRequest, userSchemaResponse, usersArraySchemaResponse} from '../schemas/users.schema'
import { DeepPartial } from 'typeorm'

type TUser = z.infer<typeof userSchema>
type TUserRequest = z.infer<typeof userSchemaRequest>
type TUserResponse = z.infer<typeof userSchemaResponse>
type TUserUpdateRequest = DeepPartial<TUserRequest>
type TUsersArrayResponse = z.infer<typeof usersArraySchemaResponse>;
type TUserResponseGetFromToken = z.infer<typeof returnUserFromTokenSchema>

export {TUser,TUserRequest,TUserResponse, TUserUpdateRequest, TUsersArrayResponse, TUserResponseGetFromToken}