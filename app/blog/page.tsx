"use client";

import { motion } from "framer-motion";

const blogPosts = [
  {
    id: "1",
    title: "Próximamente",
    excerpt: "Estoy preparando contenido sobre desarrollo web, React, TypeScript y más.",
    date: "2024",
    category: "General",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-b from-background to-surface">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Artículos sobre desarrollo web y tecnología
          </p>

          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border border-border rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span className="text-primary">{post.category}</span>
                </div>
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </motion.article>
            ))}
          </div>

          <div className="mt-12 p-8 bg-surface rounded-xl text-center">
            <p className="text-muted-foreground">
              ¿Tienes alguna idea para un artículo?{" "}
              <a href="/contact" className="text-primary hover:underline">
                Contáctame
              </a>
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}