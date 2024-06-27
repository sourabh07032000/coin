import React from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import i1 from "./i1.png";
import i2 from "./i2.png";
import Header from "./Header";

function App() {
  return (
    <div>
        <Header></Header>
  
      <div className=" w-[95%] flex justify-center ml-[2.5%] rounded-xl">
        <Carousel autoPlay infiniteLoop showThumbs={false}>
          <div>
            <img className="lg:h-[50vh] h-[30vh]" src={i1} alt="Image 1" />
          </div>
          <div>
            <img className="lg:h-[50vh] h-[30vh]" src={i2} alt="Image 2" />
          </div>
        </Carousel>
      </div>
      <h1 className="lg:text-[35px] text-[20px] h-[7vh] w-[95%] ml-[2.5%] flex  items-end">
        Purchase
      </h1>
      <div className="w-[95%] ml-[2.5%] h-[30vh]  flex justify-between">
        <div className="w-[50%] flex flex-col h-[70%]  justify-center">
          <div className="flex ">
            <img
              className="lg:h-[10vh] h-[5vh]"
              src="https://cryptologos.cc/logos/tether-usdt-logo.png"
              alt=""
            />
            <div className="flex flex-col">
              <h1 className="lg:text-[30px] text-[20px]">USDT</h1>
              <h1 className="lg:text-[20px] text-[15px]">1USDT≈95.62Coin(Max)</h1>
            </div>
          </div>
          <button
            type="button"
            class=" mt-[5%] w-[100%] py-2.5 px-5 me-2 mb-2 text-2xlfont-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            <i class="fa fa-user-plus" aria-hidden="true"></i> Invite
          </button>
        </div>
        <div className="w-[50%] flex  justify-end h-[40%] items-center  ">
          <button
            type="button"
            class="w-[50%] h-[60%] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-[10px] px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Above 50.00
          </button>
        </div>
      </div>
      <button
        type="button"
        class="p-5 w-[95%] ml-[2.5%] h-[10vh] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        <i class="fa fa-telegram" aria-hidden="true"></i> Giant Coin Welfare
        Group
      </button>
      <div className="w-[95%]"></div>

      <div class="table-container">
    <div class="table-wrapper">
      <div class="overflow-x-auto">
        <div class="p-1.5 min-w-full inline-block align-middle">
          <div class="overflow-hidden main-content">
            <table class="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th scope="col" class="px-6 py-3 text-start text-xl font-medium text-gray-500 uppercase">
                    Rank
                  </th>
                  <th scope="col" class="px-6 py-3 text-start text-xl font-medium text-gray-500 uppercase">
                    Trader
                  </th>
                  <th scope="col" class="px-6 py-3 text-start text-xl font-medium text-gray-500 uppercase">
                    Profit
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-2xlfont-medium text-gray-800">
                    1
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-2xltext-gray-800">
                    John Brown
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-2xltext-gray-800">
                    $45,000
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-2xlfont-medium text-gray-800">
                    2
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-2xltext-gray-800">
                    Jim Green
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-2xltext-gray-800">
                    $27,000
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-2xlfont-medium text-gray-800">
                    3
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-2xltext-gray-800">
                    Joe Black
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-2xltext-gray-800">
                    $31,000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  );
}

export default App;
