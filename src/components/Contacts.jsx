import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImgOne from "../assets/img/one.png"
import ImgTwo from "../assets/img/two.png"
import ImgThree from "../assets/img/three.png"
import ImgFour from "../assets/img/four.png"
import ImgFive from "../assets/img/five.png"
import ConOne from "../assets/img/ConOne.png"
import ConTwo from "../assets/img/ConTwo.png"
import ConThree from "../assets/img/ConThree.png"

const Contacts = () => {
  const [coins, setCoins] = useState(0); // state for coin count

  const handleClick = () => {
    setCoins(prev => prev + 12); // earn +12 per tap
  };

  return (
    <div>
      <div className='bg-gray-900 min-h-screen p-4'>
        <div>
          <Link to='/'>
            <h1 className="text-white font-bold text-2xl text-center mb-6">Hamster Kombat</h1>
          </Link>
          <div className="flex justify-between items-center mb-6">
            <div className="bg-gray-700 p-4 rounded-2xl text-center flex-1 mx-2">
              <h3 className="text-orange-600 text-lg font-semibold">Earn per tap</h3>
              <span className="text-white font-bold">🪙 +12</span>
            </div>

            <div className="bg-gray-700 p-4 rounded-2xl text-center flex-1 mx-2">
              <h3 className="text-blue-600 text-lg font-semibold">Coins to level up</h3>
              <span className="text-white font-bold">10 M</span>
            </div>

            <div className="bg-gray-700 p-4 rounded-2xl text-center flex-1 mx-2">
              <h3 className="text-green-600 text-lg font-semibold">Profit per hour</h3>
              <span className="text-white font-bold">🪙 +636</span>
            </div>
          </div>

          {/* Counter display */}
          <div className="text-center text-white text-4xl font-bold mb-4">
            🪙 {coins}
          </div>
          <div className="flex justify-center ">
            <div className="border border-gray-500 p-8 pt-3 rounded-2xl w-118 shadow-2xl">
              <div className="text-end text-2xl p-5">❌</div>
              <div className="text-white  w-100 bg-gray-700 rounded-2xl p-2 mt-5">
                <div className="flex justify-start gap-3 border-b border-gray-400 p-3">
                  <img src={ConOne} alt="" className="w-25" />
                  <div className="font-bold">
                    <h3 className="text-lg">Тоp 10 cmc pairs</h3>
                    <p className="text-sm text-gray-400">Profit per hour</p>
                    <span className="">🪙 120</span>
                  </div>
                </div>
                <div className="p-3">
                  <span className="border-r p-2 border-gray-400">lvl 1 </span>
                  <span className="p-2">🪙 192</span>

                </div>

              </div>
              <div className="text-white  w-100 bg-gray-700 rounded-2xl p-2 mt-5">
                <div className="flex justify-start gap-3 border-b border-gray-400 p-3">
                  <img src={ConTwo} alt="" className="w-25" />
                  <div className="font-bold">
                    <h3 className="text-lg">Mene coins</h3>
                    <p className="text-sm text-gray-400">Profit per hour</p>
                    <span className="">🪙 2.3K</span>
                  </div>
                </div>
                <div className="p-3">
                  <span className="border-r p-2 border-gray-400">lvl 1 </span>
                  <span className="p-2">🪙 192</span>

                </div>

              </div>
              <div className="text-white  w-100 bg-gray-700 rounded-2xl p-2 mt-5">
                <div className="flex justify-start gap-3 border-b border-gray-400 p-3">
                  <img src={ConThree} alt="" className="w-20 h-10" />
                  <div className="font-bold">
                    <h3 className="text-lg">Тоp 10 cmc pairs</h3>
                    <p className="text-sm text-gray-400">Profit per hour</p>
                    <span className="">🪙 120</span>
                  </div>
                </div>
                <div className="p-3">
                  <span className="border-r p-2 border-gray-400">lvl 1 </span>
                  <span className="p-2">🪙 192</span>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex text-white justify-between font-bold text-2xl mb-5">
          <span className="">
            ⚡️ 6500 / 6500
          </span>
          <h3 className="">Boost</h3>
        </div>
        <div className="flex justify-between items-center text-gray-400 font-bold bg-gray-700 rounded-2xl p-2">
          <span className="text-center items-center flex justify-center flex-wrap w-20 p-1 rounded-2xl hover:bg-gray-900">
            <img src={ImgOne} alt="" className="w-12" />
            Exchange
          </span>
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
    </div>
  )
}

export default Contacts
