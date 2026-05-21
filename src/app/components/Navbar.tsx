"use client";
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInDown, slideInLeft, slideInRight } from "@/utils/animation";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState<boolean>(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const themeOptions = [
    {
      id: "light" as const,
      label: "Bloom Light",
      description: "Light green minimalism",
      accent: "bg-emerald-400",
    },
    {
      id: "dark" as const,
      label: "Velvet Dark",
      description: "Matte black with violet calm",
      accent: "bg-[#d89073]",
    },
    {
      id: "mint" as const,
      label: "Mint Noir",
      description: "Matte black with a mint accent",
      accent: "bg-emerald-300",
    },
  ];

  const activeTheme = themeOptions.find((option) => option.id === theme) ?? themeOptions[0];

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
      className="fixed w-full bg-bg/90 backdrop-blur-md z-50 border-b border-border transition-all shadow-sm"
    >
      <div className="container max-w-7xl mx-auto px-4">
        {/* desktop menu  */}
        <div className="flex items-center justify-between h-18">
          <motion.div
            {...slideInLeft}
            transition={{ delay: 0.1 }}
          >
            <Link href="/" className="text-xl md:text-3xl font-bold text-primary hover:text-accent-strong transition-colors">
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
                    className={`relative md:text-md px-2 transition-all duration-300 text-secondary hover:text-primary font-bold ${
                      isActive
                        ? "text-primary"
                        : "text-gray-300"
                    }`}
                  >
                    {item.label}
                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent-strong rounded-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    {/* Hover effect */}
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent-strong rounded-full opacity-0"
                      whileHover={{ opacity: isActive ? 0 : 0.7 }}
                      transition={{ duration: 0.2 }}
                    />
                  </Link>
                </motion.div>
              );
            })}
            <div className="relative">
              <motion.button 
                // whileHover={{ scale: 1.02 }}
                // whileTap={{ scale: 0.98 }}
                onClick={() => setIsThemeMenuOpen((value) => !value)} 
                className="group flex items-center gap-3 rounded-2xl px-4 py-3 text-left border border-border transition-colors"
              >
                <div className="hidden h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface-strong/80 sm:flex">
                  <span className="h-3 w-3 rounded-full bg-primary/90 shadow-[0_0_0_5px_rgba(255,255,255,0.04)]" />
                </div>
                <div className="flex min-w-0 flex-col items-start">
                  <div className="text-[10px] uppercase tracking-[0.24em] text-secondary">Appearance</div>
                  <div className="truncate text-sm font-semibold text-heading">{activeTheme.label}</div>
                </div>
                <motion.div
                  animate={{ rotate: isThemeMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="ml-1 text-secondary"
                >
                  <ChevronDownIcon className="h-4 w-4" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {isThemeMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-3 w-80 overflow-hidden rounded-3xl border border-border bg-surface/95 shadow-2xl backdrop-blur-md"
                  >
                    <div className="border-b border-border px-5 py-4">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <div className="text-[11px] uppercase tracking-[0.24em] text-secondary">Theme Picker</div>
                          <div className="text-sm font-semibold text-heading">Choose your mood</div>
                        </div>
                        <div className="rounded-full border border-border bg-surface-strong/80 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-secondary">
                          {activeTheme.label}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2 p-3">
                      {themeOptions.map((option) => (
                        <button
                          key={option.id}
                          onClick={() => {
                            setTheme(option.id);
                            setIsThemeMenuOpen(false);
                          }}
                          className={`flex w-full items-center gap-4 rounded-2xl border px-4 py-4 text-left transition-all ${
                            theme === option.id
                              ? "border-primary/25 bg-primary/10"
                              : "border-transparent hover:border-border hover:bg-surface-strong/70"
                          }`}
                        >
                          <span className={`h-4 w-4 rounded-full ${option.accent} ring-4 ring-surface-strong/50`} />
                          <span className="flex-1">
                            <span className="block text-sm font-semibold text-heading">{option.label}</span>
                            <span className="block text-xs text-secondary">{option.description}</span>
                          </span>
                          {theme === option.id && (
                            <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                              Active
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
          {/* mobile menu button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 rounded-lg text-primary hover:bg-surface/60 transition-colors cursor-pointer relative group"
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
            <div className="absolute inset-0 rounded-lg bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
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
                className="space-y-4 py-6 bg-surface/95 backdrop-blur-sm rounded-lg mx-2 mb-4 border border-border"
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
                            ? "text-primary bg-primary/10 border border-primary/20" 
                            : "hover:text-primary hover:bg-surface-strong/70"
                        }`}
                      >
                        {item.label}
                        {isActive && (
                          <motion.div
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-primary to-accent-strong rounded-full"
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
                    onClick={() => setIsThemeMenuOpen((value) => !value)}
                    className="flex items-center w-full gap-4 rounded-xl border border-border bg-surface/80 px-4 py-3 font-medium transition-all duration-300 hover:border-primary/30 hover:bg-surface-strong/80 hover:text-primary"
                  >
                    <div className="hidden h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface-strong/80 sm:flex">
                      <span className="h-4 w-4 rounded-full bg-primary/90" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="text-[11px] uppercase tracking-[0.24em] text-secondary">Appearance</div>
                      <div className="text-sm font-semibold text-heading">{activeTheme.label}</div>
                    </div>
                    <ChevronDownIcon className="h-4 w-4 text-secondary" />
                  </button>

                  <AnimatePresence>
                    {isThemeMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-3 space-y-2 rounded-xl border border-border bg-surface/95 p-2">
                          {themeOptions.map((option) => (
                            <button
                              key={option.id}
                              onClick={() => {
                                setTheme(option.id);
                                setIsThemeMenuOpen(false);
                                toggleMobileMenu();
                              }}
                              className={`flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left transition-colors ${
                                theme === option.id
                                  ? "bg-primary/10 border border-primary/20"
                                  : "hover:bg-surface-strong/70"
                              }`}
                            >
                              <span className={`h-3 w-3 rounded-full ${option.accent}`} />
                              <span className="flex-1">
                                <span className="block text-sm font-semibold text-heading">{option.label}</span>
                                <span className="block text-xs text-secondary">{option.description}</span>
                              </span>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
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