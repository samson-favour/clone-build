import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import logo from "../assets/ogle-color-logo.png";

export interface MobileNavbarProps {
  mobileNav: Boolean;
  handleNav?: React.MouseEventHandler<HTMLDivElement> | undefined;
}

const MobileNavbar = ({ mobileNav, handleNav }: MobileNavbarProps) => {
  return (
    <div
      className={
        mobileNav
          ? "xl:hidden fixed left-0 top-0 w-full z-[900]  h-full bg-black/40 transition ease-linear duration-500"
          : ""
      }
    >
      <div
        className={
          mobileNav
            ? "xl:hidden fixed left-0 top-0 w-[80%]  min-h-full  bg-white p-8"
            : "fixed left-[-100%] top-0 p-8 transition ease-linear duration-500"
        }
      >
        <div className="min-h-full ">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center justify-center space-x-2">
              <Link href="/">
                <Image src={logo} alt="logo" style={{ width: "50px" }} />
              </Link>
              <h2 className="font-semibold text-2xl uppercase">Ogle</h2>
            </div>
            <div
              onClick={handleNav}
              className="p-3   rounded-full cursor-pointer"
            >
              <RiCloseCircleFill
                size={35}
                color="#3270fcff"
                style={{ fontWeight: 700 }}
              />
            </div>
          </div>

          <div className="flex mt-5 ">
            <ul className="flex flex-col  space-y-8">
              <div className="ml-[16px] w-[25px] "></div>
              {/* {navLinks.map((link) => (
                    <li key={link.id} className="flex ">
                      <Link href="/">
                        <a className="hover:text-[#475569] text-[#9CA3AF] text-[16px] dark:text-white font-euclidMedium">
                          {link.title}
                        </a>
                      </Link>
                    </li>
                  ))} */}
            </ul>
          </div>

          <div className="flex flex-col  mt-8">
            {/* {renderThemeChanger()} */}

            {/* {!token ? (
                  <Link href="/login">
                    <a className="text-[#64748B] mt-3 mb-3  hover:text-[#475569]  text-[16px] dark:text-white font-euclidMedium">
                      Log in
                    </a>
                  </Link>
                ) : (
                  <Link href="/projects">
                    <a className="text-[#64748B] mb-8 mt-3 hover:text-[#475569]  text-[16px] dark:text-white font-euclidMedium">
                      Project
                    </a>
                  </Link>
                )} */}
          </div>

          {/* {!token ? (
                <Link href="/signup">
                  <a className="text-[#64748B] mb-10 text-[16px] dark:text-white bg-gradient-to-r from-purple to-pink font-aeonikBold">
                    Sign up for free
                  </a>
                </Link>
              ) : (
                <Logout />
              )} */}
        </div>
      </div>{" "}
    </div>
  );
};

export default MobileNavbar;
