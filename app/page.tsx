"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects, experience } from "@/lib/data";
import { HeroSection } from "@/components/HeroSection";
import { ArrowUpRight, Calendar, MapPin, Briefcase, ExternalLink } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const projectColors = [
  "border-primary/30 bg-primary/5",
  "border-accent/30 bg-accent/5",
  "border-chart-3/30 bg-chart-3/5",
];

const expColors = ["text-primary", "text-accent", "text-chart-3"];

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />

      <section className="py-20 lg:py-32 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 lg:mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-3 text-foreground">Proyectos</h2>
            <p className="text-muted-foreground">Alguns proyectos que he desarrollado</p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={item}
                className={`group relative p-6 rounded-xl border transition-all duration-300 hover:scale-[1.02] ${projectColors[index % 3]}`}
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative">
                  <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm mb-4 leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium px-2 py-1 rounded-md bg-white/5 text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Visitar
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-10">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Ver todos los proyectos
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 lg:mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-3 text-foreground">Experiencia</h2>
            <p className="text-muted-foreground">Mi trayectoria profesional</p>
          </motion.div>

          <div className="space-y-4">
            {experience.slice(0, 4).map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative p-5 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
              >
                <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-xl ${expColors[index % 3].replace('text-', 'bg-')}`} />
                
                <div className="pl-4 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-foreground">{exp.role}</h3>
                    <p className={`text-sm font-medium ${expColors[index % 3]}`}>{exp.company}</p>
                    <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground max-w-md sm:text-right">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Ver más sobre mí
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-primary/20 rounded-full blur-[120px]" />
        </div>
        
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              ¿Quieres trabajar conmigo?
            </h2>
            <p className="text-muted-foreground mb-8">
              Estoy disponible para nuevos proyectos y oportunidades
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 font-medium text-background bg-primary rounded-lg hover:bg-primary/90 transition-all hover:scale-105"
            >
              <Briefcase className="w-4 h-4" />
              Hablemos
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}