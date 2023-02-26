import Image from "next/image";
import React, { useState } from "react";

import dynamic from "next/dynamic";

const SearchInput = dynamic(() => import("../components/AutoFillInput"), {
  ssr: false,
});


import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import format from "date-fns/format";
import { addDays } from "date-fns";
import Datepicker from "react-tailwindcss-datepicker";
import DateRanpicker from "../components/DateRanpicker";
import logo from "../assets/ogle-color-logo.png";
import { useRouter } from "next/router";
import Link from "next/link";
const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndtDate] = useState(new Date());
  const [numOfGuests, setNumOfGuests] = useState(1);

  const [value, setValue] = useState({
    startDate: startDate,
    endDate: endDate,
  });

  let d = new Date();
  d.setDate(d.getDate() - 1);

  const handleValueChange = (newValue) => {
    // console.log("newValue:", newValue);
    setValue(newValue);
  };

  const router = useRouter();
  const resetInput = () => {
    setSearchInput("");
    setNumOfGuests(1);
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numOfGuests,
      },
    });
  };
  return (
    <header className="sticky top-0 z-50  flex items-center justify-center  lg:justify-between bg-white shadow-md p-5 md:px-10">
      <div
        onClick={() => {
          router.push("/");
        }}
        className="relative lg:flex items-center my-auto h-10 cursor-pointer hidden "
      >
        <Image
          src={logo}
          style={{
            objectFit: "contain",
            objectPosition: "left",
            width: "60px",
          }}
        />
      </div>

      <div className="shadow-lg ml-0 xl:ml-16   bg-white rounded-full flex items-center justify-between  border border-gray-50">
        <div>
          <SearchInput />
          {/* <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            type="text"
            className="max-w-[130px] rounded-full focus:border-none focus:ring-0 flex-shrink flex border-none overflow-hidden"
            placeholder="Location"
          /> */}
        </div>

        <div className="h-6 w-[1px]  bg-gray-300" />

        <div className="max-w-[150px] hidden lg:block">
          <Datepicker
            value={value}
            onChange={handleValueChange}
            inputClassName="border-none focus:ring-0 focus:border-none"
            toggleClassName="border-none focus:ring-0 focus:border-none"
            showShortcuts={false}
            minDate={d}
            placeholder={"Check In - Check Out"}
          />
        </div>

        <div className="max-w-[150px] block lg:hidden">
          <Datepicker
            useRange={false}
            value={value}
            onChange={handleValueChange}
            inputClassName="border-none focus:ring-0 focus:border-none"
            toggleClassName="border-none focus:ring-0 focus:border-none"
            showShortcuts={false}
            minDate={d}
            placeholder={"Check In - Check Out"}
          />
        </div>
        <div className="h-6 w-[1px]  bg-gray-300" />

        <div>
          <input
            value={numOfGuests}
            onChange={(e) => setNumOfGuests(e.target.value)}
            type="number"
            min={1}
            className="max-w-[60px]  rounded-full focus:border-none  border-none outline-none focus:outline-none focus:ring-0"
            placeholder="Number of guests"
          />
        </div>

        <div>
          <div onClick={search}>
            <SearchIcon className="  h-8 bg-[#3270FC] text-white rounded-full p-2 cursor-pointer md:mx-2  hover:shadow-xl active:scale-90 transition duration-150" />
          </div>
        </div>
      </div>
      <div className="lg:flex hidden text-gray-500 space-x-4 items-center justify-end">
        <p className="hidden md:inline cursor-pointer">
          <Link href="/create-listing">Become a host</Link>
        </p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
};

export default Header;
