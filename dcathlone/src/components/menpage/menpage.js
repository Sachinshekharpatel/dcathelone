import React, { useState, useRef, useEffect } from "react";
import Header from "../header/header";
import imageoneSlide from "./menimage.avif";
import imageTwoSlide from "./menimage2.avif";
import imageThreeSlide from "./menimage3.avif";
import FooterPage from "../footer/footer";
import filterBtnImage from "./filterbtn.svg";
import { useNavigate } from "react-router-dom";
import image1men from "./image1men.avif";
import image2men from "./image2men.avif";
import "./menpage.css";
import image3men from "./image3men.avif";
const images = [imageoneSlide, imageTwoSlide, imageThreeSlide];
const MenPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef(null);
  const [menProduct, setMenProduct] = useState([]);

  useEffect(() => {
    try {
      fetch("https://fakestoreapi.com/products/category/men's%20clothing")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setMenProduct(data);
        });
    } catch (error) {
      console.log("error menpage data not fetched");
    }
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);
  useEffect(() => {
    slideRef.current.style.transition = "transform 1s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
  }, [currentIndex]);


  const buttonHighToLowHandler = () => {
    const sortedProducts = menProduct.sort((a, b) => b.price - a.price);
    setMenProduct(sortedProducts);
  };  

  const buttonLowToHighHandler = () => {
    const sortedProducts = menProduct.sort((a, b) => a.price - b.price);
    setMenProduct(sortedProducts);
  };  
  return (
    <div>
      <Header></Header>
      <div className="hidden md:block relative w-full mt-1 overflow-hidden">
        <div ref={slideRef} className="flex w-full h-[200px] bg-[#F7F8FA]">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-full flex-shrink-0 object-contain"
            />
          ))}
        </div>
      </div>
      <div className="md:flex p-2">
        <div className="flex md:mr-[20px]">
          <div className="px-4 sm:w-1/4 md:w-1/6 flex items-center">
            <p className="flex mt-2 uppercase ">
              <b className="text-[14px]">Filters</b>
              <span className="mt-1">
                <img
                  className="ml-2 mr-[30px] max-w-5"
                  src={filterBtnImage}
                  alt="Search Filter"
                />
              </span>
            </p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="mt-2 md:mt-0 flex flex-wrap">
            <div className="flex mr-3.5 px-1.5 py-2.5 border-none rounded font-bold uppercase text-[#424453] cursor-pointer hover:bg-gray-100 hover:bg-grey-50 hover:shadow-none bg-transparent text-[13px]">
              <span className="mt-0 md:mt-[16px] ">MAIN MATERIAL</span>
              <span className="flex">
                <img
                  src="https://cdncontent.decathlon.in/_next/static/chunks/src/assets/img/icons/down_arrow.155714143ed7eeef.svg"
                  alt="Down"
                  className=" ml-2.5 w-3 "
                />
              </span>
            </div>
            <div className="flex mr-3.5 px-1.5 py-2.5 border-none rounded font-bold uppercase text-[#424453] cursor-pointer hover:bg-gray-100 hover:bg-grey-50 hover:shadow-none bg-transparent text-[13px]">
            <span className="mt-0 md:mt-[16px] ">Sleeve Length</span>
              <span className="flex">
                <img
                  src="https://cdncontent.decathlon.in/_next/static/chunks/src/assets/img/icons/down_arrow.155714143ed7eeef.svg"
                  alt="Down"
                  className=" ml-2.5 w-3 "
                />
              </span>
            </div>
            <div className="flex mr-3.5 px-1.5 py-2.5 border-none rounded font-bold uppercase text-[#424453] cursor-pointer hover:bg-gray-100 hover:bg-grey-50 hover:shadow-none bg-transparent text-[13px]">
            <span className="mt-0 md:mt-[16px] ">Style</span>
              <span className="flex">
                <img
                  src="https://cdncontent.decathlon.in/_next/static/chunks/src/assets/img/icons/down_arrow.155714143ed7eeef.svg"
                  alt="Down"
                  className=" ml-2.5 w-3 "
                />
              </span>
            </div>
            <div className="flex mr-3.5 px-1.5 py-2.5 border-none rounded font-bold uppercase text-[#424453] cursor-pointer hover:bg-gray-100 hover:bg-grey-50 hover:shadow-none bg-transparent text-[13px]">
            <span className="mt-0 md:mt-[16px] ">Neck Type</span>
              <span className="flex">
                <img
                  src="https://cdncontent.decathlon.in/_next/static/chunks/src/assets/img/icons/down_arrow.155714143ed7eeef.svg"
                  alt="Down"
                  className=" ml-2.5 w-3 "
                />
              </span>
            </div>
            <div className="flex mr-3.5 px-1.5 py-2.5 border-none rounded font-bold uppercase text-[#424453] cursor-pointer hover:bg-gray-100 hover:bg-grey-50 hover:shadow-none bg-transparent text-[13px]">
            <span className="mt-0 md:mt-[16px] ">Cut</span>
           
              <span className="flex">
                <img
                  src="https://cdncontent.decathlon.in/_next/static/chunks/src/assets/img/icons/down_arrow.155714143ed7eeef.svg"
                  alt="Down"
                  className=" ml-2.5 w-3 "
                />
              </span>
            </div>
            <div className="flex mr-3.5 px-1.5 py-2.5 border-none rounded font-bold uppercase text-[#424453] cursor-pointer hover:bg-gray-100 hover:bg-grey-50 hover:shadow-none bg-transparent text-[13px]">
            <span className="mt-0 md:mt-[16px] ">Number Of Pockets </span>
           
              <span className="flex">
                <img
                  src="https://cdncontent.decathlon.in/_next/static/chunks/src/assets/img/icons/down_arrow.155714143ed7eeef.svg"
                  alt="Down"
                  className=" ml-2.5 w-3 "
                />
              </span>
            </div>

            <div className="flex mr-3.5 px-1.5 py-2.5 border-none rounded font-bold uppercase text-[#424453] cursor-pointer hover:bg-gray-100 hover:bg-grey-50 hover:shadow-none bg-transparent text-[13px]">
            <span className="mt-0 md:mt-[16px] "> Pockets</span>
           
              <span className="flex">
                <img
                  src="https://cdncontent.decathlon.in/_next/static/chunks/src/assets/img/icons/down_arrow.155714143ed7eeef.svg"
                  alt="Down"
                  className=" ml-2.5 w-3 "
                />
              </span>
            </div>
          </div>
          <div className="ml-3 md:ml:2">
            <div className="relative ml-auto vtcHsI mr-4">
              <span className="inline-block mr-3 uppercase align-middle">
                <b className="flex">
                  <span className="mt-1">
                    <img
                      className="max-w-5 mr-2.5"
                      src="https://cdncontent.decathlon.in/_next/static/chunks/src/assets/img/icons/sorting.723d7998e2fa4014.svg"
                      alt="Sorting"
                    />
                  </span>
                  <span className="font-bold text-[12px]">Sort by</span>
                </b>
              </span>
              <p className=" my-1 text-grey-10 py-2 px-2 border border-gray-300 cursor-pointer">
                <select  className="font-bold text-[14px] text-gray-700 border-[0px]">
                  <option className="mb-2" value="">
                    Most Relevant
                  </option>
                  <option className="mb-2" value="lowToHigh">
                    Price: Low to High
                  </option>
                  <option className="mb-2" value="HighToLow">
                    Price: High to Low
                  </option>
                  <option className="mb-2" value="Rating">
                    Rating
                  </option>
                  <option className="mb-2" value="Popular">
                    Popular
                  </option>
                </select>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* -=-=-=-= */}
      {/* BEST SELLING MEN TSHIRT */}
      {/* -=-=-=-=-= */}
      <div className="w-full md:flex border-t-[1px] border-gray-300">
        <div className="hidden md:block md:w-1/6 border-r-[1px]">
          <div className="p-2">
            <div className="flex">
              <b className="flex mt-[9px]">
                <span className="mt-1">
                  <img
                    className="max-w-5 mr-2.5"
                    src="https://cdncontent.decathlon.in/_next/static/chunks/src/assets/img/icons/sorting.723d7998e2fa4014.svg"
                    alt="Sorting"
                  />
                </span>
                <span className="font-bold  text-gray-600 text-[12px]">Sort by  :</span>
              </b>
              <p className="font-bold text-gray-600 text-[13px] p-2">Price</p>
            </div>
            <button onClick={() => buttonHighToLowHandler()} className="font-bold hover:bg-[#D9DDE1] border p-1 rounded-sm py-1 px-3 text-gray-600 text-[12px]">
              {" "}
              High To Low{" "}
            </button>
            <br></br>
            <button onClick={() => buttonLowToHighHandler()} className="font-bold border  hover:bg-[#D9DDE1]  p-1 mt-2 rounded-sm py-1 px-3 text-gray-600 text-[12px]">
              {" "}
              Low To High{" "}
            </button>
          </div>
          <div className="p-2">
            <p className="font-bold text-gray-600 text-[13px] p-2">Gender</p>
            <ul className="lg:max-h-[200px] lg:overflow-y-auto lg:p-0">
              <li>
                <label>
                  <input className="mr-1" type="checkbox" />
                  <span className=" font-semibold text-[12px]  mb-[2px]">
                    Men (341){" "}
                  </span>
                </label>
              </li>
              <li>
                <label>
                  <input className="mr-1" type="checkbox" />
                  <span className=" font-semibold text-[12px]  mb-[2px]">
                    Boy (11){" "}
                  </span>
                </label>
              </li>
              <li>
                <label>
                  <input className="mr-1" type="checkbox" />
                  <span className=" font-semibold text-[12px]  mb-[2px]">
                    Women (7){" "}
                  </span>
                </label>
              </li>
              <li>
                <label>
                  <input className="mr-1" type="checkbox" />
                  <span className=" font-semibold text-[12px]  mb-[2px]">
                    Unisex (1){" "}
                  </span>
                </label>
              </li>
            </ul>
          </div>
          <div className="p-2">
            <p className="font-bold text-gray-600 text-[13px] p-2">Category</p>
            <div class="relative flex py-1 pl-0  border-2  rounded-md  w-full ">
              <input
                type="input"
                class="focus:outline-none w-full mx-3  md:mx-3"
                placeholder="Search..."
                value=""
              />
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                stroke-width="1.5"
                className="w-6 text-grey-500 mr-1"
              >
                <path
                  d="M21.4 21.4L17.5 17.5M17.8 10.2C17.8 14.3 14.4 17.7 10.3 17.7C6.20005 17.7 2.80005 14.3 2.80005 10.2C2.80005 6.10001 6.20005 2.70001 10.3 2.70001C14.4 2.70001 17.8 6.10001 17.8 10.2Z"
                  stroke="currentColor"
                ></path>
              </svg>
            </div>
            <ul className="lg:max-h-[200px] lg:overflow-y-auto lg:p-0">
              <li>
                <label>
                  <input className="mr-1" type="checkbox" />
                  <span className=" font-semibold text-[12px]  mb-[2px]">
                    Short-sleeved jersey (141){" "}
                  </span>
                </label>
              </li>
              <li>
                <label>
                  <input className="mr-1" type="checkbox" />
                  <span className=" font-semibold text-[12px]  mb-[2px]">
                    Tshirt (131){" "}
                  </span>
                </label>
              </li>
              <li>
                <label>
                  <input className="mr-1" type="checkbox" />
                  <span className=" font-semibold text-[12px]  mb-[2px]">
                    Long-sleeved t-shirt (17){" "}
                  </span>
                </label>
              </li>
              <li>
                <label>
                  <input className="mr-1" type="checkbox" />
                  <span className=" font-semibold text-[12px]  mb-[2px]">
                    Unisex (21){" "}
                  </span>
                </label>
              </li>
            </ul>
          </div>
        </div>

        {/* menproduct list below this */}
        <div className="w-full md:w-5/6 p-2">
          <div className="flex justify-between">
            <div className="w-1/2 font-bold text-[14px]">
              BEST SELLING MEN TSHIRT
            </div>
            <div className="w-1/2 flex justify-end md:mr-3 mb-1">
              <button className=" px-2 py-1 text-gray-300 bg-gray-50 rounded-full text-sm">
                {"<"}
              </button>
              <button className="ml-2 px-2 py-1 text-gray-300 bg-gray-50 rounded-full text-sm">
                {">"}
              </button>
            </div>
          </div>
          <div
            className="w-full md:flex p-3 bg-[#F5F4F5]"
            style={{ borderRadius: "4px" }}
          >
            <div className="md:w-2/6 md:mt-[13px] font-bold text-[13px]">
              EXPLORE ALL MEN TSHIRTS COLLECTIONS
            </div>
            <div className="md:w-4/6 flex justify-between my-2">
              <div className="flex">
                <button className=" px-3 py-1 mr-1 text-gray-300 bg-gray-50 rounded-full text-sm">
                  {"<"}
                </button>
                <button className="px-4 py-2  text-[#424453] bg-gray-50 rounded-sm text-sm font-light">
                  Active T Shirts
                </button>
              </div>
              <button className="px-4 py-2 text-[#424453] bg-gray-50 rounded-sm text-sm font-light">
                Casual T Shirts
              </button>
              <div className="flex">
                <button className="px-4 py-2 text-[#424453] bg-gray-50 rounded-sm text-sm font-light">
                  Cotton T Shirts
                </button>
                <button className=" px-3 py-1 ml-1 text-gray-300 bg-gray-50 rounded-full text-sm">
                  {">"}
                </button>
              </div>
            </div>
          </div>
          <div className=" grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2 mt-3 md:mt-5">
            {menProduct &&
              menProduct.map((product) => (
                <div className=" px-2 border md:border-0 border-gray-100 p-1">
                  <div className="bg:[#F7F8F9] relative p-3 h-[240px] md:h-[300px]">
                    <img
                      className=" absolute top-0 left-0 p-1 h-full w-full object-cover"
                      src={product.image}
                      alt="Product Image"
                    />

                    <div className="absolute bottom-3 left-3 px-2 py-0.5 flex items-center bg-white/[0.85] border border-grey-200 ">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        stroke-width="1.5"
                        className="-mt-0.5 w-3 lg:w-4 Ifkhgb"
                        alt="Rating"
                      >
                        <path
                          d="M12 15.9L16.8 19.3L15 13.7L19.7 10.3H13.8L12 4.70001L10.2 10.3H4.30005L9.00005 13.7L7.20005 19.3L12 15.9Z"
                          fill="currentColor"
                          stroke="currentColor"
                        ></path>
                      </svg>
                      <span className="ml-1 mb-[2px] font-normal text-[#3643BA] text-[12px] md:text-[14px]">
                        4.3 | 5.3k
                      </span>
                    </div>

                    <div className="absolute bottom-3 right-3 w-7 h-7 bg-white rounded-full cursor-pointer flex items-center justify-center border border-solid border-grey-400 border-grey-400">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        stroke-width="1.5"
                        className="w-4 h-4 text-[#3643BA]"
                        alt="Wishlist"
                      >
                        <path
                          d="M20.2 8C19.9 6.1 18.5 4.9 17.3 4.5C15.1 3.8 13.4 5.3 12.7 6.1L12 6.8L11.4 6.1C10.6 5.3 9.00002 3.9 6.70002 4.5C5.50002 4.9 4.10002 6.1 3.80002 8C3.50002 9.7 3.90002 13.9 12 19.6C20.1 13.9 20.5 9.7 20.2 8Z"
                          stroke="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>

                  <div className="bg-[#F7F8F9] m-2 grid grid-cols-3 md:grid-cols-5 gap-[1px] ">
                    <img className="hidden md:block"></img>
                    <img className="hidden md:block"></img>

                    <img src={image1men}></img>
                    <img
                      className="w-full h-[89px] border border-[#3643BA] md:h-[60px] bg-[#F5F4F5] p-1"
                      src={product.image}
                    ></img>
                    <img src={image3men}></img>
                  </div>
                  <div className="mt-2 p-2">
                    <div>
                      <p className="text-sm text-[13px] font-semibold">
                        {product.title.split(" ").slice(0, 2).join(" ")}
                      </p>
                      <p className="text-sm mt-1 text-[9px] font-semibold">
                        {product.title}
                      </p>
                      <p className="text-lg mt-1 mb-1 text-[11px] font-bold">
                        ₹ {product.price}
                      </p>
                    </div>
                    <button className="w-full bg-[] border border-[#949494] text-white py-2">
                      <p className="text-sm text-[#000000] text-[10px] font-semibold">
                        ADD TO CART
                      </p>
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <FooterPage></FooterPage>
    </div>
  );
};

export default MenPage;
