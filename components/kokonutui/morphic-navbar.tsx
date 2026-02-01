"use client";

import clsx from "clsx";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { DistortedGlass } from "@/components/ui/distorted-glass";

const navItems = {
  "/roof-cleaning": {
    name: "roof cleaning",
  },
  "/driveways-patio-decking": {
    name: "driveways",
  },
  "/soft-washing": {
    name: "soft washing",
  },
  "/gutters": {
    name: "gutters",
  },
  "/services": {
    name: "services",
  },
  "/gallery": {
    name: "gallery",
  },
};

export function MorphicNavbar() {
  const pathname = usePathname();
  const [activePath, setActivePath] = useState(pathname);

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  const isActiveLink = (path: string) => {
    if (path === "/") {
      return activePath === "/";
    }
    return activePath.startsWith(path);
  };

  const entries = Object.entries(navItems);
  const leftItems = entries.slice(0, 3);
  const rightItems = entries.slice(3);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Distorted Glass Effect - positioned as background */}
      <div className="absolute inset-0 z-0">
        <DistortedGlass className="!h-full !w-full rounded-none" />
      </div>
      
      <div className="relative z-10 container-custom py-4">
        <div className="flex items-center justify-between">
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center justify-between overflow-visible">
              {leftItems.map(([path, { name }], index) => {
                const isActive = isActiveLink(path);
                const isLastLeft = index === leftItems.length - 1;

                return (
                  <Link
                    className={clsx(
                      "flex items-center justify-center p-1.5 px-4 text-sm transition-all duration-300",
                      isLastLeft && "mr-10",
                      isActive
                        ? "mx-2 rounded-xl font-semibold bg-tr1-blue text-white shadow-lg"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                    )}
                    href={path}
                    key={path}
                  >
                    {name}
                  </Link>
                );
              })}

              <Link
                href="/"
                aria-label="Home"
                className="group relative mx-4 flex h-10 w-20 items-center justify-center rounded-xl"
              >
                <span className="relative h-full w-full">
                  <span className="pointer-events-none absolute left-1/2 top-1/2 h-10 w-20 -translate-x-1/2 -translate-y-1/2 transition-transform duration-200 scale-[3.5] group-hover:scale-[3.675] origin-center z-10">
                    <Image
                      src="/tr1-logo-navbar.png"
                      alt="TR1 Exterior Cleaning"
                      fill
                      className="object-contain"
                      priority
                    />
                  </span>
                </span>
              </Link>

              {rightItems.map(([path, { name }], index) => {
                const isActive = isActiveLink(path);
                const isFirstRight = index === 0;

                return (
                  <Link
                    className={clsx(
                      "flex items-center justify-center p-1.5 px-4 text-sm transition-all duration-300",
                      isFirstRight && "ml-10",
                      isActive
                        ? "mx-2 rounded-xl font-semibold bg-tr1-blue text-white shadow-lg"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                    )}
                    href={path}
                    key={path}
                  >
                    {name}
                  </Link>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="hidden md:block"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-tr1-blue text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Get a Quote
            </Link>
          </motion.div>

          <div className="md:hidden flex items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-4 py-2 bg-tr1-blue text-white text-sm font-semibold rounded-lg hover:bg-blue-600 transition-all duration-200"
            >
              Quote
            </Link>
          </div>
        </div>

        <div className="md:hidden mt-4">
          <div className="flex flex-col gap-3">
            {/* Logo Row */}
            <div className="flex justify-center">
              <Link
                href="/"
                aria-label="Home"
                className="flex items-center justify-center transition-transform duration-200 hover:scale-110"
              >
                <span className="relative h-8 w-20">
                  <Image
                    src="/tr1-logo-navbar.png"
                    alt="TR1 Exterior Cleaning"
                    fill
                    className="object-contain"
                    priority
                  />
                </span>
              </Link>
            </div>
            
            {/* Navigation Items */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {Object.entries(navItems).map(([path, { name }]) => {
                const isActive = isActiveLink(path);

                return (
                  <Link
                    className={clsx(
                      "flex items-center justify-center px-3 py-1.5 text-xs rounded-lg transition-all duration-300",
                      isActive
                        ? "font-semibold bg-tr1-blue text-white shadow-lg"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                    )}
                    href={path}
                    key={path}
                  >
                    {name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default MorphicNavbar;
