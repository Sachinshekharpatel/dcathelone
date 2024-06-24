import React, { useEffect } from "react";
import Header from "../header/header";
import FooterPage from "../footer/footer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Addresses = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("DcathelonUserEmail")) {
      navigate("/");
    }
  });
  return (
    <div>
      <Header />
      <div className="flex mt-2 gap-1 mb-2 md:px-[30px] bg-[#F5F4F5] px-2 py-4">
        <div className="w-1/4 md:w-1/5 shadow-md h-full bg-white border border-white rounded-lg sticky top-[110px]">
          {" "}
          <div className="bg-[#3643BA] rounded-lg text-white p-4">
            <h1 className=" ml-1 text-[16px] font-bold">My Profile</h1>
            <p className=" text-white font-bold text-[12px] md:text-[14px] ">
              +9198-7654321
            </p>
          </div>
          <div className="py-1">
            <Link to={"/profile"} className="my-2 hover:bg-gray-100 flex px-2 ">
              <svg
                viewBox="0 0 1024 1024"
                fill="#3643BA"
                height="1em"
                width="1em"
                className="mt-[13px] ml-3"
              >
                <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656zM492 400h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 144h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 144h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zM340 368a40 40 0 1080 0 40 40 0 10-80 0zm0 144a40 40 0 1080 0 40 40 0 10-80 0zm0 144a40 40 0 1080 0 40 40 0 10-80 0z" />
              </svg>
              <div className="block px-4 py-2 text-gray-700 ">My Profile</div>
            </Link>
            <Link to={"/order"} className="flex my-2 px-2 hover:bg-gray-100">
              <svg
                fill="#3643BA"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                className="mt-[13px] ml-3"
              >
                <path d="M0 1.5A.5.5 0 01.5 1H2a.5.5 0 01.485.379L2.89 3H14.5a.5.5 0 01.491.592l-1.5 8A.5.5 0 0113 12H4a.5.5 0 01-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 01-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 100 4 2 2 0 000-4zm7 0a2 2 0 100 4 2 2 0 000-4zm-7 1a1 1 0 110 2 1 1 0 010-2zm7 0a1 1 0 110 2 1 1 0 010-2z" />
              </svg>
              <div className="block px-4 py-2 text-gray-700 ">
                Order & returns
              </div>
            </Link>

            <Link className="px-2 my-2 flex hover:bg-gray-100">
              <svg
                fill="#3643BA"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                className="mt-[13px] ml-3"
              >
                <path d="M0 3a2 2 0 012-2h13.5a.5.5 0 010 1H15v2a1 1 0 011 1v8.5a1.5 1.5 0 01-1.5 1.5h-12A2.5 2.5 0 010 12.5V3zm1 1.732V12.5A1.5 1.5 0 002.5 14h12a.5.5 0 00.5-.5V5H2a1.99 1.99 0 01-1-.268zM1 3a1 1 0 001 1h12V2H2a1 1 0 00-1 1z" />
              </svg>
              <div className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Wallet
              </div>
            </Link>

            <Link className="my-2 px-2 flex bg-[#E1E3F5]">
              <svg
                viewBox="0 0 1024 1024"
                fill="#3643BA"
                height="1em"
                width="1em"
                className="mt-[13px] ml-3"
              >
                <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z" />
              </svg>
              <div className="block px-4 py-2 text-gray-700 ">My Addresses</div>
            </Link>

            <Link
              onClick={() => {
                localStorage.removeItem("DcathelonUserEmail");
                localStorage.removeItem("DcathelonAccessToken");
                window.location.reload();
                navigate("/login");
              }}
              className="px-2 flex hover:bg-gray-100"
            >
              <svg
                viewBox="0 0 1024 1024"
                fill="#3643BA"
                height="1em"
                width="1em"
                className="mt-[13px] ml-3"
              >
                <path d="M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z" />
              </svg>

              <div className="block px-4 py-2  text-gray-700 hover:bg-gray-100">
                Logout
              </div>
            </Link>
          </div>
        </div>
        <div className="w-3/4 rounded-lg bg-[#F5F5F5] mx-3 py-2 px-4 md:w-4/5">
          <div className="flex">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              width="1em"
              className="mt-1 cursor-pointer"
            >
              <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z" />
            </svg>
            <p className="ml-2 mt-[1px] text-[14px] font-semibold  ">
              My Address
            </p>
          </div>
          <div className=" mb-2 shadow-sm px-6 py-6  bg-white h-auto  mt-[20px] rounded w-full ">
            <p className="text-[24px] font-bold text-gray-700 mb-[10px]">
              Your Address
            </p>
            <button className="text-[#3643BA] text-[17px] font-bold px-[60px] py-[40px] w-full md:w-[300px] rounded-sm border-[1px] border-dotted border-gray-900 flex flex-col items-center">
              <img
                className="w-10 mb-4 border-none"
                src="https://cdncontent.decathlon.in/_next/static/chunks/src/assets/img/add-address.db63225c1ff88254.svg"
                alt="Add Address"
              />
              <span className=" tracking-wider">Add New Address</span>
            </button>
            
          </div>
        </div>
      </div>
      <FooterPage />
    </div>
  );
};

export default Addresses;
