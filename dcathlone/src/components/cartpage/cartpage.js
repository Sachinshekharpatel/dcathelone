import React from "react";
import { useNavigate } from "react-router-dom";
import image1 from "./image5.avif";
const CartPage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full" style={{ backgroundColor: "#F5F4F5" }}>
      <button
        onClick={() => navigate("/")}
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        home
      </button>
      <div className="w-full flex bg-slate-100 sticky top-0 justify-between">
        <div className="p-4">
          <svg
            viewBox="0 0 188 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[20px] w-[300px]"
            alt="Decathlon 🛒"
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
        </div>
        <div class="flex items-center mr-2">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            stroke-width="1.5"
            alt="Secure Payment"
            className="w-7 h-10"
          >
            <path
              d="M21.2001 11.3C21.2001 11.5 21.2001 11.7 21.2001 12C21.2001 17.1 17.1 21.2 12 21.2C6.90005 21.2 2.80005 17.1 2.80005 12C2.80005 6.9 6.90005 2.8 12 2.8C13.9 2.8 15.6 3.3 17 4.3M7.80005 11.7L11.1 15C11.3 15.2 11.7 15.2 11.9 15L21.4 5.5"
              stroke="currentColor"
            ></path>
          </svg>
          <p className="ml-2 text-12 font-semibold leading-tight text-gray-600">
            100% Secure
            <br />
            Payment
          </p>
        </div>
      </div>
      <div className="block md:flex w-full mt-2">
        <div className="block md:w-3/5 h-auto bg-white p-4">
          <div className="flex justify-between ">
            <p className="font-semibold">Select Delivery Option</p>
            <p className="">
              Pincode: <span className="font-semibold">486001</span>{" "}
              <span className="text-blue-300 ml-2">Change</span>
            </p>
          </div>
          <p class="text-sm text-gray-600 mb-4">
            Choose home delivery or pickup from store
          </p>
          <div className="flex w-full mt-3 ">
            <div className="w-1/2 border-2  hover:border-[2px] hover:border-dotted hover:border-blue-900  p-4">
              <div className="flex ">
                <div>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="54"
                    height="54"
                    stroke-width="1.5"
                    class="text-blue-400"
                    alt=""
                  >
                    <path
                      d="M14 16.25H9.5M19.29 16.25H20.25C20.8 16.25 21.25 15.8 21.25 15.25V10.31C21.25 10.11 21.19 9.91 21.07 9.74L19.3 7.18C19.11 6.91 18.81 6.75 18.48 6.75H15.25V15M3.75 4.75H14.25C14.8 4.75 15.25 5.2 15.25 5.75V6.84M3.75 16.25H4.64M2 8.18H7.8M2 11.25H5.68M14.25 16.75C14.25 18.13 15.37 19.25 16.75 19.25C18.13 19.25 19.25 18.13 19.25 16.75C19.25 15.37 18.13 14.25 16.75 14.25C15.37 14.25 14.25 15.37 14.25 16.75ZM4.75 16.75C4.75 18.13 5.87 19.25 7.25 19.25C8.63 19.25 9.75 18.13 9.75 16.75C9.75 15.37 8.63 14.25 7.25 14.25C5.87 14.25 4.75 15.37 4.75 16.75Z"
                      stroke="currentColor"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <div className="ml-2">
                  <p className="font-semibold">Home Delivery</p>
                  <p class="text-sm text-gray-600">Get it by Monday </p>
                </div>
              </div>
              <p className="text-gray-400 font-thin mt-3">Delivery Address</p>
              <p className="text-gray-400">Rewa, Madhyapradesh, 486001</p>
              <button className="text-white border-r-emerald-100 mt-4 p-3 bg-blue-500">
                LOGIN TO ADD DELIVERY ADDRESS
              </button>
            </div>
            <div className="w-1/2 ml-2 border-2  hover:border-[2px] hover:border-dotted hover:border-blue-900  p-4">
              <div className="flex ">
                <div class="w-10 h-10 bg-grey-50 flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="54"
                    height="54"
                    className="text-blue-400"
                    alt=""
                  >
                    <path
                      d="M7.50005 12.8V5.59998H21.2001H21.3V12.8H7.50005ZM7.50005 12.8V17.6M7.50005 8.19998H2.80005V17.6H16V12.6M21.2001 12.8V18.4"
                      stroke="currentColor"
                    ></path>
                  </svg>
                </div>
                <div className="ml-2 ">
                  <p className="font-semibold">Pickup from Store</p>
                  <p class="text-sm text-gray-600">Pick after 3 pm on Monday</p>
                </div>
              </div>
              <p className="text-gray-400 font-thin mt-3">Store Address</p>
              <p className="text-gray-400">
                DSI BRIGADE ROAD:Eva Mall,No.60 Ashok Nagar, Victoria Layout
                Rewa Madhyapradesh 486001
              </p>
              <div className="text-center align-middle">
                <button className="text-black font-bold border border-grey-300 mt-4 p-3 bg-white">
                  Change Pickup Point
                </button>
              </div>
            </div>
          </div>
          <div className="flex p-3">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="30"
              stroke-width="1.5"
              className="img-fluid QcAllL mr-2 text-black"
              alt="delivery"
            >
              <path
                d="M14 16.25H9.5M19.29 16.25H20.25C20.8 16.25 21.25 15.8 21.25 15.25V10.31C21.25 10.11 21.19 9.91 21.07 9.74L19.3 7.18C19.11 6.91 18.81 6.75 18.48 6.75H15.25V15M3.75 4.75H14.25C14.8 4.75 15.25 5.2 15.25 5.75V6.84M3.75 16.25H4.64M2 8.18H7.8M2 11.25H5.68M14.25 16.75C14.25 18.13 15.37 19.25 16.75 19.25C18.13 19.25 19.25 18.13 19.25 16.75C19.25 15.37 18.13 14.25 16.75 14.25C15.37 14.25 14.25 15.37 14.25 16.75ZM4.75 16.75C4.75 18.13 5.87 19.25 7.25 19.25C8.63 19.25 9.75 18.13 9.75 16.75C9.75 15.37 8.63 14.25 7.25 14.25C5.87 14.25 4.75 15.37 4.75 16.75Z"
                stroke="currentColor"
                stroke-linejoin="round"
              ></path>
            </svg>
            <p>
              <span className="font-bold">Congrats!</span> You are eligible for
              free delivery*
            </p>
          </div>
          <p>
            <span className="font-bold"> Item For Pickup*</span>
          </p>
          <div className="border p-1 mt-1">
            <p>
              <span className="font-bold"> Items in cart*</span>
            </p>
            {/* below this all the product are added one by one in dom */}
            <div className="flex justify-evenly">
              <img className="w-1/5" src={image1}></img>
              <div className="ml-2">
                <p className="font-bold">ARTENGO</p>
                <p className="font-extralight">
                  Men's Tennis Short-Sleeved T-Shirt Dry RN - Navy/White
                </p>
                <div className="flex">
                  <button className="font-bold p-2 bg-slate-100" type="select">
                    {" "}
                    Size : S{" "}
                  </button>
                  <button
                    className="font-bold ml-2 p-2 bg-slate-100"
                    type="select"
                  >
                    {" "}
                    Qty : 1{" "}
                  </button>
                </div>
                <div class="flex mt-3">
                  <h1 class="text-16 font-bold mr-3">₹ 999</h1>
                  <span class=" relative text-16 mr-2 text-black  after:absolute after:h-[1px] after:w-full after:mt-[12px] after:left-0 after:bg-black">
                    MRP : ₹ 1,299
                  </span>
                </div>
                <p className="font-light">Pickup after 3 pm, 08th Jun 2024</p>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 13 14"
                    class=" w-4 fill-orange-400"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9 .25H4V1.5h5V.25Zm1.92 2.197-.909.908a5.625 5.625 0 1 0 .884.884l.908-.908-.884-.884Zm-.631 7.49A4.375 4.375 0 1 1 2.71 5.564a4.375 4.375 0 0 1 7.578 4.375ZM7.125 4.625v3.75h-1.25v-3.75h1.25Z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      fill="#FF600A"
                      d="M4 .25v-.1h-.1v.1H4Zm5 0h.1v-.1H9v.1ZM4 1.5h-.1v.1H4v-.1Zm5 0v.1h.1v-.1H9Zm1.011 1.855-.062.078.07.056.063-.063-.071-.071Zm.908-.908.07-.07-.07-.072-.07.071.07.07Zm-8.396 9.28-.071.07.07-.07Zm7.727.215.067.075-.067-.075Zm.645-7.703-.071-.071-.063.063.056.07.078-.062Zm.908-.908.07.07.071-.07-.07-.071-.071.07Zm-1.514 6.607.086.05-.086-.05Zm0-4.376.086-.05-.086.05ZM7.125 8.376v.1h.1v-.1h-.1Zm0-3.75h.1v-.1h-.1v.1Zm-1.25 3.75h-.1v.1h.1v-.1Zm0-3.75v-.1h-.1v.1h.1ZM4 .35h5v-.2H4v.2Zm.1 1.15V.25h-.2V1.5h.2ZM9 1.4H4v.2h5v-.2ZM8.9.25V1.5h.2V.25h-.2Zm1.182 3.176.908-.908-.142-.142-.908.908.142.142Zm-7.7.64a5.525 5.525 0 0 1 7.567-.633l.124-.156a5.725 5.725 0 0 0-7.84.656l.149.133Zm.211 7.59a5.525 5.525 0 0 1-.211-7.59l-.15-.133a5.725 5.725 0 0 0 .22 7.865l.141-.142Zm7.59.212a5.525 5.525 0 0 1-7.59-.212l-.141.142a5.725 5.725 0 0 0 7.865.219l-.134-.15Zm.634-7.567a5.525 5.525 0 0 1-.634 7.567l.134.149a5.725 5.725 0 0 0 .656-7.84l-.156.124Zm.915-1.041-.908.908.142.141.908-.908-.142-.141Zm-.884-.742.884.883.142-.141-.884-.884-.142.142ZM6.5 12.225a4.475 4.475 0 0 0 3.875-2.237l-.173-.1A4.275 4.275 0 0 1 6.5 12.024v.2ZM2.025 7.75A4.475 4.475 0 0 0 6.5 12.225v-.2A4.275 4.275 0 0 1 2.225 7.75h-.2ZM6.5 3.275A4.475 4.475 0 0 0 2.025 7.75h.2A4.275 4.275 0 0 1 6.5 3.475v-.2Zm3.875 2.238A4.475 4.475 0 0 0 6.5 3.275v.2c1.527 0 2.938.815 3.702 2.137l.173-.1Zm0 4.475c.8-1.385.8-3.09 0-4.475l-.173.1a4.275 4.275 0 0 1 0 4.274l.173.1Zm-3.15-1.613v-3.75h-.2v3.75h.2Zm-1.35.1h1.25v-.2h-1.25v.2Zm-.1-3.85v3.75h.2v-3.75h-.2Zm1.35-.1h-1.25v.2h1.25v-.2Z"
                    ></path>
                  </svg>
                  <p>In 396 cart(s) now</p>
                </div>
              </div>
              <button
                type="button"
                className=" w-7 h-7 bg-white rounded-full cursor-pointer flex items-center justify-center border border-solid mt-2"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  stroke-width="1.5"
                  class="w-4 h-4 text-black "
                >
                  <path
                    d="M17.2 4.8V3.8C17.2 3.2 16.8 2.8 16.2 2.8H7.8C7.2 2.8 6.8 3.2 6.8 3.8V4.8M9.8 9.2V18.4M14.2 9.2V18.4M19.5 6.5L17.7 20.4C17.6 20.9 17.2 21.3 16.7 21.3H7.3C6.8 21.3 6.4 20.9 6.3 20.4L4.5 6.5H19.5Z"
                    stroke="currentColor"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="flex justify-between border mt-2 p-2">
            <div class="flex items-center mb-3">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                stroke-width="1.5"
                class="mr-3 img-fluid w-8"
                alt="Security"
              >
                <path
                  d="M21.2001 11.3C21.2001 11.5 21.2001 11.7 21.2001 12C21.2001 17.1 17.1 21.2 12 21.2C6.90005 21.2 2.80005 17.1 2.80005 12C2.80005 6.9 6.90005 2.8 12 2.8C13.9 2.8 15.6 3.3 17 4.3M7.80005 11.7L11.1 15C11.3 15.2 11.7 15.2 11.9 15L21.4 5.5"
                  stroke="currentColor"
                ></path>
              </svg>
              <div>
                <b className="uppercase semibold text-14">
                  100% Secure transaction
                </b>
                <p className="mb-0 opacity-50 text-14">Secure SSL encryption</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center justify-center border h-[50px] w-[150px]">
                <img
                  className=" w-2 mr-1 "
                  src="https://cdncontent.decathlon.in/_next/static/chunks/src/assets/img/NewIcons/debit-card.8f0851e4cb51b90e.svg"
                  alt="Debit"
                ></img>
                CREDIT/DEBIT CARD
              </div>
              <div className="flex items-center justify-center border h-[50px] w-[150px]">
                <img
                  className="  w-4  mr-1 "
                  src="https://cdncontent.decathlon.in/_next/static/chunks/src/assets/img/NewIcons/net-banking.a383e6bc45490194.svg"
                  alt="Net Banking"
                ></img>
                NET BANKING
              </div>
              <div className="flex border border-rounded-full items-center justify-center h-[50px] w-[60px]">
                <img
                  className=" w-4 h-4 mr-1 "
                  src="https://cdncontent.decathlon.in/_next/static/chunks/src/assets/img/NewIcons/upi.6a12497deafb65c5.svg"
                  alt="UPI"
                ></img>
                UPI
              </div>
            </div>
          </div>
        </div>
        {/* 40%width 2 div */}
        <div className="block md:w-2/5 p-2  bg-white border">
          <p>
            <span className="font-bold"> Order Summary*</span>
          </p>
          <div>
            <div className="flex justify-between mt-2">
              <p className="font-extralight">Total Price (Inc Gst)</p>
              <p className="font-extralight">₹ 1,299</p>
            </div>
            <div className="flex justify-between mt-2">
              <p className="font-extralight">Discount</p>
              <p className="font-extralight">-₹ 300</p>
            </div>
            <div className="flex justify-between border-b-2 mt-2">
              <p className="font-extralight">Convenience fee</p>
              <p className="font-extralight">FREE</p>
            </div>
            <div className="flex justify-between mt-2 ">
              <p className="font-bold">Total </p>
              <p className="font-bold">₹ 999</p>
            </div>
            <div className="bg-blue-100 justify-center p-3  align-middle font-semibold flex ">
              You save ₹ 300 in this order
            </div>
            <div className="mt-3 p-3">
              <ul class="flex items-center p-0 m-0 md:items-stretch md:justify-between ">
                <li class="mr-2.5 md:mb-0 py-4 px-2 h-32 text-center bg-white w-1/3 list-none border-none shadow rounded-t-lg rounded-b-lg">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    stroke-width="1.5"
                    class="w-8 h-8 mx-auto mb-2"
                  >
                    <path
                      d="M21.2001 11.3C21.2001 11.5 21.2001 11.7 21.2001 12C21.2001 17.1 17.1 21.2 12 21.2C6.90005 21.2 2.80005 17.1 2.80005 12C2.80005 6.9 6.90005 2.8 12 2.8C13.9 2.8 15.6 3.3 17 4.3M7.80005 11.7L11.1 15C11.3 15.2 11.7 15.2 11.9 15L21.4 5.5"
                      stroke="currentColor"
                    ></path>
                  </svg>
                  <p class="leading-4 text-12">Easy returns</p>
                </li>
                <li class="mr-2.5 py-4 px-2 h-32 text-center bg-white  w-1/3 list-none border-none shadow rounded-t-lg rounded-b-lg">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    stroke-width="1.5"
                    class="w-8 h-8 mx-auto mb-2"
                  >
                    <path
                      d="M21.2001 11.3C21.2001 11.5 21.2001 11.7 21.2001 12C21.2001 17.1 17.1 21.2 12 21.2C6.90005 21.2 2.80005 17.1 2.80005 12C2.80005 6.9 6.90005 2.8 12 2.8C13.9 2.8 15.6 3.3 17 4.3M7.80005 11.7L11.1 15C11.3 15.2 11.7 15.2 11.9 15L21.4 5.5"
                      stroke="currentColor"
                    ></path>
                  </svg>
                  <p class="leading-4 text-12">
                    Home Delivery at Your Doorstep
                  </p>
                </li>
                <li class="w-1/3 h-32 px-2 py-4 m-0 text-center list-none bg-white border-none rounded-t-lg rounded-b-lg shadow">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    stroke-width="1.5"
                    class="w-8 h-8 mx-auto mb-2"
                  >
                    <path
                      d="M21.2001 11.3C21.2001 11.5 21.2001 11.7 21.2001 12C21.2001 17.1 17.1 21.2 12 21.2C6.90005 21.2 2.80005 17.1 2.80005 12C2.80005 6.9 6.90005 2.8 12 2.8C13.9 2.8 15.6 3.3 17 4.3M7.80005 11.7L11.1 15C11.3 15.2 11.7 15.2 11.9 15L21.4 5.5"
                      stroke="currentColor"
                    ></path>
                  </svg>
                  <p class="leading-4 text-12">Minimum 2 years warranty</p>
                </li>
              </ul>
            </div>
            <div class=" w-full flex bg-white rounded  text-left justify-between items-center p-2  border mt-2">
              <div class="flex items-center  lg:text-black cursor-pointer px-1   ">
                <span class="pr-3">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    stroke-width="1.5"
                    alt="voucher"
                  >
                    <path
                      d="M16 7.99999H7.60005M16 11H7.60005M16 14H7.60005M5.80005 2.79999C5.20005 2.79999 4.80005 3.19999 4.80005 3.79999V20.7L6.00005 20.1L7.20005 19.5L8.40005 20.1L9.60005 20.7L10.8 20.1L12 19.5L13.2 20.1L14.4 20.7L15.6 20.1L16.8 19.5L18 20.1L19.2 20.7V3.79999C19.2 3.19999 18.8 2.79999 18.2 2.79999H5.80005Z"
                      stroke="currentColor"
                    ></path>
                  </svg>
                </span>
                <span>Apply Voucher Code</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="p-4">
        <h2 class="text-xl font-semibold mb-2">Select Delivery Option</h2>

        <div class="flex flex-wrap space-x-4">
          <div class="bg-white p-4 border rounded w-full md:w-1/2 mb-4 md:mb-0">
            <h3 class="text-lg font-bold mb-2">Home Delivery</h3>
            <p class="text-sm text-gray-600 mb-2">Get it by 10th Jun 2024</p>
            <p class="text-sm text-gray-600 mb-4">
              Bengaluru, KARNATAKA, 560002
            </p>
            <button class="bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              LOGIN TO ADD DELIVERY ADDRESS
            </button>
          </div>
          <div class="bg-blue-100 p-4 border border-dotted border-blue-900 rounded w-full md:w-1/2">
            <h3 class="text-lg font-bold mb-2">Pickup from Store</h3>
            <p class="text-sm text-gray-600 mb-2">
              Pickup after 2 pm, 09th Jun 2024
            </p>
            <p class="text-sm text-gray-600 mb-4">
              DSI BRIGADE ROAD: Eva Mall, No.60 Ashok Nagar, Victoria Layout
              Bangalore Karnataka 560025
            </p>
            <button class="bg-white text-blue-600 font-semibold py-2 px-4 border border-blue-600 rounded">
              CHANGE PICKUP POINT
            </button>
          </div>
        </div>
        <div class="mt-4 p-4 bg-gray-100 rounded">
          <p class="text-lg font-bold text-blue-600">
            You save ₹ 760 in this order
          </p>
        </div>
      </div>
      <button className="text-white border-r-emerald-100 mt-4 p-3 bg-blue-500 sticky bottom-0 w-full hover:bg-blue-900">
        PROCEED TO CHECKOUT
      </button>
    </div>
  );
};

export default CartPage;
