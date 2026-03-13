// app/not-found.tsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Home,
  Search,
  ArrowLeft,
  Compass,
  MapPin,
  Telescope,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const floatingIcons = [
  { Icon: Compass, delay: 0, x: "10%", y: "20%" },
  { Icon: MapPin, delay: 0.5, x: "80%", y: "15%" },
  { Icon: Telescope, delay: 1, x: "15%", y: "70%" },
  { Icon: Search, delay: 1.5, x: "75%", y: "65%" },
];

export default function NotFound() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen p-12 w-full overflow-hidden bg-background">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-background to-secondary/20" />

      {/* Floating Animated Icons */}
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute text-muted-foreground/20"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon className="h-12 w-12 md:h-16 md:w-16" strokeWidth={1} />
        </motion.div>
      ))}

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                           linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* 404 Number with Glitch Effect */}
          <motion.div
            className="relative mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <h1 className="text-[150px] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-foreground to-muted-foreground md:text-[200px]">
              404
            </h1>
            <motion.div
              className="absolute inset-0 text-[150px] font-bold leading-none tracking-tighter text-primary/20 md:text-[200px]"
              animate={{
                x: [0, -4, 4, -4, 0],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 3,
              }}
              aria-hidden="true"
            >
              404
            </motion.div>
          </motion.div>

          {/* Message */}
          <motion.h2
            className="mb-4 text-3xl font-bold tracking-tight md:text-4xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Page not found
          </motion.h2>

          <motion.p
            className="mb-8 max-w-md text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Looks like you've ventured into uncharted territory. The page you're
            looking for doesn't exist or has been moved.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col gap-3 sm:flex-row sm:justify-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Button
              size="lg"
              className="group relative overflow-hidden"
              nativeButton={false}
              render={<Link href={"/"} />}
            >
              <Home className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              Back to Home
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => router.back()}
              className="group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Go Back
            </Button>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <p className="mb-4 text-sm text-muted-foreground">
              Popular destinations:
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { label: "Dashboard", href: "/dashboard" },
                { label: "Lesson Plans", href: "/lesson-plans" },
                { label: "Schemes of Work", href: "/schemes" },
                { label: "Help Center", href: "/help" },
              ].map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="inline-flex items-center rounded-full border bg-background px-4 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Decorative Bottom Element */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <div className="h-px w-8 bg-linear-to-r from-transparent to-muted-foreground/50" />
            <span>CBC AI Platform</span>
            <div className="h-px w-8 bg-linear-to-l from-transparent to-muted-foreground/50" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
