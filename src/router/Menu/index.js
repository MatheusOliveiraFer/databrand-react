import { useState } from "react";
import ConsultansDark from "../../assets/gif/8-account-outline-dark.gif";
import ConsultansWhite from "../../assets/gif/8-account-outline-white.gif";
import { NavLink } from "react-router-dom";
import Swal from 'sweetalert2';


export const Desktop = () => {
    const [isVisible, setIsVisible] = useState(false);
    
    const popupMenu = () => {
        Swal.fire(
            'Estamos em construção',
            'Em breve liberamos essa funcionalidade. <br /><b>Agradecemos sua compreenção, databrand.</b>',
            'info'
          )
    }

    return (
        <div className="w-full h-20 fixed top-0 z-50 flex justify-center bg-white drop-shadow-[0_3px_3px_rgba(0,0,0,0.1)] m-f1:hidden l:flex">
            <div className="w-11/12 flex">
                <div className="l:w-[30%] d:w-[40%] flex items-center">
                    <div className="min-w-[55%] min-h-[50%] LogoDataBrand"></div>
                </div>
                <div className="l:w-[70%] d:w-[60%] flex">
                    <div className="w-[60%] flex items-center justify-around">
                        <NavLink className="font-medium text-[#134780] cursor-pointer hover:text-[#939598]" to="/">Home</NavLink>
                        <div className="font-medium text-[#134780] cursor-pointer hover:text-[#939598]" onClick={popupMenu}>Soluções</div>
                        <div className="font-medium text-[#134780] cursor-pointer hover:text-[#939598]" onClick={popupMenu}>Conteúdos</div>
                    </div>
                    <div className="w-[40%] flex items-center justify-end">
                        <div className={`border border-[#134780] py-3 px-6 rounded-3xl text-[#134780] font-semibold cursor-pointer flex hover:bg-[#134780] hover:text-[#FFF]`} onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
                            <img alt="Consultores Ícone" src={isVisible ? ConsultansWhite : ConsultansDark } className="pr-2 w-[32px] h-[25px]" />
                            Consultores
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export const Mobile = () => {
    return (
        <div>Desktop</div>
    );
}