import Image from "next/image";
import bg from "../../../../public/background/projects-background.png"
import SectionLayout from "../../components/projects-sections/sectionLayout";
export default function Projects() {
  return (
    <main className="flex min-h-screen flex-col items-center -z-10 relative">
      <Image
        src={bg}
        alt="background-image"
        fill
        className="fixed max-w-full-2xl h-full object-cover object-center -z-50 select-none opacity-50"
        />
        
        <SectionLayout />

        
    </main>
  );
}