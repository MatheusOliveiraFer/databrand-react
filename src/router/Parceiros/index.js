import G7expert from "../../assets/img/G7expert.png";
import EFI from "../../assets/img/efiFiery.png";
import CreativeEdge from "../../assets/img/CreativeEdge.png";
import Enfocus from "../../assets/img/EnfocusBranco.png";
import UltimateTechnoGraphics from "../../assets/img/UltimateTechnoGraphics.png";
import Hybrid from "../../assets/img/hybrid/AuthorizedResellerBadge.png";
import databrand from "../../assets/img/databrand.png";
import { NavLink } from "react-router-dom";
import Email from "../../components/Contact/contactEmail";


const Index = () => {
    return (
        <>
            {/* <!-- Section Hero --> */}
            <div class="bg-gray-100 py-14">
                {/* <h3 class="text-2xl tracking-widest text-[#134780] text-center">SOLUÇÕES</h3> */}
                <h1 class="mt-8 text-center text-5xl text-[#134780] font-medium">SOLUÇÕES & SERVIÇOS</h1>

                {/* <!-- Box 1--> */}
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

                    {/* <!-- box-4 --> */}
                    <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                        <div class="w-sm">
                            <img class="w-64" src={Enfocus} alt="Logo Enfocus" />
                            <div class="mt-4 text-green-600 text-center">
                                <h1 class="text-xl font-bold text-[#134780]">Enfocus</h1>
                                <p class="mt-4 text-gray-600 mb-10">É uma empresa de software especializada no desenvolvimento...</p>
                                <NavLink className="mt-8 mb-4 py-2 px-14 rounded-full bg-[#134780] text-white tracking-widest hover:bg-[#134880dc] transition duration-200" to="/Enfocus">MAIS</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Box 2--> */}
                <div class="md:flex md:justify-center md:space-x-8 md:px-14">
                    {/* <!-- box-1 --> */}
                    <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                        <div class="w-sm">
                            <img class="w-64" src={UltimateTechnoGraphics} alt="Logo EFI" />
                            <div class="mt-4 text-[#134780] text-center">
                                <h1 class="text-[19px] font-bold">Ultimate TechnoGraphics</h1>
                                <p class="mt-4 mb-10 text-gray-600">Inventou a imposição digital com o primeiro lançamento do Ultimate Impostrip®...</p>
                                <NavLink className="py-2 px-14 rounded-full bg-[#134780] text-white tracking-widest hover:bg-[#134880dc] transition duration-200" to="/UltimateTechnoGraphics">MAIS</NavLink>
                            </div>
                        </div>
                    </div>

                    {/* <!-- box-2 --> */}
                    <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                        <div class="w-sm">
                            <div className="flex justify-center items-center h-[259px]"><img class="w-64" src={Hybrid} alt="Logo G7 Expert" /></div>
                            <div class="mt-4 text-green-600 text-center">
                                <h1 class="text-xl font-bold text-[#134780]">HYBRID Software</h1>
                                <p class="mt-4 text-gray-600 mb-10">É uma empresa de desenvolvimento de software focada em ferramentas...</p>
                                <NavLink className="mt-8 mb-4 py-2 px-14 rounded-full bg-[#134780] text-white tracking-widest hover:bg-[#134880dc] transition duration-200" to="/Hybrid">MAIS</NavLink>
                            </div>
                        </div>
                    </div>

                    {/* <!-- box-3 --> */}
                    <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                        <div class="w-sm">
                            <div className="flex justify-center items-center h-[259px]"><h1 className="text-2xl font-bold text-[#134780]">EM BREVE...</h1></div>
                            <div class="mt-4 text-green-600 text-center">
                                <h1 class="text-xl font-bold text-[#134780]">Novidades</h1>
                                <p class="mt-4 text-gray-600 h-[73px]"></p>
                                <button class="mt-8 mb-4 py-2 px-14 rounded-full bg-[#134780] text-white tracking-widest hover:bg-[#134880dc] transition duration-200">MAIS</button>
                            </div>
                        </div>
                    </div>

                    {/* <!-- box-4 --> */}
                    <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                        <div class="w-sm">
                            <img class="w-64" src={databrand} alt="Logo Enfocus" />
                            <div class="mt-4 text-green-600 text-center">
                                <h1 class="text-xl font-bold text-[#134780]">Consultoria</h1>
                                <p class="mt-4 text-gray-600">A databrand atua com consultoria nos principais mercados de impressão...</p>
                                <button class="mt-8 mb-4 py-2 px-14 rounded-full bg-[#134780] text-white tracking-widest hover:bg-[#134880dc] transition duration-200">MAIS</button>
                            </div>
                        </div>
                    </div>
                </div>
                <h4 class="text-center font-semibold text-xl mt-14 text-[#134780]">10 anos dedicados a <b className="font-bold">PESSOAS |  PROCESSOS | TECNOLOGIA</b></h4>
            </div>
            <Email />
        </>
    );
}
export default Index;