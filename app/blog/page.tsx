import { getAllPosts } from "@/lib/blog";
import { BlogList } from "@/components/BlogList";
import { ArrowRight } from "lucide-react";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-b from-background to-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Artículos sobre desarrollo web y tecnología
          </p>

          <BlogList posts={posts} />

          {posts.length === 0 && (
            <div className="mt-12 p-8 bg-[var(--surface)] rounded-xl text-center">
              <p className="text-muted-foreground">
                No hay artículos todavía.{" "}
                <a href="/contact" className="text-[var(--primary)] hover:underline">
                  Contáctame
                </a>{" "}
                si tienes alguna idea.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}