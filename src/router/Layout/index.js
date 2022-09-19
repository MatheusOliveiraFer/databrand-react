import React from 'react';
import { Outlet } from 'react-router-dom';

import { Desktop, Mobile } from "../Menu";
import Video from "../Video";
import Parceiros from "../Parceiros";
import Whatsapp from "../../components/wpp/index";

const Index = () => {
    return (
        <div>
            <Desktop />
            <Video />
            <Whatsapp />
            <Parceiros />
            <Outlet />
        </div>
    )
}
export default Index;