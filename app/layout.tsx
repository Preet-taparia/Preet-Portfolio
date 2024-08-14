// app/layout.tsx

"use client";
import { Inter } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

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

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowStarBackground(true);
    }, 2500);

    return () => clearTimeout(timeout);
  }, []);

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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
