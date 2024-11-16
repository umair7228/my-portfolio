/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/

export const projectSections = {
  'engineering': {
    id: 1,
    name: "Cloud Data Engineering",
    description: "This section showcases projects focused on cloud data engineering, including database management, ETL processes, data warehousing, and cloud-based data solutions using tools like Snowflake, AWS, SQL, Python and more.",
  },

  'frontend': {
    id: 2,
    name: "Frontend Development",
    description: "In this section, you'll find projects centered around modern frontend development, featuring responsive and interactive web applications built with technologies such as HTML, CSS (Tailwind CSS), JavaScript, TypeScript, React.js, Next.js, Framer Motion and more.",
  },

  'analysis': {
    id: 3,
    name: "Exploratory Data Analysis (EDA)",
    description: "This section highlights projects that delve into data analysis, visualization, and pattern discovery through exploratory data analysis (EDA) techniques, using tools like Python, Pandas, Matplotlib, Jupyter notebooks and more.",
  }
}

export const dataEngineeringProjects = {
  "weatherMapProject": {
    id: 10,
    name: "Weather and S3 Data Integration Pipeline",
    description: "Developed a data pipeline using Apache Airflow on AWS EC2 to integrate weather data from OpenWeather API and Amazon S3 into an RDS PostgreSQL database. Transformed and joined data in parallel, with the final output stored in Amazon S3.",
    demoLink: "https://github.com/umair7228/Real-Estate-Data-Pipeline",
  },
  "scdImplementationProject": {
    id: 9,
    name: "Real-Time Data Pipeline with SCD Implementation",
    description: "Developed an end-to-end data pipeline that generates synthetic data using Python, extracts and transfers it via NiFi to S3, and ingests it into Snowflake using Snowpipe, with SCD Type 1 & 2 implementations for effective data tracking and management.",
    demoLink: "https://github.com/umair7228/Real-Estate-Data-Pipeline",
  },
  "redfinProject": {
    id: 8,
    name: "Real Estate Data Pipeline",
    description: "This project implements a scalable data pipeline to extract, transform, and load real estate data from Redfin into Snowflake using AWS services. The data is later visualized in Power BI to provide insights into real estate trends.",
    demoLink: "https://github.com/umair7228/Real-Estate-Data-Pipeline",
  },
  "snowflakeDataLoading": {
    id: 7,
    name: "Snowflake Multiple Data Loading Methods",
    description: "The project involves using Snowflake's architecture for data ingestion, transformation, and visualization, integrating AWS services and local tools, with a focus on performance optimization and time travel.",
    demoLink: "https://github.com/umair7228/Snowflake-Loading-Data",
  },
  "eCommerceSalesProject": {
    id: 6,
    name: "E-Commerce Sales Analysis",
    description: "The objective of this project is to analyze e-commerce sales data to derive meaningful insights that can help in making data-driven decisions to optimize business processes and strategies.",
    demoLink: "https://github.com/umair7228/E-Commerce-Sales-Analysis",
  },
  "dataAnalysisProject": {
    id: 5,
    name: "End-to-End Data Analysis Project",
    description: "It demonstrates an end-to-end data analysis process using a dataset from Kaggle, involving data acquisition, cleaning, and analysis using Python, Pandas, and SQL.",
    demoLink: "https://github.com/umair7228/Data-Analysis-Mini-Projects/tree/main/End%20to%20End%20Data%20Anlysis%20Project",
  },
  "netflixMoviesProject": {
    id: 4,
    name: "Investigating Netflix Movies",
    description: "The objective was to analyze trends in the duration of Netflix movies over the past decade using Python and various data analysis libraries.",
    demoLink: "https://github.com/umair7228/Data-Analysis-Mini-Projects/tree/main/Investigating%20Netflix%20Movies",
  },
  "githubHistoryProject": {
    id: 3,
    name: "The GitHub History of the Scala Language",
    description: "This project leverages real-world repository data to analyze the development trajectory of Scala, highlighting key contributors and significant periods of activity.",
    demoLink: "https://github.com/umair7228/Data-Analysis-Mini-Projects/tree/main/The%20GitHub%20History%20of%20the%20Scala%20Language",
  },
  "pythonETLProject": {
    id: 2,
    name: "ETL with Python",
    description: "This project implements an ETL process to extract, transform, and load data on the world’s largest banks into a database, with logging, CSV export, and query functions.",
    demoLink: "https://github.com/umair7228/ETL-Python-Project",
  },
  "androidAppProject": {
    id: 1,
    name: "The Android App Market on Google Play",
    description: "This project analyzes the Android app market by examining metrics like app categories, ratings, reviews, and installs to uncover trends and user preferences.",
    demoLink: "https://github.com/umair7228/Data-Analysis-Mini-Projects/tree/main/The%20Android%20App%20Market%20on%20Google%20Play",
  },
};

