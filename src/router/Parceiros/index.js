import G7expert from "../../assets/img/G7expert.png";
import EFI from "../../assets/img/EFI.png";
import CreativeEdge from "../../assets/img/CreativeEdge.png";
import Enfocus from "../../assets/img/Enfocus.png";

const Index = () => {
    return (
        <>
                {/* <!-- Section Hero --> */}
                <div class="bg-gray-100 py-14">
                    <h3 class="text-2xl tracking-widest text-[#134780] text-center">PARCEIROS</h3>
                    <h1 class="mt-8 text-center text-5xl text-[#134780] font-bold">Nossos Recursos & Serviços.</h1>

                    {/* <!-- Box --> */}
                    <div class="md:flex md:justify-center md:space-x-8 md:px-14">
                        {/* <!-- box-1 --> */}
                        <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                            <div class="w-sm">
                                <img class="w-64" src={EFI} alt="Logo EFI" />
                                <div class="mt-4 text-[#134780] text-center">
                                    <h1 class="text-xl font-bold">EFI</h1>
                                    <p class="mt-4 text-gray-600">Todos nós da EFI estamos incansavelmente concentrados em apenas uma coisa...</p>
                                    <button class="mt-8 mb-4 py-2 px-14 rounded-full bg-[#134780] text-white tracking-widest hover:bg-[#134880dc] transition duration-200">MAIS</button>
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
                                    <h1 class="text-xl font-bold text-[#134780]">Creative Edge Softwar</h1>
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
                                    <p class="mt-4 text-gray-600">É uma empresa de software especializada no desenvolvimento de ferramentas para...</p>
                                    <button class="mt-8 mb-4 py-2 px-14 rounded-full bg-[#134780] text-white tracking-widest hover:bg-[#134880dc] transition duration-200">MAIS</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h4 class="text-center font-semibold text-xl mt-14 text-[#134780]">10 anos de muita <b>PARCEIRA</b> & <b>APRENDIZADO</b></h4>
                </div>

            {/* <!-- Footer --> */}
            <footer class="text-center py-16 bg-gradient-to-r from-[#134780] text-sm">
                <p class="text-white">
                    Para qualquer dúvida ou contato conosco, clique no símbolo do Whatsapp ou<br />
                    envie e-mail para <span className="underline">contato@databrand.com.br</span>
                </p>
                <p class="mt-20 text-white"><span class="underline text-green-200 cursor-pointer">© databrand</span> todos os direitos reservados.</p>
            </footer>
        </>
    );
}
export default Index;