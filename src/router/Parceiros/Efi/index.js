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
        </>
    )
}
export default Index;