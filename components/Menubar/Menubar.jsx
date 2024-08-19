"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

// react icons
import { IoMdMenu, IoMdClose } from "react-icons/io";

const NavItem = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#servicest" },
  { name: "About", href: "/#about" },
  { name: "Team", href: "/#team" },
  { name: "Blog", href: "/#blog" },
  { name: "Contact", href: "/#contact" },
];

const Menubar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 0);
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navbarClasses = `fixed top-0 left-0 right-0 z-20 transition-all duration-300 z-50 ${
    isMobile || hasScrolled
      ? "bg-[#FFFCF5] shadow-md"
      : "bg-[#FFFCF5] text-black"
  }`;

  const isActive = (href) => href && pathname === href;

  // desktop
  const renderNavItem = (item, index) => {
    const active = isActive(item.href);

    return (
      <li key={index} className="relative group">
        <Link
          href={item.href}
          className={`flex items-center cursor-pointer ${
            active
              ? "bg-[#1A73E8] text-white"
              : hasScrolled
              ? "text-black hover:text-[#357960]"
              : "text-black hover:text-[#357960]"
          } px-3 py-2 rounded-md`}
        >
          {item.name}
        </Link>
      </li>
    );
  };

  // mobile
  const renderMobileNavItem = (item, index) => {
    const active = isActive(item.href);

    return (
      <li key={index} className="block">
        <Link
          href={item.href}
          className={`flex items-center ${
            active
              ? "bg-[#1A73E8] text-white"
              : "text-gray-700 hover:text-[#357960]"
          } cursor-pointer px-3 py-2 rounded-md text-base font-medium`}
          onClick={() => setIsOpen(false)}
        >
          {item.name}
        </Link>
      </li>
    );
  };

  return (
    <main className={navbarClasses}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link href="/home1">
              <div className="flex items-center text-white">
                <Image
                  src="/logo.png"
                  alt="logo"
                  className="w-15"
                  width={50}
                  height={50}
                />
                <p className="text-gray-700 text-base font-bold uppercase">
                  Transport
                </p>
              </div>
            </Link>
          </div>
          <nav className="hidden lg:block">
            <ul className="flex space-x-4">{NavItem.map(renderNavItem)}</ul>
          </nav>
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#1A73E8] focus:outline-none"
            >
              {isOpen ? (
                <IoMdClose className="h-8 w-8" />
              ) : (
                <IoMdMenu className="h-8 w-8" />
              )}
            </button>
          </div>
          {/* Add "Create Account" button here */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/create-account">
              <button className="bg-[#1A73E8] text-white px-4 py-2 rounded-[200px] hover:bg-green-600 transition duration-300">
                Create Account
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`lg:hidden overflow-hidden transition-all duration-700 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {NavItem.map(renderMobileNavItem)}
        </ul>
      </div>
    </main>
  );
};

export default Menubar;
