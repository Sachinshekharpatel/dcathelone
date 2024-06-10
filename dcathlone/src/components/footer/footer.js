import React from "react";
import creditcardimage from "./creditcard.svg";
import debitcard from "./debitcard.svg";
import netbanking from "./netbanking.svg";
import upiImage from "./upi.svg";
const FooterPage = () => {
  return (
    <div>
      <div className="md:flex mt-1">
        <div className="md:w-3/4 h-auto m-1">
          <div
            style={{ backgroundColor: "#F5F4F5", borderRadius: "4px" }}
            className="flex justify-between p-4 "
          >
            <div className="mr-2 flex items-center">
              <p
                style={{ color: "#344450" }}
                className=" m-0 font-bold uppercase text-18 text-gray-700"
              >
                Our Promise
              </p>
            </div>
            <div className="mr-2 flex items-center ">
              <img
                src="https://contents.mediadecathlon.com/s1066179/k$a1bad6c9d4b965d79eb8c64c8092fc0b/defaut.png?format=auto&amp;f=969x0?format=auto"
                alt="No Cost EMI Available"
                className="w-[40px] h-[40px]"
                loading="lazy"
              />
              <span
                style={{ color: "#344450" }}
                className="text-14 text-sm text-grey-700"
              >
                No Cost EMI Available
              </span>
            </div>
            <div className="mr-2 flex items-center ">
              <span className="">
                <img
                  src="https://contents.mediadecathlon.com/s1066180/k$ec44ffaa3178b9073f1e88c6599adb99/defaut.png?format=auto&amp;f=969x0?format=auto"
                  alt="Easy Returns*"
                  className="w-[30px] h-[30px] mr-2"
                  loading="lazy"
                />
              </span>
              <span
                style={{ color: "#344450" }}
                className="text-14 text-sm  text-grey-700"
              >
                Easy Returns*
              </span>
            </div>
            <div className=" mr-3 flex items-center">
              <span className="mr-1">
                <img
                  src="https://contents.mediadecathlon.com/s1066181/k$0867f40e52bfbd493ad7b8bceebd0120/defaut.png?format=auto&amp;f=969x0?format=auto"
                  alt="1 million+ happy Customers"
                  className="w-[30px] h-[30px]"
                  loading="lazy"
                />
              </span>
              <span
                style={{ color: "#344450" }}
                className="text-14 text-sm text-grey-700"
              >
                1 million+ happy Customers
              </span>
            </div>
          </div>
          <div className="flex py-6 px-2 justify-between mt-5 pb-5 border-b-[1px] border-[#F5F4F5]">
            <div className="">
              <p className="mb-1  text-[#34450] font-bold ">Support</p>
              <p className=" mb-1 text-sm text-[#344450]">
                Contact our Stores{" "}
              </p>
              <p className="mb-1 text-sm text-[#344450]">Delivery</p>
            </div>
            <div>
              <p className="mb-1  text-[#34450] font-bold ">OUR SERVICES</p>
              <p className="mb-1  text-sm text-[#344450]">
                Contact our Stores{" "}
              </p>
              <p className="mb-1 text-sm text-[#344450]">Delivery</p>
              <p className="mb-1  text-[#344450] text-sm">
                Contact our Stores{" "}
              </p>
              <p className=" mb-1  text-[#344450] text-sm">Delivery</p>
              <p className="mb-1 text-[#344450] text-sm">Delivery</p>
            </div>
            <div>
              <p className="mb-1  text-[#34450] font-bold ">ABOUT US</p>
              <p className="mb-1 text-[#344450] text-sm">Contact our Stores </p>
              <p className="mb-1 text-[#344450] text-sm">Delivery</p>
              <p className="mb-1 text-[#344450] text-sm">Contact our Stores </p>
              <p className="mb-1 text-[#344450] text-sm">Delivery</p>
            </div>
            <div>
              <p className="mb-1  text-[#34450] font-bold ">LEGAL</p>
              <p className="mb-1 text-[#344450] text-sm">Contact our Stores </p>
              <p className="mb-1 text-[#344450] text-sm">Delivery</p>
              <p className=" mb-1 text-[#344450] text-sm">
                Contact our Stores{" "}
              </p>
              <p className=" mb-1 text-[#344450] text-sm">Delivery</p>
            </div>
          </div>
          <div className="md:flex mt-3 p-2 border-b-[1px] border-[#F5F4F5] ">
            <div className="md:w-1/5 flex border-b-[1px] border-[#F5F4F5] pb-3">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="38"
                stroke-width="2"
              >
                <path
                  d="M16.5 13C14.4 13.8 12.8 15.4 12 17.5C11.2 15.4 9.6 13.8 7.5 13C9.6 12.2 11.2 10.6 12 8.5C12.8 10.6 14.4 12.2 16.5 13Z"
                  stroke="currentColor"
                ></path>
                <path
                  d="M9 8.00001C8.1 8.30001 7.3 9.10001 7 10C6.7 9.10001 5.9 8.30001 5 8.00001C5.9 7.70001 6.7 6.90001 7 6.00001C7.3 6.90001 8.1 7.70001 9 8.00001Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M11.2 4.80001C10.7 5.00001 10.2 5.40001 10 6.00001C9.8 5.40001 9.3 5.00001 8.8 4.80001C9.4 4.60001 9.8 4.10001 10 3.60001C10.2 4.10001 10.7 4.50001 11.2 4.80001Z"
                  fill="currentColor"
                ></path>
              </svg>
              <div>
                <span className=" text-[14px] text-[#34450]-700 uppercase font-bold">
                  100% Secure transaction
                </span>
                <p className="mt-[2px] text-[12px] text-gray-400">
                  Secure SSL encryption
                </p>
              </div>
            </div>
            <div className="md:mr-3 px-1 mb-2 text-center justify-between flex pl-2">
            <img
                className="mr-1 mt-1 md:w-1/4"
                src={debitcard}
                alt="Debit"
                loading="lazy"
              />
              <img
                className="mr-1 mt-1 md:w-1/4"
                src={creditcardimage}
                alt="Credit"
                loading="lazy"
              />
              <img
                className="mr-1 mt-1 md:w-1/4"
                src={upiImage}
                alt="UPI"
                loading="lazy"
              />
              <img
                className=" mt-1 mr-1 md:w-1/4"
                src={netbanking}
                alt="Net Banking"
                loading="lazy"
              />
            </div>
            <div className="border-l-[2px] border-[#F5F4F5] px-2 flex md:justify-center items-center md:ml-1 mr-1 ">
              <p className="align-middle  text-[#344450] text-sm">
                Site Map
              </p>
            </div>
            <div className="flex md:justify-center items-center p-1 border-[#F5F4F5] border-l-[2px]">
              <p className="ml-2 text-[#344450] text-[12px] mr-1">
                DECATHLON is present in
              </p>
              <div className=" border-[1px] p-1 border-[#4E5D6B] " style={{ borderRadius: "4px" }}>
                <label>
                  <select className="text-[12px]">
                    <option value="">3 Countries</option>
                    <option value="India">India</option>
                    <option value="Belgium">Belgium</option>
                    <option value="US">US</option>
                  </select>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/4 h-auto m-1 ">
          <div
            style={{
              backgroundColor: "#F5F4F5",
              borderRadius: "4px",
              padding: "18px",
            }}
          >
            <p className="text-14 font-bold mb-2">
              EXPERIENCE DECATHLON APP ON MOBILE
            </p>
            <div className="flex mt-4">
              <a className="no-underline">
                <img
                  src="https://cdncontent.decathlon.in/_next/static/chunks/src/assets/img/google-play-badge.f6fa1f85049d9cdc.webp"
                  alt="Gplay"
                  loading="lazy"
                />
              </a>
              <a
                href="https://apps.apple.com/in/app/decathlon-online-shopping-app/id1387810949"
                target="_blank"
                className="ml-2.5"
              >
                <img
                  src="https://cdncontent.decathlon.in/_next/static/chunks/src/assets/img/appstore.b3fa2df12dd0536e.svg"
                  alt="AppStore"
                  loading="lazy"
                />
              </a>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#F5F4F5",
              borderRadius: "4px",
              padding: "18px",
            }}
            className="mt-2"
          >
            <p className="text-14 font-bold">FOLLOW US</p>
            <div className="flex justify-between mt-3">
              <a className="w-8 h-8 mr-3 rounded bg-gray-700 leading-loose text-center">
                <img
                  src="https://cdncontent.decathlon.in/_next/static/chunks/src/assets/img/facebook.eb87d42a519970a4.svg"
                  alt="facebook"
                  className="inline-block align-middle"
                />
              </a>
              <a className="w-8 h-8 mr-3 rounded bg-gray-700 leading-loose text-center">
                <img
                  src="https://cdncontent.decathlon.in/_next/static/chunks/src/assets/img/twitter.b197a84f1fb0535d.svg"
                  alt="X"
                  className="inline-block align-middle"
                />
              </a>
              <a className="w-8 h-8 mr-3 rounded bg-gray-700 leading-loose text-center">
                <img
                  src="https://cdncontent.decathlon.in/_next/static/chunks/src/assets/img/youtube.c67fd6223e18d3f1.svg"
                  alt="Youtube"
                  className="inline-block align-middle"
                />
              </a>
              <a className="w-8 h-8 mr-3 rounded bg-gray-700 leading-loose text-center">
                <img
                  src="https://cdncontent.decathlon.in/_next/static/chunks/src/assets/img/instagram.af05cd998024d3c8.svg"
                  alt="Instagram"
                  className="inline-block align-middle"
                />
              </a>
            </div>
            <div className="mt-3">
              <p className="text-14 font-bold ">SPORTS ADVICE FOR YOU </p>
              <button
                style={{ color: "#344450", borderRadius: "4px" }}
                className="mt-2 text-center text-sm bg-zinc-50 border p-3 "
              >
                blog.random.in
              </button>
            </div>
            <div className="mt-3">
              <p className="text-14 font-bold ">
                EXPLORE SPORTS EVENTS NEAR YOU{" "}
              </p>
              <button
                style={{ color: "#344450", borderRadius: "4px" }}
                className="text-center text-sm bg-zinc-50 border p-3 mt-2"
              >
                play.random.in
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <p className="h-18 my-4 text-sm  text-center" style={{ color: "#344450" }}>
          © 2024 Decathlon Sports India Pvt Ltd. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default FooterPage;
