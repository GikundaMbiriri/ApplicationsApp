import React from "react";
import bannerImage from "../../assets/images/nbMulti.png";
import Image from "next/image";
function Banner() {
  return (
    <div className="relative bg-indigo-500 lg:h-full  md:h-4/5 h-3/5">
      <Image
        className="  h-full w-full object-cover  md:pt-4 pt-16"
        src={bannerImage}
        alt=""
      />

      <div className="mx-auto w-full  absolute top-0   max-w-7xl pt-28 md:pt-16 pb-20 text-center lg:py-48 lg:text-left text-white">
        <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text7xl lg:text-5xl xl:text-7xl">
            <span className="block xl:inline ">
              Join your <span className="text-[skyblue]">Dream</span>
            </span>{" "}
            <span className="block xl:inline">
              <span className="text-[skyblue]">School</span> today
            </span>
          </h1>
          <p className="mx-auto mt-3 max-w-md text-lg sm:text-xl md:mt-5 md:max-w-5xl ">
            Get matched and apply to quality Education institutions globally.
          </p>
          <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div className="mt-3 rounded-md sm:mt-0 sm:ml-3">
              <a
                href="/signin"
                className="flex w-full items-center  text-indigo-500 justify-center rounded-md  bg-white px-8 py-3 text-base font-medium hover:bg-gray-200 md:py-4 md:px-10 md:text-lg"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
