import { passwordRegex, phoneRegex } from "@/types/regex";
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
  phoneNumber: z
    .string()
    .regex(phoneRegex, { message: "Please enter a valid phone number" }),
  password: z.string().nonempty().regex(passwordRegex, {
    message:
      "Password must be at least 1 uppercase, 1 lowercase, 1 number, 1 special character, and 8 characters long",
  }),
  nationality: z.string().nonempty(),
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
    phoneNumber: formDate.get("phone"),
    email: formDate.get("email"),
    password: formDate.get("password"),
    nationality: formDate.get("nationality"),
  });
};
