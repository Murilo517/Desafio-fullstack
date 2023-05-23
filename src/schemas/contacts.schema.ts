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

const contactSchemaResponse = contactSchema.extend({
    createdAt: z.string()
})

const contactsArraySchemaResponse = z.array(contactSchemaResponse)


export {contactSchema,contactSchemaRequest,contactSchemaUpdate,contactsArraySchemaResponse}