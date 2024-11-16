"use client";
import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser"
import { Toaster, toast } from 'sonner'

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendEmail = (params) => {

    const toastId = toast.loading('Sending you message, Please wait...')
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        params,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          limitRate: {
            throttle: 5000,
          }
        }
      )
      .then(
        () => {
          toast.success('I have recieved you message, I will get back to you soon, Thank You!', {
            id: toastId
          })
        },
        (error) => {
          // console.log("FAILED...", error.text);
          toast.error('Failed to send your message, please try again later!', {
            id: toastId
          })
        }
      );
  };

  const onSubmit = (data) => {

    const tamplateParams = {
      to_name: 'Umair',
      from_name: data.name,
      reply_to: data.email,
      message: data.Message,
    }

    sendEmail(tamplateParams)
  }

  return (
    <>
    
    <Toaster richColors={true} />
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md w-full flex flex-col items-center justify-center space-y-4"
    >
      <input
        type="text"
        placeholder="name"
        {...register("name", { required: 'This field is required & and not be less than 3 characters.', maxLength: 80 })}
        className="xs:w-[80%] md:w-full p-2 rounded-[8px] shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
      />
      {
        errors.name && <span className="inline-block self-start text-accent">{errors.name.message}</span>
      }

      <input
        type="email"
        placeholder="email"
        {...register("email", { required: 'This field is required', pattern: /^\S+@\S+$/i })}
        className="xs:w-[80%] md:w-full p-2 rounded-[8px] shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
      />

      {
        errors.email && <span className="inline-block self-start text-accent">{errors.email.message}</span>
      }

      <textarea
        placeholder="message"
        rows={5}
        {...register("Message", { required: 'This field should not be empty and should be more than 50 characters and less than 1000 characters.', max: 1000, min: 50 })}
        className="xs:w-[80%] md:w-full p-2 rounded-[8px] shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
      />

      {
        errors.Message && <span className="inline-block self-start text-accent">{errors.Message.message}</span>
      }

      <input
        value={"Cast Your Message"}
        className="xs:text-sm sm:text-xl xs:px-6 xs:py-2 md:px-10 md:py-4 rounded-[8px] xs:font-normal md:font-bold hover:custom-bg hover:text-accent/90 duration-150 shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm backdrop:blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize"
        type="submit"
      />
    </form>

      <div className="custom-bg px-10 py-2 rounded-xl">
            <p>If the contact form isn&#39;t working, please feel free to reach out via email.</p>
            <h2 className="text-accent">Email: umairnawaz7228@gmail.com</h2>
      </div>

    </>
  );
}
