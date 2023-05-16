import React, { useState, useEffect } from "react";
// 3rd party
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Component
import FormInputs from "../components/formInputs";
// Images
import Eye from "../assets/media/Eye.png";
import Eyeball from "../assets/media/EyeBall.png";
import BlindEyeball from "../assets/media/BlindEyeBall.png";
import Google from "../assets/media/Icons/google.svg";
// Scripts
import eyeBall from "../scripts/login/eyeball";
// StyleSheet
import "../assets/css/animista.css";

const Login = () => {
  // States
  const [passwordTypeHandler, setPasswordTypeHandler] = useState(false);
  const [loginType, setloginType] = useState("button");
  const [passwordValueHandler, setPasswordValueHandler] = useState("");
  const [usernameValueHandler, setUsernameValueHandler] = useState("");
  // lifeCycle
  useEffect(() => {
    toast.info("Click The Eye Ball To Show Password", {
      autoClose: false,
      closeOnClick: false,
      draggable: false,
    });
  }, []);

  // Form Events
  // Button
  const onClickLogin = (e) => {
    let input = document.getElementsByClassName("formInputs");
    !input.uname.value
      ? input.uname.classList.add("border-red-300")
      : input.uname.classList.remove("border-red-300");
    !input.pword.value
      ? input.pword.classList.add("border-red-300")
      : input.pword.classList.remove("border-red-300");
  };
  // Inputs
  const LoginType = () =>
    passwordValueHandler !== "" &&
    usernameValueHandler !== "" &&
    setloginType("submit");

  const userNameValueCheck = (e) => {
    setUsernameValueHandler(e.target.value);
    LoginType();
  };
  const passwordValueCheck = (e) => {
    setPasswordValueHandler(e.target.value);
    LoginType();
  };

  // EyeBall Events
  const onClickEyeBall = () => setPasswordTypeHandler(!passwordTypeHandler);

  const eyeballMovement = (e) =>
    eyeBall({
      event: e,
      className: "ball",
      xAxis: 100,
      yAxis: 250,
      trans: false,
    });

  // render
  return (
    <>
      <ToastContainer closeButton={false} limit={1} />
      <main
        className="container h-screen w-screen flex  items-center justify-center bg-gray-50"
        onMouseMove={eyeballMovement}
      >
        <section className="flex flex-col bg-white shadow-2xl px-10 py-5 rounded fade-in-bck">
          {/* EyeBall */}
          <div className="logo h-40">
            <div
              className="relative w-36 h-36 bg-white m-4  inset-x-16 bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${Eye})` }}
            >
              <div className="relative rounded-full  h-28 w-28 inset-x-2 inset-y-2 overflow-hidden ">
                <div
                  className="ball w-11 h-11 cursor-pointer rounded-full translate-y-10 translate-x-9 absolute bg-contain bg-center"
                  style={{
                    backgroundImage: `url(${
                      passwordTypeHandler ? BlindEyeball : Eyeball
                    })`,
                  }}
                  onClick={onClickEyeBall}
                  title={
                    passwordTypeHandler ? "Hide Password" : "Show Password"
                  }
                ></div>
              </div>
            </div>
          </div>
          {/* 3rd Party Logins */}
          <div className="flex mt-5">
            <button
              className="text-center transition-all text-sm rounded bg-gray-200 p-4 font-sans
                hover:bg-gray-300"
            >
              <img width={20} src={Google} alt="Google Logo" />
            </button>
          </div>
          {/* Or */}
          <div className="my-5 flex justify-center items-center">
            <hr className="basis-2/4" />
            <p className="mx-2 font-bold text-slate-700">or</p>
            <hr className="basis-2/4" />
          </div>
          {/* Forms */}
          <form>
            <div className="flex flex-col space-y-1">
              <FormInputs
                label="Username"
                inputName="uname"
                placeholder="..."
                onChange={userNameValueCheck}
                value={usernameValueHandler}
              />
            </div>
            <div className="flex flex-col space-y-1 my-2">
              <FormInputs
                label="Password"
                inputName="pword"
                placeholder="..."
                type={passwordTypeHandler ? "text" : "password"}
                onChange={passwordValueCheck}
                value={passwordValueHandler}
              />
            </div>
            <div className="flex mt-5 justify-end">
              <button
                type={loginType}
                onClick={onClickLogin}
                className="basis-full text-center transition-all text-lg p-2 rounded-full text-white bg-slate-500 
                hover:bg-blue-300 hover:shadow-lg"
              >
                Sign-In
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
};

export default Login;
