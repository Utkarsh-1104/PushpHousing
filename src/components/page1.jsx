import React from "react";
import Bgimg from "../assets/bg2.png";
import Navitems from "./Navitems";
import Logo from "../assets/logo.png";
import Srch from "../assets/srch.png";
import "../components/responsive.css";

const Page1 = () => {
    return (
        <div id="bg" style={{backgroundImage:`url(${Bgimg})`}} className='bg-cover h-auto'>
            <div id="navbar" className="flex place-content-between pt-6">
                <img src={Logo} className="h-20 w-40 ml-56" alt="" />
                <div id="navlist" className="flex text-base mr-56 pt-6">
                   <Navitems navItem="Home"/>
                   <Navitems navItem="About"/>
                   <Navitems navItem="Agent"/>
                   <Navitems navItem="Services"/>
                   <Navitems navItem="Properties"/>
                   <Navitems navItem="Contact"/>
                </div>
            </div>
            <p className='font-[Kalam] text-black text-[4rem] pt-52 text-center'>घर खरीदे, अपनों से</p>
            <p className='font-[Alkatra] text-center pt-8 text-3xl text-gray-700'>अपने सपनों का घर खोलें</p>
            <p className='font-[Alkatra] text-center text-3xl text-gray-700'>यहाँ से आपका सफर शुरू होता है!</p>
            <form class="rounded px-8 pb-8 mb-4">
                <div class="flex place-content-center pb-60 mt-12">
                    <input class="rounded-full w-[45rem] py-7 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Search location"/>
                    <img src={Srch} className="h-20 w-20" alt="" />
                </div>
            </form>
        </div>
    )
}
export default Page1;