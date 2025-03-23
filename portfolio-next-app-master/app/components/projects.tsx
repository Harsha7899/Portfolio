"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "./projects-card";
import { useRef } from "react";

const projects = [
  {
    title: "Mushroom Dataset Analysis and Conversion",
    description:
      " Optimized data preprocessing using one-hot encoding and feature scaling, increasing validation accuracy to 97.15%. Built a high-accuracy machine learning model that classified datasets with 96.90% precision, ensuring reliable predictions anddata-driven decision-making.Reduced model training time by 20% by streamlining data pipelines and optimizing memory management with NumPy andpandas, enhancing computational efficiency. Maintained an error margin below 3.25% across training, validation, and testing phases, ensuring model consistency.",
    technologies: ["Python", "NumPy","Pandas","Scikit-learn"],
    projectUrl: "https://github.com/Harsha7899/Mushroom-Data-Conversion"
  },
  {
    title: "Encrypted Overlay Network",
    description:
      "Built an encrypted communication network with authentication mechanisms for secure data transmission. Integrated secret key encryption into the client-server architecture, ensuring confidentiality. Implemented multi-layered encryption techniques to enhance security and protect against cyber threats. Designed a custom authentication mechanism to prevent unauthorized access. Optimized data packet transmission, improving network performance by 25%.",
    technologies: ["Python"],
    projectUrl: "https://github.com/Harsha7899/Encrypted-Overly-Network"
  },
  {
    title: "Remote Patient Health Monitoring System",
    description:
      "Analysed 6,500+ datasets using Python and Pandas, systematically categorizing data into structured columns, increasing analysis efficiency by 40%. Implemented the LSTM machine learning algorithm to train and test datasets, achieving an 85% model accuracy for predictive analytics. Designed a mobile application in Java to predict heart failure risk, achieving 99.9% uptime and enhancing patient care through early intervention by improving prediction accuracy.  Integrated a TFlite model into the mobile application, streamlining real-time data validation and boosting prediction accuracy by 15% for heart failure risk assessments.",
    technologies: ["Python", "TensorFlow", "Pandas", "Java"],
    projectUrl: "https://github.com/Harsha7899/Rpm"
  },
  {
    title: "On-Road Vehicle Breakdown Assistance Finder",
    description:
      "Developed a 3-tier layered responsive web application using HTML, CSS, JavaScript, and PHP integrating Google Maps APIs to display nearby fuel stations, hospitals, and mechanics, enhancing user experience by 40%. Created a Monolithic architecture that supported seamless updates and maintenance, ensuring 99.9% system uptime andenhancing operational efficiency for the development team while minimizing downtime disruptions. Executed SQL queries in MySQL Workbench to populate and validate user data, increasing data integrity and accuracy by 30%.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    projectUrl: "https://github.com/Harsha7899/vba"
  },
 ];

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <section id="projects" className="lg:py-20 py-10" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-10 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="h-full" // Add this
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px", once: true }}
                transition={{
                  duration: 0.2,
                  delay: index * 0.1,
                }}
              >
                <ProjectCard {...project} index={index} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
