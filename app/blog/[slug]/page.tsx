import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, Tag, User } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) return { title: "Post no encontrado" };
  
  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-20">
      <article className="py-24 bg-gradient-to-b from-background to-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al blog
          </Link>

          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {post.author || "Armando Pérez"}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Tag className="w-4 h-4" />
                {post.category}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readingTime}
              </span>
            </div>
            <p className="text-xl text-muted-foreground mb-4">{post.excerpt}</p>
          </header>

          <div className="
            prose prose-lg max-w-none 
            prose-headings:text-foreground prose-headings:font-semibold prose-headings:mt-12 prose-headings:mb-4
            prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-6
            prose-h2:text-2xl prose-h2:mt-10
            prose-h3:text-xl
            prose-p:text-muted-foreground prose-p:leading-8 prose-p:mb-6
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-code:text-primary prose-code:bg-[var(--secondary)] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-sm
            prose-pre:bg-[var(--secondary)] prose-pre:border prose-pre:border-border prose-pre:rounded-lg prose-pre:overflow-x-auto
            prose-ul:text-muted-foreground prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2
            prose-ol:text-muted-foreground prose-ol:list-decimal prose-ol:pl-6 prose-ol:space-y-2
            prose-li:pl-2
            prose-strong:text-foreground prose-strong:font-semibold
            prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4 prose-blockquote:py-2 prose-blockquote:text-muted-foreground prose-blockquote:not-italic
          ">
            <MDXRemote source={post.content} />
          </div>

          <div className="mt-16 pt-8 border-t border-border">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Ver todos los artículos
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}