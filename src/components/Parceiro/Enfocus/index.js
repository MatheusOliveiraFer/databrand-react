import circle from "../../../assets/gif/circle.gif";
import Enfocus from "../../../assets/img/LogoEnfocus.png";
import EnfocusCertifield from "../../../assets/img/EnfocusCertifiedReseller.png";

import efi1 from "../../../assets/img/efi1.png";
import efi2 from "../../../assets/img/efi2.png";
import efi3 from "../../../assets/img/efi3.png";

import efi1_ from "../../../assets/img/efi1_.jpeg"
import efi2_ from "../../../assets/img/efi2_.jpeg";
import efi3_ from "../../../assets/img/efi3_.jpeg";

import oportunidade from "../../../assets/img/oportunidade.jpeg";
import produto from "../../../assets/img/produto.jpeg";
import suporte from "../../../assets/img/suporte.jpeg";

import Swal from 'sweetalert2';

const index = ({item}) => {
    const Card1 = () => {
        Swal.fire({
            title: 'BoardingPass',
            text: 'O BoardingPass da Enfocus permite que o pessoal de atendimento ao cliente valide instantaneamente os arquivos em PDF para impressão. Integrado com um cliente de e-mail, o BoardingPass identifica erros que exigem o reenvio de um arquivo e automaticamente redige um e-mail de resposta. Os agentes de atendimento ao cliente ganham o poder de fornecer feedback rápido e compreensível do trabalho. Não é necessária Pré-impressão',
            imageUrl: efi1_,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })
    }
    const Card2 = () => {
        Swal.fire({
            title: 'JobFlow',
            text: 'O Fiery JobFlow ™ automatiza as etapas de preparação do trabalho em fluxos de trabalho de pré-impressão para produzir arquivos prontos para impressão. Este software de automação de fluxo de trabalho de impressão fácil de usar aumenta a produtividade e reduz os custos.',
            imageUrl: efi3_,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })
    }
    const Card3 = () => {
        Swal.fire({
            title: 'Prep-it',
            text: 'O Fiery Prep-it ™ é uma solução de software poderosa e fácil de usar para a preparação, layout e produção automatizada de trabalhos de impressão para corte.',
            imageUrl: efi2_,
            imageWidth: 400,
            imageHeight: 200,
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

            <div className="w-full">
                <div className="w-full flex justify-center text-[40px] font-light text-[#134780]"><b className="font-semibold">Soluções da Enfocus</b></div>
                <div class="md:flex md:justify-center md:space-x-8 md:px-14">
                    
                    {/* <!-- box-1 --> */}
                    <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                        <div class="w-sm">
                            <img class="w-64" src={efi1} alt="Logo EFI" />
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
                            <img class="w-64" src={efi2} alt="Logo G7 Expert" />
                            <div class="mt-4 text-green-600 text-center">
                                <h1 class="text-xl font-bold text-[#134780]">{item.efiFierySolutions.card2.title}</h1>
                                <p class="mt-4 text-gray-600">{item.efiFierySolutions.card1.resumeText}</p>
                                <button class="mt-4 py-2 px-14 rounded-full bg-[#134780] text-white tracking-widest hover:bg-[#134880dc] transition duration-200" onClick={Card2}>MAIS</button>
                            </div>
                        </div>
                    </div>

                    {/* <!-- box-3 --> */}
                    <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                        <div class="w-sm">
                            <img class="w-64" src={efi3} alt="Logo Creative Egde" />
                            <div class="mt-4 text-green-600 text-center">
                                <h1 class="text-xl font-bold text-[#134780]">{item.efiFierySolutions.card3.title}</h1>
                                <p class="mt-4 text-gray-600">{item.efiFierySolutions.card3.resumeText}</p>
                                <button class="mt-4 mb-4 py-2 px-14 rounded-full bg-[#134780] text-white tracking-widest hover:bg-[#134880dc] transition duration-200" onClick={Card3}>MAIS</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default index;