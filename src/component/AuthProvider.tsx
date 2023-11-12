"use client";
import { CheckMeDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/libs/graphql";
import CheckMe from "./checkMe";
import { useEffect, useState } from "react";

export default function Authprovider({
  children,
  token,
}: {
  children: React.ReactNode;
  token: string | null;
}) {
  const [isAuth, setIsAuth] = useState<boolean|undefined>(undefined);
  useEffect(() => {
    executeGraphQL(CheckMeDocument, {
      revalidate: 20,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache:"no-cache"
    }).then(({ me: { success, message } }) => {
      
      setIsAuth(success);
    });
  }, []);
  return <CheckMe success={isAuth}> {children}</CheckMe>;
}
