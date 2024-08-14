// app/layout.tsx

"use client";
import { Inter } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import Hero from "@/components/Hero";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

const StarBackground = dynamic(() => import("../components/StarBG"), {
  ssr: false,
});

const RootLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [showStarBackground, setShowStarBackground] = useState(false);

  const handleAnimationComplete = () => {
    setShowStarBackground(true); // Show background when animation is complete
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {showStarBackground && <StarBackground />}
          <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto px-5 lg:px-10">
            <FloatingNav navItems={navItems} />
            <Hero onAnimationComplete={handleAnimationComplete} />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
