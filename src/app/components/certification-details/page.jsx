import React from 'react'
import Image from 'next/image'
import { certificates } from '../../../../data/certification'

const CertificationDetails = () => {
  return (
    <div className="flex flex-col gap-6 sm:gap-10 items-center justify-center px-5 sm:px-10 lg:px-16 2xl:px-0 py-32 h-full w-full max-w-screen-2xl">
      <div className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold font-serif text-accent text-center select-none tracking-widest">
      My Certifications
      </div>

      <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-4 md:gap-6 lg:gap-6 xl:gap-8 animate-rotateBackToFront'>

        {certificates.map((certificate) => (
          <div key={certificate.id} className='custom-bg p-4 rounded-xl flex flex-col gap-3'>
            <Image
                src={certificate.image}
                alt={certificate.alt}
                width={300}
                height={250}
                className='rounded-xl w-full h-full'
            />
            <h3 className='text-lg sm:text-xl text-accent font-semibold md:font-semibold tracking-wider'>{certificate.title}</h3>
            <div className='flex justify-between text-sm text-foreground tracking-wider'>
              <h5>{certificate.organization}</h5>
              <p>{certificate.date}</p>
            </div>
          </div>
        ))}

      </div>


    </div>
  )
}

export default CertificationDetails
