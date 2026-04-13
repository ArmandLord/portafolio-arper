"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Clock } from "lucide-react";
import { BlogPost } from "@/lib/blog";

interface BlogListProps {
  posts: BlogPost[];
}

export function BlogList({ posts }: BlogListProps) {
  return (
    <div className="space-y-6">
      {posts.map((post, index) => (
        <motion.article
          key={post.slug}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <Link href={`/blog/${post.slug}`}>
            <div className="group border border-border rounded-xl p-6 hover:border-primary/30 hover:bg-surface/50 transition-all cursor-pointer">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <span>{post.date}</span>
                <span>•</span>
                <span className="text-primary">{post.category}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readingTime}
                </span>
              </div>
              <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-muted-foreground">{post.excerpt}</p>
            </div>
          </Link>
        </motion.article>
      ))}
    </div>
  );
}