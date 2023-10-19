import LoginForm from "@/components/loginComponents/loginForm";
import LoginHero from "@/components/loginComponents/loginHero";

export default function Login() {
  return (
    <div className="relative rounded-base bg-[url('/images/loginHero_bg.png')] w-[100vw] min-h-[100vh] grid grid-cols-1 md:grid-cols-2 text-text_default">
      <LoginHero />
      <LoginForm />
    </div>
  );
}
