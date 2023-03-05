import Link from "next/link";
import React, { useState, Fragment, useEffect } from "react";
import { Dialog, Transition, Listbox } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, userLogin } from "../../features/auth/authActions";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useSession, signIn, signOut } from "next-auth/react";

const users = [
  { name: "Single User" },
  { name: "Agent" },
  { name: "Multi User" },
];


const Form = () => {
  const [selected, setSelected] = useState(users[0]);

    const { loading, userInfo, error, success } = useSelector(
      (state) => state.auth
    );
    const dispatch = useDispatch();

    const router = useRouter();

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

  return (
    <div>
      <div className="heading text-center">
        <h3>Register to your account</h3>
        <p className="text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-thm">
            Login
          </Link>
        </p>
      </div>
      {/* End .heading */}

      <form onSubmit={handleSubmit(registerForm)}>
        <div className="form-group input-group ">
          <input
            type="text"
            className="form-control"
            required
            placeholder="User Name"
          />
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="flaticon-user"></i>
            </div>
          </div>
        </div>
        {/* End .form-group */}

        <div className="form-group input-group  ">
          <input
            type="email"
            className="form-control"
            required
            placeholder="Email"
            {...register("email")}
          />
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fa fa-envelope-o"></i>
            </div>
          </div>
        </div>
        {/* End .form-group */}

        <div className="form-group input-group  ">
          <input
            type="password"
            className="form-control"
            required
            placeholder="Password"
            {...register("password")}
          />
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="flaticon-password"></i>
            </div>
          </div>
        </div>
        {/* End .form-group */}

        <div className="form-group input-group  ">
          <input
            type="password"
            className="form-control"
            required
            placeholder="Re-enter password"
            {...register("confirmPassword")}
          />
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="flaticon-password"></i>
            </div>
          </div>
        </div>

        <div className=" w-full">
          <Listbox
            value={selected}
            onChange={setSelected}
            // {...register('role')}
          >
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full text-left pl-3  border rounded-[8px] focus:ring-0 border-[#ebebeb]  text-[#484848] text-[14px] h-[52px]">
                <span className="block truncate" {...register("role")}>
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
                  className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                >
                  {users.map((user, userId) => (
                    <Listbox.Option
                      key={userId}
                      className={({ active }) =>
                        `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                          active ? "text-[#3270fc]" : "text-gray-900"
                        }`
                      }
                      value={user}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
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
        {/* End .form-group */}

        <div className="form-group form-check custom-checkbox mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            required
            id="terms"
          />
          <label className="form-check-label form-check-label" htmlFor="terms">
            I have read and accept the Terms and Privacy Policy?
          </label>
        </div>
        {/* End .form-group */}

        <button type="submit" className="btn btn-log w-100 btn-thm">
          Register
        </button>
        {/* login button */}
      </form>

      <div className="divide">
        <span className="lf_divider">Or</span>
        <hr />
      </div>
      {/* devider */}

      <div className="row mt25">
        <div className="col-lg-6">
          <button
            onClick={() =>
              signIn("facebook", {
                callbackUrl: "/my-dashboard",
              })
            }
            type="submit"
            className="btn btn-block color-white bgc-fb mb0 w-100"
          >
            <i className="fa fa-facebook float-start mt5"></i> Facebook
          </button>
        </div>
        {/* End .col */}

        <div className="col-lg-6">
          <button
            onClick={() =>
              signIn("google", {
                callbackUrl: "/my-dashboard",
              })
            }
            type="submit"
            className="btn btn-block color-white bgc-gogle mb0 w-100"
          >
            <i className="fa fa-google float-start mt5"></i> Google
          </button>
        </div>
        {/* End .col */}
      </div>
      {/* more signin options */}
    </div>
  );
};

export default Form;
