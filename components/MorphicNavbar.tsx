"use client";

import clsx from "clsx";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { DistortedGlass } from "@/components/ui/distorted-glass";

const navItems = {
  "/": {
    name: "home",
  },
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

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="bg-black/95 backdrop-blur-md border-b border-slate-800/50">
        <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center"
          >
            <Link href="/" className="relative h-12 w-32 md:h-14 md:w-40">
              <Image
                src="/tr1-logo.png"
                alt="TR1 Exterior Cleaning"
                fill
                className="object-contain"
                priority
              />
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center justify-center">
            <div className="glass flex items-center justify-between overflow-hidden rounded-xl bg-slate-900/50 backdrop-blur-md border border-slate-800">
              {Object.entries(navItems).map(([path, { name }], index, array) => {
                const isActive = isActiveLink(path);
                const isFirst = index === 0;
                const isLast = index === array.length - 1;
                const prevPath = index > 0 ? array[index - 1][0] : null;
                const nextPath =
                  index < array.length - 1 ? array[index + 1][0] : null;

                return (
                  <Link
                    className={clsx(
                      "flex items-center justify-center p-1.5 px-4 text-sm transition-all duration-300",
                      isActive
                        ? "mx-2 rounded-xl font-semibold bg-tr1-blue text-white shadow-lg"
                        : clsx(
                            "text-slate-300 hover:text-white",
                            (isActiveLink(prevPath || "") || isFirst) &&
                              "rounded-l-xl",
                            (isActiveLink(nextPath || "") || isLast) &&
                              "rounded-r-xl"
                          )
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
            transition={{ delay: 0.4, duration: 0.5 }}
            className="hidden md:block"
          >
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-tr1-blue text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Get a Quote
            </Link>
          </motion.div>

          <div className="md:hidden flex items-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-4 py-2 bg-tr1-blue text-white text-sm font-semibold rounded-lg hover:bg-blue-600 transition-all duration-200"
            >
              Quote
            </Link>
          </div>
        </div>

        <div className="md:hidden mt-4">
          <div className="glass flex flex-wrap items-center justify-center gap-2 p-2 rounded-xl bg-slate-900/50 backdrop-blur-md border border-slate-800">
            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = isActiveLink(path);

              return (
                <Link
                  className={clsx(
                    "flex items-center justify-center px-3 py-1.5 text-xs rounded-lg transition-all duration-300",
                    isActive
                      ? "font-semibold bg-tr1-blue text-white shadow-lg"
                      : "text-slate-300 hover:text-white hover:bg-slate-800"
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
        
        {/* Distorted Glass Effect */}
        <div className="relative w-full -mt-[17px] text-slate-400">
          <DistortedGlass />
        </div>
      </div>
    </motion.nav>
  );
}

export default MorphicNavbar;
