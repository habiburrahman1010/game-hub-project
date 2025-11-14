import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import HomeLayout from '../layouts/HomeLayout';
import Home from '../pages/Home';
import AllGame from '../pages/AllGame';

const router =createBrowserRouter([
    {
        path:"/",
        element:<HomeLayout></HomeLayout>,
        children:[
            {
                path:"",
                element:<Home></Home>
            },
            {
                path:"/all-game",
                element:<AllGame></AllGame>,
                loader:()=>fetch('/game.json'),
            }

        ]

    }

])

export default router;