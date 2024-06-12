import React, { useState, useRef, useEffect } from "react";
import Header from "../header/header";
import imageoneSlide from "./women1.avif";
import imageTwoSlide from "./women2.avif";
import imageThreeSlide from "./women3.avif";
import FooterPage from "../footer/footer";
import filterBtnImage from "./filterbtn.svg";
import image1men from "./women1c.avif";
import "./womenpage.css";
import axios from "axios";
import image3men from "./women2cc.avif";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartReduxActions } from "../reduxstore/reduxstore";
const images = [imageoneSlide, imageTwoSlide, imageThreeSlide];
const WomenPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef(null);
  const [menProduct, setMenProduct] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const filterValue = useRef("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [productToAdd, setProductToAdd] = useState(null);
  const [selectSize, setSelectedSize] = useState(null);
  const [productAddedButtonBoolean, setproductAddedButtonBoolean] =
    useState(false);
  const selectSizeHandlerFunction = (size) => {
    setSelectedSize(size);
  };
  useEffect(() => {
    try {
      fetch("https://fakestoreapi.com/products/category/women's%20clothing")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setMenProduct(data);
        });
    } catch (error) {
      console.log("error menpage data not fetched");
    }
  }, []);
  const singleProductImageUpdate = (item, imageLink) => {
    console.log(item, imageLink);

    const data = {
      ...item,
      image: imageLink,
    };

    setMenProduct((prev) => {
      return prev.map((item) => {
        if (item.id === data.id) {
          return data;
        } else {
          return item;
        }
      });
    });
  };
  const singleProductImageUpdateModal = (productItem, imageLink) => {
    const data = {
      ...productItem,
      image: imageLink,
    };
    setProductToAdd(data);
  };

  const singleProductPageHandler = (item) => {
    console.log(item);
    dispatch(cartReduxActions.viewProductDetailFunction(item));
    navigate(`/productdetailpage`);
  };

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

  const toggleModalVisibility = (productItem) => {
    setIsModalVisible(!isModalVisible);
    setProductToAdd(productItem);
  };
  const handleChange = (e) => {
    const value = e.target.value;
    filterValue.current = value;
    setSelectedValue(value);
  };
  useEffect(() => {
    const handleFilterChange = () => {
      if (filterValue.current === "HighToLow") {
        const sortedProducts = [...menProduct].sort(
          (a, b) => b.price - a.price
        );
        setMenProduct(sortedProducts);
      } else if (filterValue.current === "lowToHigh") {
        const sortedProducts = [...menProduct].sort(
          (a, b) => a.price - b.price
        );
        setMenProduct(sortedProducts);
      } else if (filterValue.current === "Popular") {
        const sortedProducts = [...menProduct].sort(
          (a, b) => a.price - b.price
        );
        setMenProduct(sortedProducts);
      } else if (filterValue.current === "Rating") {
        const sortedProducts = [...menProduct].sort(
          (a, b) => b.price - a.price
        );
        setMenProduct(sortedProducts);
      }
    };

    handleFilterChange();
  }, [selectedValue]);

  const addToCartBtnHandler = (item) => {
    if (selectSize === null) {
      alert("Please select size first");
    } else {
      try {
        axios
          .post(
            `https://dcathelone-default-rtdb.firebaseio.com/dcatheloneCart.json`,
            item
          )
          .then((res) => {
            const data = {
              ...item,
              id: res.data.name,
              quantity: 1,
              size: "M",
            };
            axios
              .put(
                `https://dcathelone-default-rtdb.firebaseio.com/dcatheloneCart/${res.data.name}.json`,
                data
              )
              .then(() => {
                console.log("added to cart");
                setIsModalVisible(!isModalVisible);
                setProductToAdd(null);
                setSelectedSize(null);
                setproductAddedButtonBoolean(true);
                setTimeout(() => setproductAddedButtonBoolean(false), 2000);
                dispatch(cartReduxActions.addItemIncartFunction(data));
              });
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <Header></Header>
      <div className="hidden md:block relative w-full mt-1 overflow-hidden">
        <div
          ref={slideRef}
          className="cursor-pointer flex w-full h-[200px] bg-[#F7F8FA]"
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className="bg-[#F7F8FA] w-full h-full flex-shrink-0 object-contain"
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
              <div className="my-1 py-2 px-2 border border-gray-300 cursor-pointer">
                <select
                  className="font-bold text-[14px] text-gray-700 border-[0px]"
                  onChange={handleChange}
                  value={selectedValue}
                >
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
              </div>
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
                <span className="font-bold  text-gray-600 text-[12px]">
                  Sort by :
                </span>
              </b>
              <p className="font-bold text-gray-600 text-[13px] p-2">Price</p>
            </div>
            <button
              onClick={() => buttonHighToLowHandler()}
              className="font-bold hover:bg-[#D9DDE1] border p-1 rounded-sm py-1 px-3 text-gray-600 text-[12px]"
            >
              {" "}
              High To Low{" "}
            </button>
            <br></br>
            <button
              onClick={() => buttonLowToHighHandler()}
              className="font-bold border  hover:bg-[#D9DDE1]  p-1 mt-2 rounded-sm py-1 px-3 text-gray-600 text-[12px]"
            >
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
            <div className="relative flex py-1 pl-0  border-2  rounded-md  w-full ">
              <input
                type="input"
                className="focus:outline-none w-full mx-3  md:mx-3"
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

        {/* womenproduct list below this */}
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
                  <div
                    onClick={() => singleProductPageHandler(product)}
                    className="cursor-pointer bg:[#F7F8F9] relative p-3 h-[240px] md:h-[300px]"
                  >
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
                        {product.rating.rate} | {product.rating.count}
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
                    <img
                      onClick={() =>
                        singleProductImageUpdate(product, image1men)
                      }
                      className="cursor-pointer"
                      src={image1men}
                    ></img>
                    <img
                      onClick={() =>
                        singleProductImageUpdate(product, product.image)
                      }
                      className="cursor-pointer w-full h-[89px] border border-[#3643BA] md:h-[60px] bg-[#F5F4F5] p-1"
                      src={product.image}
                    ></img>
                    <img
                      onClick={() =>
                        singleProductImageUpdate(product, image3men)
                      }
                      className="cursor-pointer"
                      src={image3men}
                    ></img>{" "}
                  </div>
                  <div className="mt-2 p-2">
                    <div>
                      <p className="text-sm text-[13px] font-bold">
                        {product.title.split(" ").slice(0, 2).join(" ")}
                      </p>
                      <p className=" mt-2 text-[11px] font-semibold">
                        {product.title.split(" ").slice(0, 6).join(" ")}
                      </p>
                      <p className="text-lg mt-1 mb-1 text-[11px] font-bold">
                        ₹ {product.price}
                      </p>
                    </div>
                    <button
                      onClick={() => toggleModalVisibility(product)}
                      className="w-full bg-[] border border-[#949494] text-white py-2"
                    >
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
      {isModalVisible ? (
        <div className="relative bg-gray-200">
          <div className="fixed bottom-0 md:fixed md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:w-[400px] md:h-[350px] w-full h-[auto] p-3 bg-gray-100">
            <button
              onClick={() => {
                setSelectedSize(null);
                setIsModalVisible(!isModalVisible);
              }}
              className="absolute top-0 right-0 mt-2 mr-2 bg-white border-[2px] px-4 py-2 rounded hover:bg-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <div className="mb-4 mt-2 flex">
              <div className=" cursor-pointer mr-3 h-100 w-[80px]">
                <img src={productToAdd.image}></img>
              </div>

              <div>
                <h3 className="text-gray-800 font-bold text-[16px]">
                  {productToAdd.title.slice(0, 6)}
                </h3>
                <p className="text-gray-800 font-semibold text-[14px]">
                  {productToAdd.title.slice(" ")}
                </p>
                <div className="flex mt-1 mb-1"></div>
                <p className="text-gray-800 font-bold">
                  ₹ {productToAdd.price}
                </p>
              </div>
            </div>
            <div className="px-2">
              <h3 className="mb-2 text-gray-800 font-bold text-[16px]">
                COLOR OPTIONS
              </h3>
              <div className="flex h-[60px] mb-2 w-[100px]">
                <img
                  onClick={() =>
                    singleProductImageUpdateModal(
                      productToAdd,
                      productToAdd.image
                    )
                  }
                  className="cursor-pointer mr-2 border-[2px] p-1 border-blue-900"
                  src={productToAdd.image}
                ></img>
                <img
                  onClick={() =>
                    singleProductImageUpdateModal(productToAdd, image1men)
                  }
                  className="cursor-pointer"
                  src={image1men}
                ></img>
                <img
                  onClick={() =>
                    singleProductImageUpdateModal(productToAdd, image3men)
                  }
                  className="cursor-pointer"
                  src={image3men}
                ></img>
              </div>
            </div>
            <div>
              <div className="flex justify-between ">
                <h3 className="mb-2 p-3 text-gray-800 font-bold text-[16px]">
                  SIZE OPTIONS
                </h3>
                <h3 className="cursor-pointer mb-2 p-3 text-[#3643BA] font-bold text-[12px]">
                  : SIZE CHART
                </h3>
              </div>
              <div className="flex md:flex-wrap mb-2 items-start gap-3 whitespace-nowrap ">
                <div className="hover:bg-slate-200">
                  <div
                    onClick={() => selectSizeHandlerFunction("S")}
                    className="hover:bg-slate-200"
                  >
                    <div className="py-2 px-3 font-medium text-14 BwXiuw mb-1 text-center transition ease-in-out delay-100 border-2 hover:border-2 hover:bg-bg-purple-200 hover:border-grey-400 hover:text-black hover:cursor-pointer border-solid border-grey-400">
                      S
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => selectSizeHandlerFunction("M")}
                  className="hover:bg-slate-200"
                >
                  <div>
                    <div className="py-2 px-3 font-medium text-14 BwXiuw mb-1 text-center transition ease-in-out delay-100 border-2 hover:border-2 hover:bg-bg-purple-200 hover:border-grey-400 hover:text-black hover:cursor-pointer border-solid border-grey-400">
                      M
                    </div>
                  </div>
                </div>

                <div
                  onClick={() => selectSizeHandlerFunction("L")}
                  className="hover:bg-slate-200"
                >
                  <div>
                    <div className="py-2 px-3 font-medium text-14 BwXiuw mb-1 text-center transition ease-in-out delay-100 border-2 hover:border-2 hover:bg-bg-purple-200 hover:border-grey-400 hover:text-black hover:cursor-pointer border-solid border-grey-400">
                      L
                    </div>
                  </div>
                </div>

                <div
                  onClick={() => selectSizeHandlerFunction("XL")}
                  className="hover:bg-slate-200"
                >
                  <div>
                    <div className="py-2 px-3 font-medium text-14 BwXiuw mb-1 text-center transition ease-in-out delay-100 border-2 hover:border-2 hover:bg-bg-purple-200 hover:border-grey-400 hover:text-black hover:cursor-pointer border-solid border-grey-400">
                      XL
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-black-500 text-[12px] bg-blue-100 p-2 my-1 font-semibold">
                {selectSize !== null
                  ? `Selected Size : ${selectSize}`
                  : "Please select  a size"}
              </p>

              <div className="flex w-full">
                <button
                  onClick={() => {
                    addToCartBtnHandler(productToAdd);
                  }}
                  className="w-full bg-white-500 bg-[#3643BA] px-4 py-2 hover:bg-blue-900"
                >
                  <span className="font-bold text-white text-[14px]">
                    {" "}
                    ADD TO CART
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {productAddedButtonBoolean ? (
        <div className="fixed top-[100px] md:top-[140px] flex left-1/2  transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-lg shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 48 48"
          >
            <path
              fill="#c8e6c9"
              d="M36,42H12c-3.314,0-6-2.686-6-6V12c0-3.314,2.686-6,6-6h24c3.314,0,6,2.686,6,6v24C42,39.314,39.314,42,36,42z"
            ></path>
            <path
              fill="#4caf50"
              d="M34.585 14.586L21.014 28.172 15.413 22.584 12.587 25.416 21.019 33.828 37.415 17.414z"
            ></path>
          </svg>
          <button className="text-white px-3 py-1 bg-[#black] font-bold text-[14px] rounded">
            {" "}
            Successfully Added To Cart{" "}
          </button>
        </div>
      ) : null}
      <FooterPage></FooterPage>
    </div>
  );
};

export default WomenPage;
