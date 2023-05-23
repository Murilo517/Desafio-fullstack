import { z } from "zod";
import { DeepPartial } from "typeorm";
import {
  contactSchema,
  contactSchemaRequest,
  contactsArraySchemaResponse,
} from "../schemas/contacts.schema";

type TContact = z.infer<typeof contactSchema>;
type TContactRequest = z.infer<typeof contactSchemaRequest>;
type TContactResponse = z.infer<typeof contactSchema>;
type TContactsArrayResponse = z.infer<typeof contactsArraySchemaResponse>;
type TContactsUpdateRequest = DeepPartial<TContactRequest>

export {
  TContact,TContactRequest,TContactResponse,TContactsArrayResponse,TContactsUpdateRequest
};
