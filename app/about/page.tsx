"use client";

import { motion } from "framer-motion";
import { personalInfo, experience, skills } from "@/lib/data";
import LogoLoop from "@/components/LogoLoop.jsx";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiVuedotjs,
  SiNestjs,
  SiFirebase,
  SiStorybook,
  SiJest,
  SiCypress,
  SiFigma,
  SiGit,
} from "react-icons/si";

type IconElement = React.ReactElement;

const skillLogos: { node: IconElement; title: string; href: string }[] = skills.map((skill) => {
  const iconMap: Record<string, { node: IconElement; title: string; href: string }> = {
    React: { node: <SiReact />, title: "React", href: "https://react.dev" },
    "Next.js": { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    "TypeScript": { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    "Tailwind CSS": { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    Vue: { node: <SiVuedotjs />, title: "Vue", href: "https://vuejs.org" },
    NestJS: { node: <SiNestjs />, title: "NestJS", href: "https://nestjs.com" },
    Firebase: { node: <SiFirebase />, title: "Firebase", href: "https://firebase.google.com" },
    Storybook: { node: <SiStorybook />, title: "Storybook", href: "https://storybook.js.org" },
    Jest: { node: <SiJest />, title: "Jest", href: "https://jestjs.io" },
    Cypress: { node: <SiCypress />, title: "Cypress", href: "https://www.cypress.io" },
    Figma: { node: <SiFigma />, title: "Figma", href: "https://www.figma.com" },
    // AWS: { node: <span className="text-sm font-bold">AWS</span>, title: "AWS", href: "https://aws.amazon.com" },
    Git: { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  };
  return iconMap[skill] || { node: <span>{skill}</span>, title: skill, href: "#" };
});

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="min-h-[85vh] flex items-center bg-gradient-to-b from-background via-background to-surface">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-11 gap-10 lg:gap-16 items-center"
          >
            <div className="lg:col-span-5 order-2 lg:order-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Hola, soy <span className="text-primary">{personalInfo.name}</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
                {personalInfo.bio}
              </p>
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <span className="text-base">📍</span> {personalInfo.location}
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-base">✉️</span> {personalInfo.email}
                </p>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-6 order-1 lg:order-2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10" />
                <img
                  src={personalInfo.aboutImage}
                  alt={personalInfo.name}
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8">Experiencia</h2>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border-l-2 border-primary pl-6 py-2"
                >
                  <h3 className="font-semibold text-lg">{exp.role}</h3>
                  <p className="text-primary">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">
                    {exp.period} • {exp.location}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-surface overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Habilidades</h2>
            <p className="text-muted-foreground">Tecnologías con las que trabajo</p>
          </motion.div>
        </div>
        <LogoLoop
          logos={skillLogos}
          speed={60}
          direction="left"
          logoHeight={50}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="oklch(var(--background))"
          ariaLabel="Habilidades técnicas"
        />
      </section>
    </div>
  );
}