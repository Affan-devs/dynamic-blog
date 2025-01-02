import { blogPosts } from "@/lib/blog-data";
import { Comments } from "@/components/blog/comments";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <article className="container mx-auto px-4 py-16 max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to all posts
        </Link>
        <header className="mb-8">
          <div className="aspect-video relative rounded-lg overflow-hidden mb-8">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">{post.title}</h1>
          <time className="text-sm text-muted-foreground">
            {formatDate(post.date)}
          </time>
        </header>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          {post.content}
        </div>
        <hr className="my-12 border-border" />
        <Comments postSlug={post.slug} />
      </article>
    </main>
  );
}