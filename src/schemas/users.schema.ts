import {z} from "zod"

const userSchema = z.object({
    id: z.string(),
    username: z.string(),
    name: z.string(),
    email: z.string().email(),
    isAdmin: z.boolean().optional().default(false),
    telephone: z.string(),
    password: z.string()
})

const userSchemaRequest = userSchema.omit({
    id: true
})

const userSchemaResponse = userSchema.omit({
    password: true
}).extend({
    createdAt: z.string()
})

const userUpdateSchema = userSchema.omit({
    password: true
}).partial()


const usersArraySchemaResponse = z.array(userSchemaResponse)

export{userSchema,userSchemaRequest,userSchemaResponse, usersArraySchemaResponse, userUpdateSchema}