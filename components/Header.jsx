import Image from "next/image";
import React, { useState, Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, userLogin } from "../features/auth/authActions";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Dialog, Transition, Listbox } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { TiSocialFacebook } from "react-icons/ti";
import { FaGoogle } from "react-icons/fa";
import { RxPerson } from "react-icons/rx";
import { TiTimes } from "react-icons/ti";
import { HiOutlineMail } from "react-icons/hi";
import dynamic from "next/dynamic";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Datepicker from "react-tailwindcss-datepicker";
import logo from "../assets/ogle-color-logo.png";
import login_img from "../assets/login.jpg";
import register_img from "../assets/register.jpg";
import { useRouter } from "next/router";
import RegSocialButton from "./RegSocialButton";
import RegInput from "./RegInput";
import RegButton from "./RegButton";
import { FaBars } from "react-icons/fa";
import { useSession, signIn, signOut } from "next-auth/react";
import MobileNavbar from "./MobileNavbar";
import ProfileDropdown from "./ProfileDropdown";

const SearchInput = dynamic(() => import("./AutoFillInput"), {
  ssr: false,
});

const users = [
  { name: "Single User" },
  { name: "Agent" },
  { name: "Multi User" },
];

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const handleNav = () => {
    setMobileNav(!mobileNav);
  };
  const { data: session } = useSession();

  const { loading, userInfo, error, success } = useSelector(
    (state) => state.auth
  );

  console.log(userInfo);

  const dispatch = useDispatch();
  console.log(error);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const registerForm = (data) => {
    data.role = selected.name;
    if (data.password !== data.confirmPassword) {
      alert("Password mismatch");
    }
    dispatch(registerUser(data));

    console.log(data);
  };

  const loginForm = (data) => {
    dispatch(userLogin(data));

    if (userInfo) {
      router.push("/my-dashboard");
    }
  };

  useEffect(() => {
    // redirect user to login page if registration was successful
    if (success) {
      setActiveRegButton(true);
    }
    // redirect authenticated user to profile screen
    // if (userInfo) {
    //   router.push("/dashboard")
    // }
  }, [userInfo, success]);

  //console.log(session);

  const [searchInput, setSearchInput] = useState("");
  // const [startDate, setStartDate] = useState(null);
  // const [endDate, setEndtDate] = useState(null);
  const [selected, setSelected] = useState(users[0]);
  const [numOfGuests, setNumOfGuests] = useState("Guests");
  const [activeRegButton, setActiveRegButton] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  // const login = () => {
  //   setActiveRegButton(true);
  // };

  // const register = () => {
  //   setActiveRegButton(true);
  // };

  let d = new Date();
  d.setDate(d.getDate() - 1);

  const handleValueChange = (newValue) => {
    setValue(newValue);
  };

  const router = useRouter();
  const resetInput = () => {
    setSearchInput("");
    setNumOfGuests("");
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const search = () => {
    router.push({
      pathname: "/search",
      // query: {
      //   location: searchInput,
      //   startDate: value.startDate.toISOString(),
      //   endDate: value.endDate.toISOString(),
      //   numOfGuests,
      // },
    });
  };

  if (session) {
    return (
      <div>
        <p>Welcome, {session.user?.email}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }
  return (
    <>
      <div className="flex px-3 pt-3 pb-2 justify-between items-center sm:hidden">
        <div>
          <Image
            alt="image"
            src={logo}
            style={{
              objectFit: "contain",
              objectPosition: "left",
              width: "40px",
            }}
          />
        </div>

        <div
          onClick={handleNav}
          className="transition ease-in-out duration-500"
        >
          <FaBars size={24} color="#3270FC" />
        </div>

        {mobileNav && (
          <MobileNavbar mobileNav={mobileNav} handleNav={handleNav} />
        )}
      </div>
      <div className="w-full border-b-#3270FC border-b" />

      <header className="sticky top-0 z-50  flex items-center justify-center  sm:justify-between bg-white shadow-md p-4 md:px-5">
        <div
          onClick={() => {
            router.push("/");
          }}
          className="relative sm:flex items-center my-auto h-10 cursor-pointer hidden "
        >
          <Image
            alt="image"
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
          </div>

          <div className="h-6 w-[1px]  bg-gray-300" />

          <div className="max-w-[150px] hidden lg:block">
            <Datepicker
              value={value}
              onChange={handleValueChange}
              inputClassName="border-none placeholder-gray-800 focus:ring-0 focus:border-none"
              toggleClassName="border-none focus:ring-0 focus:border-none"
              showShortcuts={false}
              minDate={d}
              placeholder={"Date"}
            />
          </div>

          <div className="max-w-[150px] block lg:hidden">
            <Datepicker
              useRange={false}
              value={value}
              onChange={handleValueChange}
              inputClassName="border-none  focus:ring-0 focus:border-none"
              toggleClassName="border-none focus:ring-0 focus:border-none"
              showShortcuts={false}
              minDate={d}
              placeholder={"Date"}
            />
          </div>
          <div className="h-6 w-[1px]  bg-gray-300" />

          <div>
            <input
              value={numOfGuests}
              onChange={(e) => setNumOfGuests(e.target.value)}
              type="number"
              min={1}
              className="max-w-[90px]  rounded-full focus:border-none  border-none outline-none focus:outline-none focus:ring-0"
              placeholder="Guests"
            />
          </div>

          <div>
            <div onClick={search}>
              <SearchIcon className="  h-8 bg-[#3270FC] text-white rounded-full p-2 cursor-pointer md:mx-2  hover:shadow-xl active:scale-90 transition duration-150" />
            </div>
          </div>
        </div>
        <div className="sm:flex hidden text-gray-500 space-x-4 items-center justify-end">
          <p
            onClick={openModal}
            className="hidden md:inline cursor-pointer  text-[#3270FC] transition transform ease-out duration-300"
          >
            Become a host
          </p>
          <GlobeAltIcon className="h-6 cursor-pointer" />
          {/* <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
            <MenuIcon className="h-6" />
            <UserCircleIcon className="h-6" />
          </div> */}
          <ProfileDropdown />
        </div>

        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50  " onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900 bg-opacity-80 " />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto scrollbar-hide">
              <div className="flex scrollbar-hide z-50  max-w-[800px] mt-3 min-h-[626px] mx-auto items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel
                    className={`relative scroll-m-2 transform scrollbar-hide  rounded-[8px] bg-white pl-[30px] pr-[30px] pt-4 pb-5 text-left align-middle shadow-xl transition-all`}
                  >
                    <div
                      onClick={() => setIsOpen(false)}
                      className="absolute cursor-pointer -right-4 -top-5 z-50 w-[50px] flex items-center justify-center h-[50px] bg-[#3270fc] rounded-full "
                    >
                      <TiTimes color="#fff" size={34} />
                    </div>
                    <div className="flex justify-between border-b-[#e9ecef] border-b">
                      <button
                        type="button"
                        onClick={() => setActiveRegButton(true)}
                        className={`w-[370px] ${
                          activeRegButton ? "bg-[#f5f5f5]" : ""
                        } outline-none text-[#484848] font-bold text-[16px]  h-[70px] capitalize  rounded-tl-[6px] rounded-tr-[6px] transition duration-150 ease-in-out`}
                      >
                        login
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveRegButton(false)}
                        className={` ${
                          activeRegButton === false ? "bg-[#f5f5f5]" : ""
                        } w-[370px] text-[#484848] font-bold text-[18px]  h-[70px] capitalize  transition duration-150 ease-in-out  rounded-tl-[6px] rounded-tr-[6px]`}
                      >
                        register
                      </button>
                    </div>
                    {activeRegButton ? (
                      <div className="mt-[25px] flex gap-6 ">
                        <div className="w-[357px]">
                          <div className="w-[357px]">
                            <Image
                              src={login_img}
                              alt="login-image"
                              style={{
                                objectFit: "contain",
                                objectPosition: "left",
                                width: "357px",
                              }}
                            />
                          </div>
                        </div>
                        <div className="w-full">
                          <h1 className="text-[#006c70] -mt-1 capitalize text-[17px] font-medium pt-0">
                            login
                          </h1>

                          <div className="mt-6">
                            <RegSocialButton
                              title="Login with Facebook"
                              color="text-[#506dab] "
                              backgroundColor="bg-[#506dab]"
                              borderColor="border-[#506dab]"
                              icon={<TiSocialFacebook size={21} />}
                            />

                            <RegSocialButton
                              onClick={() =>
                                signIn("", {
                                  callbackUrl: "/",
                                })
                              }
                              title="Login with Google"
                              color="text-[#dd4b39] "
                              backgroundColor=""
                              borderColor="border-[#dd4b39]"
                              icon={<FaGoogle size={13} />}
                            />
                          </div>

                          <hr className="-mt-[10px]" />

                          <form onSubmit={handleSubmit(loginForm)}>
                            <div className="mt-[23px] mb-[27px] relative">
                              <RegInput
                                register={register}
                                name="email"
                                placeholder="User Name Or Email"
                                onChange={(e) => setEmail(e.target.value)}
                              />

                              {email.length === 0 && (
                                <div className="absolute top-4 right-4">
                                  <RxPerson size={18} color="#006c70" />
                                </div>
                              )}
                            </div>
                            <div className="mt-[28px]  relative">
                              <RegInput
                                register={register}
                                name="password"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                              />

                              {password.length === 0 && (
                                <div className="absolute top-2 right-0">
                                  <svg
                                    width={43}
                                    height={42}
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M24.701 23.503c.53 0 .96-.388.96-.867s-.43-.866-.96-.866-.959.387-.959.866.43.867.96.867Z"
                                      fill="#006c70"
                                    />
                                    <path
                                      d="M27.755 25.81c.17 0 .332-.06.452-.169a.551.551 0 0 0 .187-.408v-4.736c0-.612-.27-1.2-.749-1.633a2.704 2.704 0 0 0-1.807-.677h-.768v-2.036c-.023-.905-.437-1.766-1.154-2.399-.717-.632-1.679-.986-2.68-.986-1.003 0-1.965.354-2.681.986-.717.633-1.131 1.494-1.155 2.399v2.036h-.765c-.678 0-1.328.244-1.807.677a2.205 2.205 0 0 0-.75 1.633v4.736c0 .612.27 1.2.75 1.633.479.433 1.129.676 1.807.677h9.204c.678 0 1.328-.244 1.807-.677.48-.434.749-1.02.75-1.633a.555.555 0 0 0-.197-.394.677.677 0 0 0-.443-.161.677.677 0 0 0-.443.161.555.555 0 0 0-.196.394c0 .306-.135.6-.375.816-.24.217-.564.338-.903.339h-9.204c-.34 0-.664-.122-.904-.339a1.103 1.103 0 0 1-.374-.816v-4.736c0-.306.135-.6.374-.816.24-.217.565-.338.904-.339h9.204c.339 0 .664.122.903.339.24.216.375.51.375.816v4.736c0 .153.067.3.187.408.12.108.282.17.45.17Zm-3.964-7.622h-5.114v-2.037a2.213 2.213 0 0 1 .775-1.59 2.707 2.707 0 0 1 1.782-.654c.666 0 1.305.234 1.783.653.477.42.755.99.774 1.591v2.037Z"
                                      fill="#006c70"
                                    />
                                    <path
                                      d="M20.111 23.503c.53 0 .96-.388.96-.867s-.43-.866-.96-.866-.959.387-.959.866.43.867.96.867ZM17.834 23.503c.53 0 .96-.388.96-.867s-.43-.866-.96-.866-.959.387-.959.866.43.867.959.867ZM22.389 23.503c.53 0 .959-.388.959-.867s-.43-.866-.96-.866c-.529 0-.958.387-.958.866s.43.867.959.867Z"
                                      fill="#006c70"
                                    />
                                  </svg>
                                </div>
                              )}
                            </div>

                            <div className="flex justify-between items-center mt-[18px]">
                              <div className="flex items-center">
                                <input
                                  type="checkbox"
                                  value=""
                                  className="w-[17px] h-[17px] focus:ring-0 text-[#3270fc] rounded-[4px]  border"
                                />

                                <label className="text-[14px] leading-[24px] pl-[13px] text-[#484848]  text-UserText">
                                  Remember me
                                </label>
                              </div>

                              <div>
                                <p className="text-[14px] cursor-pointer leading-[24px] font-medium text-[#8b91dd]">
                                  Lost your password?
                                </p>
                              </div>
                            </div>
                            <div className="mt-[14px]">
                              <RegButton title="Log In" />
                            </div>
                          </form>

                          <div className="flex items-center justify-center text-[14px] font-normal">
                            <span className="text-[#484848] pr-1">
                              Dont have an account?
                            </span>
                            <span
                              onClick={() => setActiveRegButton(false)}
                              className="text-[#3270fc] cursor-pointer"
                            >
                              Register
                            </span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="mt-[25px] flex gap-6 ">
                        <div>
                          <div className="w-[357px]">
                            <Image
                              src={register_img}
                              alt="login-image"
                              style={{
                                objectFit: "contain",
                                objectPosition: "left",
                                width: "357px",
                              }}
                            />
                          </div>
                        </div>
                        <div className="w-full">
                          <h1 className="text-[#006c70] -mt-1 capitalize text-[17px] font-medium pt-0">
                            Register
                          </h1>

                          <div className="mt-6">
                            <RegSocialButton
                              title="Login with Facebook"
                              color="text-[#506dab] "
                              backgroundColor="bg-[#506dab]"
                              borderColor="border-[#506dab]"
                              icon={<TiSocialFacebook size={21} />}
                            />

                            <RegSocialButton
                              title="Login with Google"
                              color="text-[#dd4b39] "
                              backgroundColor=""
                              borderColor="border-[#dd4b39]"
                              icon={<FaGoogle size={13} />}
                            />
                          </div>

                          <hr className="-mt-[10px]" />

                          <form onSubmit={handleSubmit(registerForm)}>
                            <div className="mt-[23px] mb-[17px] relative">
                              <RegInput
                                register={register}
                                name="username"
                                placeholder="User Name"
                                onChange={(e) => setEmail(e.target.value)}
                              />

                              {email.length === 0 && (
                                <div className="absolute top-4 right-4">
                                  <RxPerson size={18} color="#006c70" />
                                </div>
                              )}
                            </div>

                            <div className="mb-[17px] relative">
                              <RegInput
                                register={register}
                                name="email"
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                              />

                              {email.length === 0 && (
                                <div className="absolute top-4 right-4">
                                  <HiOutlineMail size={18} color="#006c70" />
                                </div>
                              )}
                            </div>
                            <div className="mb-[17px]  relative">
                              <RegInput
                                register={register}
                                name="password"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                              />

                              {password.length === 0 && (
                                <div className="absolute top-2 right-0">
                                  {/* <BiLockAlt size={18} color="#006c70" /> */}

                                  <svg
                                    width={43}
                                    height={42}
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M24.701 23.503c.53 0 .96-.388.96-.867s-.43-.866-.96-.866-.959.387-.959.866.43.867.96.867Z"
                                      fill="#006c70"
                                    />
                                    <path
                                      d="M27.755 25.81c.17 0 .332-.06.452-.169a.551.551 0 0 0 .187-.408v-4.736c0-.612-.27-1.2-.749-1.633a2.704 2.704 0 0 0-1.807-.677h-.768v-2.036c-.023-.905-.437-1.766-1.154-2.399-.717-.632-1.679-.986-2.68-.986-1.003 0-1.965.354-2.681.986-.717.633-1.131 1.494-1.155 2.399v2.036h-.765c-.678 0-1.328.244-1.807.677a2.205 2.205 0 0 0-.75 1.633v4.736c0 .612.27 1.2.75 1.633.479.433 1.129.676 1.807.677h9.204c.678 0 1.328-.244 1.807-.677.48-.434.749-1.02.75-1.633a.555.555 0 0 0-.197-.394.677.677 0 0 0-.443-.161.677.677 0 0 0-.443.161.555.555 0 0 0-.196.394c0 .306-.135.6-.375.816-.24.217-.564.338-.903.339h-9.204c-.34 0-.664-.122-.904-.339a1.103 1.103 0 0 1-.374-.816v-4.736c0-.306.135-.6.374-.816.24-.217.565-.338.904-.339h9.204c.339 0 .664.122.903.339.24.216.375.51.375.816v4.736c0 .153.067.3.187.408.12.108.282.17.45.17Zm-3.964-7.622h-5.114v-2.037a2.213 2.213 0 0 1 .775-1.59 2.707 2.707 0 0 1 1.782-.654c.666 0 1.305.234 1.783.653.477.42.755.99.774 1.591v2.037Z"
                                      fill="#006c70"
                                    />
                                    <path
                                      d="M20.111 23.503c.53 0 .96-.388.96-.867s-.43-.866-.96-.866-.959.387-.959.866.43.867.96.867ZM17.834 23.503c.53 0 .96-.388.96-.867s-.43-.866-.96-.866-.959.387-.959.866.43.867.959.867ZM22.389 23.503c.53 0 .959-.388.959-.867s-.43-.866-.96-.866c-.529 0-.958.387-.958.866s.43.867.959.867Z"
                                      fill="#006c70"
                                    />
                                  </svg>
                                </div>
                              )}
                            </div>
                            <div className="mb-[17px]  relative">
                              <RegInput
                                register={register}
                                name="confirmPassword"
                                placeholder="Re-Enter Password"
                                onChange={(e) => setPassword(e.target.value)}
                              />

                              {password.length === 0 && (
                                <div className="absolute top-2 right-0">
                                  {/* <BiLockAlt size={18} color="#006c70" /> */}

                                  <svg
                                    width={43}
                                    height={42}
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M24.701 23.503c.53 0 .96-.388.96-.867s-.43-.866-.96-.866-.959.387-.959.866.43.867.96.867Z"
                                      fill="#006c70"
                                    />
                                    <path
                                      d="M27.755 25.81c.17 0 .332-.06.452-.169a.551.551 0 0 0 .187-.408v-4.736c0-.612-.27-1.2-.749-1.633a2.704 2.704 0 0 0-1.807-.677h-.768v-2.036c-.023-.905-.437-1.766-1.154-2.399-.717-.632-1.679-.986-2.68-.986-1.003 0-1.965.354-2.681.986-.717.633-1.131 1.494-1.155 2.399v2.036h-.765c-.678 0-1.328.244-1.807.677a2.205 2.205 0 0 0-.75 1.633v4.736c0 .612.27 1.2.75 1.633.479.433 1.129.676 1.807.677h9.204c.678 0 1.328-.244 1.807-.677.48-.434.749-1.02.75-1.633a.555.555 0 0 0-.197-.394.677.677 0 0 0-.443-.161.677.677 0 0 0-.443.161.555.555 0 0 0-.196.394c0 .306-.135.6-.375.816-.24.217-.564.338-.903.339h-9.204c-.34 0-.664-.122-.904-.339a1.103 1.103 0 0 1-.374-.816v-4.736c0-.306.135-.6.374-.816.24-.217.565-.338.904-.339h9.204c.339 0 .664.122.903.339.24.216.375.51.375.816v4.736c0 .153.067.3.187.408.12.108.282.17.45.17Zm-3.964-7.622h-5.114v-2.037a2.213 2.213 0 0 1 .775-1.59 2.707 2.707 0 0 1 1.782-.654c.666 0 1.305.234 1.783.653.477.42.755.99.774 1.591v2.037Z"
                                      fill="#006c70"
                                    />
                                    <path
                                      d="M20.111 23.503c.53 0 .96-.388.96-.867s-.43-.866-.96-.866-.959.387-.959.866.43.867.96.867ZM17.834 23.503c.53 0 .96-.388.96-.867s-.43-.866-.96-.866-.959.387-.959.866.43.867.959.867ZM22.389 23.503c.53 0 .959-.388.959-.867s-.43-.866-.96-.866c-.529 0-.958.387-.958.866s.43.867.959.867Z"
                                      fill="#006c70"
                                    />
                                  </svg>
                                </div>
                              )}
                            </div>

                            <div className=" w-full">
                              <Listbox
                                value={selected}
                                onChange={setSelected}
                                // {...register('role')}
                              >
                                <div className="relative mt-1">
                                  <Listbox.Button className="relative w-full text-left pl-3  border rounded-[8px] focus:ring-0 border-[#ebebeb]  text-[#484848] text-[14px] h-[52px]">
                                    <span
                                      className="block truncate"
                                      {...register("role")}
                                    >
                                      {selected?.name}
                                    </span>
                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                      <ChevronDownIcon
                                        className="h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  </Listbox.Button>
                                  <Transition
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                  >
                                    <Listbox.Options
                                      {...register("role")}
                                      className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                                    >
                                      {users.map((user, userId) => (
                                        <Listbox.Option
                                          key={userId}
                                          className={({ active }) =>
                                            `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                                              active
                                                ? "text-[#3270fc]"
                                                : "text-gray-900"
                                            }`
                                          }
                                          value={user}
                                        >
                                          {({ selected }) => (
                                            <>
                                              <span
                                                className={`block truncate ${
                                                  selected
                                                    ? "font-medium"
                                                    : "font-normal"
                                                }`}
                                              >
                                                {user?.name}
                                              </span>
                                              {selected ? (
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#3270fc]">
                                                  <CheckIcon
                                                    className="h-5 w-5"
                                                    aria-hidden="true"
                                                  />
                                                </span>
                                              ) : null}
                                            </>
                                          )}
                                        </Listbox.Option>
                                      ))}
                                    </Listbox.Options>
                                  </Transition>
                                </div>
                              </Listbox>
                            </div>

                            <div className="flex justify-between items-center mt-[18px]">
                              <div className="flex items-center">
                                <input
                                  type="checkbox"
                                  value=""
                                  className="w-[17px] h-[17px] focus:ring-0 text-[#3270fc] rounded-[4px]  border"
                                />

                                <label className="text-[14px] leading-[24px] pl-[13px] text-[#484848]  text-UserText">
                                  I have accept the Terms and Privacy Policy.
                                </label>
                              </div>

                              {/* <div>
                            <p className="text-[14px] leading-[24px] font-medium text-[#8b91dd]">
                              Lost your password?
                            </p>
                          </div> */}
                            </div>
                            <div className="mt-[14px]">
                              <RegButton title="Sign Up" />
                            </div>
                          </form>

                          <div className="flex items-center justify-center text-[14px] font-normal">
                            <span className="text-[#484848] pr-1">
                              Already have an account?{" "}
                            </span>
                            <span
                              onClick={() => setActiveRegButton(true)}
                              className="text-[#3270fc] cursor-pointer"
                            >
                              Log in
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </header>
    </>
  );
};

export default Header;
