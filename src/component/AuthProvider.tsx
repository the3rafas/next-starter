import { CheckMeDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/libs/graphql";
import { redirect, useRouter } from "next/navigation";
export default async function Authprovider({
  children,
}: {
  children: React.ReactNode;
}) {
  try {
    const router = useRouter();
    const {
      me: { success, message },
    } = await executeGraphQL(CheckMeDocument, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJHbS1ZekVWTkNpQ3JITDg3Q2RuODMiLCJpYXQiOjE2OTk2NTkyNzQsImV4cCI6MTY5OTY1OTU3NH0.DgDmMRo75U5jOateTiVyO9XW8dHaRcI6qssnU4VdBdI",
      },
      revalidate: 300,
    });

    console.log(">>", success, message);
    if (!success) {
      router.push("/auth");
    }
  } catch (error: any) {
    // Handle error if needed
  }

  return <>{children}</>;
}
