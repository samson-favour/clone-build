import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, userLogin } from "../../features/auth/authActions";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useSession, signIn, signOut } from "next-auth/react";


const Form = () => {
   const { loading, userInfo, error, success } = useSelector(
     (state) => state.auth
   );
  const dispatch = useDispatch();

  const router = useRouter()
  
   const {
     register,
     handleSubmit,
     formState: { errors },
   } = useForm();

  
  const loginForm = (data) => {
    dispatch(userLogin(data));
    console.log(data);

    if (success) {
      router.push("/my-dashboard");
    }
  };

  return (
    <div>
      <div className="heading text-center">
        <h3>Login to your account</h3>
        <p className="text-center">
          Dont have an account?{" "}
          <Link href="/register" className="text-thm">
            Sign Up!
          </Link>
        </p>
      </div>
      {/* End .heading */}
      <form onSubmit={handleSubmit(loginForm)}>
        <div className="input-group mb-2 mr-sm-2">
          <input
            type="email"
            className="form-control"
            required
            placeholder="User Name Or Email"
            {...register("email")}
          />
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="flaticon-user"></i>
            </div>
          </div>
        </div>
        {/* End .input-group */}

        <div className="input-group form-group">
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
        {/* End .input-group */}

        <div className="form-group form-check custom-checkbox mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="remeberMe"
          />
          <label
            className="form-check-label form-check-label"
            htmlFor="remeberMe"
          >
            Remember me
          </label>

          <Link className="btn-fpswd float-end" href="#">
            Forgot password?
          </Link>
        </div>
        {/* End .form-group */}

        <button type="submit" className="btn btn-log w-100 btn-thm">
          Log In
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
            className="btn btn2 btn-block color-white bgc-gogle mb0 w-100"
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
