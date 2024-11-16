import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import React from 'react'
import ServicesDetails from "@/app/components/services-details";

const Services = () => {
  return (
    <main className="flex min-h-screen flex-col items-center -z-10 relative">
      <Image
        src={bg}
        alt="Next.js Portfolio website's certification background image"
        className="fixed w-full h-full object-cover object-center -z-50 select-none opacity-50"
      /> 

    <ServicesDetails />
    </main>
  )
}

export default Services
