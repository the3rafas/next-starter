"use client";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function TokenUi({
  children,
  getToken,
}: {
  children: React.ReactNode;
  getToken: (token: string | undefined) => void;
}) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("H-token") as string;
    console.log(token);
    getToken(token);
    // Example of redirect based on token
    // if (!token) {
    //   router.push('/login'); // Redirect to login if no token
    // }
  }, [router]);

  return <>{children}</>;
}
