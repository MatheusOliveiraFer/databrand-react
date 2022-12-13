import circle from "../../assets/gif/circle.gif";
import efi from "../../assets/img/efi-partner-premiercoralis.jpg";

import efi1 from "../../assets/img/efi1.png";
import efi2 from "../../assets/img/efi2.png";
import efi3 from "../../assets/img/efi3.png";

import efi1_ from "../../assets/img/efi1_.jpeg"
import efi2_ from "../../assets/img/efi2_.jpeg";
import efi3_ from "../../assets/img/efi3_.jpeg";

import oportunidade from "../../assets/img/oportunidade.jpeg";
import produto from "../../assets/img/produto.jpeg";
import suporte from "../../assets/img/suporte.jpeg";

import Swal from 'sweetalert2';


const Index = ({item}) => {
    const Card1 = () => {
        Swal.fire({
            title: 'Fiery XF',
            text: 'Introduzir o Fiery XF 7 em sua empresa de grande ou super-amplo é a maneira mais fácil de obter resultados de cores superiores, obter o máximo de produtividade e lucrar com os insights de negócios.',
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
            <div className="w-full h-[230px] mt-[80px] bg-efi  z-40"></div>
            <div className="w-full flex justify-center">
                <div className="mt-[30px]">
                    <div className="text-[40px] font-light text-[#134780] border-b border-[#13488041]">{item.title}</div>
                </div>
            </div>
            <div className="w-full flex justify-center">
                <div className="mt-[60px]">
                    <div className="text-[18px] font-light text-center leading-loose">{item.description}<br/>{item.description2}</div>
                </div>
            </div>
            <div className="w-full flex justify-center mt-[60px]">
                <div class="max-w-sm rounded overflow-hidden shadow-[0_35px_50px_-15px_rgba(0,0,0,0.2)] mr-10">
                    <img className="w-full svg svg-elem-1 active" src={circle} alt="Sunset in the mountains" />
                    <div className="w-[100px] h-[100px] relative bottom-[245px] left-[145px]">
                        <img className="w-full svg svg-elem-1 active" src={produto} alt="Sunset in the mountains" />
                    </div>
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">{item.card1.title}</div>
                        <p class="text-gray-700 text-base">{item.card1.description}</p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item.card1.hashtag.hashtag1}</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item.card1.hashtag.hashtag2}</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item.card1.hashtag.hashtag3}</span>
                    </div>
                </div>

                <div class="max-w-sm rounded overflow-hidden shadow-[0_35px_50px_-15px_rgba(0,0,0,0.2)] mr-10">
                    <img className="w-full svg svg-elem-1 active" src={circle} alt="Sunset in the mountains" />
                    <div className="w-[100px] h-[100px] relative bottom-[240px] left-[145px]">
                        <img className="w-full svg svg-elem-1 active" src={oportunidade} alt="Sunset in the mountains" />
                    </div>
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">{item.card2.title}</div>
                        <p class="text-gray-700 text-base">{item.card2.description}</p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item.card2.hashtag.hashtag1}</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item.card2.hashtag.hashtag2}</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item.card2.hashtag.hashtag3}</span>
                    </div>
                </div>

                <div class="max-w-sm rounded overflow-hidden shadow-[0_35px_50px_-15px_rgba(0,0,0,0.2)]">
                    <img className="w-full svg svg-elem-1 active" src={circle} alt="Sunset in the mountains" />
                    <div className="w-[100px] h-[100px] relative bottom-[240px] left-[145px] bg-black">
                        <img className="w-full svg svg-elem-1 active" src={suporte} alt="Sunset in the mountains" />
                    </div>
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">{item.card3.title}</div>
                        <p class="text-gray-700 text-base mb-12">{item.card3.description}</p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item.card3.hashtag.hashtag1}</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item.card3.hashtag.hashtag2}</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item.card3.hashtag.hashtag3}</span>
                    </div>
                </div>
            </div>
            <div className="w-full flex mt-5">
                <div className="w-[55%] py-[10%]">
                    <div className="text-[45px] pl-[93px] text-[#393C3E]">{item.programaParceiros.title.paragraph} <b className="font-medium">{item.programaParceiros.title.contents}</b></div>
                    <div>
                        <div className="text-[18px] font-light pl-[93px] pr-[70px] mt-6 leading-[35px]">{item.programaParceiros.contents.paragraph1}</div>
                        <div className="text-[18px] font-light pl-[93px] pr-[70px] mt-6 leading-[35px]">{item.programaParceiros.contents.paragraph2}</div>
                        <div className="text-[18px] font-light pl-[93px] pr-[70px] mt-6 leading-[35px]">{item.programaParceiros.contents.paragraph3}</div>
                        <div className="text-[18px] font-light pl-[93px] pr-[70px] mt-6 leading-[35px]">{item.programaParceiros.contents.paragraph4}</div>
                    </div>
                </div>
                <div className="w-[45%] flex justify-center items-center">
                    <div className="w-[80%]"><img alt="Efi" src={efi} /></div>
                </div>
            </div>
            <div className="w-full">
                <div className="w-full flex justify-center text-[40px] font-light text-[#134780]">{item.efiFierySolutions.title.paragraph} <b className="font-semibold">{item.efiFierySolutions.title.contents}</b></div>
                <div class="md:flex md:justify-center md:space-x-8 md:px-14">
                    
                    {/* <!-- box-1 --> */}
                    <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                        <div class="w-sm">
                            <img class="w-64" src={efi1} alt="Logo EFI" />
                            <div class="mt-4 text-[#134780] text-center">
                                <h1 class="text-xl font-bold">{item.efiFierySolutions.card1.title}</h1>
                                <p class="mt-4 text-gray-600">{item.efiFierySolutions.card1.resumeText}</p>
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
export default Index;