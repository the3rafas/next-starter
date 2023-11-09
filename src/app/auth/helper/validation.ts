import { phoneRegex } from "@/types/phone";
import { z } from "zod";

const LoginSchema = z.object({
  email: z.string().nonempty().email("This is not a valid email"),
  password: z.string().nonempty(),
});
const registerSchema = z.object({
  firstName: z
    .string()
    .nonempty()
    .min(3, { message: "First name too short, min 3" })
    .max(8, { message: "First name too long, max 8" }),
  lastName: z
    .string()
    .nonempty()
    .min(3, { message: "First name too short, min 3" })
    .max(8, { message: "First name too long, max 8" }),
  email: z.string().nonempty().email("This is not a valid email"),
  phone: z
    .string()
    .regex(phoneRegex, { message: "Please enter a valid phone number" }),
  password: z.string().nonempty(),
});

export const validateLogin = (formDate: FormData) => {
  return LoginSchema.parse({
    email: formDate.get("email"),
    password: formDate.get("password"),
  });
};
export const validateRegister = (formDate: FormData) => {
  return registerSchema.parse({
    firstName: formDate.get("fName"),
    lastName: formDate.get("lName"),
    phone: formDate.get("phone"),
    email: formDate.get("email"),
    password: formDate.get("password"),
  });
};
