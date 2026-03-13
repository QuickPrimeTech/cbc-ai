import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | CBC AI",
  description:
    "Manage your lesson plans, schemes of work, and assessments. Track your teaching progress with KICD-approved CBC resources.",
  keywords: ["dashboard", "lesson plans", "CBC", "Kenya", "teaching"],
  openGraph: {
    title: "Dashboard | CBC AI",
    description: "Manage your lesson plans and teaching resources",
    type: "website",
  },
};

export default function Dashboard() {
  return <div>Content</div>;
}
