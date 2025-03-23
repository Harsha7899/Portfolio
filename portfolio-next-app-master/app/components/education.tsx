"use client";
import { motion } from "framer-motion";
import { Card, CardBody, Chip } from "@nextui-org/react";
import { GraduationCap, BookOpen } from "lucide-react";
import Image from "next/image";

interface Education {
  degree: string;
  school: string;
  duration: string;
  gpa: string;
  coursework: string[];
  logo: string;
}

export function Education() {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "University of Massachusetts Lowell",
      duration: "2023 - 2025",
      gpa: "3.4/4.0",
      logo: "/umass-logo.png",
      coursework: [
        "Algorithms",
        "Operating Systems",
        "Computer Graphics",
        "Machine Learning",
        "Cloud Computing",
        "IOT",
        "Data Mining",
        "Computer Network Fundamentals",
        "Computer Networks Security",
        "Malware Analysis"
      ],
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      school: "Gandhi Institute of Technology And Management University",
      duration: "2017 - 2021",
      gpa: "3.2",
      logo: "/gitam-logo.png",
      coursework: [
        "Object Oriented Programming",
        "Java Programming",
        "Operating Systems",
        "Distributed Systems",
        "Data Structures",
        "Database Management",
        "Software Engineering",
        "C++ Programming",
        "Discrete Mathematics",
        "Web Systems"
      ],
    },
  ];

  return (
    <section id="education" className="lg:py-20 py-10">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-center">Education</h2>
          <p className="text-default-500 text-center mb-8">
            My academic journey and qualifications
          </p>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="bg-background/40 backdrop-blur-md border border-white/10"
              >
                <CardBody className="gap-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-primary" />
                        <h3 className="text-xl font-semibold">{edu.degree}</h3>
                      </div>
                      <p className="text-default-500">{edu.school}</p>
                      <p className="text-sm text-default-400">{edu.duration}</p>
                      <p className="text-sm text-primary mt-1">
                        GPA: {edu.gpa}
                      </p>
                    </div>
                    <div className="relative">
                      <Image
                        src={edu.logo}
                        alt={`${edu.school} logo`}
                        width={80}
                        height={80}
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">
                        Key Coursework
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, idx) => (
                        <Chip
                          key={idx}
                          size="sm"
                          variant="flat"
                          classNames={{
                            base: "bg-primary/10 text-primary",
                          }}
                        >
                          {course}
                        </Chip>
                      ))}
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
