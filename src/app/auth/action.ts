"use server";

import { redirect } from "next/navigation";
import { revalidatePath, revalidateTag } from "next/cache";
import { executeGraphQL } from "@/libs/graphql";
import {
  DeviceEnum,
  RegularloginDocument,
  RegularloginMutation,
} from "@/gql/graphql";
import { validateLogin, validateRegister } from "./helper/validation";

const logInAction = async (variables: any) => {
  const {
    emailAndPasswordLogin: { success, data, message },
  }: RegularloginMutation = await executeGraphQL(RegularloginDocument, {
    variables: { input: { ...variables, device: DeviceEnum.Desktop } },
  });
  return { success, data, message };
};
export default async function UserAction(prevState: any, formDate: FormData) {
  try {
    const selectedSechema = formDate.get("isLogin")
      ? validateLogin(formDate)
      : validateRegister(formDate);

    return formDate.get("isLogin")
      ? logInAction(selectedSechema)
      : validateRegister(formDate);
  } catch (error: any) {
    console.log(error.errors.map((e: any) => e.message).join(","));
    return {
      message: error.errors.map((e: any) => e.message).join(","),
      state: false,
    };
  }

  return { message: "wdiiiii" };
  //   const id = await addPost()
  //   revalidateTag('posts') // Update cached posts
  //   redirect(`/post/${id}`) // Navigate to new route
}
