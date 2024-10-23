/* eslint-disable prettier/prettier */

import "@/src/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "../lib/Provider";
import Socials from "../components/Global/Socials";
import Mail from "../components/Global/Mail";
import Navbar from "../components/Global/Navbar";

import { geistMono } from "@/src/config/fonts";
import { siteConfig } from "@/src/config/site";


export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background antialiased font-[family-name:var(--font-geist-mono)] ",
          geistMono.variable, "dark:bg-slate-900 dark:text-slate-200"
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <Socials />
          <Mail />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
