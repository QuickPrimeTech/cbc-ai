import { LoginForm } from "@/components/login-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Log in",
  description:
    "Log in to access your account. Secure and fast login to manage your dashboard.",
  keywords: ["login", "Log in", "access account", "authenticate"],
  openGraph: {
    title: "Log in | Login to Your Account",
    description:
      "Log in to access your account. Secure and fast login to manage your dashboard.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Log in | Login to Your Account",
    description:
      "Log in to access your account. Secure and fast login to manage your dashboard.",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
