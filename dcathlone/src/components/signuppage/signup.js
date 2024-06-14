import React, { useState } from "react";
import homeimgpng from "./homeimg.png";
import loginpageImg from "./dcathlonlogin.png";
import { Link, useNavigate } from "react-router-dom";
import indiaFlag from "./indiaflag.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const SignupPage = () => {
  const navigate = useNavigate();
  const [clickOnPhoneNumberOrEmail, setClickOnPhoneNumberOrEmail] =
    useState("email");
  const [otpSend, setOtpSend] = useState(false);

  const nextButtonClickOtpHandler = () => {
    setOtpSend(true);
  };
  return (
    <div>
      <div className="w-full px-6 py-4 sticky top-0 bg-slate-50 flex">
        <div
          onClick={() => navigate("/")}
          className="cursor-pointer md:px-6 w-1/2 flex"
        >
          <img
            className=" mt-[3px] w-[23px] h-[23px] mr-2 "
            src={homeimgpng}
          ></img>
          <p className="text-[14px] ml-1 mt-1">Back</p>
        </div>
        <div className="w-1/2">
          <div className="flex items-center ml-1">
            <Link to="/" className="ml-1 cursor-pointer">
              <svg
                viewBox="0 0 188 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[178px] sm:w-[120px] md:w-[190px]"
              >
                <path
                  d="M57.9108 23.8H71.1548V19.544H62.9508V15.974H70.2169V12.012H62.9508V8.442H71.1548V4.2H57.9108V23.8ZM87.5909 15.358C85.6728 18.41 83.8108 19.684 81.4168 19.684C78.3088 19.684 76.5028 17.5 76.5028 13.706C76.5028 10.108 78.1688 8.316 80.7309 8.316C82.4248 8.316 83.8248 9.072 84.2589 11.592H89.2989C88.7528 6.79 85.6869 3.808 80.7868 3.808C75.1028 3.808 71.3648 7.82599 71.3648 13.986C71.3648 20.188 75.1028 24.192 81.2488 24.192C85.2669 24.192 87.9968 22.512 89.8028 20.244H96.6768V23.8H101.689V4.2H94.5769L87.5909 15.358ZM96.6768 16.31H92.2388L96.6768 9.1V16.31ZM47.1588 4.2H39.7948V23.8H47.1588C52.9969 23.8 56.7628 19.95 56.7628 14C56.7628 8.05 52.9969 4.2 47.1588 4.2ZM47.0888 19.544H44.8348V8.442H47.0888C50.0008 8.442 51.6388 10.5 51.6388 14C51.6388 17.486 50.0008 19.544 47.0888 19.544ZM159.537 3.808C153.615 3.808 149.639 7.826 149.639 14C149.639 20.174 153.615 24.192 159.537 24.192C165.473 24.192 169.435 20.174 169.435 14C169.435 7.82601 165.473 3.808 159.537 3.808ZM159.537 19.684C156.625 19.684 154.791 17.738 154.791 14C154.791 10.262 156.625 8.316 159.537 8.316C162.463 8.316 164.283 10.262 164.283 14C164.283 17.738 162.463 19.684 159.537 19.684ZM102.949 8.442H107.891V23.8H112.931V8.442H117.873V4.2H102.949L102.949 8.442ZM182.301 4.2V14.994L175.805 4.2H170.583V23.8H175.455V12.558L182.217 23.8H187.173V4.2L182.301 4.2ZM142.499 4.2H137.459V23.8H150.101V19.558H142.499V4.2ZM130.963 11.676H124.173V4.2H119.133V23.8H124.173V15.904H130.963V23.8H136.003V4.2H130.963V11.676Z"
                  fill="#3643BA"
                ></path>
                <path
                  d="M25.5711 0C14.6267 0 1.01309 11.3236 1.01309 20.7085C1.01309 25.5554 4.73612 28 9.65333 28C13.264 28 17.6333 26.6794 21.848 24.1365V5.40893C20.7241 7.33366 15.4416 15.0888 11.1987 19.2193C9.03518 21.3266 7.32118 22.2398 5.84602 22.2398C4.18821 22.2398 3.40146 21.1159 3.40146 19.4441C3.40146 11.8575 16.1722 1.99498 24.6298 1.99498C28.114 1.99498 30.3618 3.54039 30.3618 6.54692C30.3618 9.30055 28.4933 12.7566 25.3041 15.9458V21.7481C30.8676 17.3507 34.1972 11.7451 34.1972 7.22127C34.1972 2.4586 30.4883 0 25.5711 0Z"
                  fill="#3643BA"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full md:flex">
        <div className="hidden md:block fixed top-[60px] left-0 h-full w-1/2">
          <img
            src={loginpageImg}
            alt="Login Page"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="md:w-1/2 ml-auto p-8">
          {!otpSend && (
            <>
              <div>
                <p className="text-3xl font-semibold">Login</p>
                <p className="mt-5 w-full text-sm font-semibold">
                  Go to your DECATHLON account here.
                </p>

                <div className="flex mt-5 w-full ">
                  <div
                    onClick={() => setClickOnPhoneNumberOrEmail("email")}
                    className={`w-1/2 text-center ${
                      clickOnPhoneNumberOrEmail == "email"
                        ? "border-blue-500 border-b-2"
                        : "border-gray-400 border-b  text-gray-400"
                    }`}
                  >
                    <p className="cursor-pointer mt-5 text-lg  ">E-mail</p>
                  </div>
                  <div
                    onClick={() => setClickOnPhoneNumberOrEmail("phoneNumber")}
                    className={`w-1/2 text-center ${
                      clickOnPhoneNumberOrEmail == "phoneNumber"
                        ? "border-blue-500 border-b-2 "
                        : "border-gray-400 border-b  text-gray-400"
                    }`}
                  >
                    {" "}
                    <p className="cursor-pointer mt-5 text-lg ">Phone number</p>
                  </div>
                </div>

                {clickOnPhoneNumberOrEmail == "email" && (
                  <>
                    <p className="mt-3 w-full text-lg">
                      Enter an email address
                    </p>
                    <input
                      className="w-full border text-[20px] mt-3 border-gray-400 px-5 py-2 hover:shadow-blue-border "
                      placeholder="Email"
                    />
                  </>
                )}
                {clickOnPhoneNumberOrEmail == "phoneNumber" && (
                  <div className="items-center mt-3">
                    <p className="mt-3 mb-2 w-full text-lg">
                      Enter a phone number
                    </p>
                    <PhoneInput
                      className="w-full border-gray-400 hover:shadow-blue-border"
                      country="in"
                      enableSearch
                      placeholder="Mobile phone number"
                    />
                  </div>
                )}

                <button onClick={() => nextButtonClickOtpHandler()} className="w-full bg-[#3643BA] text-[15px] text-white mt-5 py-[12px]">
                  NEXT
                </button>

                <p className="mt-5 w-full text-[17px] mb-2">Social Login</p>
                <div className="flex gap-4">
                  <div className="border align-center hover:bg-blue-100 px-2 pt-2">
                    <button type="button" aria-label="GOOGLE">
                      <img
                        alt="google"
                        src="https://login.decathlon.net/assets/google-CXYtgH5h.svg"
                      />
                    </button>
                  </div>
                  <div className="border align-center  hover:bg-blue-100 px-2 pt-2">
                    <button type="button" aria-label="FACEBOOK">
                      <img
                        alt="facebook"
                        src="https://login.decathlon.net/assets/facebook-WuuN3sW7.svg"
                      />
                    </button>
                  </div>
                  <div className="border align-center  hover:bg-blue-100 px-2 pt-2">
                    <button type="button" id="IN0903APP" aria-label="APPLE">
                      <img
                        alt="apple"
                        src="https://login.decathlon.net/assets/apple-BbTnnE8R.svg"
                      />
                    </button>
                  </div>
                </div>

                <p className="mt-5 w-full text-[17px] font-semibold">
                  Already have an account ?
                </p>
                <p
                  onClick={() => navigate("/login")}
                  className="cursor-pointer mt-5 w-full underline "
                >
                  Login
                </p>
              </div>
            </>
          )}
          {/* OTP Enter */}
          {otpSend && (
            <div className="p-10">
              <p className="cursor-pointer font-bold text-center mt-9 w-full text-[22px]">
                Enter the code you received:
              </p>
              <div className="flex mt-9">
                <p className="cursor-pointer font-bold text-center mt-9 w-full text-[16px]">
                  (+91) 8518093478
                </p>
                <p
                  onClick={() => setOtpSend(false)}
                  className=" underline cursor-pointer font-bold text-center mt-9 w-full text-[16px]"
                >
                  EDIT
                </p>
              </div>
              <div className="flex">
                <p className="cursor-pointer text-center w-full text-[16px]">
                  I didn't receive the code.
                </p>
                <p className="text-blue-500 text-center cursor-pointer w-full text-[16px]">
                  Send again
                </p>
              </div>
              <div className="flex mt-9 text-center justify-center mr-[25px] ">
                <input
                  className="border h-[40px] w-[40px]"
                  type="number"
                ></input>
                <input
                  className="border h-[40px] w-[40px]"
                  type="number"
                ></input>
                <input
                  className="border h-[40px] w-[40px]"
                  type="number"
                ></input>
                <input
                  className="border h-[40px] w-[40px]"
                  type="number"
                ></input>
                <input
                  className="border h-[40px] w-[40px]"
                  type="number"
                ></input>
                <input
                  className="border h-[40px] w-[40px]"
                  type="number"
                ></input>
              </div>
              <button
                disabled
                className="w-full bg-[#3643BA] text-[15px] text-white mt-5 py-[12px]"
              >
                NEXT
              </button>
            </div>
          )}
          {/* OTP Enter complete */}
          <p className="cursor-pointer mt-9 w-full text-[15px]">
            Having trouble logging in ? Privacy
          </p>

          <div className="w-full mt-4 flex">
            <img className="w-[40px] mr-2 h-6" src={indiaFlag}></img>
            <p className=" w-full text-[15px]">English</p>
          </div>
          <p className=" mt-9 w-full text-[13px] text-gray-400 ">
            This site is protected by reCaptcha.{" "}
            <Link
              to="https://policies.google.com/privacy"
              target="_blank"
              className="cursor-pointer underline"
            >
              Google Privacy Policy
            </Link>{" "}
            applies as well as{" "}
            <Link
              to="https://policies.google.com/terms"
              target="_blank cursor-pointer underline "
            >
              <span className="cursor-pointer underline">their terms of service</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
