import { Logo } from "@/components/logo";
import { Separator } from "@/components/ui/separator";
import { FacebookIcon, Instagram } from "lucide-react";
import Link from "next/link";
import { FaTiktok } from "react-icons/fa";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Security", href: "/security" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const socialLinks = [
  {
    icon: Instagram,
    url: "instagram.com",
    name: "Instagram",
    hover:
      "hover:bg-gradient-to-tr hover:from-yellow-700 hover:to-pink-600 hover:text-white", // IG pink→yellow gradient
  },
  {
    icon: FacebookIcon,
    url: "facebook.com",
    name: "Facebook",
    hover: "hover:bg-blue-700 hover:text-white", // Twitter solid black
  },
  {
    icon: FaTiktok,
    url: "tiktok.com", // Replace with actual TikTok URL
    name: "TikTok",
    hover: "hover:bg-black hover:text-white", // TikTok solid black
  },
];

export const Footer = () => {
  return (
    <footer className="relative bg-background border-t -mt-4 z-20 rounded-t-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Logo size={40} />
              <span className="text-xl font-bold text-foreground">CBC AI</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-sm">
              AI-powered lesson planning for Kenyan educators. Create
              CBC-compliant lessons in minutes and reclaim your time for what
              matters most—teaching.
            </p>
          </div>

          {/* Links Columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-foreground font-semibold mb-4">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} CBC AI. All rights reserved.
            </p>
            <span className="hidden md:inline">•</span>
            <p>
              Made by{" "}
              <a
                href="https://quickprimetech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors font-medium"
              >
                QuickPrimeTech
              </a>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.url}
                aria-label={social.name}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-background border border-border p-3 rounded-full text-muted-foreground transition-all duration-300 ${social.hover}`}
              >
                <social.icon className="size-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
