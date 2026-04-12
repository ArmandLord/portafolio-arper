"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { ArrowRight, Sparkles } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const floatVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6 }
  },
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden w-full max-w-full">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[128px] max-md:w-64 max-md:h-64 max-md:-left-10 max-md:-top-10" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-[128px] max-md:w-64 max-md:h-64 max-md:-right-10 max-md:bottom-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-chart-2/10 rounded-full blur-[160px]" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="text-left"
          >
            <motion.div variants={item} className="mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                <Sparkles className="w-3 h-3" />
                Disponible para nuevos proyectos
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 tracking-tight"
            >
              <span className="text-foreground">Hola, soy </span>
              <br />
              <span className="text-gradient">Armando Pérez</span>
            </motion.h1>

            <motion.div variants={item} className="text-lg sm:text-xl lg:text-2xl font-medium mb-6">
              <span className="text-muted-foreground">{personalInfo.title}</span>
            </motion.div>

            <motion.p
              variants={item}
              className="text-base sm:text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed"
            >
              {personalInfo.bio}
            </motion.p>

            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 font-medium text-background bg-primary rounded-lg hover:bg-primary/90 transition-all hover:scale-105"
              >
                <ArrowRight className="w-4 h-4" />
                Ver Proyectos
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 font-medium text-foreground border border-white/20 rounded-lg hover:bg-white/5 transition-all hover:scale-105"
              >
                Contactar
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={floatVariant}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -top-6 -left-6 w-full h-full glass rounded-2xl opacity-30"
                style={{ transform: 'translateZ(-20px)' }}
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -top-3 -left-3 w-full h-full glass rounded-2xl opacity-50"
                style={{ transform: 'translateZ(-10px)' }}
              />
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-chart-3 opacity-30 blur-[60px] rounded-3xl" />
                <div className="relative glass rounded-2xl p-8 min-w-[300px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl" />
                  <div className="relative space-y-6">
                    <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="text-xs text-muted-foreground ml-2">terminal</span>
                    </div>
                    
                    <div className="space-y-3 font-mono text-sm">
                      <div className="flex gap-2">
                        <span className="text-chart-2">const</span>
                        <span className="text-primary">developer</span>
                        <span className="text-muted-foreground">=</span>
                        <span className="text-accent">{"{"}</span>
                      </div>
                      <div className="pl-8 flex gap-2">
                        <span className="text-muted-foreground">name:</span>
                        <span className="text-chart-4">&quot;Armando Pérez&quot;,</span>
                      </div>
                      <div className="pl-8 flex gap-2">
                        <span className="text-muted-foreground">role:</span>
                        <span className="text-chart-4">&quot;Frontend Developer&quot;,</span>
                      </div>
                      <div className="pl-8 flex gap-2">
                        <span className="text-muted-foreground">skills:</span>
                        <span className="text-accent">[</span>
                      </div>
                      <div className="pl-12 flex flex-wrap gap-2">
                        <span className="text-chart-1">&quot;React&quot;,</span>
                        <span className="text-chart-2">&quot;Next.js&quot;,</span>
                        <span className="text-chart-3">&quot;TypeScript&quot;</span>
                      </div>
                      <div className="pl-8">
                        <span className="text-accent">]</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-accent">{"}"}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-1 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground">Scroll</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 flex flex-col items-center justify-start gap-1"
          >
            <div className="w-1 h-1 rounded-full bg-primary" />
            <div className="w-1 h-1 rounded-full bg-muted-foreground/50" />
            <div className="w-1 h-1 rounded-full bg-muted-foreground/30" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}