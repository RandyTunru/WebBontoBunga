"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { id: 0, title: "Beranda", href: "/" },
    { id: 1, title: "Organisasi", href: "/organisasi" },
    { id: 2, title: "Publikasi", href: "/publikasi" },
    { id: 3, title: "Wisata", href: "/wisata" },
    { id: 4, title: "Geografi", href: "/geografi" },
    { id: 5, title: "Info KPU", href: "/kpu" },
  ];

  return (
    <nav className="sticky top-0 z-50 flex h-16 w-screen items-center justify-between bg-[#30cf7f] px-14 py-4">
      <Link href="/">
        <Image
          src="/image-removebg-preview (24).png"
          width={50}
          height={75}
          alt="Bolata's icon"
          className="cursor-pointer"
        />
      </Link>
      <section className="flex items-center gap-8 text-white text-sm">
        {navItems.map((link) => (
          <Link key={link.id} href={link.href}>
            <span
              className={`${
                pathname.startsWith(link.href)
                  ? "hover:text-white-hover text-blue-light"
                  : "hover:text-white-hover"
              } `}
            >
              {link.title}
            </span>
          </Link>
        ))}
      </section>
    </nav>
  );
}

export default Navbar;
