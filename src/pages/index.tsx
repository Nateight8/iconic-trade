// import Image from "next/image";
import { Inter } from "next/font/google";
// import Guest from "@/components/users sessions/Guest";
import AuthUser from "@/components/users sessions/AuthUser";
import { useSession } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session } = useSession();
  // console.log(session);

  return (
    <main className=" min-h-screen  mx-auto ">
      {/* {session ? <AuthUser /> : <Guest />} */}
      <AuthUser /> 
    </main>
  );
}
