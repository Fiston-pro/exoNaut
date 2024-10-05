import Image from "next/image";

interface HeaderProps {
  userName: string;
  sectionInfo: {
    section: number;
    unit: number;
    name: string;
  };
  exoBucks: number;
  userImage: string;
}

const Header: React.FC<HeaderProps> = ({ userName, sectionInfo, exoBucks, userImage }) => {
  return (
    <header className="absolute top-0 left-0 right-0 flex justify-between items-center p-4 text-white z-50">
      <div className="text-xl font-bold">{userName}</div>
      <div className="text-left bg-gray-800 bg-opacity-80 rounded-lg px-6 py-3 min-w-[300px]">
        <div className="text-lg font-semibold">Section {sectionInfo.section}, Unit {sectionInfo.unit}</div>
        <div className="text-xl font-bold">{sectionInfo.name}</div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <Image src="/images/exobucks_img.png" alt="ExoBucks" width={24} height={24} />
          <span className="ml-2">{exoBucks}</span>
        </div>
        <Image src={userImage} alt="User profile" width={40} height={40} className="rounded-full" />
      </div>
    </header>
  );
};

export default Header;
