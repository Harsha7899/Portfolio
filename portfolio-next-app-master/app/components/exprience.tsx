"use client";

import { Card, CardHeader, CardBody, Divider, Chip } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useRef } from "react";

const experiences = [

  {
    title: "Graduate Intern - Operations And Data Analyst",
    company: " University of Massachusetts Lowell",
    period: "Sept 2023 - May 2025 ",
    description: [
     "• Analysed data trends to streamline workflows, reducing report completion time by 20% and improving inventory tracking accuracy by 25% through Pantry Soft. ",
     "• Directed a team of 8 program assistants, optimizing resource allocation through Pantry Soft, which increased operational efficiency by 30%.",
     "• Increased program visibility and community engagement by 35% through targeted social media campaigns and cross-department collaboration with internal teams and external Organizations. ",
    ],
    technologies: ["Communication", "Mentoring", "Leadership"],
  },
  {
    title: "Software Engineer",
    company: "Entain",
    period: "July 2021 - Sep 2023",
    description: [
      "• Developed a desktop poker betting/gambling platform with client-server architecture using VC++/MFC, delivering seamless gameplay to 60+ clients.", 
      "• Integrated a third-party 'My Game' application into the game table using Win32 API, enabling statistical tracking for over 100,000 players, and enhancing analytics capabilities by 40%.", 
      "• Executed 50+ advanced MySQL scripts to perform CRUD operations, optimizing release management and reducing deployment errors by 30%.",
      "• Improved a CI/CD pipeline using GitLab, achieving 95% deployment uptime and reducing manual effort by 50%.", 
      "• Resolved 35+ critical incidents and 20+ escalations with a 100% resolution rate, leveraging JIRA for efficient issue tracking and root cause analysis.",
    ],
    technologies: ["C++", "MySQL", "Sitecore", "GitLab"],
  },

 
  // {
  //   title: "Machine Learning Intern",
  //   company: "Ram Innovative Infotech",
  //   period: "Jan 2022 - June 2022",
  //   description: [
  //     "• Developed a Computer Vision system for Drowsiness Detection using Haar Classifiers, OpenCV, achieving 95% accuracy.",
  //     "• Implemented a facial landmark detection algorithm to calculate eye aspect ratio (EAR), monitoring and analyzing eye closure patterns and triggering alerts for prolonged closures.",
  //     "• Integrated webcam and sensors to process video streams, cutting costs by 40% for a portable automotive safety system.",
  //   ],
  //   technologies: [
  //     "Python",
  //     "Machine Learning",
  //     "Haar-Cascade Classifiers",
  //     "Dlib",
  //     "Raspberry Pi",
  //   ],
  // },
  // {
  //   title: "Software Developer",
  //   company: "Zenbyt",
  //   period: "Jan 2022 - Dec 2022",
  //   description: [
  //     "• Migrated a legacy PHP application to Node.js and Express, boosting development by 50% and increasing user retention by 25%.",
  //     "• Implemented RESTful APIs with Redis caching, supporting 100K+ daily requests at 99.9% uptime and sub-100ms response time.",
  //     "• Achieved 40% improved query performance by optimizing PostgreSQL models with Sequelize ORM for client’s SaaS platform.",
  //     "• Built responsive frontend using React.js and Redux, achieving 45% faster page loads and 30% increase in user engagement.",
  //   ],
  //   technologies: [
  //     "ReactJs",
  //     "Node.js",
  //     "Express",
  //     "Redux",
  //     "PostrgeSQL",
  //     "Sequelize",
  //   ],
  // },
];

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="experience" className="lg:py-20 py-10" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-10 text-center">Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px", once: true }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                }}
              >
                <Card className="bg-background/40 backdrop-blur-md border border-white/10">
                  <CardHeader className="flex flex-col sm:flex-row justify-between px-6">
                    <div className=" flex justify-center items-center md:items-start flex-col">
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="text-primary text-nowrap">{exp.company}</p>
                    </div>
                    <p className="text-default-500">{exp.period}</p>
                  </CardHeader>
                  <Divider />
                  <CardBody className="px-6">
                    {exp.description.map((desc) => (
                      <p key={desc} className="text-default-500 mb-2">
                        {desc}
                      </p>
                    ))}
                    <div className="flex gap-2 flex-wrap mt-2">
                      {exp.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          color="primary"
                          classNames={{
                            content: "text-white font-medium",
                            base: "bg-primary/80 hover:bg-primary/90 transition-colors",
                          }}
                        >
                          {tech}
                        </Chip>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
