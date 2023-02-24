import Image from "next/image";
import React, { useState } from "react";
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
const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndtDate] = useState(new Date());
  const [numOfGuests, setNumOfGuests] = useState(1);

  const [value, setValue] = useState({
    startDate: startDate,
    endDate: endDate,
  });

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
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div
        onClick={() => {
          router.push("/");
        }}
        className="relative flex items-center my-auto h-10 cursor-pointer"
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
      {/* <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder="Start your search"
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
        />
        <SearchIcon className=" hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div> */}

      <div className="w-[500px] items-center justify-between flex flex-row border border-gray-300">
        <div>
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            type="text"
            className="w-[130px]"
            placeholder="Location"
          />
        </div>

        <div className="w-[150px]">
          <Datepicker
            value={value}
            onChange={handleValueChange}
            showShortcuts={true}
          />
        </div>

        <div>
          <input
            value={numOfGuests}
            onChange={(e) => setNumOfGuests(e.target.value)}
            type="number"
            min={1}
            className="w-[130px] outline-none focus:outline-none focus:ring-0"
            placeholder="Number of guests"
          />
        </div>

        <div>
          <button onClick={resetInput} className="text-gray-400">
            cancel
          </button>
          <button onClick={search} className="text-blue-800 cursor-pointer">
            search
          </button>
        </div>
      </div>
      <div className="flex text-gray-500 space-x-4 items-center justify-end">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {/* {searchInput && (
        <div className="flex flex-wrap flex-col mx-auto  col-span-3">
          <DateRangePicker
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            
            direction="horizontal"
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={(item) => setRange([item.selection])}
            //className="calenderElement"
          />
        </div>
      )} */}
    </header>
  );
};

export default Header;
