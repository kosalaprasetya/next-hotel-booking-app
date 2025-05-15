"use client";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";

const NavbarLink = () => {
  const [open, setOpen] = useState(false);
  const menuList = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Room", link: "/room" },
    { name: "Contact", link: "/contact" },
    { name: "Reservation", link: "/reservation" },
    { name: "Admin Dashboard", link: "/admin/dashboard" },
    { name: "Manage Room", link: "/admin/room" },
  ];

  return (
    <>
      <button
        className="inline-flex cursor-pointer items-center justify-center rounded-md p-2 text-sm text-gray-500 hover:bg-gray-100 lg:hidden"
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <IoCloseOutline className="size-8" />
        ) : (
          <IoMenuOutline className="size-8" />
        )}
      </button>
      <nav
        className={clsx("w-full transition-all lg:block lg:w-auto", {
          hidden: !open,
        })}
      >
        <ul className="mt-4 flex flex-col rounded-sm bg-gray-50 p-4 text-xs font-semibold uppercase lg:mt-0 lg:flex-row lg:items-center lg:gap-10 lg:border-0 lg:bg-white lg:p-0">
          {menuList.map((menu, index) => (
            <li key={index}>
              <Link
                href={menu.link}
                className="block rounded-sm px-3 py-2 hover:bg-gray-100 lg:p-0 lg:hover:bg-transparent"
              >
                {menu.name}
              </Link>
            </li>
          ))}
          <li className="pt-4 lg:pt-0">
            <Link
              href="/login"
              className="rounded-sm bg-orange-400 px-6 py-3 text-white hover:bg-orange-500"
            >
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavbarLink;
