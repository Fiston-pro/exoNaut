"use client";

import { useState } from "react";
import BackgroundVideo from "@/components/backGroundVideo";
import Header from "@/components/HeaderComp";
import PlanetScroll from "@/components/PlanetScroll";

export default function Home() {
  const [userData, setUserData] = useState({
    name: "John Doe",
    image: "https://placehold.co/100x100",
    exoBucks: 10,
    level: 1,
  });

  const incrementExoBucks = (amount: number) => {
    setUserData(prevData => ({
      ...prevData,
      exoBucks: prevData.exoBucks + amount,
    }));
  };

  const incrementLevel = () => {
    setUserData(prevData => ({
      ...prevData,
      level: prevData.level + 1,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <BackgroundVideo src="/videos/background_gif.gif" />
      <div className="relative z-10 flex flex-col flex-grow">
        <Header
          exoBucks={userData.exoBucks}
        />
        <div className="flex-grow flex justify-center items-center mt-20 sm:mt-0">
          <PlanetScroll 
            userData={userData}
            onExoBucksEarned={incrementExoBucks} 
            onLevelUp={incrementLevel} 
          />
        </div>
      </div>
    </div>
  );
}
