"use client";

import { Button, Link } from "@nextui-org/react";
import { motion } from "framer-motion";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { FloatingSkills } from "./floating-skills";

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] text-center px-4 ">
      <FloatingSkills />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="space-y-6 z-10"
      >
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
          Software Engineer
          <span className="block text-primary">& Full Stack Engineer</span>
        </h1>
        <p className="text-lg text-default-500 max-w-[600px] mx-auto">
          Specialized in building scalable web applications and integrating
          API. Strong experience in React and Java Spring ecosystem.
        </p>
        <div className="flex gap-4 justify-center items-center flex-wrap">
          <Button
            as={Link}
            href="#projects"
            color="primary"
            variant="shadow"
            radius="full"
            size="lg"
          >
            View My Work
          </Button>
          <div className="flex gap-4">
            <Button
              as={Link}
              href="https://github.com/Harsha7899/"
              isExternal
              variant="bordered"
              size="lg"
              radius="full"
              startContent={<GitHubIcon />}
            >
              GitHub
            </Button>
            <Button
              as={Link}
              href="https://www.linkedin.com/in/harshamattaparthy/"
              isExternal
              variant="bordered"
              size="lg"
              radius="full"
              startContent={<LinkedInIcon />}
            >
              LinkedIn
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
