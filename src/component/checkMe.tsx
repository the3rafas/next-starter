"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function CheckMe({
  success,
  children,
}: {
  success: boolean | undefined;
  children: React.ReactNode;
}) {
  const router = useRouter();
  console.log(success);

  if (success === false) {
    console.log("dsdsd", success);
    router.push("/auth");
    localStorage.clear();
  } else if (success === true) {
    router.push("/");
  }

  return <>{children}</>;
}
