import {z} from 'zod'

const contactSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string().email(),
    telephone: z.string()
})

const contactSchemaRequest = contactSchema.omit({
    id: true
})

const contactSchemaUpdate = contactSchema.omit({
    id: true
}).partial()

const contactsArraySchemaResponse = z.array(contactSchema)


export {contactSchema,contactSchemaRequest,contactSchemaUpdate,contactsArraySchemaResponse}