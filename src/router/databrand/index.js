import header from "../../assets/img/header.png";
import { Desktop } from "../Menu";
import Missao from "../../assets/svg/list-check.svg";
import Visao from "../../assets/svg/graph-up-arrow.svg";
import Parceiros from "../../assets/svg/parceiros.svg";

const index = () => {
    return (
        <>
            <Desktop />
            <div className="w-full">
                <img alt="Plano de fundo" src={header} className="w-full" />
                <div className="absolute top-[20%] left-[10%] w-[50%] h-[30%]">
                    <div className="font-semibold text-[50px] text-white">A databrand</div>
                    <div className="font-light text-[15px] text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'</div>
                </div>
            </div>
            <div className="w-full  h-[400px] flex justify-center mt-[-90px]">
                <div className="w-[80%] h-full flex justify-around items-center">
                    <div className="w-[31%] h-[70%] bg-white rounded-2xl  shadow-md flex flex-col">
                        <div className="w-16 h-16 bg-blue-600 mt-[-30px] ml-10 rounded-lg flex items-center justify-center">
                            <img alt="Missão" src={Missao} className="w-[50%]" />
                        </div>
                        <div className="text-[20px] font-bold pl-10 mt-[35px]">Missão</div>
                        <div className="text-[15px] font-light pl-10 mt-[20px] px-10">Promover melhorias significativas nos processos para a indústria gráfica.</div>
                    </div>
                    <div className="w-[31%] h-[70%] bg-white rounded-2xl  shadow-md flex flex-col">
                        <div className="w-16 h-16 bg-blue-600 mt-[-30px] ml-10 rounded-lg flex items-center justify-center">
                            <img alt="Missão" src={Visao} className="w-[50%]" />
                        </div>
                        <div className="text-[20px] font-bold pl-10 mt-[35px]">Visão</div>
                        <div className="text-[15px] font-light pl-10 mt-[20px] px-10">Ser uma referência na indústria gráfica em gerenciamento de cores e automação de processos.</div>
                    </div>
                    <div className="w-[31%] h-[70%] bg-white rounded-2xl  shadow-md flex flex-col">
                        <div className="w-16 h-16 bg-blue-600 mt-[-30px] ml-10 rounded-lg flex items-center justify-center">
                            <img alt="Missão" src={Parceiros} className="w-[50%]" />
                        </div>
                        <div className="text-[20px] font-bold pl-10 mt-[35px]">Valores</div>
                        <div className="text-[15px] font-light pl-10 mt-[20px] px-10">Proximidade | Responsabilidade | Transparência | Respeito | Renovação.</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default index;