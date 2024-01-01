"use server";

import { redirect } from "next/navigation";
import { revalidatePath, revalidateTag } from "next/cache";
import { executeGraphQL } from "@/libs/graphql";
import {
  DeviceEnum,
  RegisterDocument,
  RegisterMutation,
  RegularloginDocument,
  RegularloginMutation,
} from "@/gql/graphql";
import { validateLogin, validateRegister } from "./helper/validation";

const logInAction = async (variables: any) => {
  const {
    emailAndPasswordLogin: { success, data, message },
  }: RegularloginMutation = await executeGraphQL(RegularloginDocument, {
    variables: { input: { ...variables, device: DeviceEnum.Desktop } },cache:"no-cache"
  });
  return { success, data, message };
};
const RegisterAction = async (variables: any) => {
  const {
    registerAs: { success, data, message },
  }: RegisterMutation = await executeGraphQL(RegisterDocument, {
    variables: { input: { ...variables, device: DeviceEnum.Desktop } },
    cache:"no-cache"
  });

  return { success, data, message };
};
export default async function UserAction(prevState: any, formDate: FormData) {
  const actionState = /^true$/i.test(formDate.get("isLogin") as string);
  try {
    const selectedSechema = actionState
      ? validateLogin(formDate)
      : validateRegister(formDate);

    return actionState
      ? logInAction(selectedSechema)
      : RegisterAction(selectedSechema);
  } catch (error: any) {
    console.log(error);
    
    return {
      message: error.errors
        .map((e: any) => e.path?.[0] + " " + e.message)
        .join(","),
      state: false,
    };
  }

  return { message: "wdiiiii" };
  //   const id = await addPost()
  //   revalidateTag('posts') // Update cached posts
  //   redirect(`/post/${id}`) // Navigate to new route
}
