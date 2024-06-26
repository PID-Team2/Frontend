import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// components
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

import { signInOrSignUp, selectAuth } from "../authSlice";

export default function LoginForm() {
  const [login, setLogin] = useState({ email: "", password: "", username: "" });
  const [errorMessages, setErrorMessages] = useState({
    email: "",
    password: "",
    username: "",
  });
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const authData = useSelector(selectAuth);
  const [isFirstRender, setIsFirstRender] = useState(true);

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
    setErrorMessages({ email: "", password: "", username: "" });
  };
  const isRegister = location.pathname === "/auth/register";

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();

    if (isValid) dispatch(signInOrSignUp(login));
  };
  const resetForm = () => {
    setLogin({ email: "", password: "", username: "" });
  };
  useEffect(() => {
    console.log("efect");
    if (isFirstRender) {
      setIsFirstRender(false);
      console.log("First render");
      return;
    }
    // Observar cambios en authData.hasError
    if (!authData.hasError) {
      if (isRegister) {
        setLogin({
          ...login,
          email: "",
        });
        navigate("/auth/login");
      } else navigate("/");
    }
  }, [authData.user]);

  const validate = () => {
    const { email, username, password } = login;

    if (isRegister) {
      if (!email) {
        setErrorMessages({
          ...errorMessages,
          email: "This field is required",
        });
        return false;
      }
    }

    if (
      email &&
      !/[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/.test(
        email
      )
    ) {
      setErrorMessages({
        ...errorMessages,
        email: "Enter a valid email",
      });
      return false;
    }
    if (!username) {
      setErrorMessages({
        ...errorMessages,
        username: "This field is required",
      });
      return false;
    }
    if (username.length < 3) {
      setErrorMessages({
        ...errorMessages,
        username: "At least 3 characters",
      });
      return false;
    }
    if (!password) {
      setErrorMessages({
        ...errorMessages,
        password: "This field is required",
      });
      return false;
    }

    if (isRegister && password.length < 3) {
      setErrorMessages({
        ...errorMessages,
        password: "At least 3 characters",
      });
      return false;
    }
    return true;
  };

  return (
    <div className="flex content-center items-center justify-center h-full w-full">
      <div className="max-w-md px-4">
        <div className="backdrop-blur-md  relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg border-0">
          <div className="flex-auto px-4 lg:px-10 py-10">
            <div className="text-center mb-4 font-bold text-white text-xl">
              <h1>
                {isRegister ? "Create an account" : "Sign in to your account"}
              </h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-xs font-bold mb-2 text-white"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={login.username}
                  onChange={handleChange}
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-400 bg-neutro-100 rounded text-sm shadow focus:outline-none focus:ring focus-within:ring-amber-400 w-full ease-linear transition-all duration-150"
                  placeholder="Username"
                />
                <div className="text-red-400 text-xs mt-1">
                  {errorMessages.username}
                </div>
              </div>
              {isRegister && (
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-xs font-bold mb-2 text-white"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={login.email}
                    onChange={handleChange}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-400 bg-neutro-100 rounded text-sm shadow focus:outline-none focus:ring focus-within:ring-amber-400 w-full ease-linear transition-all duration-150"
                    placeholder="Email"
                  />
                  <div className="text-red-400 text-xs mt-1">
                    {errorMessages.email}
                  </div>
                </div>
              )}
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2 text-white focus:ring-amber-400"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  id="password"
                  value={login.password}
                  onChange={handleChange}
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-black rounded text-sm shadow focus:outline-none focus:ring focus-within:ring-amber-400 w-full ease-linear transition-all duration-150"
                  placeholder="Password"
                />
                <div className="text-red-400 text-xs mt-1">
                  {errorMessages.password}
                </div>
              </div>
              <div>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    id="customCheckLogin"
                    type="checkbox"
                    className="form-checkbox border-0 rounded text-amber-400 ml-1 w-5 h-5 ease-linear focus:outline-none focus:ring focus-within:ring-amber-400 transition-all duration-150"
                  />
                  <span className="ml-2 text-sm text-white font-semibold">
                    Remember me
                  </span>
                </label>
              </div>

              <div className="text-center mt-6">
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md bg-amber-400 px-3 py-2 text-sm font-semibold text-white hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <LockClosedIcon
                      className="h-5 w-5 text-amber-500 group-hover:text-amber-300"
                      aria-hidden="true"
                    />
                  </span>
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex flex-wrap mt-6 relative">
          <div className="w-1/2">
            <Link
              onClick={resetForm}
              to={isRegister ? "/auth/login" : "/auth/register"}
              className="text-gray-100"
            >
              <small>
                {isRegister ? "Sign in to your account" : "Create new account"}
              </small>
            </Link>
          </div>
          <div className="w-1/2 text-right">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="text-gray-100"
            >
              <small>{isRegister ? "" : "Forgot password?"}</small>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
