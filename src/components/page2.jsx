import React from "react";
import Pig from "../assets/piggy.png";
import Wallet from "../assets/wallet.png";
import List from "../assets/list.png";
import Lock from "../assets/lock.png";
import Box from "./box";
import Content from "./Box-content";

const Page2 = () => {
    return (
        <div className="">
            <p className='text-[#E86ED0] text-sm text-center pt-12'>OUR SERVICES</p>
            <p className='text-4xl py-6 text-center'>Lorem ipsum ijsn sorn ed js jjef jje</p>
            <div className="flex">
                <div className="box-content w-auto mx-auto">
                    <img src={Pig} className="w-[70px] h-[78px] mx-auto" mx-auto alt="" />
                    <Box content={"No Downpayment"}/>
                    <Content text={"A small river named Duden flows by their place and supplies it with the necessary regelialia."}/>
                </div>
                <div className="box-content w-auto mx-auto">
                    <img src={Wallet} className="w-[70px] h-[78px] mx-auto" alt="" />
                    <Box content={"No Downpayment"}/>
                    <Content text={"A small river named Duden flows by their place and supplies it with the necessary regelialia."}/>
                </div>
                <div className="box-content w-auto mx-auto">
                    <img src={List} className="w-[70px] h-[78px] mx-auto" alt="" />
                    <Box content={"No Downpayment"}/>
                    <Content text={"A small river named Duden flows by their place and supplies it with the necessary regelialia."}/>
                </div>
                <div className="box-content w-auto mx-auto">
                    <img src={Lock} className="w-[70px] h-[78px] mx-auto" alt="" />
                    <Box content={"No Downpayment"}/>
                    <Content text={"A small river named Duden flows by their place and supplies it with the necessary regelialia."}/>
                </div>
            </div>
        </div>
    )
}
export default Page2;