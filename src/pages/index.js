// import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

// import { authOptions } from "./api/auth/[...nextauth]";
import LoginForm from "@/components/LoginComponents/loginForm";
import LoginHero from "@/components/LoginComponents/loginHero";

export default function Home() {
  // const session = getServerSession(authOptions);
  const {data : session} = useSession();
  const router = useRouter();
                     
  if (session) {
    console.log(session);
    router.push("/dashboard");
  }
  return (
    <main className="relative rounded-base bg-[url('/images/loginHero_bg.png')] w-[100vw] min-h-[100vh] grid grid-cols-1 lg:grid-cols-2 text-text_default">
      <LoginHero />
      <LoginForm />
    </main>
  );
}
