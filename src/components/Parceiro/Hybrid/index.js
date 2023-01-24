import HybridSoftareGroup from "../../../assets/img/HybridSoftareGroup.jpeg";
import LogoHybrid from "../../../assets/img/inicial_logo_hybrid.png";
import cloudflow from "../../../assets/img/hybrid/cloudflow.png";
import ic3d from "../../../assets/img/hybrid/ic3d.png";
import packz from "../../../assets/img/hybrid/packz.png";
import stepz from "../../../assets/img/hybrid/stepz.png";
import Swal from 'sweetalert2';

const index = ({ item }) => {
    const Card1 = () => {
        Swal.fire({
            title: 'STEPZ',
            text: 'STEPZ é o poderoso editor PDF baseado na premiada tecnologia PACKZ. O software de pré-impressão completo e fácil de integrar é perfeito para impressoras digitais que buscam aumentar a eficiência de produção e melhorar a qualidade de suas impressões.',
            imageUrl: stepz,
            imageWidth: 400,
            imageHeight: 380,
            imageAlt: 'Custom image',
        })
    }
    const Card2 = () => {
        Swal.fire({
            title: 'PACKZ',
            text: 'O PACKZ coloca a produção de pré-impressão em um nível mais alto com a combinação única de ações automatizadas e ferramentas de pré-impressão dedicadas. Com suas funções de edição e garantia de qualidade, o editor profissional de PDF torna os designs prontos para impressão em qualquer processo de impressão.',
            imageUrl: packz,
            imageWidth: 400,
            imageHeight: 380,
            imageAlt: 'Custom image',
        })
    }
    const Card3 = () => {
        Swal.fire({
            title: 'CLOUDFLOW',
            text: 'O CLOUDFLOW é um conjunto de fluxo de trabalho de produção modular para processamento de arquivos, gerenciamento de ativos, prova digital e automação de fluxo de trabalho. É uma plataforma de aplicativo baseada na web especificamente adaptada para os gráficos de embalagem com suporte para PDF, separação de cores, trapping, triagem, provas e muito mais. O CLOUDFLOW é um conjunto de fluxo de trabalho de produção modular para processamento de arquivos, gerenciamento de ativos, prova digital e automação de fluxo de trabalho. É uma plataforma de aplicativo baseada na web especificamente adaptada para os gráficos de embalagem com suporte para PDF, separação de cores, trapping, triagem, provas e muito mais.',
            imageUrl: cloudflow,
            imageWidth: 400,
            imageHeight: 380,
            imageAlt: 'Custom image',
        })
    }
    const Card4 = () => {
        Swal.fire({
            title: 'IC3D',
            text: 'O iC3D é o primeiro software de design que permite em tempo real gerar maquetes virtuais 3D, operando e renderizando em velocidades incomparáveis, o iC3D abrange todas as aplicações de design e tipos de modelos, ele permite que embalagens cartonadas, rótulos, flexíveis, garrafas, embalagens retráteis, POS/POP e visualização na loja sejam perfeitamente combinados em qualquer cena.',
            imageUrl: ic3d,
            imageWidth: 400,
            imageHeight: 380,
            imageAlt: 'Custom image',
        })
    }
    return (
        <>  
            <div className="w-full h-[230px] mt-[80px] bg-hynbrid z-40 bg-cyan-500 shadow-lg shadow-cyan-500/5"></div>
            {/* Quem é Enfocus? */}
            {/* <div className="w-full h-auto flex flex-col items-center mt-10">
                <img alt="Logo Hybrid" src={LogoHybrid}/>
                <div className="w-[50%] text-justify mt-10">
                    Com soluções de softwares para embalagens, HYBRID Software ajuda milhares de clientes a superar suas metas em todas as áreas de pré-impressão e impressão, reduzindo custos, simplificando processos e acelerando os tempos de entrega.
                </div>
            </div> */}
            <div className="w-full flex">
                <div className="w-[55%] py-[4%]">
                    <div className="text-[45px] pl-[93px] text-[#393C3E]"><b>Hybrid Software Group</b></div>
                    <div>
                        <div className="text-[18px] font-light pl-[93px] pr-[70px] mt-6 leading-[35px] text-justify">Com soluções de softwares para embalagens, HYBRID Software ajuda milhares de clientes a superar suas metas em todas as áreas de pré-impressão e impressão, reduzindo custos, simplificando processos e acelerando os tempos de entrega.</div>
                        <div className="text-[18px] font-light pl-[93px] pr-[70px] mt-6 leading-[35px] text-justify">Com escritórios na Bélgica, Alemanha, Estados Unidos, Reino Unido, Espanha, França, Itália e China, além de uma rede global de parceiros, a HYBRID Software é uma empresa de desenvolvimento de software empresarial focada em ferramentas de produtividade inovadoras para a indústria de artes gráficas.</div>
                        <div className="text-[18px] font-light pl-[93px] pr-[70px] mt-6 leading-[35px] text-justify">O fluxo de trabalho CLOUDFLOW da HYBRID Software, os editores PACKZ e STEPZ e as soluções de qualidade de impressão oferecem um conjunto exclusivo de vantagens que incluem fluxos de trabalho PDF nativos, soluções de nuvem corporativa, tecnologia escalável com baixo custo de propriedade e integração direta com as principais soluções MIS e dispositivos de saída. Esses produtos são usados por milhares de clientes em todo o mundo em todas as áreas de pré-impressão e impressão, incluindo rótulos e embalagens, caixas dobráveis, papelão ondulado, grande formato e impressão digital. HYBRID Software é uma subsidiária do Hybrid Software Group.</div>
                    </div>
                </div>
                <div className="w-[45%] flex justify-center items-center">
                    <div className="w-[80%]"><img alt="Efi" src={HybridSoftareGroup} /></div>
                </div>
            </div>
            <div className="w-full flex flex-col items-center">
                <div className="w-[70%] py-[3%]">
                    {/* <div className="text-[45px] pl-[93px] text-[#393C3E]"><b>Quem é Enfocus ?</b></div> */}
                    <div className="flex flex-col items-center">
                        <div className="text-[45px] pl-[93px] text-[#393C3E] font-medium">NOSSOS PRODUTOS PREMIADOS</div>
                        {/* <div className="text-[18px] font-light pl-[93px] pr-[70px] mt-6 leading-[35px] text-center">
                            Aqui você encontra uma parte dos nossos melhores produtos.
                        </div> */}
                    </div>
                </div>
                {/* <div className="w-[45%] flex justify-center items-center">
                    <div className="w-[80%]"><img alt="Automação" src={automacao} /></div>
                </div> */}
            </div>

            <div className="w-full">
                <div className="w-full flex justify-center text-[45px] pl-[93px] text-[#393C3E]"><b>Nossas Soluções</b></div>
                <div class="md:flex md:justify-center md:space-x-8 md:px-14">

                    {/* <!-- box-1 --> */}
                    <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                        <div class="w-sm">
                            <img class="w-64" src={stepz} alt="Logo Boarding Pass" />
                            <div class="mt-4 text-[#134780] text-center">
                                <h1 class="text-xl font-bold">STEPZ</h1>
                                <p class="mt-4 text-gray-600">Poderoso editor de PDF para aplicações de impressão digital...</p>
                                <button className="mt-4 py-2 px-14 rounded-full bg-[#134780] text-white tracking-widest hover:bg-[#134880dc] transition duration-200" onClick={Card1}>MAIS</button>
                            </div>
                        </div>
                    </div>

                    {/* <!-- box-2 --> */}
                    <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                        <div class="w-sm">
                            <img class="w-64" src={packz} alt="PitStopPro" />
                            <div class="mt-4 text-green-600 text-center">
                                <h1 class="text-xl font-bold text-[#134780]">PACKZ</h1>
                                <p class="mt-4 text-gray-600">O PACKZ coloca a produção de pré-impressão em um nível mais alto com a combinação...</p>
                                <button class="mt-4 py-2 px-14 rounded-full bg-[#134780] text-white tracking-widest hover:bg-[#134880dc] transition duration-200" onClick={Card2}>MAIS</button>
                            </div>
                        </div>
                    </div>

                    {/* <!-- box-3 --> */}
                    <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                        <div class="w-sm">
                            <img class="w-64" src={cloudflow} alt="PitStopServer" />
                            <div class="mt-4 text-green-600 text-center">
                                <h1 class="text-xl font-bold text-[#134780]">CLOUDFLOW</h1>
                                <p class="mt-4 text-gray-600">O CLOUDFLOW é um conjunto de fluxo de trabalho de produção modular para...</p>
                                <button class="mt-4 mb-4 py-2 px-14 rounded-full bg-[#134780] text-white tracking-widest hover:bg-[#134880dc] transition duration-200" onClick={Card3}>MAIS</button>
                            </div>
                        </div>
                    </div>

                    {/* <!-- box-4 --> */}
                    <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                        <div class="w-sm">
                            <img class="w-64" src={ic3d} alt="PitStopServer" />
                            <div class="mt-4 text-green-600 text-center">
                                <h1 class="text-xl font-bold text-[#134780]">IC3D</h1>
                                <p class="mt-4 text-gray-600">O iC3D é o primeiro software de design que permite em tempo real...</p>
                                <button class="mt-4 mb-4 py-2 px-14 rounded-full bg-[#134780] text-white tracking-widest hover:bg-[#134880dc] transition duration-200" onClick={Card4}>MAIS</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default index;