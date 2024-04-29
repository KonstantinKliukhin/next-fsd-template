import "@/app/styles/globals.css";

import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { FC, PropsWithChildren } from "react";

import { Providers } from "@/app/providers";
import { cn } from "@/shared/lib/utils";
import { Toaster } from "@/shared/ui/sonner";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--open-sans",
});

export const metadata: Metadata = {
  title: "Ranking Co-Pilot",
  description: "Boost your Law Firm with Ranking Co-Pilot.",
  manifest: "/site.webmanifest",
  icons: [
    {
      sizes: "32x32",
      href: "/favicon-32x32.png",
      url: "/favicon-32x32.png",
    },
    {
      sizes: "16x16",
      href: "/favicon-16x16.png",
      url: "/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
      url: "/favicon-16x16.png",
      sizes: "180x180",
    },
  ],
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html lang="en">
    <body className={cn(openSans.className, "h-full min-h-full")}>
      <Providers>{children}</Providers>
      <Toaster />
    </body>
  </html>
);

export default RootLayout;
