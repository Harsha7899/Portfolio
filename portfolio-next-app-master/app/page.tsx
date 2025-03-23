import { Hero } from "./components/hero";

import About from "./components/about"; 

import { Experience } from "./components/exprience";
import { Education } from "./components/education";
import { Projects } from "./components/projects";
import { MobileResumeButton } from "./components/resume-button";
import { Contact } from "./components/contact";
//import { Achievements } from "./components/achievements";
//import { Certifications } from "./components/certifications";
import { SectionDivider } from "./components/section-divider";

export default function Home() {
  return (
    <div className="space-y-0">
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Education />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <MobileResumeButton/>
      <Contact />
    </div>
  );
}
