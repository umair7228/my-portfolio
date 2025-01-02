export const dataEngineeringProjects = [
  {
    id: 16,
    name: "Spotify Data ETL Pipeline",
    description:
      "A serverless ETL pipeline integrating Spotify's API with AWS to fetch, transform, and load playlist data for queryable analytics using services like Lambda, S3, Glue, and Athena.",
    demoLink: "https://github.com/umair7228/Spotify-Data-ETL-Pipeline-using-AWS",
    image: "/projects-images/data-engineering-images/spotify-pipeline.png",
  },
  {
    id: 15,
    name: "Pandemic Insights: ETL Pipeline with AWS Glue, Athena & Redshift",
    description:
      "Developed a scalable ETL pipeline using AWS Glue, Athena, and Redshift to process and analyze COVID-19 data from multiple sources. Designed fact and dimension tables, optimized data queries, and loaded the results into Redshift for data-driven insights.",
    demoLink: "https://github.com/umair7228/COVID-Data-Pipeline",
    image: "/projects-images/data-engineering-images/COVID-Data-Pipeline.png",
  },
  {
    id: 14,
    name: "Serverless Data Lake Architecture on AWS",
    description:
      "A fully automated serverless data lake solution using AWS services to ingest, process, and notify users about data transformations. This architecture leverages S3, Lambda, Glue Crawlers and Jobs, CloudWatch, and SNS to streamline ETL processes and deliver scalable data insights.",
    demoLink: "https://github.com/umair7228/Serverless-Data-Lake-Architecture",
    image: "/projects-images/data-engineering-images/serverlessDataLake.png",
  },
  {
    id: 13,
    name: "Dataflow Insights",
    description:
      "DataFlow Insights is an automated data pipeline project that pushes daily data to Amazon S3, uses AWS Glue to catalog it, and Amazon Athena to query it. Finally, the data is visualized in Amazon QuickSight, creating a streamlined process for insightful data analysis and visualization.",
    demoLink: "https://github.com/umair7228/DataFlow-Insights",
    image: "/projects-images/data-engineering-images/dataflow-Insights.png",
  },
  {
    id: 12,
    name: "Event-Driven Data Pipeline with AWS",
    description:
      "Built a real-time data pipeline using AWS services including (S3, SNS, SQS, Lambda) to process events asynchronously, ensuring reliability, scalability, and fault tolerance. The architecture demonstrates an event-driven approach, where events in an S3 bucket trigger a flow through SNS, SQS, and Lambda, with the processed output stored back in S3.",
    demoLink: "https://github.com/umair7228/event-driven-architecture",
    image: "/projects-images/data-engineering-images/event-driven-pipeline.png",
  },
  {
    id: 11,
    name: "Real-Time Stock Market Data Pipeline",
    description:
      "Built a real-time data pipeline for stock market data. It integrates Apache Kafka for data streaming and multiple AWS services for data storage and querying.",
    demoLink:
      "https://github.com/umair7228/stock-market-data-pipeline-with-kafka-and-aws",
      image: "/projects-images/data-engineering-images/stock-market-data-pipeline.png",
  },
  {
    id: 10,
    name: "Weather and S3 Data Integration Pipeline",
    description:
      "Developed a data pipeline using Apache Airflow on AWS EC2 to integrate weather data from OpenWeather API and Amazon S3 into an RDS PostgreSQL database. Transformed and joined data in parallel, with the final output stored in Amazon S3.",
    demoLink: "https://github.com/umair7228/parallel-etl-pipeline",
    image: "/projects-images/data-engineering-images/weatherMap.png",
  },
  {
    id: 9,
    name: "Real-Time Data Pipeline with SCD Implementation",
    description:
      "Developed an end-to-end data pipeline that generates synthetic data using Python, extracts and transfers it via NiFi to S3, and ingests it into Snowflake using Snowpipe, with SCD Type 1 & 2 implementations for effective data tracking and management.",
    demoLink:
      "https://github.com/umair7228/Real-Time-Data-Pipeline-with-AWS-NiFi-and-Snowflake",
      image: "/projects-images/data-engineering-images/scd-architecture.png",
  },
  {
    id: 8,
    name: "Real Estate Data Pipeline",
    description:
      "This project implements a scalable data pipeline to extract, transform, and load real estate data from Redfin into Snowflake using AWS services. The data is later visualized in Power BI to provide insights into real estate trends.",
    demoLink: "https://github.com/umair7228/Real-Estate-Data-Pipeline",
    image: "/projects-images/data-engineering-images/redfin-diagram.png",
  },
  {
    id: 7,
    name: "Snowflake Multiple Data Loading Methods",
    description:
      "The project involves using Snowflake's architecture for data ingestion, transformation, and visualization, integrating AWS services and local tools, with a focus on performance optimization and time travel.",
    demoLink: "https://github.com/umair7228/Snowflake-Loading-Data",
    image: "/projects-images/data-engineering-images/flow.png",
  },
  {
    id: 6,
    name: "E-Commerce Sales Analysis",
    description:
      "The objective of this project is to analyze e-commerce sales data to derive meaningful insights that can help in making data-driven decisions to optimize business processes and strategies.",
    demoLink: "https://github.com/umair7228/E-Commerce-Sales-Analysis",
    image: "/projects-images/data-engineering-images/ecommerce-sales-analysis.png",
  },
  {
    id: 5,
    name: "End-to-End Data Analysis Project",
    description:
      "It demonstrates an end-to-end data analysis process using a dataset from Kaggle, involving data acquisition, cleaning, and analysis using Python, Pandas, and SQL.",
    demoLink:
      "https://github.com/umair7228/Data-Analysis-Mini-Projects/tree/main/End%20to%20End%20Data%20Anlysis%20Project",
      image: "/projects-images/data-engineering-images/end-to-end-data-analysis.png",
  },
  {
    id: 4,
    name: "Investigating Netflix Movies",
    description:
      "The objective was to analyze trends in the duration of Netflix movies over the past decade using Python and various data analysis libraries.",
    demoLink:
      "https://github.com/umair7228/Data-Analysis-Mini-Projects/tree/main/Investigating%20Netflix%20Movies",
      image: "/projects-images/data-engineering-images/investigatingNetflixMovies.jpg",
  },
  {
    id: 3,
    name: "GitHub History of Scala Language",
    description:
      "This project leverages real-world repository data to analyze the development trajectory of Scala, highlighting key contributors and significant periods of activity.",
    demoLink:
      "https://github.com/umair7228/Data-Analysis-Mini-Projects/tree/main/The%20GitHub%20History%20of%20the%20Scala%20Language",
      image: "/projects-images/data-engineering-images/github-history.png",
  },
  {
    id: 2,
    name: "ETL with Python",
    description:
      "This project implements an ETL process to extract, transform, and load data on the world's largest banks into a database, with logging, CSV export, and query functions.",
    demoLink: "https://github.com/umair7228/ETL-Python-Project",
    image: "/projects-images/data-engineering-images/python-etl-project.png",
  },
  {
    id: 1,
    name: "The Android App Market on Google Play",
    description:
      "This project analyzes the Android app market by examining metrics like app categories, ratings, reviews, and installs to uncover trends and user preferences.",
    demoLink:
      "https://github.com/umair7228/Data-Analysis-Mini-Projects/tree/main/The%20Android%20App%20Market%20on%20Google%20Play",
    image: "/projects-images/data-engineering-images/android-app-analysis.png",
  },
];  