"use client";

import { Card, CardBody, Chip } from "@nextui-org/react";
import { motion } from "framer-motion";
import LinkedInBadge from "./linkedin-badge";

const skills = {
  Languages: ["Java", "Python", "JavaScript", "C#", "C/C++"],
  "Web Technologies": [
    "React.js",
    "HTML",
    "CSS",
    "RESTful API",
    "jQuery",
    "Ajax",
    "JSON"
  ],
  Frameworks: [
    "Spring Boot",
    "Microservices",
    "Hibernate",
    "Node.js",
    "Express",
  ],
  Databases: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
  "Cloud & DevOps": ["AWS", "Google Cloud Platform", "Docker", "Kubernetes"],
  "Libraries": ["NumPy", "Pandas", "Scikit-learn", "TensorFlow"],
  "Testing & Tools": ["Git", "CI/CD", "Linux", "Postman", "IntelliJ IDEA"],
};

export default function About() {
  return (
    <section id="about" className="lg:py-20 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="transform-gpu">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-center mb-10">About Me</h2>
            <Card className="bg-background/40 backdrop-blur-md border border-white/10">
              <CardBody className="gap-8">

                {/* 👉 Image inserted here with larger size */}
                <div className="w-full flex justify-center">
                  <img
                    src="about-me.png"
                    alt="Sri Harsha Mattaparthy"
                    className="w-60 h-60 rounded-full object-cover shadow-lg"
                  />
                </div>

                <p className="text-lg text-default-500">
                I'm Sri Harsha Mattaparthy, a passionate and results-driven software engineer with experience in backend development, cloud computing, and data analytics. 
                Currently pursuing my Master's in Computer Science at the University of Massachusetts Lowell, I bring a strong foundation in Java, Python, and C++ alongside expertise in REST APIs, Spring Boot, AWS, and DevOps tools like Docker and Kubernetes.</p>
                <p className="text-lg text-default-500">
                With hands-on experience as a Software Engineer at Entain, I have contributed to large-scale gaming platforms, optimized CI/CD pipelines, and improved system performance through innovative solutions.
                As a Data Analyst intern at UMass Lowell, I have leveraged data-driven insights to enhance operational efficiency and optimize resource allocation.</p>
                <p className="text-lg text-default-500">
                Beyond coding, I am passionate about building intelligent solutions, having worked on machine learning models for predictive analytics and developing real-time applications that drive impactful results. My portfolio showcases my journey in software engineering, cloud technologies, and problem-solving through scalable and efficient solutions.
                </p>

                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="space-y-6 flex-grow">
                    {Object.entries(skills).map(([category, skillList], index) => (
                      <motion.div
                        key={category}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <h3 className="text-xl font-semibold mb-3">{category}</h3>
                        <div className="flex flex-wrap gap-2">
                          {skillList.map((skill) => (
                            <Chip
                              key={skill}
                              color="primary"
                              classNames={{
                                content: "text-white font-medium",
                                base: "bg-primary/80 hover:bg-primary/90 transition-colors",
                              }}
                            >
                              {skill}
                            </Chip>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="w-full lg:w-auto flex justify-center items-start">
                    <motion.div
                      className="w-[300px] sm:w-[350px] lg:w-[300px] flex"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      <LinkedInBadge />
                    </motion.div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
