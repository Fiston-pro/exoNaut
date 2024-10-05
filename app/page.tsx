import BackgroundVideo from "@/components/backGroundVideo";
import Image from "next/image";

export default function Home() {

  const userDummyData = {
    name: "John Doe",
    image: "https://placehold.co/100x100",
    exoBucks: 100,
    level: 3,
  };
  
  return (
    <div>
      <BackgroundVideo src="/videos/background.mp4" />
      <div className="relative z-10">
        <h1 className="text-4xl font-bold text-center">Welcome to ExoNaut</h1>
        <p className="text-lg text-center">
          Explore the universe of exoplanets and learn about them in an interactive way.
        </p>
      </div>
    </div>
  );

}
