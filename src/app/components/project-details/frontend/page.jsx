
import Image from "next/image";
import bg from "../../../../../public/background/projects-background.png"
import FrontendLayout from "./projectLayout.jsx";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center -z-10 relative">
      <Image
        src={bg}
        alt="background-image"
        fill
        className="fixed w-full h-full object-cover object-center -z-50 select-none opacity-50"
        />
        
        <FrontendLayout />
    </main>
  );
}
