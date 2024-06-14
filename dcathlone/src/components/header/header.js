import React, { useState, useEffect, useRef } from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const [transForm, setTransForm] = useState(false);
  const navigate = useNavigate();
  const itemInCart = useSelector(
    (state) => state.itemInDetailPage.cartTotalItemsArray
  );
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // console.log(itemInCart);
  }, [itemInCart]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTransForm(!transForm);
    }, 2000);

    return () => clearTimeout(timer);
  }, [transForm]);

  return (
    <header className="top-0 z-50 md:z-30 lg:sticky bg-white">
      <div className="px-4 py-3 2xl:px-16 xl:py-4">
        <div className=" flex items-center justify-between">
          <div className=" md:flex md:w-3/5 items-center">
            <div className="flex items-center">
              <div className="relative inline-block text-left">
                <div className="flex items-center">
                  <button
                    onClick={toggleDropdown}
                    type="button"
                    className="flex items-center"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      strokeWidth="2"
                    >
                      <path
                        d="M2.75 12H21.25M2.75 5.75H21.25M2.75 18.25H21.25"
                        stroke="currentColor"
                        strokeLinecap="square"
                      ></path>
                    </svg>
                  </button>
                  <p className="hidden leading-2 ml-4 md:mr-3 font-semibold text-left uppercase lg:block text-[12px]">
                    All
                    <br /> Sports
                  </p>
                </div>
                {isDropdownVisible && (
                  <div
                    ref={dropdownRef}
                    className="absolute mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10"
                  >
                    <div className="py-1">
                      <a
                        href="/menpage"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Men Page
                      </a>
                      <a
                        href="/womenpage"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Women Page
                      </a>
                    </div>
                  </div>
                )}
              </div>

             
            </div>
            <div className="cursor-pointer mt-1 relative flex-1 w-[300px] md:w-[440px] md:ml-[50px]">
              <input
                type="text"
                placeholder="Search for 60+ products"
                className="w-full py-2 pl-10 pr-4 rounded-full outline-none bg-gray-100 text-sm"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                strokeWidth="1.5"
              >
                <path
                  d="M21.4 21.4L17.5 17.5M17.8 10.2C17.8 14.3 14.4 17.7 10.3 17.7C6.20005 17.7 2.80005 14.3 2.80005 10.2C2.80005 6.10001 6.20005 2.70001 10.3 2.70001C14.4 2.70001 17.8 6.10001 17.8 10.2Z"
                  stroke="currentColor"
                ></path>{" "}
              </svg>
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <button type="button" className="w-7 h-7 px-2 py-2" id="main">
                  <img
                    src="https://cdncontent.decathlon.in/_next/static/chunks/src/assets/img/search.1931d5703d315569.svg"
                    alt="mic"
                    className="w-4 h-4"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="md:flex items-center">
            <div className="flex items-center ">
              <a
                type="button"
                className="md:hidden px-2.5 py-1.5 mr-2 border-1 border-black uppercase border text-[9px]  rounded-full text-10"
              >
                Signin
              </a>
              <div className="md:mr-3 mb-2 md:mb-0">
                <p className=" flex text-center ml-1 text-grey-900 font-semibold text-[12px] mr-1">
                  <span> Delivery </span>
                  <span className="ml-1"> Location</span>
                </p>

                <div className="flex justify-center">
                  <span className="text-[14px] font-bold text-[#3643BA]">
                    486001
                  </span>
                  <button
                    type="button"
                    className="ml-1 text-[12px] text-[#3643BA] underline uppercase border-none  outline-none"
                  >
                    Change
                  </button>
                </div>
              </div>
            </div>
            <div className="flex md:items-center  ">
              <a className="hidden md:block mx-1" href="/">
                <div className="relative flex flex-col group">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    stroke-width="1.5"
                    className="mx-auto"
                  >
                    <path
                      d="M5 22C5 16.1 8.1 12.3 12 12.2C15.9 12.1 19 16 19 21.9M12 2.79999C10.1 2.79999 8.5 4.39999 8.5 6.29999C8.5 8.19999 10.1 9.79999 12 9.79999C13.9 9.79999 15.5 8.19999 15.5 6.29999C15.5 4.39999 13.9 2.79999 12 2.79999Z"
                      stroke="currentColor"
                    ></path>
                  </svg>
                  <p className="text-center font-semibold text-[10px]">
                    SignIn
                  </p>
                </div>
              </a>
              <a href="/store" className="mx-5">
                <div className="relative flex flex-col group">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    stroke-width="1.5"
                    className="mx-auto"
                  >
                    <path
                      d="M7.50005 12.8V5.59998H21.2001H21.3V12.8H7.50005ZM7.50005 12.8V17.6M7.50005 8.19998H2.80005V17.6H16V12.6M21.2001 12.8V18.4"
                      stroke="currentColor"
                    ></path>
                  </svg>
                  <p className="hidden md:block text-[10px] text-center font-semibold ">
                    Store
                  </p>
                </div>
              </a>
              <a className="" href="/wishlist">
                <div className="">
                  <div className="relative ">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      stroke-width="1.5"
                      className="w-6 ml-1"
                    >
                      <path
                        d="M20.2 8C19.9 6.1 18.5 4.9 17.3 4.5C15.1 3.8 13.4 5.3 12.7 6.1L12 6.8L11.4 6.1C10.6 5.3 9.00002 3.9 6.70002 4.5C5.50002 4.9 4.10002 6.1 3.80002 8C3.50002 9.7 3.90002 13.9 12 19.6C20.1 13.9 20.5 9.7 20.2 8Z"
                        stroke="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <p className="hidden md:block text-center font-semibold text-[10px]">
                    Wishlist
                  </p>
                </div>
              </a>
              <div className="mx-5" onClick={() => navigate("/cartpage")}>
                <div className="relative">
                  {itemInCart.length>0 && <div className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 pt- -mt-2 -mr-3 font-bold bg-[#3643BA] text-white rounded-full xl:w-5 xl:h-5 text-10 xl:text-12">
                    {itemInCart.length ? <p>{itemInCart.length}</p> : null}
                  </div>}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    stroke-width="1.5"
                    className="mx-autp"
                  >
                    <path
                      d="M1.75 3.75H3.89728C4.38858 3.75 4.8071 4.10688 4.88472 4.59201L5.23 6.75M5.23 6.75L6.61528 15.408C6.6929 15.8931 7.11142 16.25 7.60272 16.25H17.8035C18.2956 16.25 18.7145 15.892 18.7913 15.406L20.1537 6.75H5.23Z"
                      stroke="currentColor"
                      stroke-linecap="square"
                    ></path>
                    <path
                      d="M9.25 19.75C9.25 20.3023 8.80228 20.75 8.25 20.75C7.69772 20.75 7.25 20.3023 7.25 19.75C7.25 19.1977 7.69772 18.75 8.25 18.75C8.80228 18.75 9.25 19.1977 9.25 19.75Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M18.25 19.75C18.25 20.3023 17.8023 20.75 17.25 20.75C16.6977 20.75 16.25 20.3023 16.25 19.75C16.25 19.1977 16.6977 18.75 17.25 18.75C17.8023 18.75 18.25 19.1977 18.25 19.75Z"
                      fill="currentColor"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.5 19.75C9.5 20.4404 8.94036 21 8.25 21C7.55964 21 7 20.4404 7 19.75C7 19.0596 7.55964 18.5 8.25 18.5C8.94036 18.5 9.5 19.0596 9.5 19.75ZM18.5 19.75C18.5 20.4404 17.9404 21 17.25 21C16.5596 21 16 20.4404 16 19.75C16 19.0596 16.5596 18.5 17.25 18.5C17.9404 18.5 18.5 19.0596 18.5 19.75ZM8.25 20.75C8.80228 20.75 9.25 20.3023 9.25 19.75C9.25 19.1977 8.80228 18.75 8.25 18.75C7.69772 18.75 7.25 19.1977 7.25 19.75C7.25 20.3023 7.69772 20.75 8.25 20.75ZM17.25 20.75C17.8023 20.75 18.25 20.3023 18.25 19.75C18.25 19.1977 17.8023 18.75 17.25 18.75C16.6977 18.75 16.25 19.1977 16.25 19.75C16.25 20.3023 16.6977 20.75 17.25 20.75Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <p className="hidden md:block text-center font-semibold text-[10px]">
                  Cart
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* below this the free shipping chnaging avery second*/}
      <div>
        <div
          className="relative w-full py-2 flex items-center justify-center px-10 text-center"
          id="ribbon-container"
          style={{ backgroundColor: "rgb(54, 67, 186)" }}
        >
          {transForm ? (
            <span
              id="text-message"
              className="text-14 md:text-16 font-normal slide-right"
              style={{ color: "rgb(255, 255, 255)" }}
            >
              <b>Free Shipping</b> on order worth <b>2999/-</b> and above
            </span>
          ) : (
            <>
              <span
                id="text-message"
                className="text-14 md:text-16 font-normal slide-right"
                style={{ color: "rgb(255, 255, 255)" }}
              >
                Enjoy <b>₹200/- Off</b> on your first purchase.T&amp;C apply
              </span>
            </>
          )}
          <div id="close-icon" className="absolute right-4 hidden">
            <img
              className="md:w-4 md:h-4 dQmWAp FIuiPj cursor-pointer"
              src="https://cdncontent.decathlon.in/_next/static/chunks/src/assets/img/close-ribbon.e576dae11fb9e8d8.svg"
              alt="ribbon-banner-close-icon"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
