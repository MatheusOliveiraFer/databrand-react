import React from 'react';
import { Outlet } from 'react-router-dom';

import { Desktop, Mobile } from "../Menu";
import Video from "../Video";
import Whatsapp from "../../components/wpp/index";
import Servicos from "../Parceiros/servicos";

const Index = () => {
    return (
        <div>
            <Desktop />
            <Mobile />
            <Video />
            <Whatsapp />
            <Servicos />
            <Outlet />
        </div>
    )
}
export default Index;