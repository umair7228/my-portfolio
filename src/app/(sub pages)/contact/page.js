import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import Form from "@/app/components/contact/Form";

export default function Contact() {
  return (
    <main className="flex items-center justify-center min-h-screen px-8">
      <Image
        src={bg}
        alt="Next.js Portfolio website's contact page background image"
        priority
        sizes="100vw"
        className="fixed top-0 left-0 w-full h-full object-cover object-center -z-50 select-none opacity-50"
      />

      <article className=" w-full flex flex-col items-center justify-center space-y-8 pb-8 pt-24 lg:pt-32 2xl:pt-40">
        <div className="flex flex-col items-center justify-center space-y-2 sm:space-y-4 sm:px-16 md:px-20 lg:px-24 xl:px-60 2xl:px-80">
          <h1 className="text-accent font-semibold text-center text-xl md:text-3xl lg:text-4xl capitalize">
            Let&#39;s Build Something Extraordinary!
          </h1>
          <p className=" text-center text-xs md:text-md font-light">
            Have a project in mind? Need an expert in frontend development,
            cloud engineering, or data workflows? I&#39;m always excited to connect
            with like-minded individuals and collaborate on innovative ideas.
            Whether you&#39;re looking to bring your vision to life, need technical
            support, or simply want to explore new possibilities—let&#39;s make it
            happen!
          </p>

        </div>
        <Form />
      </article>
    </main>
  );
}
