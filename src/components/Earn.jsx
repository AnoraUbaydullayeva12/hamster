import React, { useState } from "react";
import { Link } from "react-router-dom";
import Img from "../assets/img/hamster.png";
import ImgOne from "../assets/img/one.png";
import ImgTwo from "../assets/img/two.png";
import ImgThree from "../assets/img/three.png";
import ImgFour from "../assets/img/four.png";
import ImgFive from "../assets/img/five.png";

const Earn = () => {
  const [coins, setCoins] = useState(0); // state for coin count

  const handleClick = () => {
    setCoins((prev) => prev + 12); // earn +12 per tap
  };

  return (
    <div className="bg-gray-900 min-h-screen p-4 relative">
      <div>
        <h1 className="text-white font-bold text-2xl text-center mb-6">
          Hamster Kombat
        </h1>

        <div className="flex justify-between items-center mb-6">
          <Link to="/earn">
            <div className="bg-gray-700 p-4 rounded-2xl text-center w-100 mx-2">
              <h3 className="text-orange-600 text-lg font-semibold">
                Earn per tap
              </h3>
              <span className="text-white font-bold">🪙 +12</span>
            </div>
          </Link>
          <div className="bg-gray-700 p-4 rounded-2xl text-center  mx-2 w-100">
            <h3 className="text-blue-600 text-lg font-semibold">
              Coins to level up
            </h3>
            <span className="text-white font-bold">10 M</span>
          </div>

          <div className="bg-gray-700 p-4 rounded-2xl text-center  mx-2 w-100">
            <h3 className="text-green-600 text-lg font-semibold">
              Profit per hour
            </h3>
            <span className="text-white font-bold">🪙 +636</span>
          </div>
        </div>
        <div className="flex justify-center items-center p-3 bg-gray-900 border border-gray-300 w-200 rounded-4xl text-white z-10 absolute">
          <div className="">
            <Link to="/">
              <span className="text-end text-3xl flex justify-end">❌</span>
            </Link>
            <div className="w-full p-10">
              <span className="flex justify-between items-center text-2xl w-150 bg-gray-700 rounded-4xl p-2 mb-10">
                <p className="border-r p-2 border-gary-400">lvl 1</p>
                <p className="">+2 🪙</p>
                <p className="">-1000 🪙</p>
              </span>

              <span className="flex justify-between items-center text-2xl w-150 bg-gray-700 rounded-4xl p-2 mb-10">
                <p className="border-r p-2 border-gary-400">lvl 1</p>
                <p className="">+3 🪙</p>
                <p className="">-2500 🪙</p>
              </span>
              <span className="flex justify-between items-center text-2xl w-150 bg-gray-700 rounded-4xl p-2">
                <p className="border-r p-2 border-gary-400">lvl 1</p>
                <p className="">+4 🪙</p>
                <p className="">-6000 🪙</p>
              </span>
            </div>
          </div>
        </div>
        {/* Counter display */}
        <div className="text-center text-white text-4xl font-bold mb-4">
          🪙 {coins}
        </div>

        {/* Tap button */}
        <div className="flex justify-center mb-15">
          <button
            onClick={handleClick}
            className="hover:bg-gray-800 text-black font-bold py-4 px-10 rounded-full text-lg shadow-md transition-all"
          >
            <img src={Img} alt="img" className="w-100" />
          </button>
        </div>
      </div>
      <div className="flex text-white justify-between font-bold text-2xl mb-5">
        <span className="">⚡️ 6500 / 6500</span>
        <h3 className="">Boost</h3>
      </div>
      <div className="flex justify-between items-center text-gray-400 font-bold bg-gray-700 rounded-2xl p-2 absolute bottom-0 w-full">
        <Link to="/contacts">
          <span className="text-center items-center flex justify-center flex-wrap w-20 p-1 rounded-2xl hover:bg-gray-900">
            <img src={ImgOne} alt="" className="w-12" />
            Exchange
          </span>
        </Link>

        <span className=" hover:bg-gray-900 text-center items-center flex justify-center flex-wrap w-20 p-1 rounded-2xl">
          <img src={ImgTwo} alt="" className="w-10 mb-2" />
          Mine
        </span>
        <span className=" hover:bg-gray-900 text-center items-center flex justify-center flex-wrap w-20 p-1 rounded-2xl">
          <img src={ImgThree} alt="" className="w-12 mb-2" />
          Friends
        </span>
        <span className=" hover:bg-gray-900 text-center items-center flex justify-center flex-wrap w-20 p-1 rounded-2xl">
          <img src={ImgFour} alt="" className="w-12 mb-2" />
          Earn
        </span>
        <span className=" hover:bg-gray-900 text-center items-center flex justify-center flex-wrap w-20 p-1 rounded-2xl">
          <img src={ImgFive} alt="" className="w-10 mb-2" />
          Mine
        </span>
      </div>
    </div>
  );
};

export default Earn;
