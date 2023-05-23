import {z} from "zod"

const userSchema = z.object({
    id: z.string(),
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

export{userSchema,userSchemaRequest,userSchemaResponse}