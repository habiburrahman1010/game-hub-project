import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import HomeLayout from '../layouts/HomeLayout';
import Home from '../pages/Home';
import AllGame from '../pages/AllGame';
import AuthLayout from '../layouts/AuthLayout';
import Login from '../pages/Login';
import Register from '../pages/Register';
import GameDetails from '../pages/GameDetails';
import PrivetRoute from '../provider/PrivetRoute';
import Loading from '../pages/Loading';

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
        

    },
     {
        path:'/auth',
        element:<AuthLayout></AuthLayout>,
        children:[
            {
                path:"/auth/login",
                element:<Login></Login>
            },
             {
                path:"/auth/register",
                element:<Register></Register>
            },
        ]
    },
     {
        path:'/game-details/:id',
        element:<PrivetRoute>
            <GameDetails></GameDetails>
        </PrivetRoute>,
        loader:()=>fetch("/game.json"),
          hydrateFallbackElement:<Loading></Loading>
    },
    {
        path:'/*',
        element:<h2>welcome error</h2>
    },

])

export default router;