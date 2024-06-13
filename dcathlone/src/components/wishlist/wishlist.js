import React, { useEffect, useState } from "react";
import Header from "../header/header";
import emptywishlist from "./emptywishlist.svg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { cartReduxActions } from "../reduxstore/reduxstore";
import FooterPage from "../footer/footer";
import { useDispatch } from "react-redux";
const WishList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishListArray = useSelector(
    (state) => state.itemInDetailPage.wishListArray
  );
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [productToAdd, setProductToAdd] = useState(null);
  const [selectSize, setSelectedSize] = useState(null);
  const toggleModalVisibility = (productItem) => {
    setIsModalVisible(!isModalVisible);
    setProductToAdd(productItem);
  };
  const selectSizeHandlerFunction = (item) => {
    console.log(item);
    setSelectedSize(item);
  };
  const singleProductPageHandler = (item) => {
    console.log(item);
    dispatch(cartReduxActions.viewProductDetailFunction(item));
    navigate(`/productdetailpage`);
  };

  useEffect(() => {
    console.log(wishListArray);
  }, [wishListArray]);

  const removeItemFromWishListFunction = (item) => {
    try {
      axios
        .delete(
          `https://dcathelone-default-rtdb.firebaseio.com/dcatheloneWishlist/${item.id}.json`
        )
        .then(() => {
          console.log("deleted from wishlist", item);
          dispatch(cartReduxActions.removeItemFromWishListFunction(item.id));
        });
    } catch (error) {
      console.log(error);
    }
  };

  const addToCartBtnHandler = (item) => {
    try {
      axios
        .delete(
          `https://dcathelone-default-rtdb.firebaseio.com/dcatheloneWishlist/${item.id}.json`
        )
        .then(() => {
          console.log("deleted from wishlist", item);
          setIsModalVisible(!isModalVisible);
          dispatch(cartReduxActions.removeItemFromWishListFunction(item.id));
        });
    } catch (error) {
      console.log(error);
    }

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
            size: selectSize,
          };
          dispatch(cartReduxActions.addItemIncartFunction(data));
          axios.put(
            `https://dcathelone-default-rtdb.firebaseio.com/dcatheloneCart/${res.data.name}.json`,
            data
          );
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Header></Header>
      {wishListArray.length === 0 ? (
        <div className="flex flex-col justify-center items-center mt-4">
          <img
            className="w-2/6 md:w-1/6 mt-14 "
            src={emptywishlist}
            alt="Empty Wishlist"
          ></img>
          <div className="mt-10 lg:mt-[30px] text-18 lg:text-[35px] font-normal lg:font-semibold text-grey-500">
            <h1 className="text-30 font-bold text-[#687787] text-[28px]">
              Login to Add/View Wishlist
            </h1>
          </div>
          <button
            onClick={() => navigate("/")}
            className="bg-[#3643BA] hover:bg-blue-700 text-white font-bold py-2 px-[120px] rounded-sm mt-4"
          >
            LOGIN / SIGNUP
          </button>
        </div>
      ) : (
        <div className="md:px-10px md:py-[20px] px-[60px] py-[40px]">
          <div className="md:flex">
            <p className="text-[28px] uppercase font-bold">Wishlist</p>
            <span className="text-[26px] md:text-black uppercase md:ml-2 md:text-[28px] font-semibold text-[#687787]">
              {" "}
              {wishListArray.length} items
            </span>
          </div>

          <div className=" grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-2 mt-3 md:mt-5">
            {wishListArray &&
              wishListArray.map((product) => (
                <div className=" px-2 border md:border-0 border-gray-100 p-1">
                  <div className="cursor-pointer bg:[#F7F8F9] relative p-3 h-[240px] md:h-[300px]">
                    <div
                      onClick={() => removeItemFromWishListFunction(product)}
                      class="absolute top-0 right-0 z-10 cursor-pointer"
                    >
                      <img
                        src="https://cdncontent.decathlon.in/_next/static/chunks/src/assets/img/closeButton.c993d20783f1fc45.svg"
                        alt="remove"
                      />
                    </div>
                    <img
                      onClick={() => singleProductPageHandler(product)}
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

                  <div className="mt-2 p-2">
                    <div>
                      <p className="text-sm text-[13px] font-bold">
                        {product.title.split(" ").slice(0, 2).join(" ")}
                      </p>
                      <p className="mt-1 text-[11px] font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
                        {product.title}
                      </p>
                      <p className="text-lg mt-1 mb-1 text-[11px] font-bold">
                        ₹ {product.price}
                      </p>
                    </div>
                    <button
                      onClick={() => toggleModalVisibility(product)}
                      className="w-full bg-[#3643BA] hover:bg-blue-900 border border-[#949494] translate-x-0 text-white py-2"
                    >
                      <p className="text-sm text-[#fff] text-[10px] font-semibold">
                        MOVE TO CART
                      </p>
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
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
              <div className="cursor-pointer mr-3 h-100 w-[80px]">
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
      <FooterPage />
    </div>
  );
};

export default WishList;
