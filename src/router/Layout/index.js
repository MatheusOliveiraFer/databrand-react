import React from 'react';
import { Outlet } from 'react-router-dom';

import { Desktop, Mobile } from "../Menu";

const Index = () => {
    return (
        <div>
            <Desktop />
            <Outlet />
        </div>
    )
}
export default Index;