import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./cartpage.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import missingItemSvg from "./missingitem.svg";
import FooterPage from "../footer/footer";
import greensvgimage from "./greensvg.png";
import { cartReduxActions } from "../reduxstore/reduxstore";
const CartPage = () => {
  const [
    productAddedWishlistButtonBoolean,
    setproductAddedWishListButtonBoolean,
  ] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [productToDelete, setProductToDelete] = useState(null);
  const totalItemInCart = useSelector(
    (state) => state.itemInDetailPage.cartTotalItemsArray || null
  );
  const totalPrice = useSelector(
    (state) => state.itemInDetailPage.totalPrice || 0
  );
  const discount = totalPrice - (totalPrice / 100) * 20;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const totalAmount = totalPrice - discount;
  const toggleModalVisibility = (productItem) => {
    setIsModalVisible(!isModalVisible);
    setProductToDelete(productItem);
  };

  const formatDateWithSuffix = (date) => {
    const day = date.getDate();
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    const getDaySuffix = (day) => {
      if (day > 3 && day < 21) return "th"; // catches 11th - 20th
      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    return `${day}${getDaySuffix(day)} ${month} ${year}`;
  };

  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 2);
  const formattedDate = formatDateWithSuffix(currentDate);

  useEffect(() => {}, [totalItemInCart]);
  const removeFromCartBtnHandler = (item) => {
    axios
      .delete(
        `https://dcathelone-default-rtdb.firebaseio.com/dcatheloneCart/${item.id}.json`
      )
      .then(() => {
        setIsModalVisible(!isModalVisible);
        setProductToDelete(null);
        dispatch(cartReduxActions.removeItemFromCartFunction(item.id));
      });
  };

  const addToWishListBtnHandler = (item) => {
    try {
      axios
        .post(
          `https://dcathelone-default-rtdb.firebaseio.com/dcatheloneWishlist.json`,
          item
        )
        .then((res) => {
          const data = {
            ...item,
            id: res.data.name,
            quantity: 1,
          };
          axios
            .put(
              `https://dcathelone-default-rtdb.firebaseio.com/dcatheloneWishlist/${res.data.name}.json`,
              data
            )
            .then(() => {
              axios
                .delete(
                  `https://dcathelone-default-rtdb.firebaseio.com/dcatheloneCart/${item.id}.json`
                )
                .then(() => {
                  setproductAddedWishListButtonBoolean(true);
                  setTimeout(
                    () => setproductAddedWishListButtonBoolean(false),
                    2000
                  );
                  console.log("added to wishlist");
                  dispatch(
                    cartReduxActions.removeItemFromCartFunction(item.id)
                  );
                  dispatch(cartReduxActions.addItemInWishlistFunction(item));
                  setIsModalVisible(!isModalVisible);
                  setProductToDelete(null);
                });
            });
        });
    } catch (error) {
      console.log("failed to add in the wishlist");
    }
  };

  const updateSizeHandlerProduct = (e, item) => {
    const updatedItem = {
      ...item,
      size: e.target.value,
    };
    try {
      axios
        .put(
          `https://dcathelone-default-rtdb.firebaseio.com/dcatheloneCart/${item.id}.json`,
          updatedItem
        )
        .then(() => {
          console.log("updated size of this product successfully");
          dispatch(cartReduxActions.updateSizeOfProductHandler(updatedItem));
        });
    } catch (error) {
      console.log("update size of this product failed");
    }
  };

  const updateQtyHandlerProduct = (e, item) => {
    const updatedItem = {
      ...item,
      quantity: e.target.value,
    };
    try {
      axios
        .put(
          `https://dcathelone-default-rtdb.firebaseio.com/dcatheloneCart/${item.id}.json`,
          updatedItem
        )
        .then(() => {
          console.log("updated quantity of this product successfully");
          dispatch(
            cartReduxActions.updateQuantityOfProductHandler(updatedItem)
          );
        });
    } catch (error) {
      console.log("update quantity of this product failed");
    }
  };

  const receipt_id = "qwsaq1";
  const paymentInitiateHandler = async () => {
    console.log("inside paymentInitiateHandler");
    setLoader(true);
    try {
      const response = await fetch(
        "https://carrental2024backend.onrender.com/order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: Math.ceil(discount) * 100,
            currency: "INR",
            receipt: receipt_id,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create Razorpay order");
      }

      const order = await response.json();
      setLoader(false);
      console.log(order);

      const options = {
        key: "rzp_test_WJBeJ4wZWRWu3i",
        amount: order.amount,
        currency: "INR",
        name: "Dacthelone Shekhar",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: order.id,
        handler: async function (response) {
          const body = { ...response };

          const validateResponse = await fetch(
            "https://carrental2024backend.onrender.com/order/validate",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(body),
            }
          );

          const jsonRes = await validateResponse.json();

          // console.log(jsonRes);
          // console.log(totalItemInCart);
          try {
            setPaymentSuccess(jsonRes.orderId);

            // delete cart
            for (let i = 0; i < totalItemInCart.length; i++) {
              setTimeout(() => {
                navigate("/");
              }, 3000);
              axios
                .delete(
                  `https://dcathelone-default-rtdb.firebaseio.com/dcatheloneCart/${totalItemInCart[i].id}.json`
                )
                .then(() => {
                  dispatch(
                    cartReduxActions.removeItemFromCartFunction(
                      totalItemInCart[i].id
                    )
                  );
                });
            }
          } catch (error) {
            console.log("Error in payment validation:", error);
          }
        },
        prefill: {
          name: "Sachin Shekhar",
          email: "heroft7024@gmail.com",
          contact: "6263877374",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp1 = new window.Razorpay(options);

      rzp1.on("payment.failed", function (response) {
        console.error(response.error);
        alert(`Payment Failed: ${response.error.description}`);
      });

      rzp1.open();
    } catch (error) {
      console.error("Error initializing Razorpay payment:", error);
    }
  };

  return (
    <div className="w-full" style={{ backgroundColor: "#F5F4F5" }}>
      <div className="w-full flex bg-slate-100 sticky top-0 justify-between">
        <div onClick={() => navigate("/")} className="p-4 cursor-pointer">
          <svg
            viewBox="0 0 188 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[20px] md:h-[25px] w-[150px]"
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
        <div className="flex items-center mr-2">
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
          <p className="ml-2 text-[11px] font-semibold leading-tight text-gray-800">
            100% Secure
            <br />
            Payment
          </p>
        </div>
      </div>
      {/* delivery option */}
      {totalItemInCart.length > 0 ? (
        <div>
          <div className="block md:flex w-full mt-2 ">
            <div className="m-2 block md:w-3/5 h-auto bg-white p-4">
              <div className="flex justify-between ">
                <p className="font-bold">Select Delivery Option</p>
                <p className="">
                  Pincode: <span className="font-semibold">486001</span>{" "}
                  <span className="text-[#3643BA] ml-1 cursor-pointer underline decoration-[#3643BA">
                    Change
                  </span>
                </p>
              </div>
              <p className="text-sm text-[#687787] mb-4">
                Choose home delivery or pickup from store
              </p>
              <div className="flex w-full mt-3 ">
                <div className="cursor-pointer w-1/2 border-[2px] border-dotted bg-[#E1E3F5] border-blue-900  p-4">
                  <div className="flex ">
                    <div className="bg-gray-100 p-2">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width="44"
                        height="44"
                        stroke-width="1.5"
                        className="text-[#3643BA] mr-1"
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
                      <p className="text-sm text-gray-600">Get it by Monday </p>
                    </div>
                  </div>
                  <p className="text-gray-400 font-medium mt-3">
                    Delivery Address
                  </p>
                  <p className="text-[#000000] md:text-[12px]">
                    Rewa, Madhyapradesh, 486001
                  </p>
                  <button className="text-white text-[12px] md:text-[10px] border-r-emerald-100 mt-4 p-3 bg-[#3643BA]">
                    LOGIN TO ADD DELIVERY ADDRESS
                  </button>
                </div>
                <div className=" cursor-pointer w-1/2 ml-2 border-[2px] border-gray-300  p-4">
                  <div className="flex ">
                    <div className="w-10 h-10 bg-grey-50 flex items-center justify-center">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width="54"
                        height="54"
                        className="text-black-400 bg-[#F5F4F5] p-1"
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
                      <p className="text-sm text-gray-600">
                        Pick after 3 pm on Monday
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-400 font-medium mt-3 text-[12px] mb-1">
                    Store Address
                  </p>
                  <p className="text-gray-700 md:text-[14px]">
                    <span className="font-semibold text-[14px] md:text-[14px]">
                      DSI BRIGADE ROAD :
                    </span>
                    Eva Mall,No.60 Ashok Nagar, Victoria Layout Rewa
                    Madhyapradesh 486001
                  </p>
                  <div className="text-center align-middle ">
                    <button className="text-black font-bold border-[3px] border-grey-300 mt-4 px-7 py-2  bg-white">
                      Change Pickup Point
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex p-3 border-r-2">
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
                  <span className="font-bold">Congrats!</span> You are eligible
                  for free delivery*
                </p>
              </div>
              <p>
                <span className="font-bold text-[#4E5D6B]">
                  {" "}
                  Item For Pickup*
                </span>
              </p>
              <div className="border p-1 mt-1">
                <p>
                  <span className=" hidden md:block font-bold text-[#344450]">
                    {" "}
                    Items in cart*
                  </span>
                </p>
                {/* below this all the product are added one by one in dom */}
                <div className="">
                  <div className="flex justify-between border-b-[1px] px-1 py-2 mb-2">
                    <div className="flex align-middle text-center p-1">
                      <input
                        type="checkbox"
                        className="w-4 h-4 mt-[5px] text-center bg-[#3643BA]"
                      ></input>
                      <span className="font-semibold ml-1">
                        {totalItemInCart.length} / {totalItemInCart.length}{" "}
                        items selected
                      </span>
                    </div>
                    <button
                      type="button"
                      className=" w-7 h-7 bg-white rounded-full cursor-pointer flex items-center justify-center border border-solid mt-2 "
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        stroke-width="1.5"
                        className="w-4 h-4 text-black "
                      >
                        <path
                          d="M17.2 4.8V3.8C17.2 3.2 16.8 2.8 16.2 2.8H7.8C7.2 2.8 6.8 3.2 6.8 3.8V4.8M9.8 9.2V18.4M14.2 9.2V18.4M19.5 6.5L17.7 20.4C17.6 20.9 17.2 21.3 16.7 21.3H7.3C6.8 21.3 6.4 20.9 6.3 20.4L4.5 6.5H19.5Z"
                          stroke="currentColor"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  {totalItemInCart.map((product) => (
                    <div className="flex md:justify-evenly justify-around my-2 border-b-[1px] py-3">
                      <img
                        className="md:w-1/4 md:h-auto w-[100px] h-[100px]"
                        src={product.image}
                      ></img>
                      <div className="ml-2">
                        <p className="font-bold text-[14px]">
                          {product.title.split(" ")[0]}
                        </p>
                        <p className="font-light text-[13px]">
                          {product.title.split(" ").slice(1, 6).join(" ")}
                        </p>
                        <div className="flex">
                          <div
                            className="cursor-pointer flex font-bold p-2 border bg-slate-100"
                            type="select"
                            style={{
                              borderRadius: "4px",
                            }}
                          >
                            {" "}
                            Size :
                            <select
                              onChange={(e) =>
                                updateSizeHandlerProduct(e, product)
                              }
                              value={product.size}
                              className="ml-1 mt-[2px] bg-gray-100"
                            >
                              <option value={product.size}>
                                {product.size}
                              </option>
                              <option value={"s"}>S</option>
                              <option value={"M"}>M</option>
                              <option value={"L"}>L</option>
                              <option value={"XL"}>XL</option>
                            </select>
                          </div>
                          <div
                            className="cursor-pointer flex font-bold ml-2 p-2 border bg-slate-100"
                            type="select"
                            style={{
                              borderRadius: "4px",
                            }}
                          >
                            {" "}
                            Qty :
                            <select
                              onChange={(e) =>
                                updateQtyHandlerProduct(e, product)
                              }
                              value={product.quantity}
                              className="ml-1 mt-[2px] bg-gray-100"
                            >
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5}>5</option>
                            </select>
                          </div>
                        </div>
                        <div className="flex mt-3">
                          <h1 className="text-16 font-bold mr-3">
                            ₹ {product.price}
                          </h1>
                          <span className=" relative text-16 mr-2 text-[#687787]  after:absolute after:h-[1px] after:w-full after:mt-[12px] after:left-0 after:bg-black">
                            MRP : ₹{" "}
                            {Math.floor(
                              product.price + (product.price * 20) / 100
                            )}
                            .00
                          </span>
                        </div>
                        <p className="font-semibold text-[12px] mb-1 text-[#687787]">
                          Pickup after 3 pm, {formattedDate}
                        </p>
                        <div className="flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 13 14"
                            className=" w-4 fill-orange-400"
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
                          <p>In {product.rating.count} cart(s) now</p>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          toggleModalVisibility(product);
                        }}
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
                          className="w-4 h-4 text-black "
                        >
                          <path
                            d="M17.2 4.8V3.8C17.2 3.2 16.8 2.8 16.2 2.8H7.8C7.2 2.8 6.8 3.2 6.8 3.8V4.8M9.8 9.2V18.4M14.2 9.2V18.4M19.5 6.5L17.7 20.4C17.6 20.9 17.2 21.3 16.7 21.3H7.3C6.8 21.3 6.4 20.9 6.3 20.4L4.5 6.5H19.5Z"
                            stroke="currentColor"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:flex justify-between border mt-2 p-2">
                <div className="flex items-center mb-3">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    stroke-width="1.5"
                    className="mr-3 img-fluid w-8"
                    alt="Security"
                  >
                    <path
                      d="M21.2001 11.3C21.2001 11.5 21.2001 11.7 21.2001 12C21.2001 17.1 17.1 21.2 12 21.2C6.90005 21.2 2.80005 17.1 2.80005 12C2.80005 6.9 6.90005 2.8 12 2.8C13.9 2.8 15.6 3.3 17 4.3M7.80005 11.7L11.1 15C11.3 15.2 11.7 15.2 11.9 15L21.4 5.5"
                      stroke="currentColor"
                    ></path>
                  </svg>
                  <div>
                    <b className="uppercase semibold text-[13px]">
                      100% Secure transaction
                    </b>
                    <p className="mb-0 opacity-50 text-[13px]">
                      Secure SSL encryption
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div
                    style={{ borderRadius: "5px" }}
                    className="cursor-pointer flex items-center mr-[2px]  text-[13px] md:text-[10px] text-gray-900 justify-center border px-4 py-2"
                  >
                    <img
                      className=" w-2 mr-1 "
                      src="https://cdncontent.decathlon.in/_next/static/chunks/src/assets/img/NewIcons/debit-card.8f0851e4cb51b90e.svg"
                      alt="Debit"
                    ></img>
                    CREDIT/DEBIT CARD
                  </div>
                  <div
                    style={{ borderRadius: "5px" }}
                    className="cursor-pointer flex items-center mr-[2px] text-[13px] md:text-[10px] text-gray-900 justify-center border px-4 py-2"
                  >
                    <img
                      className="  w-4  mr-1 "
                      src="https://cdncontent.decathlon.in/_next/static/chunks/src/assets/img/NewIcons/net-banking.a383e6bc45490194.svg"
                      alt="Net Banking"
                    ></img>
                    NET BANKING
                  </div>
                  <div
                    style={{ borderRadius: "5px" }}
                    className="cursor-pointer flex items-center text-[13px] md:text-[10px] text-gray-900   justify-center border px-[50px] py-2"
                  >
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
            <div className="block md:w-2/5 p-4 m-1  bg-white ">
              <p>
                <span className="font-bold"> Order Summary*</span>
              </p>
              <div>
                <div className="flex justify-between mt-2">
                  <p className="font-semibold text-[13px]">
                    Total Price (Inc Gst)
                  </p>
                  <p className="font-semibold text-[13px]">
                    ₹ {Math.floor(totalPrice)}
                  </p>
                </div>
                <div className="flex justify-between mt-2">
                  <p className="font-semibold text-[13px]">Discount</p>
                  <p className="font-semibold text-[13px]">
                    -₹ {Math.floor(totalPrice - discount)}
                  </p>
                </div>
                <div className="flex justify-between border-b-[1px] mt-2 pb-2">
                  <p className="font-semibold text-[13px]">Convenience fee</p>
                  <p className="font-semibold text-[13px]">FREE</p>
                </div>
                <div className="flex justify-between mt-2 pb-2 ">
                  <p className="font-bold">Total </p>
                  <p className="font-bold">₹ {Math.ceil(discount)}</p>
                </div>
                <div className="bg-[#E1E3F5] justify-center p-3  align-middle font-bold text-[15px] flex ">
                  You save ₹ {Math.floor(totalPrice - discount)} in this order
                </div>
                <div>
                  <button
                    onClick={() => paymentInitiateHandler()}
                    className="text-whit mt-4 p-3 text-white bg-[#3643BA] w-full hover:bg-blue-900"
                  >
                    PROCEED TO CHECKOUT
                  </button>
                  {/* payment loader */}
                  {loader && (
                    <div className="flex my-3">
                      Payment Initialize Please wait
                      <section
                        style={{ height: "35px", width: "35px" }}
                        className="ml-5 dots-container"
                      >
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                      </section>
                    </div>
                  )}
                  {/* payment loader */}
                </div>
                <div className="mt-3 p-3">
                  <ul className="flex items-center p-0 m-0 md:items-stretch md:justify-between ">
                    <li className="mr-2.5 md:mb-0 py-4 px-2 h-32 text-center bg-white w-1/3 list-none border-none shadow rounded-t-lg rounded-b-lg">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        stroke-width="1.5"
                        className="w-8 h-8 mx-auto mb-2"
                      >
                        <path
                          d="M21.2001 11.3C21.2001 11.5 21.2001 11.7 21.2001 12C21.2001 17.1 17.1 21.2 12 21.2C6.90005 21.2 2.80005 17.1 2.80005 12C2.80005 6.9 6.90005 2.8 12 2.8C13.9 2.8 15.6 3.3 17 4.3M7.80005 11.7L11.1 15C11.3 15.2 11.7 15.2 11.9 15L21.4 5.5"
                          stroke="currentColor"
                        ></path>
                      </svg>
                      <p className="leading-4 text-[13px]">Easy returns</p>
                    </li>
                    <li className="mr-2.5 py-4 px-2 h-32 text-center bg-white  w-1/3 list-none border-none shadow rounded-t-lg rounded-b-lg">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        stroke-width="1.5"
                        className="w-8 h-8 mx-auto mb-2"
                      >
                        <path
                          d="M21.2001 11.3C21.2001 11.5 21.2001 11.7 21.2001 12C21.2001 17.1 17.1 21.2 12 21.2C6.90005 21.2 2.80005 17.1 2.80005 12C2.80005 6.9 6.90005 2.8 12 2.8C13.9 2.8 15.6 3.3 17 4.3M7.80005 11.7L11.1 15C11.3 15.2 11.7 15.2 11.9 15L21.4 5.5"
                          stroke="currentColor"
                        ></path>
                      </svg>
                      <p className="leading-4 text-[13px]">
                        Home Delivery at Your Doorstep
                      </p>
                    </li>
                    <li className="w-1/3 h-32 px-2 py-4 m-0 text-center list-none bg-white border-none rounded-t-lg rounded-b-lg shadow">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        stroke-width="1.5"
                        className="w-8 h-8 mx-auto mb-2"
                      >
                        <path
                          d="M21.2001 11.3C21.2001 11.5 21.2001 11.7 21.2001 12C21.2001 17.1 17.1 21.2 12 21.2C6.90005 21.2 2.80005 17.1 2.80005 12C2.80005 6.9 6.90005 2.8 12 2.8C13.9 2.8 15.6 3.3 17 4.3M7.80005 11.7L11.1 15C11.3 15.2 11.7 15.2 11.9 15L21.4 5.5"
                          stroke="currentColor"
                        ></path>
                      </svg>
                      <p className="leading-4 text-[13px]">
                        Minimum 2 years warranty
                      </p>
                    </li>
                  </ul>
                </div>
                <div className=" w-full flex bg-white rounded  text-left justify-between items-center p-2  border mt-2">
                  <div className="flex items-center  lg:text-black cursor-pointer px-1   ">
                    <span className="pr-3">
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

          <button
            onClick={() => paymentInitiateHandler()}
            className="md:hidden text-white border-r-emerald-100 mt-4 p-3 bg-[#3643BA] sticky bottom-0 w-full hover:bg-blue-900"
          >
            PROCEED TO CHECKOUT
          </button>
          {paymentSuccess !== null && (
            <>
              <button className="fixed top-[150px]  flex left-1/2 transform -translate-x-1/2 text-white bg-black border mt-4 px-4 py-3 rounded">
                <img src={greensvgimage} className="mt-[3px] mr-2 w-5 h-5" />
                <span>{`Payment Successful. Order ID: ${paymentSuccess}`}</span>
              </button>
            </>
          )}
          {isModalVisible ? (
            <div className="relative bg-gray-200">
              <div className="fixed bottom-0 md:fixed md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:w-[400px] md:h-[350px] w-full h-[300px] p-3 bg-gray-100">
                <div className="mb-4 flex  justify-between">
                  <h2 className="text-[14px] font-bold">DELETE ITEM</h2>
                  <button
                    onClick={toggleModalVisibility}
                    className=" sticky top-0 bg-white-500 border-[2px] px-4 py-2 rounded hover:bg-white-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 text-black"
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
                </div>
                <div className="mb-4 flex">
                  <p className="text-gray-600">
                    Are you sure you want to remove this item from cart?
                  </p>
                </div>
                <div className="mb-4 flex">
                  <div className="mr-3 h-100 w-[100px]">
                    <img src={productToDelete.image}></img>
                  </div>

                  <div>
                    <h3 className="text-gray-800 text-[16px]">
                      {productToDelete.title.slice(0, 6)}
                    </h3>
                    <p className="text-gray-800 text-[14px]">
                      {productToDelete.title.slice(" ")}
                    </p>
                    <div className="flex mt-1 mb-1">
                      <p className="text-gray-600 font-semibold ">
                        Size: {productToDelete.size || "XS"}
                      </p>
                      <p className="text-gray-600 font-semibold ml-2">
                        Qty: {productToDelete.quantity || 1}
                      </p>
                    </div>
                    <p className="text-gray-800 font-bold">
                      ₹ {productToDelete.price}
                    </p>
                  </div>
                </div>

                <div className="flex w-full">
                  <button
                    onClick={() => {
                      removeFromCartBtnHandler(productToDelete);
                    }}
                    className="w-1/3 bg-white-500 border-[2px] border-black px-4 py-2 hover:bg-white-700"
                  >
                    <span className="font-bold text-[18px]"> Delete</span>
                  </button>

                  <button
                    onClick={() => {
                      addToWishListBtnHandler(productToDelete);
                    }}
                    className="flex w-2/3 bg-[#3643BA] justify-center text-white px-4 py-2 rounded ml-4 hover:bg-blue-800"
                  >
                    <img
                      className="mt-1"
                      src="https://cdncontent.decathlon.in/_next/static/chunks/src/assets/img/wishlist/wishlist-white.f17dbe9e8b8e7374.svg"
                      alt="Cart"
                      class="h-4"
                    ></img>
                    <span className="ml-2">Move To Wishlist</span>
                  </button>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      ) : (
        <div className="w-full h-full flex flex-col justify-center items-center my-3 bg-[#F5F4F5]">
          <img className="w-1/2 md:w-1/4" src={missingItemSvg}></img>
          <h2 className=" my-2 text-[34px] font-bold opacity-80 ">
            Missing cart items ?
          </h2>
          <button
            onClick={() => navigate("/menpage")}
            className="bg-white flex my-2 border hover:bg-gray-50 font-semibold py-2 px-[60px] rounded"
          >
            <span>Continue Shopping</span>
            <img
              src="https://cdncontent.decathlon.in/_next/static/chunks/src/assets/img/product/right-arrow.3290f90024272225.svg"
              className=" img-fluid float-right ml-5 mt-[7px]"
              alt="Arrow Icon"
            ></img>
          </button>
        </div>
      )}
      {productAddedWishlistButtonBoolean ? (
        <div className="fixed top-[100px] md:top-[140px] flex left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-lg shadow-md">
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
            The selected item Added To Wishlist{" "}
          </button>
        </div>
      ) : null}
      <FooterPage />
    </div>
  );
};

export default CartPage;
