"use client";

import Loader from "@/components/loader/loader";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {signOut} from "next-auth/react"

const Page = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  console.log(session)

  if (status === "loading") {
    return <Loader />;
  }

  if (!session) {
    router.push("/login");
    return null;
  }

  return (
    <p>
      You are signed in <button onClick={() => signOut()}>Sign Out</button>
    </p>
  );
};

export default Page;
