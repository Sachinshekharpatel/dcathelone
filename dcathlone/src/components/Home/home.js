import React, { useState, useEffect, useRef } from "react";
import Header from "../header/header";
import imageoneSlide from "./imageslideone.avif";
import imageTwoSlide from "./saveimagetwo.avif";
import imageThreeSlide from "./saveimagethree.avif";
import menimage from "./menimage.avif";
import womenimage from "./womenimage.avif";
import kidsimage from "./kidsimage.avif";
import saleimage from "./saleimage.avif";
import shoesimage from "./shoesimage.avif";
import sportsacceimage from "./sportsacceimage.avif";
import sportsequipimage from "./sportsequipimage.avif";
import summarcollectionimage from "./summarcollectionimage.avif";
import {useNavigate} from "react-router-dom"
const images = [imageoneSlide, imageTwoSlide, imageThreeSlide];
const HomePage = () => {
  const [transForm, setTransForm] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      setTransForm(!transForm);
    }, 2000);

    return () => clearTimeout(timer);
  }, [transForm]);

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

  return (
    <div>
      <button onClick={() => navigate("/productdetailpage")} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
      Single productdetailpage
      </button>
      <Header></Header>

      <div class="w-full flex flex-wrap bg-white items-center justify-center h-auto  py-3 grid-cols-2 md:grid-cols-8 gap-4">
        <div class="py-2 flex flex-wrap md:px-7 md:py-3 md:flex-nowrap justify-around">
          <a href="/" class="w-1/4 max-w-32">
            <div class="flex flex-col gap-1 justify-start items-center">
              <div class="w-full px-2.5 relative">
                <img
                  alt="Men"
                  fetchpriority="high"
                  width="305"
                  height="315"
                  decoding="async"
                  data-nimg="1"
                  src={menimage}
                  style={{ color: "transparent" }}
                />
              </div>
              <div class="md:text-12 text-8 text-center font-medium md:max-w-[22ch] bKLdgR text-black break-words">
                <span>Men</span>
              </div>
            </div>
          </a>
          <a href="/" class="w-1/4 max-w-32">
            <div class="flex flex-col gap-1 justify-start items-center">
              <div class="w-full px-2.5 relative">
                <img
                  alt="Women"
                  fetchpriority="high"
                  width="305"
                  height="315"
                  decoding="async"
                  data-nimg="1"
                  src={womenimage}
                  style={{ color: "transparent" }}
                />
              </div>
              <div class="md:text-12 text-8 text-center font-medium md:max-w-[22ch] bKLdgR text-black break-words">
                <span>Women</span>
              </div>
            </div>
          </a>
          <a href="/" class="w-1/4 max-w-32">
            <div class="flex flex-col gap-1 justify-start items-center">
              <div class="w-full px-2.5 relative">
                <img
                  alt="Kids"
                  fetchpriority="high"
                  width="305"
                  height="315"
                  decoding="async"
                  data-nimg="1"
                  src={kidsimage}
                  style={{ color: "transparent" }}
                />
              </div>
              <div class="md:text-16 text-10 text-center font-medium md:max-w-[22ch] bKLdgR text-black break-words">
                <span>Kids</span>
              </div>
            </div>
          </a>
          <a href="/" class="w-1/4 max-w-32">
            <div class="flex flex-col gap-1 justify-start items-center">
              <div class="w-full px-2.5 relative">
                <img
                  alt="Shoes"
                  fetchpriority="high"
                  width="305"
                  height="315"
                  decoding="async"
                  data-nimg="1"
                  src={shoesimage}
                  style={{ color: "transparent" }}
                />
              </div>
              <div class="md:text-16 text-10 text-center font-medium md:max-w-[22ch] bKLdgR text-black break-words">
                <span>Shoes</span>
              </div>
            </div>
          </a>
          <a href="/" class="w-1/4 max-w-32">
            <div class="flex flex-col gap-1 justify-start items-center">
              <div class="w-full px-2.5 relative">
                <img
                  alt="Summer Collection"
                  fetchpriority="high"
                  width="305"
                  height="315"
                  decoding="async"
                  data-nimg="1"
                  src={summarcollectionimage}
                  style={{ color: "transparent" }}
                />
              </div>
              <div class="md:text-16 text-10 text-center font-medium md:max-w-[22ch] bKLdgR text-black break-words">
                <span>Summer Collection</span>
              </div>
            </div>
          </a>
          <a href="/" class="w-1/4 max-w-32">
            <div class="flex flex-col gap-1 justify-start items-center">
              <div class="w-full px-2.5 relative">
                <img
                  alt="Sale"
                  fetchpriority="high"
                  width="305"
                  height="315"
                  decoding="async"
                  data-nimg="1"
                  src={saleimage}
                  style={{ color: "transparent" }}
                />
              </div>
              <div class="md:text-16 text-10 text-center font-medium md:max-w-[22ch] bKLdgR text-black break-words">
                <span>Sale</span>
              </div>
            </div>
          </a>
          <a href="/" class="w-1/4 max-w-32">
            <div class="flex flex-col gap-1 justify-start items-center">
              <div class="w-full px-2.5 relative">
                <img
                  alt="Sports Accessories"
                  fetchpriority="high"
                  width="305"
                  height="315"
                  decoding="async"
                  data-nimg="1"
                  src={sportsacceimage}
                  style={{ color: "transparent" }}
                />
              </div>
              <div class="md:text-16 text-10 text-center font-medium md:max-w-[22ch] bKLdgR text-black break-words">
                <span>Sports Accessories</span>
              </div>
            </div>
          </a>
          <a href="/" class="w-1/4 max-w-32">
            <div class="flex flex-col gap-1 justify-start items-center">
              <div class="w-full px-2.5 relative">
                <img
                  alt="Sports Equipment"
                  fetchpriority="high"
                  width="305"
                  height="315"
                  decoding="async"
                  data-nimg="1"
                  src={sportsequipimage}
                  style={{ color: "transparent" }}
                />
              </div>
              <div class="md:text-16 text-10 text-center font-medium md:max-w-[22ch] bKLdgR text-black break-words">
                <span>Sports Equipment </span>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="relative w-full overflow-hidden">
        <div ref={slideRef} className="flex w-full m">
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
    </div>
  );
};

export default HomePage;
