/* eslint-disable no-unused-vars */
import React from "react";
// import Cook from "../assets/cooker.json";
import Lottie from "lottie-react";

const Banner = () => {
  return (
    <div>
      <div className="flex sm:flex-col md:flex-row justify-around items-center my-container">
        <div className="">
          <img src="https://img.freepik.com/premium-photo/professional-chef-prepares-vegetables-frying-pan-cooking-healthy-vegetarian-food-meal_192985-2249.jpg?w=900" alt="" />
          {/* <Lottie animationData={Cook} /> */}
        </div>
        <div className="p-10">
          <h2 className="text-7xl font-bold  text-color">
          Chef`s <br />
            <span className="mx-16">Kitchen</span> <br />
          </h2>
          <p className="text-2xl font-semibold text-slate-200 mt-12 mb-12">
          Discover the World`s Most Delicious Destinations
          </p>
          <button className="btn-primary">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
