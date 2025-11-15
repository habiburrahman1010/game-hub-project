import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GameDetailsCard from "../components/GameDetailsCard";

const GameDetails = () => {
  const data = useLoaderData();
  const {id}=useParams()

    const [game, setGame]=useState({})

   useEffect(()=>{

        const gameDetails=data.find((singleGame)=>singleGame.id==id);

        setGame(gameDetails);
    },[data,id])

  return (
    <div>
        <Navbar></Navbar>
        <section>
            <GameDetailsCard game={game}></GameDetailsCard>
        </section>
        <Footer></Footer>
    </div>
   
  );
};

export default GameDetails;
