'use client'
import Image from "next/image";
import bg from "../../public/background/home-background.png"
import HomePage from "./(sub pages)/home/page";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center -z-10 justify-between relative">
      <Image
        src={bg}
        alt="background-image"
        className="fixed w-full h-full object-cover object-center opacity-40 blur-md"
        /> 
        <HomePage /> 
    </main>
  );
}
