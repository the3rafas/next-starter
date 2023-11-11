"use client";
import { redirect, useRouter } from "next/navigation";

export default function CheckMe({
  success,
  children,
}: {
  success: boolean;
  children: React.ReactNode;
}) {
  const router = useRouter();
  console.log(success);

  if (!success) {
    router.push("/auth");
  } else {
    router.push("/");
  }

  return <>{children}</>;
}
