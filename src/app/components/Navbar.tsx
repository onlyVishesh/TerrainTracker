"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS } from "../constants";
import Button from "./Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="max-container padding-container relative z-30 flex items-center justify-between py-5">
        <Link href="/" className="text-xl font-bold">
          Terrain<span className="text-green-600">Tracker</span>
        </Link>

        <ul className="hidden h-full items-center gap-6 lg:flex xl:gap-12">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 flex-center cursor-pointer pb-1.5 text-gray-50 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          ))}
        </ul>

        <div className="lg:flexCenter hidden">
          <Button
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
          />
        </div>

        <Image
          src="menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        />
      </nav>
      <div
        className={`absolute right-0 top-0 z-40 h-screen w-full flex-col bg-gray-100 backdrop-blur-sm transition-transform duration-300 sm:w-1/2 lg:hidden ${
          isMenuOpen ? "flex translate-x-0" : "hidden translate-x-full"
        }`}
      >
        <div className="flex w-full justify-end p-5">
          <Image
            src="close.svg"
            alt="close"
            width={32}
            height={32}
            className="cursor-pointer lg:hidden"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          />
        </div>

        <ul className="flex flex-col items-center justify-center gap-6 lg:hidden xl:gap-12">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 flex-center cursor-pointer pb-1.5 !text-2xl font-semibold text-black transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
