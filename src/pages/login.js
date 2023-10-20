import LoginForm from "@/components/LoginComponents/loginForm";
import LoginHero from "@/components/LoginComponents/loginHero";

export default function Login() {
  return (
    <div className="relative rounded-base bg-[url('/images/loginHero_bg.png')] w-[100vw] min-h-[100vh] grid grid-cols-1 md:grid-cols-2 text-text_default">
      <LoginHero />
      <LoginForm />
    </div>
  );
}
