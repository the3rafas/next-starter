"use client";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Authprovider from "./AuthProvider";

export default function TokenProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Or a placeholder/loading state
  }

  // Now it's safe to use browser-specific objects

  return <Authprovider token={localStorage.getItem("accessToken")}>{children}</Authprovider>;
}
