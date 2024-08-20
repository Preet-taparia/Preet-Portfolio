"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { FaBars, FaTimes } from "react-icons/fa";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
  }[];
  className?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden fixed top-4 left-4 z-[60]">
        <button onClick={toggleSidebar}>
          <motion.div
            initial={false}
            animate={{ rotate: isOpen ? 90 : 0, scale: isOpen ? 1.2 : 1 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            {!isOpen ? (
              <FaBars className="text-white text-2xl" />
            ) : (
              <FaTimes className="text-white text-2xl" />
            )}
          </motion.div>
        </button>
      </div>

      {/* Sidebar Popup for Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-3/4 h-full bg-black/90 z-[50] p-6"
          >

            {/* Navigation Links */}
            <div className="mt-10  flex flex-col space-y-4">
              {navItems.map((navItem, idx) => (
                <Link
                  key={`link-${idx}`}
                  href={navItem.link}
                  className="text-white text-lg hover:text-gray-400"
                >
                  {navItem.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Nav */}
      <div
        className={cn(
          "hidden md:flex max-w-fit md:min-w-fit fixed z-[50] top-4 inset-x-0 mx-auto px-6 md:px-10 lg:px-[10%] py-3 md:py-5 rounded-lg border border-black/10 shadow-lg items-center justify-center space-x-2 md:space-x-4 lg:space-x-6",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={`link-${idx}`}
            href={navItem.link}
            className={cn(
              "relative text-neutral-600 dark:text-neutral-50 items-center flex text-sm hover:text-neutral-500"
            )}
          >
            {navItem.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
