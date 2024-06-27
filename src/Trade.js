import React from "react";

function Trade() {
  return (
    <div>
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
        <div className="text-xl w-[50%] h-[10vh] bg-[green] flex justify-center items-center rounded-s">Buy Coin</div>
        <div className="text-xl w-[50%] h-[10vh] bg-[gray] flex justify-center items-center rounded-ee">Selling Coin</div>
      </div>
      <div className="w-[95%] ml-[2.5%] flex items-center h-[10vh]">
        <h1 className="text-[30px]">Payment Type</h1>
      </div>

      
    </div>
  );
}

export default Trade;
