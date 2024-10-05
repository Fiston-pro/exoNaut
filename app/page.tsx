import BackgroundVideo from "@/components/backGroundVideo";
import Header from "@/components/HeaderComp";
import PlanetScroll from "@/components/PlanetScroll";
import Image from "next/image";

export default function Home() {

  const userDummyData = {
    name: "John Doe",
    image: "https://placehold.co/100x100",
    exoBucks: 100,
    level: 3,
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <BackgroundVideo src="/videos/background_looped.mp4" />
      <div className="relative z-10 flex flex-col flex-grow">
        <Header
          userName={userDummyData.name}
          sectionInfo={{ section: 1, unit: 1, name: "Introduction" }}
          exoBucks={userDummyData.exoBucks}
        />
        <div className="flex-grow flex justify-center items-center mt-20 sm:mt-0">
          <PlanetScroll />
        </div>
      </div>
    </div>
  );

}
