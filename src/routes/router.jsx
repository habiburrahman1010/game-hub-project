import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import TitleWrapper from '../components/TitleWrapper';

import HomeLayout from '../layouts/HomeLayout';
import Home from '../pages/Home';
import AllGame from '../pages/AllGame';
import AuthLayout from '../layouts/AuthLayout';
import Login from '../pages/Login';
import Register from '../pages/Register';
import GameDetails from '../pages/GameDetails';
import PrivetRoute from '../provider/PrivetRoute';
import Loading from '../pages/Loading';
import Error from '../pages/Error';
import Myprofile from '../pages/Myprofile';
import ForgotPassword from '../pages/ForgotPassword';
import UpdateProfile from '../pages/UpdateProfile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "",
        element: (
          <TitleWrapper title="Home">
            <Home />
          </TitleWrapper>
        ),
      },
      {
        path: "/all-game",
        element: (
          <TitleWrapper title="All Games">
            <AllGame />
          </TitleWrapper>
        ),
        loader: () => fetch('/game.json'),
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: (
          <TitleWrapper title="Login">
            <Login />
          </TitleWrapper>
        ),
      },
      {
        path: "register",
        element: (
          <TitleWrapper title="Register">
            <Register />
          </TitleWrapper>
        ),
      },
      {
        path: "forgot-password",
        element: (
          <TitleWrapper title="Forgot Password">
            <ForgotPassword />
          </TitleWrapper>
        ),
      },
    ],
  },
  {
    path: '/game-details/:id',
    element: (
      <PrivetRoute>
        <TitleWrapper title="Game Details">
          <GameDetails />
        </TitleWrapper>
      </PrivetRoute>
    ),
    loader: () => fetch("/game.json"),
    hydrateFallbackElement: <Loading />,
  },
  {
    path: "/my-profile",
    element: (
      <TitleWrapper title="My Profile">
        <Myprofile />
      </TitleWrapper>
    ),
  },
  {
    path: "/update-profile",
    element: (
      <TitleWrapper title="Update Profile">
        <UpdateProfile />
      </TitleWrapper>
    ),
  },
  {
    path: "/*",
    element: (
      <TitleWrapper title="Error">
        <Error />
      </TitleWrapper>
    ),
  },
]);

export default router;
