import circle from "../../assets/gif/circle.gif";
import headphones from "../../assets/img/headphones.png";
import efi from "../../assets/img/efi-partner-premiercoralis.jpg";
import product from "../../assets/img/product.png";
import G7expert from "../../assets/img/G7expert.png";
import EFI from "../../assets/img/EFI.png";
import CreativeEdge from "../../assets/img/CreativeEdge.png";
import { NavLink } from "react-router-dom";

const Index = () => {
    return (
        <>
            <div className="w-full h-[230px] mt-[80px] bg-efi  z-40"></div>
            <div className="w-full flex justify-center">
                <div className="mt-[30px]">
                    <div className="text-[40px] font-light text-[#134780] border-b border-[#13488041]">Who is EFI</div>
                </div>
            </div>
            <div className="w-full flex justify-center">
                <div className="mt-[60px]">
                    <div className="text-[18px] font-light text-center leading-loose">All at EFI are relentlessly focused on just one thing: the growth and success of your print business. <br />That’s why tens of millions of print professionals worldwide turn to EFI to fuel their success.</div>
                </div>
            </div>
            <div className="w-full flex justify-center mt-[60px]">
                <div class="max-w-sm rounded overflow-hidden shadow-[0_35px_50px_-15px_rgba(0,0,0,0.2)] mr-10">
                    <img className="w-full svg svg-elem-1 active" src={circle} alt="Sunset in the mountains" />
                    <div className="w-[100px] h-[100px] relative bottom-[245px] left-[145px]">
                        <img className="w-full svg svg-elem-1 active" src={product} alt="Sunset in the mountains" />
                    </div>
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Best products</div>
                        <p class="text-gray-700 text-base">
                            EFI is leading the worldwide transformation from analog to digital imaging. Powering this transformation is our commitment to reinvesting 16% of our revenue into research and development every year. We don’t just see that as an investment in our company. It’s an investment in yours as well.
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div>
                </div>

                <div class="max-w-sm rounded overflow-hidden shadow-[0_35px_50px_-15px_rgba(0,0,0,0.2)] mr-10">
                    <img className="w-full svg svg-elem-1 active" src={circle} alt="Sunset in the mountains" />
                    <div className="w-[100px] h-[100px] relative bottom-[240px] left-[145px]">
                        <img className="w-full svg svg-elem-1 active" src={headphones} alt="Sunset in the mountains" />
                    </div>
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Best opportunity</div>
                        <p class="text-gray-700 text-base">
                            From Fiery to superwide inkjet, from the lowest cost per label to the most automated business processes, EFI develops products to support a complete end-to-end workflow for customers worldwide – giving partners a distinct competitive advantage to succeed.
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div>
                </div>

                <div class="max-w-sm rounded overflow-hidden shadow-[0_35px_50px_-15px_rgba(0,0,0,0.2)]">
                    <img className="w-full svg svg-elem-1 active" src={circle} alt="Sunset in the mountains" />
                    <div className="w-[100px] h-[100px] relative bottom-[240px] left-[145px]">
                        <img className="w-full svg svg-elem-1 active" src={headphones} alt="Sunset in the mountains" />
                    </div>
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Best support</div>
                        <p class="text-gray-700 text-base">
                            Our 3,000+ worldwide team members prove our commitment to you every day by developing breakthrough technologies which, in turn, can help accelerate your sales of EFI solutions now and into the future.
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div>
                </div>
            </div>
            <div className="w-full h-[680px] flex mt-20">
                <div className="w-[55%]">
                    <div className="text-[45px] pl-[93px] text-[#393C3E]">The <b className="font-medium">Premier Partner Program</b></div>
                    <div>
                        <div className="text-[18px] font-light pl-[93px] pr-[70px] mt-6 leading-[35px]">All EFI Fiery Display Graphics resellers in Latin America are required to have at least one person certified to act as Technical Sales Support and also to perform installations and training of new customers. Resellers must also provide first level support.</div>
                        <div className="text-[18px] font-light pl-[93px] pr-[70px] mt-6 leading-[35px]">EFI and Coralis believe in the basic foundation that moves every business: Knowledge.</div>
                        <div className="text-[18px] font-light pl-[93px] pr-[70px] mt-6 leading-[35px]">The focus is to create a mass of manpower capable of using all the software functionalities.</div>
                        <div className="text-[18px] font-light pl-[93px] pr-[70px] mt-6 leading-[35px]">EFI Fiery XF Software has more than 70,000 installations worldwide. Coralis is responsible, as Master Distributor for LATAM, for creating the color culture, production automation and resource savings using EFI Fiery Display Graphics technologies.</div>
                    </div>
                </div>
                <div className="w-[45%]">
                    <img alt="Efi" src={efi} />
                </div>
            </div>
            <div className="w-full flex justify-center mt-10 text-[40px] font-light text-[#134780]">EFI <b className="font-semibold">Fiery Solutions</b></div>
            <div class="md:flex md:justify-center md:space-x-8 md:px-14">
                    {/* <!-- box-1 --> */}
                    <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                        <div class="w-sm">
                            <img class="w-64" src={EFI} alt="Logo EFI" />
                            <div class="mt-4 text-[#134780] text-center">
                                <h1 class="text-xl font-bold">EFI</h1>
                                <p class="mt-4 text-gray-600 mb-10">Todos nós da EFI estamos incansavelmente concentrados em apenas...</p>
                                <NavLink className="mt-8 mb-4 py-2 px-14 rounded-full bg-[#134780] text-white tracking-widest hover:bg-[#134880dc] transition duration-200" to="/Efi">MAIS</NavLink>
                            </div>
                        </div>
                    </div>

                    {/* <!-- box-2 --> */}
                    <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                        <div class="w-sm">
                            <img class="w-64" src={G7expert} alt="Logo G7 Expert" />
                            <div class="mt-4 text-green-600 text-center">
                                <h1 class="text-xl font-bold text-[#134780]">G7 Expert</h1>
                                <p class="mt-4 text-gray-600">A metodologia de calibração G7 é a melhor, mais simples e eficiente forma...</p>
                                <button class="mt-8 mb-4 py-2 px-14 rounded-full bg-[#134780] text-white tracking-widest hover:bg-[#134880dc] transition duration-200">MAIS</button>
                            </div>
                        </div>
                    </div>

                    {/* <!-- box-3 --> */}
                    <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                        <div class="w-sm">
                            <img class="w-64" src={CreativeEdge} alt="Logo Creative Egde" />
                            <div class="mt-4 text-green-600 text-center">
                                <h1 class="text-xl font-bold text-[#134780]">Creative Edge</h1>
                                <p class="mt-4 text-gray-600">É a desenvolvedora de um conjunto premiado de aplicativos para embalagem...</p>
                                <button class="mt-8 mb-4 py-2 px-14 rounded-full bg-[#134780] text-white tracking-widest hover:bg-[#134880dc] transition duration-200">MAIS</button>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}
export default Index;