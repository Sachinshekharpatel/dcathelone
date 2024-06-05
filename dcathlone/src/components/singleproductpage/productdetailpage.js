import React from "react";
import Header from "../header/header";

import image2 from "./image2.avif";
import image3 from "./image3.avif";
import image4 from "./image4.avif";
import image5 from "./image5.avif";
import image6 from "./image6.avif";
import imagebelow1 from "./imagebelow2.avif";
import imagebelow2 from "./imagebelow3.avif";
import imagebelow3 from "./imagebelow4.avif";
const ProductDetailPage = () => {
  return (
    <div>
      <Header></Header>
      <div className="w-full flex ">
        <p className="font-light">AllSports <span className="font-bold  text-gray-600">/</span> { " "}</p>
        <p className="font-light"> Tennis <span className="font-bold  text-gray-600">/</span> { " "}</p>
        <p className="font-light"> Tennis Clothing <span className="font-bold  text-gray-600">/</span> { " "}</p>
        <p className="font-light"> Tennis-tshirt </p>
      </div>
      {/* below part */}
      <div className="md:flex ">
        <div className="md:w-3/5 bg-white-500 p-1">
          <div className="grid grid-cols-2 gap-1">
            <div className="col-span">
              <img src={image5} alt="Image 1" className="w-full h-70" />
            </div>
            <div className="col-span-1">
              <img src={image2} alt="Image 2" className="w-full h-70" />
            </div>
            <div className="col-span-1 grid grid-cols-1 gap-1">
              <img src={image3} alt="Image 3" className="w-full h-70" />
              <img src={image4} alt="Image 4" className="w-full h-70" />
            </div>
            <div className="col-span-1 grid grid-cols-1 gap-1">
              <img src={image4} alt="Image 5" className="w-full h-70" />
              <img src={image6} alt="Image 6" className="w-full h-70" />
            </div>
          </div>
        </div>

        <div className="md:w-2/5 bg-white-500 p-4">
          <div className="flex justify-between">
            <p className="text- text-gray-600">ARTENGO </p>
            <p className="text- text-blue-400">: 8759892</p>
          </div>
          <div>
            <p>
              {" "}
              Men's Tennis Short-Sleeved T-Shirt Dry RN - Navy/White
              <div className="w-[80px] h-[30px] bg-white-500  border border-gray-500 border-solid flex p-auto ">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  stroke-width="1.5"
                  className="w-4"
                  alt="Rating"
                >
                  <path
                    d="M12 15.9L16.8 19.3L15 13.7L19.7 10.3H13.8L12 4.70001L10.2 10.3H4.30005L9.00005 13.7L7.20005 19.3L12 15.9Z"
                    fill="currentColor"
                    stroke="currentColor"
                  ></path>
                </svg>
                <p className="text-10 text-gray-600"> 4.7 | 5.0</p>
              </div>
            </p>
          </div>
          <div className="flex mt-3">
            <h1 className="text-16 font-bold mr-3">₹ 999</h1>

            <span className=" relative text-16 mr-2 text-black  after:absolute after:h-[1px] after:w-full after:mt-[12px] after:left-0 after:bg-black">
              MRP : ₹ 1,299
            </span>
          </div>
          <div className="border-4 border-slate-50 p-2">
            <h1 className="text-16 font-bold">COLOUR OPTIONS</h1>
            <div className="grid grid-cols-4">
              <img className="w-24 h-24" src={image2}></img>
              <img src={imagebelow1}></img>
              <img src={imagebelow2}></img>
              <img src={imagebelow3}></img>
            </div>
          </div>
          <div className="border-4 border-slate-50 p-2">
            <div className="flex justify-between ">
              <h1 className="text-16 font-bold">SELECT SIZE</h1>
              <h1 className="text-10 text-blue-400 ml-3">: Size Chart</h1>
            </div>
            <div className="grid grid-cols-8 text-16 font-bold">
              <button className=" hover:bg-blue-300 border-4 border-slate-50 p-2 w-14 h-14">
                {" "}
                S{" "}
              </button>
              <button className="hover:bg-blue-300  border-4 border-slate-50 p-2 w-14 h-14">
                {" "}
                L{" "}
              </button>
              <button className="hover:bg-blue-300 border-4 border-slate-50 p-2 w-14 h-14">
                {" "}
                2XL{" "}
              </button>
              <button className="hover:bg-blue-300 border-4 border-slate-50 p-2 w-14 h-14">
                {" "}
                M{" "}
              </button>
              <button className="hover:bg-blue-300 border-4 border-slate-50 p-2 w-14 h-14">
                {" "}
                XL{" "}
              </button>
            </div>
          </div>
          <div className="border-8 border-slate-50 p-2">
            <div>
              <div className="p-2 flex border border-black">
                <svg
                  viewBox="24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  stroke-width="1.5"
                  className="w-4"
                  alt="Warranty"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.5 13C14.4 13.8 12.8 15.4 12 17.5C11.2 15.4 9.6 13.8 7.5 13C9.6 12.2 11.2 10.6 12 8.5C12.8 10.6 14.4 12.2 16.5 13Z"
                    stroke="currentColor"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9 8.00001C8.1 8.30001 7.3 9.10001 7 10C6.7 9.10001 5.9 8.30001 5 8.00001C5.9 7.70001 6.7 6.90001 7 6.00001C7.3 6.90001 8.1 7.70001 9 8.00001Z"
                    fill="currentColor"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.2 4.80001C10.7 5.00001 10.2 5.40001 10 6.00001C9.8 5.40001 9.3 5.00001 8.8 4.80001C9.4 4.60001 9.8 4.10001 10 3.60001C10.2 4.10001 10.7 4.50001 11.2 4.80001Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <p className="ml-2 font-bold text-8"> 2 YEAR WARRANTY*</p>
              </div>
            </div>
          </div>

          <div class="sticky w-full bottom-0 flex justify-center">
            <button class="bg-blue-500 text-white py-2 px-4 w-[300px] rounded m-2">
              ADD TO CART
            </button>
            <button class="bg-white-500 font-light py-2 px-4 w-[300px] rounded m-2 border-2 ">
              ADD TO WISHLIST
            </button>
          </div>
          <div className="border-8 border-slate-50 p-2">
            <h1 className="text-16 font-bold mr-3">DELIVERY & RETURNS</h1>
            <div className="p-2 justify-between flex">
              <p className="text-16 font-light flex">
                486001 Rewa, India
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  stroke-width="1.5"
                  alt="successTick"
                  class="w-6 h-6 ml-1 rounded-full p-1"
                >
                  <path
                    d="M21.2001 11.3C21.2001 11.5 21.2001 11.7 21.2001 12C21.2001 17.1 17.1 21.2 12 21.2C6.90005 21.2 2.80005 17.1 2.80005 12C2.80005 6.9 6.90005 2.8 12 2.8C13.9 2.8 15.6 3.3 17 4.3M7.80005 11.7L11.1 15C11.3 15.2 11.7 15.2 11.9 15L21.4 5.5"
                    stroke="currentColor"
                  ></path>
                </svg>
              </p>
              <p className="text-16 font-light text-blue-300">: Change</p>
            </div>
            <div>
              <div className="p-2 flex">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  stroke-width="1.5"
                  alt="home-delivery"
                  class="w-11 h-11 text-black XggQbk border oDZLEr rounded"
                >
                  <path
                    d="M14 16.25H9.5M19.2857 16.25H20.25C20.8023 16.25 21.25 15.8023 21.25 15.25V10.3124C21.25 10.109 21.188 9.9104 21.0722 9.74317L19.2982 7.18079C19.1115 6.91099 18.8042 6.75 18.476 6.75H15.25V15M4.64394 16.25H3.75C3.19772 16.25 2.75 15.8023 2.75 15.25V5.75C2.75 5.19772 3.19772 4.75 3.75 4.75H14.25C14.8023 4.75 15.25 5.19772 15.25 5.75V6.84091M14.25 16.75C14.25 18.1307 15.3693 19.25 16.75 19.25C18.1307 19.25 19.25 18.1307 19.25 16.75C19.25 15.3693 18.1307 14.25 16.75 14.25C15.3693 14.25 14.25 15.3693 14.25 16.75ZM4.75 16.75C4.75 18.1307 5.86929 19.25 7.25 19.25C8.63071 19.25 9.75 18.1307 9.75 16.75C9.75 15.3693 8.63071 14.25 7.25 14.25C5.86929 14.25 4.75 15.3693 4.75 16.75Z"
                    stroke="currentColor"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <div className="ml-3">
                  <p>
                    Home Delivery by <span className="font-bold">Tomorrow</span>
                  </p>
                  <p>
                    Order within
                    <span className="text-green-500"> 7hrs 7mins</span>
                  </p>
                </div>
              </div>
              <div className="p-2 flex">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  stroke-width="1.5"
                  alt="Free-pickup"
                  class=" min-w-11 w-11 h-11 text-black XggQbk border oDZLEr rounded"
                >
                  <path
                    d="M7.50005 12.8V5.59998H21.2001H21.3V12.8H7.50005ZM7.50005 12.8V17.6M7.50005 8.19998H2.80005V17.6H16V12.6M21.2001 12.8V18.4"
                    stroke="currentColor"
                  ></path>
                </svg>
                <div className="ml-3">
                  <p>
                    <span className="font-bold">FREE</span> pickup in Store
                    Available
                  </p>
                  <p className="text-blue-500">View nearest stores</p>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className=" bg-slate-100 flex w-full p-3 justify-evenly md:hidden">
              <p className="font-bold hover:text-blue-300">PRODUCT DETAILS</p>
              <p className="ml-2 font-bold  hover:text-blue-300">VIDEOS</p>
              <p className=" ml-3 font-bold  hover:text-blue-300">REVIEWS</p>
              <p className=" ml-3 font-bold  hover:text-blue-300">
                TECHNICAL INFORMATION
              </p>
            </div>
            <div className="w-full p-3 md:hidden">
              <div className="mt-2 p-1">
                <p className="text-sm font-bold">Made for</p>
                <p className="font-light">
                  Our designers created this T-shirt for tennis players looking
                  for a breathable top they can wear year round.
                </p>
              </div>
              <div className="flex mb-1 mt-2 p-1">
                <div>
                  <p className="text-sm font-bold">Stretch</p>
                  <p className="font-light">
                    Our designers created this T-shirt for tennis players
                    looking for a breathable top they can wear year round.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-bold">Stretch</p>
                  <p className="font-light">
                    Our designers created this T-shirt for tennis players
                    looking for a breathable top they can wear year round.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-slate-100 flex w-full p-3">
            <div className=" hidden md:block w-full">
              <p className=" ml-3 text-sm font-bold ">Complete Your Kit</p>
              <div className="flex p-3">
                <div className="w-[200px] border border-gray-300 p-2 text-center">
                  {" "}
                  <img className="ml-8" src={imagebelow1}></img>
                  <p className="text-sm font-bold ">Men tennis Short</p>
                  <p className="text-sm font-bold ">₹ 499</p>
                </div>
                <div className="ml-8 mr-5 font-bold h-6 w-6 mt-10  ">+</div>{" "}
                <div className="w-[200px] border border-gray-300 p-2 text-center">
                  {" "}
                  <img className="ml-8" src={imagebelow1}></img>
                  <p className="text-sm font-bold ">Men tennis Short</p>
                  <p className="text-sm font-bold ">₹ 399</p>
                </div>
              </div>
              <div className="flex  p-3">
                <p className=" ml-2 w-1/2 p-2 text-sm font-bold ">
                  Total Price:₹ 1,997
                </p>
                <button className="text-white p-2 bg-blue-500 hover:bg-blue-700 font-bold rounded">
                  SELECT PRODUCT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-slate-100 flex w-full p-3 justify-evenly ">
        <p className="font-bold hover:text-blue-300">PRODUCT DETAILS</p>
        <p className="ml-2 font-bold  hover:text-blue-300">VIDEOS</p>
        <p className=" ml-3 font-bold  hover:text-blue-300">REVIEWS</p>
        <p className=" ml-3 font-bold  hover:text-blue-300">
          TECHNICAL INFORMATION
        </p>
      </div>
      <div className="w-full p-3">
        <div className="mt-2 p-1">
          <p className="text-sm font-bold">Made for</p>
          <p className="font-light">
            Our designers created this T-shirt for tennis players looking for a
            breathable top they can wear year round.
          </p>
        </div>
        <div className="flex mb-1 mt-2 p-1">
          <div>
            <p className="text-sm font-bold">Stretch</p>
            <p className="font-light">
              Our designers created this T-shirt for tennis players looking for
              a breathable top they can wear year round.
            </p>
          </div>
          <div>
            <p className="text-sm font-bold">Stretch</p>
            <p className="font-light">
              Our designers created this T-shirt for tennis players looking for
              a breathable top they can wear year round.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
