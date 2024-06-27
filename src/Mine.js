import React from "react";

function Mine() {
  return (
    <div>
      <div className=" bg-[#3F83F7] text-white ">
        {" "}
        <div className="h-[12vh] w-[90%] ml-[5%] flex justify-between items-center ">
          <h1 className="text-[35px] font-medium p-3">Trading</h1>
          <i class="fa fa-cog text-[50px] p-3 " aria-hidden="true"></i>
        </div>
      </div>
      <div className="w-[95%] ml-[2.5%] shadow-2xl h-[100vh]">
        <div className="w-[95%] ml-[2.5%] flex h-[20vh] items-center justify-between  ">
          <div className="w-[20%] h-full flex items-center ">
            <img
              src="https://avatars.githubusercontent.com/u/62023238?v=4"
              alt=""
            />
          </div>
          <div className="w-[60%] h-full flex justify-center flex-col ">
            <b>ID:ALFY95</b>
            <h2 className="text-[#3F83F7]">Invite code:akuvop</h2>
          </div>
          <div className="w-[15%] h-full flex justify-center flex-col gap-2">
            <button className="bg-[#3F83F7] text-white rounded-xl border">
              copy
            </button>
            <button className="bg-[#3F83F7] text-white rounded-xl border">
              copy
            </button>
          </div>
        </div>
     
        <div className="w-[95%] ml-[2.5%] h-[10vh] p-1 ">
        <b className="w-[100%] h-[5vh]">Coin: 0.00</b>
        <div className="w-[100%] h-[5vh] flex justify-between items-center">
            <b className="w-[50%]">Available: 0.00</b>
            
            <button className="bg-[#3F83F7] w-[50%] text-white rounded-xl border">
            withdraw
            </button>
           
        </div>
        

      </div>

<div className="w-[95%] ml-[2.5%] h-[10vh] flex justify-evenly items-center text-[gray]">
    <div className="w-[30%] flex flex-col justify-evenly ">
        <b>Profit </b>
        <b>00.00</b>
        
    </div>
    <div className="w-[30%] flex flex-col justify-evenly">
        <b>Invitation</b>
        <b>00.00</b>
    </div>
    <div className="w-[30%] flex flex-col justify-evenly">
        <b>Processing</b>
        <b>00.00</b>
    </div>
</div>

<div className="w-[95%] ml-[2.5%] h-[8vh] flex justify-evenly items-center">
    <div className="w-[10%] text-[25px]"><i class="fa fa-user-plus" aria-hidden="true"></i></div>
    <div className="w-[50%] text-[gray]">Invite</div>
    <div className="w-[10%] text-[gray]"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>
</div> <hr />
<div className="w-[95%] ml-[2.5%] h-[8vh] flex justify-evenly items-center">
    <div className="w-[10%] text-[25px]"><i class="fa fa-tasks" aria-hidden="true"></i></div>
    <div className="w-[50%] text-[gray]">Task Center</div>
    <div className="w-[10%] text-[gray]"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>
</div> <hr />
<div className="w-[95%] ml-[2.5%] h-[8vh] flex justify-evenly items-center">
    <div className="w-[10%] text-[25px]"><i class="fa fa-usd" aria-hidden="true"></i></div>
    <div className="w-[50%] text-[gray]">KYC Partner</div>
    <div className="w-[10%] text-[gray]"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>
</div> <hr />
<div className="w-[95%] ml-[2.5%] h-[8vh] flex justify-evenly items-center">
    <div className="w-[10%] text-[25px]"><i class="fa fa-headphones" aria-hidden="true"></i></div>
    <div className="w-[50%] text-[gray]">Customer Service</div>
    <div className="w-[10%] text-[gray]"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>
</div> <hr />
<div className="w-[95%] ml-[2.5%] h-[8vh] flex justify-evenly items-center">
    <div className="w-[10%] text-[25px]"><i class="fa fa-gift" aria-hidden="true"></i></div>
    <div className="w-[50%] text-[gray]">Coupon</div>
    <div className="w-[10%] text-[gray]"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>
</div> <hr />
<div className="w-[95%] ml-[2.5%] h-[8vh] flex justify-evenly items-center">
    <div className="w-[10%] text-[25px]"><i class="fa fa-inbox" aria-hidden="true"></i></div>
    <div className="w-[50%] text-[gray]">Inbox</div>
    <div className="w-[10%] text-[gray]"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>
</div> <hr />
      </div>

     
    </div>
  );
}

export default Mine;
