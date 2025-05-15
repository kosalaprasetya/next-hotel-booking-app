import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4 text-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid items-start justify-items-center gap-12 lg:grid-cols-4">
          <div className="logo-desription max-w-1/2 text-center lg:max-w-full lg:text-left">
            <Link href={"/"} className="flex justify-center lg:justify-start">
              <Image src="/logo.png" alt="Logo" width={128} height={49} />
            </Link>
            <p className="py-4 text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              tempore, maiores architecto molestias quaerat hic!
            </p>
          </div>
          <div className="menu-1 text-center text-xs">
            <p className="font-bold">About Us</p>
            <ul className="flex flex-col gap-2 pt-4">
              <li>
                <Link href={"/about"} className="hover:text-orange-500">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href={"/about"} className="hover:text-orange-500">
                  Services
                </Link>
              </li>
              <li>
                <Link href={"/about"} className="hover:text-orange-500">
                  Careers
                </Link>
              </li>
              <li>
                <Link href={"/about"} className="hover:text-orange-500">
                  Company
                </Link>
              </li>
            </ul>
          </div>
          <div className="menu-2 text-center text-xs">
            <p className="font-bold">Legal</p>
            <ul className="flex flex-col gap-2 pt-4">
              <li>
                <Link
                  href={"/privacy-policy"}
                  className="hover:text-orange-500"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href={"/terms-of-service"}
                  className="hover:text-orange-500"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href={"/cookie-policy"} className="hover:text-orange-500">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href={"/disclaimer"} className="hover:text-orange-500">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
          <div className="email-newsletter flex flex-col gap-2 text-center text-xs">
            <p className="font-bold">Subscribe</p>
            <div className="input flex flex-col">
              <p className="py-2 text-xs text-gray-300">
                Subscribe to our newsletter
              </p>
              <input
                type="text"
                className="bg-gray-600 p-2 text-xs hover:bg-none hover:outline-none focus:outline-none active:outline-none"
                placeholder="email@mail.com"
              />
            </div>
            <button className="text-md cursor-pointer bg-orange-500 px-4 py-2 font-semibold text-white hover:bg-orange-600">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <p className="text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Hotel Booking App. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
