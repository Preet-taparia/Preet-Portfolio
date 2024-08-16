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
          {!isOpen?<FaBars className="text-white text-2xl" />: <FaTimes className="text-white text-2xl" />}
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
            className="fixed top-10 left-0 w-3/4 h-full bg-black/90 z-[50] p-6 flex flex-col space-y-4"
          >
            {/* Close Button */}
            {/* <div className="flex justify-between items-center">
              <h2 className="text-white text-lg">Menu</h2>
              <button onClick={toggleSidebar}>
                <FaTimes className="text-white text-2xl" />
              </button>
            </div> */}

            {/* Navigation Links */}
            {navItems.map((navItem, idx) => (
              <Link
                key={`link-${idx}`}
                href={navItem.link}
                className="text-white text-lg hover:text-gray-400"
              >
                {navItem.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Nav */}
      <div
        className={cn(
          "hidden md:flex max-w-fit md:min-w-fit fixed z-[50] top-2 inset-x-0 mx-auto px-6 md:px-10 py-3 md:py-5 rounded-lg border border-black/10 shadow-lg items-center justify-center space-x-2 md:space-x-4",
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
