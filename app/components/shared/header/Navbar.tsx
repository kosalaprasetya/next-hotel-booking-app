import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavbarLink from "./NavbarLink";

const Navbar = () => {
  return (
    <header className="fixed top-0 z-100 w-full bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between p-4">
        <Link href={"/"}>
          <Image alt="logo" src={"/logo.png"} width={72} height={49} priority />
        </Link>
        <NavbarLink />
      </div>
    </header>
  );
};

export default Navbar;
