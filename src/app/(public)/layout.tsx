import { Navbar } from "@/layouts/public/navbar";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen pt-8">
      <Navbar />
      {children}
    </main>
  );
}
