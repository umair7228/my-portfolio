import React from 'react'
import Image from 'next/image'
import snowflakeDataEngineering from '../../../../public/certificates-images/Snowflake-Data-Engineering.png'
import snowflakeDataLake from '../../../../public/certificates-images/Snowflake-Data-Lake-Certificate.png'
import snowflakeDataApp from '../../../../public/certificates-images/Snowflake-Data-Application-Certificate.png'
import snowflakeCollaboration from '../../../../public/certificates-images/Snowflake-Collaboration-&-Marketplace-Certificate.png'
import snowflakeDataWearhousing from '../../../../public/certificates-images/Snowflake-Data-Warehouseing-Certificate.png'
import accosiateDataEngineering from '../../../../public/certificates-images/associate-data-engineering.png'
import dataBaseDesign from '../../../../public/certificates-images/Database-Design.png'
import dataWearhosingConcepts from '../../../../public/certificates-images/Data-Warehousing-Concepts.png'
import relationalDatabasesInSQL from '../../../../public/certificates-images/Introduction-to-Relational-Databases-in-SQL.png'
import intermediateSQL from '../../../../public/certificates-images/Intermediate-SQL.png'
import sqlIntro from '../../../../public/certificates-images/Introduction-to-SQL.png'
import snowflakeIntroByDataCamp from '../../../../public/certificates-images/Introduction-to-Snowflake-by-DataCamp.png'
import dataEngineeringByDataCamp from '../../../../public/certificates-images/Understanding-Data-Engineering.png'
import cloudComputing from '../../../../public/certificates-images/Understanding-Cloud-Computing.png'
import pythonForDevelopers from '../../../../public/certificates-images/Introduction-to-Python-for-Developers.png'
import pythonIntro from '../../../../public/certificates-images/Introduction-to-Python.png'
import pythonProjects from '../../../../public/certificates-images/Python-Projects-Certificate.png'
import pythonTkinter from '../../../../public/certificates-images/Python-Tkinter.png'
import careerEssentialsInGenAI from '../../../../public/certificates-images/Career-Essentials-in-Generative.png'
import ethicsInAgeOfGenAI2 from '../../../../public/certificates-images/Ethics-in-the-Age-of-Generative-AI-2.png'
import ethicsInAgeOfGenAI from '../../../../public/certificates-images/Ethics-in-the-Age-of-Generative-AI.png'
import thoughtfulOnlineSearch from '../../../../public/certificates-images/The-Evolution-of-Thoughtful-Online-Search.png'
import whatIsGenAI from '../../../../public/certificates-images/What-Is-Generative-AI.png'
import microsoftCopilot from '../../../../public/certificates-images/Streamlining-with-Microsoft-Copilot.png'
import learnMicrosoftCopilot from '../../../../public/certificates-images/Learning-Microsoft-365-Copilot.png'
import introOfAI from '../../../../public/certificates-images/Introduction-to-Artificial-Intelligence.png'
import htmlCSSIntership from '../../../../public/certificates-images/Internship-of-HTML-CSS-Developer.png'
import typeScript from '../../../../public/certificates-images/Certificate-of-TypeScript.jpeg'
import spokenEnglish from '../../../../public/certificates-images/certificate-of-spoken-english.png'
import apacheAirflow from '../../../../public/certificates-images/Apache-Airflow.png'



