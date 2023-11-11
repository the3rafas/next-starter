"use client";
import { CheckMeDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/libs/graphql";
import CheckMe from "./checkMe";
import { useEffect, useState } from "react";
export default function Authprovider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  useEffect(() => {
    executeGraphQL(CheckMeDocument, {
      revalidate: 0,
    }).then(({ me: { success, message } }) => {
      setIsAuth(success);
    });
  }, []);
  return <CheckMe success={isAuth}> {children}</CheckMe>;
}
