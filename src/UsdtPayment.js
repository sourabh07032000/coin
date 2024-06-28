import React from "react";
import { useNavigate } from "react-router-dom";

function UsdtPayment() {
    const navigate = useNavigate()
  return (
    <div>
      <div className="w-[95%] ml-[2.5%] h-[10vh] flex justify-evenly items-center">
        <div className="w-[10%]">
          <i onClick={()=>navigate("/Trade")} class="fa fa-chevron-left" aria-hidden="true"></i>
        </div>
        <div className="w-[70%] text-[22px]">USDT Trading</div>
        <div className="w-[10%]">
          {" "}
          <i class="fa fa-headphones text-[30px] " aria-hidden="true"></i>
        </div>
      </div>
      <div className="w-[95%] ml-[2.5%] flex justify-evenly items-center h-[30vh]  ">
        <img
          className="h-[80%]"
          src="https://media.istockphoto.com/id/1347277567/vector/qr-code-sample-for-smartphone-scanning-on-white-background.jpg?s=612x612&w=0&k=20&c=PYhWHZ7bMECGZ1fZzi_-is0rp4ZQ7abxbdH_fm8SP7Q="
          alt=""
        />
      </div>

      <div className="w-[95%] ml-[2.5%] flex justify-evenly items-center h-[7vh]">
        <div className="w-[60%] font-extralight ">USDT Amount</div>
        <div className="w-[20%] font-medium">300.00</div>
        <button className="w-[20%] bg-[#3F83F7] text-white rounded-xl border">
          copy
        </button>
      </div>
      <div className="w-[95%] ml-[2.5%] flex justify-evenly items-center h-[7vh]">
        <div className="w-[20%] font-extralight">Address</div>
        <div className="w-[60%] text-[10px]">TN37oSsFABDrLKFnjNZkiKqZi2tBVkNyV8</div>
        <button className="w-[20%] bg-[#3F83F7] text-white rounded-xl border">
          copy
        </button>
      </div>
      <div className="w-[95%] ml-[2.5%] flex justify-evenly items-center h-[7vh]">
        <div className="w-[50%] font-extralight">Network</div>
        <div className="w-[50%] flex justify-end">TRc2</div>
        
      </div>
      <div className="w-[95%] ml-[2.5%] flex justify-evenly items-center h-[7vh]">
        <div className="w-[50%] font-extralight">Exchange Fee</div>
        <div className="w-[50%] flex justify-end">Include</div>
        
      </div>
      <div className="w-[95%] ml-[2.5%] flex justify-evenly items-center h-[7vh]">
        <div className="w-[50%] font-extralight">Total Amount Recieved</div>
        <div className="w-[50%] flex justify-end">2213.00 Coin</div>
        
      </div>
      <div className="w-[95%] ml-[2.5%] flex justify-evenly items-center h-[7vh]">
        <div className="w-[50%] font-extralight">Platform USDT exchange unit price
        </div>
        <div className="w-[50%] flex justify-end">94.95 Coin / USDT</div>
        
      </div>
    </div>
  );
}

export default UsdtPayment;