export const frontendProjects = {
  "dashboardProject": {
    id: 1,
    name: "Personal Finance Dashboard",
    description: "This is a static frontend dashboard created using Next.js, showcasing a user interface for managing bank cards, viewing transactions, and displaying financial summaries without any backend functionality.",
    demoLink: "https://github.com/umair7228/nextjs-dashboard-app",
  },
  "amazonProject": {
    id: 2,
    name: "Amazon Clone",
    description: "Amazon Clone  is a static single-page frontend clone of an e-commerce website inspired by Amazon.",
    demoLink: "https://github.com/umair7228/Amazon-Clone",
  },
  "portfolioWeb": {
    id: 3,
    name: "Portfolio Web",
    description: "A personal portfolio website built using HTML, CSS, and TypeScript",
    demoLink: "https://github.com/umair7228/umair-portfolio-web",
  },
  "editableResume": {
    id: 4,
    name: "Editable Resume Builder",
    description: "A customizable resume builder created using modern web technologies, allowing users to input their details and generate professional resumes quickly and easily.",
    demoLink: "https://github.com/umair7228/editable-resume-builder",
  },
  "todoList": {
    id: 5,
    name: "Todo List",
    description: "A simple and intuitive to-do list application built with React, allowing users to add, track, and manage tasks efficiently.",
    demoLink: "https://github.com/umair7228/react-todolist",
  },
  "docsManagement": {
    id: 6,
    name: "Simple Docs Management App",
    description: "A simple document management app built using modern web technologies.",
    demoLink: "https://github.com/umair7228/docs-app",
  },
  "imageSlider": {
    id: 7,
    name: "Image Slider",
    description: "A simple image slider created with HTML, CSS, and JavaScript, allowing users to navigate through images using next and previous buttons.",
    demoLink: "https://github.com/umair7228/TechNetCloud-Internship-Tasks/tree/main/Image%20Slider",
  },
  "facebookLogin": {
    id: 8,
    name: "Facebook Login Page",
    description: "A clone of the Facebook login page built using HTML, CSS, and JavaScript to replicate the layout and design of the original login interface.",
    demoLink: "https://github.com/umair7228/TechNetCloud-Internship-Tasks/tree/main/Facebook-login-page",
  },
};


// export const BtnList = [
//   { label: "Home", link: "/", icon: "home", newTab: false },
//   { label: "About", link: "/about", icon: "about", newTab: false },
//   { label: "Services", link: "/services", icon: "services", newTab: false },
//   { label: "Projects", link: "/projects", icon: "projects", newTab: false },
//   { label: "Certifications", link: "/certifications", icon: "certifications", newTab: false },
//   { label: "Contact", link: "/contact", icon: "contact", newTab: false },
//   {
//     label: "Github",
//     link: "https://www.github.com/umair7228",
//     icon: "github",
//     newTab: true,
//   },
//   {
//     label: "LinkedIn",
//     link: "https://www.linkedin.com/in/umairnawaz7228",
//     icon: "linkedin",
//     newTab: true,
//   },
//   {
//     label: "Resume",
//     link: "/resume.pdf",
//     icon: "resume",
//     newTab: true,
//   },
// ];


