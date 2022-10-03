import { Desktop } from "../../../router/Menu";
import Parceiro from "../../../components/Parceiro";
import { useNavigate } from "react-router-dom";

const Index = () => {
    const navigate = useNavigate();
    navigate(0);
    return (
        <>
            <Desktop  />
            <Parceiro />      
            {/* <!-- Footer --> */}
            <footer class="text-center py-16 bg-gradient-to-r from-[#134780] text-sm mt-10">
                <p class="text-white">
                    Para qualquer dúvida ou contato conosco, clique no símbolo do Whatsapp ou<br />
                    envie e-mail para <span className="underline">contato@databrand.com.br</span>
                </p>
                <p class="mt-20 text-white"><span class="underline text-green-200 cursor-pointer">© databrand</span> todos os direitos reservados.</p>
            </footer>      
        </>
    )
}
export default Index;