const CertificationDetails = () => {
  return (
    <div className="flex flex-col gap-6 sm:gap-10 items-center justify-center px-5 sm:px-10 lg:px-16 py-32 h-full w-full">
      <div className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold font-serif text-accent text-center select-none tracking-widest">
      My 30 Certifications
      </div>

      <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-4 md:gap-6 lg:gap-6 xl:gap-8 animate-rotateBackToFront'>

        <div className='custom-bg p-4 rounded-xl flex flex-col gap-3'>
            <Image
                src={snowflakeDataEngineering}
                alt='Accosiate Data Engineering Certificate'
                className='rounded-xl w-full h-full'
            />
            <h3 className='text-lg sm:text-xl text-accent font-semibold md:font-semibold tracking-wider'>Data Engineering</h3>
            <div className='flex justify-between text-sm text-foreground tracking-wider'>
              <h5 className=' '>Snowflake</h5>
              <p>AUG-15-2024</p>
            </div>
        </div>

        <div className='custom-bg p-4 rounded-xl flex flex-col gap-3'>
            <Image
                src={snowflakeDataLake}
                alt='Accosiate Data Engineering Certificate'
                className='rounded-xl w-full h-full'
            />
            <h3 className='text-lg sm:text-xl text-accent font-semibold md:font-semibold tracking-wider'>Data Lake</h3>
            <div className='flex justify-between text-sm text-foreground tracking-wider'>
              <h5>Snowflake</h5>
              <p>AUG-9-2024</p>
            </div>
        </div>

        <div className='custom-bg p-4 rounded-xl flex flex-col gap-3'>
            <Image
                src={snowflakeDataApp}
                alt='Accosiate Data Engineering Certificate'
                className='rounded-xl w-full h-full'
            />
            <h3 className='text-lg sm:text-xl text-accent font-semibold md:font-semibold tracking-wider'>Data Application</h3>
            <div className='flex justify-between text-sm text-foreground tracking-wider'>
              <h5>Snowflake</h5>
              <p>AUG-3-2024</p>
            </div>
        </div>

        <div className='custom-bg p-4 rounded-xl flex flex-col gap-3'>
            <Image
                src={snowflakeCollaboration}
                alt='Accosiate Data Engineering Certificate'
                className='rounded-xl w-full h-full'
            />
            <h3 className='text-lg sm:text-xl text-accent font-semibold md:font-semibold tracking-wider'>Collaboration & Marketplace In Snowflake</h3>
            <div className='flex justify-between text-sm text-foreground tracking-wider'>
              <h5>Snowflake</h5>
              <p>Jul-28-2024</p>
            </div>
        </div>

        <div className='custom-bg p-4 rounded-xl flex flex-col gap-3'>
            <Image
                src={snowflakeDataWearhousing}
                alt='Accosiate Data Engineering Certificate'
                className='rounded-xl w-full h-full'
            />
            <h3 className='text-lg sm:text-xl text-accent font-semibold md:font-semibold tracking-wider'>Data Warehouseing</h3>
            <div className='flex justify-between text-sm text-foreground tracking-wider'>
              <h5>Snowflake</h5>
              <p>Jul-18-2024</p>
            </div>
        </div>

        <div className='custom-bg p-4 rounded-xl flex flex-col gap-3'>
            <Image
                src={accosiateDataEngineering}
                alt='Accosiate Data Engineering Certificate'
                className='rounded-xl w-full h-full'
            />
            <h3 className='text-lg sm:text-xl text-accent font-semibold md:font-semibold tracking-wider'>Associate Data Engineering in SQL</h3>
            <div className='flex justify-between text-sm text-foreground tracking-wider'>
              <h5>DataCamp</h5>
              <p>SEP-21-2024</p>
            </div>
        </div>

        <div className='custom-bg p-4 rounded-xl flex flex-col gap-3'>
            <Image
                src={apacheAirflow}
                alt='Apache Airflow Certificate'
                className='rounded-xl w-full h-full'
            />
            <h3 className='text-lg sm:text-xl text-accent font-semibold md:font-semibold tracking-wider'>Apache Airflow</h3>
            <div className='flex justify-between text-sm text-foreground tracking-wider'>
              <h5>DataCamp</h5>
              <p>Nov-05-2024</p>
            </div>
        </div>

        <div className='custom-bg p-4 rounded-xl flex flex-col gap-3'>
            <Image
                src={dataBaseDesign}
                alt='Accosiate Data Engineering Certificate'
                className='rounded-xl w-full h-full'
            />
            <h3 className='text-lg sm:text-xl text-accent font-semibold md:font-semibold tracking-wider'>Database Design</h3>
            <div className='flex justify-between text-sm text-foreground tracking-wider'>
              <h5>DataCamp</h5>
              <p>SEP-17-2024</p>
            </div>
        </div>

        <div className='custom-bg p-4 rounded-xl flex flex-col gap-3'>
            <Image
                src={dataWearhosingConcepts}
                alt='Accosiate Data Engineering Certificate'
                className='rounded-xl w-full h-full'
            />
            <h3 className='text-lg sm:text-xl text-accent font-semibold md:font-semibold tracking-wider'>Data Wearhousing Concepts</h3>
            <div className='flex justify-between text-sm text-foreground tracking-wider'>
              <h5>DataCamp</h5>
              <p>SEP-18-2024</p>
            </div>
        </div>

        <div className='custom-bg p-4 rounded-xl flex flex-col gap-3'>
            <Image
                src={relationalDatabasesInSQL}
                alt='Accosiate Data Engineering Certificate'
                className='rounded-xl w-full h-full'
            />
            <h3 className='text-lg sm:text-xl text-accent font-semibold md:font-semibold tracking-wider'>Introduction to Relational Databases in SQL</h3>
            <div className='flex justify-between text-sm text-foreground tracking-wider'>
              <h5>DataCamp</h5>
              <p>SEP-16-2024</p>
            </div>
        </div>

        <div className='custom-bg p-4 rounded-xl flex flex-col gap-3'>
            <Image
                src={intermediateSQL}
                alt='Accosiate Data Engineering Certificate'
                className='rounded-xl w-full h-full'
            />
            <h3 className='text-lg sm:text-xl text-accent font-semibold md:font-semibold tracking-wider'>Intermediate SQL</h3>
            <div className='flex justify-between text-sm text-foreground tracking-wider'>
              <h5>DataCamp</h5>
              <p>SEP-14-2024</p>
            </div>
        </div>

        <div className='custom-bg p-4 rounded-xl flex flex-col gap-3'>
            <Image
                src={sqlIntro}
                alt='Accosiate Data Engineering Certificate'
                className='rounded-xl w-full h-full'
            />
            <h3 className='text-lg sm:text-xl text-accent font-semibold md:font-semibold tracking-wider'>Introduction to SQL</h3>
            <div className='flex justify-between text-sm text-foreground tracking-wider'>
              <h5>DataCamp</h5>
              <p>SEP-10-2024</p>
            </div>
        </div>

        <div className='custom-bg p-4 rounded-xl flex flex-col gap-3'>
            <Image
                src={snowflakeIntroByDataCamp}
                alt='Accosiate Data Engineering Certificate'
                className='rounded-xl w-full h-full'
            />
            <h3 className='text-lg sm:text-xl text-accent font-semibold md:font-semibold tracking-wider'>Introduction to Snowflake by DataCamp</h3>
            <div className='flex justify-between text-sm text-foreground tracking-wider'>
              <h5>DataCamp</h5>
              <p>SEP-21-2024</p>
            </div>
        </div>

        <div className='custom-bg p-4 rounded-xl flex flex-col gap-3'>
            <Image
                src={dataEngineeringByDataCamp}
                alt='Accosiate Data Engineering Certificate'
                className='rounded-xl w-full h-full'
            />
            <h3 className='text-lg sm:text-xl text-accent font-semibold md:font-semibold tracking-wider'>Understanding Data Engineering</h3>
            <div className='flex justify-between text-sm text-foreground tracking-wider'>
              <h5>DataCamp</h5>
              <p>SEP-12-2024</p>
            </div>
        </div>

        <div className='custom-bg p-4 rounded-xl flex flex-col gap-3'>
            <Image
                src={cloudComputing}
                alt='Accosiate Data Engineering Certificate'
                className='rounded-xl w-full h-full'
            />
            <h3 className='text-lg sm:text-xl text-accent font-semibold md:font-semibold tracking-wider'>Understanding Cloud Computing</h3>
            <div className='flex justify-between text-sm text-foreground tracking-wider'>
              <h5>DataCamp</h5>
              <p>SEP-28-2024</p>
            </div>
        </div>

        <div className='custom-bg p-4 rounded-xl flex flex-col gap-3'>
            <Image
                src={pythonForDevelopers}
                alt='Accosiate Data Engineering Certificate'
                className='rounded-xl w-full h-full'
            />
            <h3 className='text-lg sm:text-xl text-accent font-semibold md:font-semibold tracking-wider'>Python For Developers</h3>
            <div className='flex justify-between text-sm text-foreground tracking-wider'>
              <h5>DataCamp</h5>
              <p>SEP-29-2024</p>
            </div>
        </div>

        <div className='custom-bg p-4 rounded-xl flex flex-col gap-3'>
            <Image
                src={pythonIntro}
                alt='Accosiate Data Engineering Certificate'
                className='rounded-xl w-full h-full'
            />
            <h3 className='text-lg sm:text-xl text-accent font-semibold md:font-semibold tracking-wider'>Introduction to Python</h3>
            <div className='flex justify-between text-sm text-foreground tracking-wider'>
              <h5>DataCamp</h5>
              <p>SEP-12-2024</p>
            </div>
        </div>

        <div className='custom-bg p-4 rounded-xl flex flex-col gap-3'>
            <Image
                src={pythonProjects}
                alt='Accosiate Data Engineering Certificate'
                className='rounded-xl w-full h-full'
            />
            <h3 className='text-lg sm:text-xl text-accent font-semibold md:font-semibold tracking-wider'>Python Projects Certificate</h3>
            <div className='flex justify-between text-sm text-foreground tracking-wider'>
              <h5>Greet Learning</h5>
              <p>Jun-2024</p>
            </div>
        </div>

        <div className='custom-bg p-4 rounded-xl flex flex-col gap-3'>
            <Image
                src={pythonTkinter}
                alt='Accosiate Data Engineering Certificate'
                className='rounded-xl w-full h-full'
            />
            <h3 className='text-lg sm:text-xl text-accent font-semibold md:font-semibold tracking-wider'>Python Tkinter</h3>
            <div className='flex justify-between text-sm text-foreground tracking-wider'>
              <h5>Greet Learning</h5>
              <p>July-2024</p>
            </div>
        </div>

        <div className='custom-bg p-4 rounded-xl flex flex-col gap-3'>
            <Image
                src={careerEssentialsInGenAI}
                alt='Accosiate Data Engineering Certificate'
                className='rounded-xl w-full h-full'
            />
            <h3 className='text-lg sm:text-xl text-accent font-semibold md:font-semibold tracking-wider'>Career Essentials in Generative AI</h3>
            <div className='flex justify-between text-sm text-foreground tracking-wider'>
              <h5>Microsoft & Linkedin</h5>
              <p>Jun-29-2024</p>
            </div>
        </div>

        <div className='custom-bg p-4 rounded-xl flex flex-col gap-3'>
            <Image
                src={ethicsInAgeOfGenAI2}
                alt='Accosiate Data Engineering Certificate'
                className='rounded-xl w-full h-full'
            />
            <h3 className='text-lg sm:text-xl text-accent font-semibold md:font-semibold tracking-wider'>Ethics in the Age of Generative AI-2</h3>
            <div className='flex justify-between text-sm text-foreground tracking-wider'>
              <h5>Linkedin</h5>
              <p>Jun-25-2024</p>
            </div>
        </div>

        <div className='custom-bg p-4 rounded-xl flex flex-col gap-3'>
            <Image
                src={ethicsInAgeOfGenAI}
                alt='Accosiate Data Engineering Certificate'
                className='rounded-xl w-full h-full'
            />
            <h3 className='text-lg sm:text-xl text-accent font-semibold md:font-semibold tracking-wider'>Ethics in the Age of Generative AI</h3>
            <div className='flex justify-between text-sm text-foreground tracking-wider'>
              <h5>Linkedin</h5>
              <p>Jun-25-2024</p>
            </div>
        </div>

        <div className='custom-bg p-4 rounded-xl flex flex-col gap-3'>
            <Image
                src={thoughtfulOnlineSearch}
                alt='Accosiate Data Engineering Certificate'
                className='rounded-xl w-full h-full'
            />
            <h3 className='text-lg sm:text-xl text-accent font-semibold md:font-semibold tracking-wider'>The Evolution of Thoughtful Online Search</h3>
            <div className='flex justify-between text-sm text-foreground tracking-wider'>
              <h5>Linkedin</h5>
              <p>Jun-19-2024</p>
            </div>
        </div>

        <div className='custom-bg p-4 rounded-xl flex flex-col gap-3'>
            <Image
                src={whatIsGenAI}
                alt='Accosiate Data Engineering Certificate'
                className='rounded-xl w-full h-full'
            />
            <h3 className='text-lg sm:text-xl text-accent font-semibold md:font-semibold tracking-wider'>What Is Generative AI</h3>
            <div className='flex justify-between text-sm text-foreground tracking-wider'>
              <h5>Linkedin</h5>
              <p>Jun-18-2024</p>
            </div>
        </div>

        <div className='custom-bg p-4 rounded-xl flex flex-col gap-3'>
            <Image
                src={microsoftCopilot}
                alt='Accosiate Data Engineering Certificate'
                className='rounded-xl w-full h-full'
            />
            <h3 className='text-lg sm:text-xl text-accent font-semibold md:font-semibold tracking-wider'>Streamlining with Microsoft Copilot</h3>
            <div className='flex justify-between text-sm text-foreground tracking-wider'>
              <h5>Linkedin</h5>
              <p>Jun-20-2024</p>
            </div>
        </div>

        <div className='custom-bg p-4 rounded-xl flex flex-col gap-3'>
            <Image
                src={learnMicrosoftCopilot}
                alt='Accosiate Data Engineering Certificate'
                className='rounded-xl w-full h-full'
            />
            <h3 className='text-lg sm:text-xl text-accent font-semibold md:font-semibold tracking-wider'>Learning Microsoft 365 Copilot</h3>
            <div className='flex justify-between text-sm text-foreground tracking-wider'>
              <h5>Linkedin</h5>
              <p>Jun-21-2024</p>
            </div>
        </div>

        <div className='custom-bg p-4 rounded-xl flex flex-col gap-3'>
            <Image
                src={introOfAI}
                alt='Accosiate Data Engineering Certificate'
                className='rounded-xl w-full h-full'
            />
            <h3 className='text-lg sm:text-xl text-accent font-semibold md:font-semibold tracking-wider'>Introduction to Artificial Intelligence</h3>
            <div className='flex justify-between text-sm text-foreground tracking-wider'>
              <h5>Linkedin</h5>
              <p>Jun-29-2024</p>
            </div>
        </div>

        <div className='custom-bg p-4 rounded-xl flex flex-col gap-3'>
            <Image
                src={htmlCSSIntership}
                alt='Accosiate Data Engineering Certificate'
                className='rounded-xl w-full h-full'
            />
            <h3 className='text-lg sm:text-xl text-accent font-semibold md:font-semibold tracking-wider'>Internship of HTML-CSS Developer</h3>
            <div className='flex justify-between text-sm text-foreground tracking-wider'>
              <h5>TechNetCloud</h5>
            </div>
        </div>

        <div className='custom-bg p-4 rounded-xl flex flex-col gap-3'>
            <Image
                src={typeScript}
                alt='Accosiate Data Engineering Certificate'
                className='rounded-xl w-full h-full'
            />
            <h3 className='text-lg sm:text-xl text-accent font-semibold md:font-semibold tracking-wider'>Certificate of TypeScript</h3>
            <div className='flex justify-between text-sm text-foreground tracking-wider'>
              <h5>Greet Learning</h5>
              <p>Jun-2024</p>
            </div>
        </div>

        <div className='custom-bg p-4 rounded-xl flex flex-col gap-3'>
            <Image
                src={spokenEnglish}
                alt='Accosiate Data Engineering Certificate'
                className='rounded-xl w-full h-full'
            />
            <h3 className='text-lg sm:text-xl text-accent font-semibold md:font-semibold tracking-wider'>certificate of spoken english</h3>
            <div className='flex justify-between text-sm text-foreground tracking-wider'>
              <h5>Greet Learning</h5>
              <p>Jun-2024</p>
            </div>
        </div>

      </div>


    </div>
  )
}

export default CertificationDetails
