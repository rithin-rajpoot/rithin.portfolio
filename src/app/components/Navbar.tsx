"use client";
import {
  Bars3Icon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInDown, slideInLeft, slideInRight } from "@/utils/animation";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const pathName = usePathname();

  const menuItems = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/projects", label: "PROJECTS" },
    { href: "/contact", label: "CONTACT" },
    // { href: "/blogs", label: "Blogs" },
  ];

  return (
    <motion.nav 
      {...fadeInDown}
      className="fixed w-full bg-white/80 dark:bg-black/80 z-50 border-b border-gray-200/50 dark:border-gray-700/50 transition-all shadow-lg dark:shadow-gray-800/20"
    >
      <div className="container max-w-7xl mx-auto px-4">
        {/* desktop menu  */}
        <div className="flex items-center justify-between h-18">
          <motion.div
            {...slideInLeft}
            transition={{ delay: 0.1 }}
          >
            <Link href="/" className="text-xl md:text-3xl font-bold text-primary hover:text-blue-600 transition-colors">
              {/* Devfolio&trade; */}
              &lt;RR /&gt;
            </Link>
          </motion.div>
          <motion.div 
            {...slideInRight}
            transition={{ delay: 0.2 }}
            className="hidden md:flex items-center md:space-x-6 lg:space-x-12"
          >
            {menuItems.map((item, index) => {
              const isActive = pathName === item.href;
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={`relative md:text-md px-2 transition-all duration-300 hover:text-primary font-bold ${
                      isActive
                        ? "text-primary"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {item.label}
                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    {/* Hover effect */}
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0"
                      whileHover={{ opacity: isActive ? 0 : 0.7 }}
                      transition={{ duration: 0.2 }}
                    />
                  </Link>
                </motion.div>
              );
            })}
            <motion.button 
              whileHover={{ 
                scale: 1.1,
                rotate: theme === "dark" ? 180 : 0
              }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme} 
              className="p-2 rounded-lg hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 cursor-pointer relative group"
            >
              <motion.div
                initial={false}
                animate={{ rotate: theme === "dark" ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {theme === "dark" ? (
                  <SunIcon className="w-6 h-6" />
                ) : (
                  <MoonIcon className="w-6 h-6" />
                )}
              </motion.div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </motion.button>
          </motion.div>
          {/* mobile menu button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 rounded-lg text-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer relative group"
            onClick={toggleMobileMenu}
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </motion.div>
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
          </motion.button>
        </div>

        {/* mobile menu  */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <motion.div 
                className="space-y-4 py-6 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-lg mx-2 mb-4 border border-gray-200/50 dark:border-gray-700/50"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {menuItems.map((item, index) => {
                  const isActive = pathName === item.href;
                  return (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={toggleMobileMenu}
                      className="px-4"
                    >
                      <Link
                        href={item.href}
                        className={`block py-3 px-4 rounded-lg transition-all duration-300 font-medium relative ${
                          isActive 
                            ? "text-primary bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20" 
                            : "hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800"
                        }`}
                      >
                        {item.label}
                        {isActive && (
                          <motion.div
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"
                            layoutId="mobileActiveTab"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: menuItems.length * 0.1 }}
                  className="px-4"
                >
                  <button 
                    onClick={() => {
                      toggleTheme();
                      toggleMobileMenu();
                    }} 
                    className="flex items-center w-full py-3 px-4 rounded-lg hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 cursor-pointer font-medium group"
                  >
                    <motion.div
                      animate={{ rotate: theme === "dark" ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="mr-3"
                    >
                      {theme === "dark" ? (
                        <SunIcon className="w-5 h-5" />
                      ) : (
                        <MoonIcon className="w-5 h-5" />
                      )}
                    </motion.div>
                    {theme === "dark" ? "Light Mode" : "Dark Mode"}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  </button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;