import { SignUpForm } from "@/sections/auth/sign-up-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create account",
  description:
    "Create a free account to get started. Join now and access all features.",
  keywords: ["sign up", "register", "create account", "join"],
  openGraph: {
    title: "Sign Up | Create Your Account",
    description:
      "Create a free account to get started. Join now and access all features.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Sign Up | Create Your Account",
    description:
      "Create a free account to get started. Join now and access all features.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <SignUpForm />
      </div>
    </div>
  );
}
