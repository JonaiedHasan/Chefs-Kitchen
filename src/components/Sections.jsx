/* eslint-disable no-unused-vars */
import React from "react";
import { TbStarFilled, TbStarHalfFilled } from "react-icons/tb";

const Sections = () => {
  return (
    <div className="my-container">
      <p className="text-center text-color text-5xl font-semibold mt-24 mb-4">
       Most Popular Recipes
      </p>
      <p className="text-center text-indigo-200 text-xl mb-12">
      A Journey Through Our Chef`s Recipes
      </p>
      <div className="carousel w-full rounded-2xl">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg?w=996&t=st=1683197004~exp=1683197604~hmac=edccaa162993295f258376692f04422b73e801e3c32d19162666f1d4893ee404"
            className="w-full h-4/6"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://media.istockphoto.com/id/1213818930/photo/traditional-mexican-food.jpg?s=612x612&w=0&k=20&c=oWZyaXOiPkwUF8ehSDYZvdDCcJNkdxz2qXNFeQg111A="
            className="w-full h-4/6"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://media.istockphoto.com/id/646841110/photo/enjoying-dinner-with-friends.jpg?s=612x612&w=0&k=20&c=meDCN9FcJS-V_JPX_-UAEq8pc7keIs0jQRlO3n5n5i0="
            className="w-full h-4/6"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://media.istockphoto.com/id/1413602407/photo/tacos-dinner.jpg?s=612x612&w=0&k=20&c=NfcRTQ1tIc1b_CRsTRH2PTlmOEqNH8wTBJwVXhPEUuE="
            className="w-full h-4/6"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      <div>
        <p className="text-center text-color text-5xl font-semibold mb-8">Reviews</p>
        <div className="grid lg:grid-cols-3 justify-center items-center gap-4">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <p className="font-bold text-2xl ">John Smith</p>
            </figure>
            <div className="flex justify-center items-center mt-2 text-yellow-500">
              <TbStarFilled />
              <TbStarFilled />
              <TbStarFilled />
              <TbStarFilled />
              <TbStarFilled />
            </div>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Excellent!</h2>
              <p>
                ``They made it just the way i want, great choice of foods they
                have. I`ll keep ordering from them``
              </p>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <p className="font-bold text-2xl ">Maria Rodriguez</p>
            </figure>
            <div className="flex justify-center items-center mt-2 text-yellow-500">
              <TbStarFilled />
              <TbStarFilled />
              <TbStarFilled />
              <TbStarFilled />
              <TbStarHalfFilled/>
            </div>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Outstanding!</h2>
              <p>
                ``Very happy with their menu, really enjoyed their food. Can`t wait to try more of their foods``
              </p>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <p className="font-bold text-2xl ">Spaghetti Carbonara</p>
            </figure>
            <div className="flex justify-center items-center mt-2 text-yellow-500">
              <TbStarFilled />
              <TbStarFilled />
              <TbStarFilled />
              <TbStarFilled />
            </div>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Satisfied!</h2>
              <p>
                ``They were a little packed with people when we reached there. But still their service was top notch``
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sections;
