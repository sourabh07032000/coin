import React, { useState } from "react";

function Trade() {
  const [paymentType, setPaymentType] = useState("inr");
  return (
    <div className="pb-[10vh]">
      <div className=" bg-[#3F83F7] text-white ">
        {" "}
        <div className="h-[12vh] w-[90%] ml-[5%] flex justify-between items-center ">
          <h1 className="text-[35px] font-medium p-3">Trading</h1>
          <i class="fa fa-headphones text-[50px] p-3 " aria-hidden="true"></i>
        </div>
        <div className="w-[95%] ml-[2.5%] flex justify-evenly h-[20vh]">
          <div className="flex flex-col text-[30px]">
            <h1>Coin</h1>
            <h1>0.00</h1>
          </div>
          <div className="h-[10vh] w-[0.8px] bg-[white]"></div>
          <div className="flex flex-col text-[30px]">
            <h1>Paying</h1>
            <h1>0.00</h1>
          </div>{" "}
          <div className="h-[10vh] w-[0.8px] bg-[white]"></div>
          <div className="flex flex-col text-[30px]">
            <h1>Profit</h1>
            <h1>0.00</h1>
          </div>
        </div>
      </div>
      <div className="w-[95%] h-[25vh] flex flex-col justify-evenly ml-[2.5%] lg:text-[25px] text-[15px]">
        <h1>SK**62 Just trade and earned 5,831.60</h1>

        <h1>SC**78 Just trade and earned 5,882.20</h1>

        <h1>DF**20 Just trade and earned 9,210.95</h1>
      </div>
      <div className="flex w-[95%] ml-[2.5%] text-[white] ">
        <div className="text-xl w-[50%] h-[10vh] bg-[#5EBA89] flex justify-center items-center rounded-s">
          Buy Coin
        </div>
        <div className="text-xl w-[50%] h-[10vh] bg-[gray] flex justify-center items-center rounded-ee">
          Selling Coin
        </div>
      </div>
      <div className="w-[95%] ml-[2.5%] flex items-center h-[10vh]">
        <h1 className="text-[30px]">Payment Type</h1>
      </div>

      <div className="w-[95%] ml-[2.5%] flex  h-[10vh]">
        <button style={{borderColor:paymentType==="inr"&&"blue"}} onClick={()=>setPaymentType("inr")} className="text-xl w-[50%] h-[10vh]  flex justify-center items-center rounded-s border ">
          INR
        </button>
        <button style={{borderColor:paymentType==="usdt"&&"blue"}} onClick={()=>setPaymentType("usdt")} className="text-xl w-[50%] h-[10vh] border flex justify-center items-center rounded-ee">
          USDT
        </button>
      </div>
{paymentType==="inr"&&
      <div className="INR DIV">
        <div className="w-[95%] ml-[2.5%] flex h-[10vh] items-center ">
          Total Amounts
        </div>
        <div className="w-[95%] ml-[2.5%] flex h-[15vh] items-center">
          <i class="fa fa-inr p-1" aria-hidden="true"></i>
          <input
            className="w-[90%]  h-[10vh] border p-2 rounded"
            type="number"
            placeholder="Above 200.00"
          />
        </div>
        <div className=" w-[95%] ml-[2.5%] gap-2 flex flex-wrap">
          <button
            type="button"
            class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
          >
            200
          </button>
          <button
            type="button"
            class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
          >
            500
          </button>
          <button
            type="button"
            class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
          >
            1000
          </button>
          <button
            type="button"
            class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
          >
            2000
          </button>
          <button
            type="button"
            class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
          >
            5000
          </button>
        </div>
        <div className=" w-[95%] ml-[2.5%] font-medium text-[#3F83F7]">
          You will receive: 0.00 Coin
        </div>
        <div className="flex flex-col items-center w-full">
          <div className="-mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8 w-full">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Buy
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Reward
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Rate
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-[#5EBA89]">
                        0-1000
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-[#5EBA89]">
                        5
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-[#5EBA89]">
                        1.5
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        1000
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        4
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        1.2
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[95%] ml-[2.5%] flex  h-[10vh]">
          <div className="text-xl w-[100%] h-[8vh]  flex justify-center items-center rounded border bg-[#5EBA89]">
            Confirm Buy{" "}
          </div>
        </div>
      </div>
      }
      {paymentType==="usdt"&&
      <div className="USDT DIV">
        <div className="w-[95%] ml-[2.5%] flex h-[10vh] items-center justify-between ">
         <h1>Total Amounts</h1> 
         <h1> <input type="checkbox" /> Included exchange fee</h1>
        </div>
        <div className="w-[95%] ml-[2.5%] flex h-[15vh] items-center">
          <i class="fa fa-inr p-1" aria-hidden="true"></i>
          <input
            className="w-[90%]  h-[10vh] border p-2 rounded"
            type="number"
            placeholder="Above 50.00"
          />
        </div>
        <div className=" w-[95%] ml-[2.5%] gap-2 flex flex-wrap">
          <button
            type="button"
            class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
          >
            50
          </button>
          <button
            type="button"
            class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
          >
            100
          </button>
          <button
            type="button"
            class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
          >
            300
          </button>
          <button
            type="button"
            class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
          >
            500
          </button>
          <button
            type="button"
            class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
          >
            1000
          </button>
        </div>
        <div className=" w-[95%] ml-[2.5%] font-medium text-[#3F83F7]">
          You will receive: 0.00 Coin
        </div>
        <div className="flex flex-col items-center w-full">
          <div className="-mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8 w-full">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Buy
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Reward
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Rate
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-[#5EBA89]">
                        0-1000
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-[#5EBA89]">
                        5
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-[#5EBA89]">
                        1.5
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        1000
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        4
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        1.2
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[95%] ml-[2.5%] flex  h-[10vh]">
          <div className="text-xl w-[100%] h-[8vh]  flex justify-center items-center rounded border bg-[#5EBA89]">
            Confirm Buy{" "}
          </div>
        </div>
      </div>}
    </div>
  );
}

export default Trade;
