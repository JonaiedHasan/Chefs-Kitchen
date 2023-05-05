/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import ChefCard from "./chefCard";
import Sections from "./Sections";

const Home = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    // fetch("https://assignment-10-server-astro177.vercel.app/chefdata")
    fetch("https://assignment-10-server-amber.vercel.app/chefdata")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);
  return (
    <div>
      <Banner />
      <p className="text-center font-semibold text-5xl text-color mb-12">Discover Delicious Recipes from Top Chefs</p>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 justify-center items-center gap-8 my-container">
      {chefs.map((chef)=>(<ChefCard key={chef.id} chef={chef}/>))}
      </div>
      <div>
        <Sections/>
      </div>
    </div>
  );
};

export default Home;
