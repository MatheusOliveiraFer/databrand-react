import circle from "../../../assets/gif/circle.gif";
import Enfocus from "../../../assets/img/LogoEnfocus.png";
import EnfocusCertifield from "../../../assets/img/EnfocusCertifiedReseller.png";

import automacao from "../../../assets/img/automacao.png";

import BoardingPass from "../../../assets/img/boardingPass.png";
import PitStopServer from "../../../assets/img/PitStopServer.png";
import connect from "../../../assets/img/connect.png";

import PitStopPro from "../../../assets/img/PitStopPro.png"
import Switch from "../../../assets/img/Switch.png";
import efi3_ from "../../../assets/img/efi3_.jpeg";

import oportunidade from "../../../assets/img/oportunidade.jpeg";
import produto from "../../../assets/img/produto.jpeg";
import suporte from "../../../assets/img/suporte.jpeg";

import Swal from 'sweetalert2';

const index = ({ item }) => {
    const Card1 = () => {
        Swal.fire({
            title: 'BoardingPass',
            text: 'O BoardingPass da Enfocus permite que o pessoal de atendimento ao cliente valide instantaneamente os arquivos em PDF para impressão. Integrado com um cliente de e-mail, o BoardingPass identifica erros que exigem o reenvio de um arquivo e automaticamente redige um e-mail de resposta. Os agentes de atendimento ao cliente ganham o poder de fornecer feedback rápido e compreensível do trabalho. Não é necessária Pré-impressão',
            imageUrl: BoardingPass,
            imageWidth: 400,
            imageHeight: 380,
            imageAlt: 'Custom image',
        })
    }
    const Card2 = () => {
        Swal.fire({
            title: 'PitStop Pro',
            text: 'O PitStop Pro é o padrão para validação de PDF do setor. É a única ferramenta que fornece poder de pré-impressão sobre PDF. O PitStop soluciona o processo de provas de pré-impressão, edição, reparo e relatório para qualquer desafio de PDF que sua equipe possa enfrentar.',
            imageUrl: PitStopPro,
            imageWidth: 400,
            imageHeight: 380,
            imageAlt: 'Custom image',
        })
    }
    const Card3 = () => {
        Swal.fire({
            title: 'PitStop Server',
            text: 'O PitStop Server traz recursos poderosos de controle de qualidade e automação para o seu processo de produção de PDF através de: •	Monitoramento de vários pontos de envio de arquivo, como servidores FTP, e-mail e pastas ativas de rede, •	Encaminhamento dos seus arquivos de forma inteligente para prova de pré-impressão de PDF e correção, •	Automação total da entrega e arquivamento dos arquivos de produção. O PitStop Server automatiza a integração, as provas de pré-impressão e o reparo de arquivos PDF, fornecendo simultaneamente o acesso a funcionalidades que ampliam sua abordagem para automação do fluxo de trabalho',
            imageUrl: PitStopServer,
            imageWidth: 400,
            imageHeight: 380,
            imageAlt: 'Custom image',
        })
    }
    const Card4 = () => {
        Swal.fire({
            title: 'Switch',
            text: 'O caminho para a automação é construído sobre conexões. A integração começa com a conexão de sistemas empresariais em um único fluxo de trabalho automatizado. Conectar tudo com tudo. Switch é a única verdadeira plataforma de automação de fluxo de trabalho que conecta: ERP, Web2Print, Imposição, Prova On-line, Gerenciamento de Cores, Fechamento de arquivo e muito mais. Switch é a única plataforma que automatiza seus processos, independentemente de suas aplicações ou dispositivos de impressão.',
            imageUrl: Switch,
            imageWidth: 400,
            imageHeight: 380,
            imageAlt: 'Custom image',
        })
    }
    const Card5 = () => {
        Swal.fire({
            title: 'Connect',
            text: 'O Enfocus Connect cria aplicativos e drivers de impressão personalizados em que você controla as configurações de: Especificações de Trabalho, Criação de PDFs, Preflight, Entrega de arquivos em praticamente qualquer lugar, Baseago na tecnologia PitStop',
            imageUrl: connect,
            imageWidth: 400,
            imageHeight: 380,
            imageAlt: 'Custom image',
        })
    }
    return (
        <>
            <div className="w-full h-[230px] mt-[80px] bg-enfocus  z-40"></div>
            {/* Quem é Enfocus? */}
            <div className="w-full flex">
                <div className="w-[55%] py-[10%]">
                    <div className="text-[45px] pl-[93px] text-[#393C3E]"><b>Quem é Enfocus ?</b></div>
                    <div>
                        <div className="text-[18px] font-light pl-[93px] pr-[70px] mt-6 leading-[35px]">{item.programaParceiros.contents.paragraph1}</div>
                        <div className="text-[18px] font-light pl-[93px] pr-[70px] mt-6 leading-[35px]">{item.programaParceiros.contents.paragraph2}</div>
                        <div className="text-[18px] font-light pl-[93px] pr-[70px] mt-6 leading-[35px]">{item.programaParceiros.contents.paragraph3}</div>
                    </div>
                </div>
                <div className="w-[45%] flex justify-center items-center">
                    <div className="w-[80%]"><img alt="Efi" src={Enfocus} /></div>
                </div>
            </div>

            <div className="w-full flex">
                <div className="w-[45%] flex justify-center items-center">
                    <div className="w-[80%]"><img alt="Efi" src={EnfocusCertifield} /></div>
                </div>
                <div className="w-[55%] py-[10%]">
                    {/* <div className="text-[45px] pl-[93px] text-[#393C3E]"><b>Quem é Enfocus ?</b></div> */}
                    <div>
                        <div className="text-[18px] font-light pl-[93px] pr-[70px] mt-6 leading-[35px]">Cada vez mais clientes da Enfocus estão buscando parceiros com conhecimento sólido do nosso mercado e de todos os produtos Enfocus. É essencial que as perguntas e dúvidas sejam respondidas de maneira rápida e correta.</div>
                        <div className="text-[18px] font-light pl-[93px] pr-[70px] mt-6 leading-[35px]">O Programa de Parceiro Certificado da Enfocus fornece aos nossos parceiros técnicos e comerciais a oportunidade de serem reconhecidos pelos clientes como um parceiro qualificado da Enfocus. Além disso, os clientes também podem identificar parceiros com o conhecimento certo para seus projetos.</div>
                        <div className="text-[18px] font-light pl-[93px] pr-[70px] mt-6 leading-[35px]">A databrand e uma empresa certificada Enfocus, nossos especialistas são aptos a desenvolver consultoria em melhorias de processos, criar e desenvolver fluxos, criar scripts, treinamento e suporte técnico em todos os produtos da Enfocus. </div>
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col items-center">
                <div className="w-[70%] py-[5%]">
                    {/* <div className="text-[45px] pl-[93px] text-[#393C3E]"><b>Quem é Enfocus ?</b></div> */}
                    <div className="flex flex-col items-center">
                        <div className="text-[45px] pl-[93px] text-[#393C3E] font-medium">Faça do seu jeito.</div>
                        <div className="text-[18px] font-light pl-[93px] pr-[70px] mt-6 leading-[35px] text-center">
                            A Enfocus cria o software de automação mais versátil para o manuseio de arquivos através da impressão e além, entregue através de uma comunidade mundial de especialistas e parceiros de soluções.
                        </div>
                    </div>
                </div>
                <div className="w-[45%] flex justify-center items-center">
                    <div className="w-[80%]"><img alt="Automação" src={automacao} /></div>
                </div>
            </div>

            <div className="w-full mt-20">
                <div className="w-full flex justify-center text-[45px] pl-[93px] text-[#393C3E]"><b>Soluções Enfocus</b></div>
                <div class="md:flex md:justify-center md:space-x-8 md:px-14">

                    {/* <!-- box-1 --> */}
                    <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                        <div class="w-sm">
                            <img class="w-64" src={BoardingPass} alt="Logo Boarding Pass" />
                            <div class="mt-4 text-[#134780] text-center">
                                <h1 class="text-xl font-bold">BoardingPass</h1>
                                <p class="mt-4 text-gray-600">O BoardingPass da Enfocus permite que o pessoal de atendimento ao cliente valide...</p>
                                <button className="mt-4 py-2 px-14 rounded-full bg-[#134780] text-white tracking-widest hover:bg-[#134880dc] transition duration-200" onClick={Card1}>MAIS</button>
                            </div>
                        </div>
                    </div>

                    {/* <!-- box-2 --> */}
                    <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                        <div class="w-sm">
                            <img class="w-64" src={PitStopPro} alt="PitStopPro" />
                            <div class="mt-4 text-green-600 text-center">
                                <h1 class="text-xl font-bold text-[#134780]">PitStop Pro</h1>
                                <p class="mt-4 text-gray-600">O PitStop Pro é o padrão para validação de PDF do setor. É a única ferramenta que fornece...</p>
                                <button class="mt-4 py-2 px-14 rounded-full bg-[#134780] text-white tracking-widest hover:bg-[#134880dc] transition duration-200" onClick={Card2}>MAIS</button>
                            </div>
                        </div>
                    </div>

                    {/* <!-- box-3 --> */}
                    <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                        <div class="w-sm">
                            <img class="w-64" src={PitStopServer} alt="PitStopServer" />
                            <div class="mt-4 text-green-600 text-center">
                                <h1 class="text-xl font-bold text-[#134780]">PitStop Server</h1>
                                <p class="mt-4 text-gray-600">O PitStop Server traz recursos poderosos de controle de qualidade e automação...</p>
                                <button class="mt-4 mb-4 py-2 px-14 rounded-full bg-[#134780] text-white tracking-widest hover:bg-[#134880dc] transition duration-200" onClick={Card3}>MAIS</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full">
                <div class="md:flex md:justify-center md:space-x-8 md:px-14">

                    {/* <!-- box-1 --> */}
                    <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                        <div class="w-sm">
                            <img class="w-64" src={Switch} alt="Logo Boarding Pass" />
                            <div class="mt-4 text-[#134780] text-center">
                                <h1 class="text-xl font-bold">Switch</h1>
                                <p class="mt-4 text-gray-600">O caminho para a automação é construído sobre conexões. A integração...</p>
                                <button className="mt-4 py-2 px-14 rounded-full bg-[#134780] text-white tracking-widest hover:bg-[#134880dc] transition duration-200" onClick={Card4}>MAIS</button>
                            </div>
                        </div>
                    </div>

                    {/* <!-- box-2 --> */}
                    <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                        <div class="w-sm">
                            <img class="w-64" src={connect} alt="PitStopPro" />
                            <div class="mt-4 text-green-600 text-center">
                                <h1 class="text-xl font-bold text-[#134780]">Connect</h1>
                                <p class="mt-4 text-gray-600">O Enfocus Connect cria aplicativos e drivers de impressão...</p>
                                <button class="mt-4 py-2 px-14 rounded-full bg-[#134780] text-white tracking-widest hover:bg-[#134880dc] transition duration-200" onClick={Card5}>MAIS</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default index;