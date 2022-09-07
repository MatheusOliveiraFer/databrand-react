import React from 'react';
import { Outlet } from 'react-router-dom';

import Logo from "../../assets/img/Logo-databrand.png";
import Toggle from "../../assets/img/toggle-mobile.png";
import video from "../../assets/video/databrand.mp4";

import Contact from "../../components/Contact";

const Header = () => {
    return (
        <div>
            {/* MOBILE */}
            <div className="w-full h-16 flex border-b border-[#dfdada] shadow-md l:hidden">
                <div className="w-[60%] h-full flex items-center px-8 t-f1:px-10">
                    <div className="w-[70%] t-f3:w-[50%]">
                        <img alt="Logo databrand" src={Logo} />
                    </div>
                </div>
                <div className="w-[40%] h-full flex items-center justify-end px-8 t-f1:px-10">
                    <img alt="Menu Mobile" src={Toggle} className="cursor-pointer" />
                </div>
            </div>
            {/* DESKTOP */}
            <div className="m-f1:hidden l:flex fixed top-0 z-10 w-full h-14 bg-white justify-center items-center border-b shadow-md border-[#dfdada]">
                <div className="w-[90%] h-full flex">
                    <div className="w-[50%] grid grid-cols-2 d-f1:w-[60%]">
                        <div className="flex items-center justify-start col-span-2 pl-[15px] d-f2:pl-[20px] d-f3:pl-[30px]">
                            <div className="w-[35%] d-f1:w-[25%] d-f2:w-[20%]">
                                <img alt="Logo databrand" src={Logo} />
                            </div>
                        </div>
                    </div>
                    <div className="w-[50%] grid grid-cols-4 d-f1:w-[40%]">
                        <div className="flex items-center justify-center text-[14px] font-medium text-[#134780] hover:bg-[#134780] hover:text-[#FFF] cursor-pointer">Home</div>
                        <div className="flex items-center justify-center text-[14px] font-medium text-[#134780] hover:bg-[#134780] hover:text-[#FFF] cursor-pointer">Soluções</div>
                        <div className="flex items-center justify-center text-[14px] font-medium text-[#134780] hover:bg-[#134780] hover:text-[#FFF] cursor-pointer">Mercados</div>
                        <div className="flex items-center justify-center text-[14px] font-medium text-[#134780] hover:bg-[#134780] hover:text-[#FFF] cursor-pointer">Conteúdos</div>
                    </div>
                </div>
            </div>
            <div className="w-full h-screen">
                <video src={video} autoPlay loop muted />
            </div>
            <Outlet />
            <div className="fixed bottom-0 w-full h-14 bg-white border-t shadow-lg flex items-center justify-center text-[#134780] font-medium">
                contato@databrand.com.br
            </div>
            <Contact />
        </div>
    )
}
export default Header;