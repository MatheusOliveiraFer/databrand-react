import React from 'react';
import { Outlet } from 'react-router-dom';

import { Desktop, Mobile } from "../Menu";
import Video from "../Video";
import Solucoes from "../Parceiros/solucoes";
import Whatsapp from "../../components/wpp/index";

const Index = () => {
    return (
        <div>
            <Desktop />
            <Mobile />
            <Video />
            <Whatsapp />
            <Solucoes />
            <Outlet />
        </div>
    )
}
export default Index;