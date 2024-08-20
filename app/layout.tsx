// app/layout.tsx

"use client";
import { Inter } from "next/font/google";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import Hero from "@/components/Hero";

import "./globals.css";
import { ThemeProvider } from "./provider";
import StarBackground from "@/components/StarBG";

const inter = Inter({ subsets: ["latin"] });

const RootLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <title>Preet Taparia&apos;s Portfolio</title>
      <link rel="icon" href="/favicon.png"/>
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* <StarBackground /> */}
          <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto px-5 lg:px-10">
            <FloatingNav navItems={navItems} />
            <Hero />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
