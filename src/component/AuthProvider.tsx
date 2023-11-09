"use client";
import { GetMeDocument, GetMeQuery } from "@/gql/graphql";
import { executeGraphQL } from "@/libs/graphql";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default async function Authprovider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const router = useRouter();

  try {
    const response = await executeGraphQL(GetMeDocument, {});
    setIsAuth(true);
  } catch (error: any) {
    // Handle error if needed
  }
//   useEffect(() => {
//     async function fetchData() {
     
//     }

//     fetchData();
//   }, []);
//   useEffect(() => {
    // if (!isAuth) {
    //   router.push("/auth");
    // }
//   }, [isAuth, router]);

  return <>{children}</>;
}
