import React from "react";
import Header from "../header/header";
import emptywishlist from "./emptywishlist.svg";
import { useNavigate } from "react-router-dom";
const WishList = () => {
    const navigate = useNavigate();
  return (
    <div>
      <Header></Header>
      <div className="flex flex-col justify-center items-center mt-4">
        <img
          className="w-2/6 md:w-1/6 mt-14 "
          src={emptywishlist}
          alt="Empty Wishlist"
        ></img>
        <div className="mt-10 lg:mt-[30px] text-18 lg:text-[35px] font-normal lg:font-semibold text-grey-500">
          <h1 className="text-30 font-bold text-[#687787] text-[28px]">Login to Add/View Wishlist</h1>
        </div>
        <button onClick={() => navigate('/')} className="bg-[#3643BA] hover:bg-blue-700 text-white font-bold py-2 px-[120px] rounded-sm mt-4">
          LOGIN / SIGNUP
        </button>
      </div>
    </div>
  );
};

export default WishList;
