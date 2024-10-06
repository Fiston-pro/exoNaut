import Image from "next/image";

interface HeaderProps {
  exoBucks: number;
}

const Header: React.FC<HeaderProps> = ({ exoBucks }) => {
  return (
    <header className="fixed left-0 right-0 top-0 flex justify-between items-center p-4 text-white z-50">
      <div className="flex items-center space-x-2">
        <Image
          src="/videos/astronaut_icon.gif"
          alt="Astronaut Icon"
          width={100}
          height={100}
          className="rounded-full"
        />
        <span className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-primary to-secondary hidden lg:inline-block">
          ExoNaut
        </span>
      </div>
      <div className="flex items-center pr-4 lg:pr-8">
        <Image src="/images/exobucks_img.png" alt="ExoBucks" width={40} height={40} />
        <span className="ml-2 text-xl font-bold">{exoBucks}</span>
      </div>
    </header>
  );
};

export default Header;
