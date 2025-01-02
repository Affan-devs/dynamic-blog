import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '@/lib/utils';
import { Post } from '@/lib/types';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

export function BlogList({ posts }: { posts: Post[] }) {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium italic mb-8 sm:mb-12 md:mb-16">
        Blog <span className="text-xs sm:text-sm not-italic font-normal text-black align-top">Latest Posts</span>
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {posts.map((post, index) => (
          <article
            key={post.slug}
            className={`relative group ${
              index === 0 ? "sm:col-span-2 lg:col-span-1" : ""
            }`}
          >
            <div className="relative h-[300px] sm:h-[400px] rounded-3xl overflow-hidden bg-card">
              <Image

                src={post.coverImage}
                alt={post.title}
                width={600} 
                height={400} 
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"

              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 group-hover:to-background/95 transition-colors" />
              <div className="absolute bottom-0 p-6 z-10">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="bg-white/80 backdrop-blur-sm text-xs">
                    {formatDate(post.date)}
                  </Badge>
                  <Badge variant="secondary" className="bg-white/80 backdrop-blur-sm text-xs">
                    Blog
                  </Badge>
                </div>
                <h2 className="text-xl sm:text-2xl font-medium mb-2 group-hover:text-primary transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white/90 transition-colors"
              >
                <ArrowUpRight className="h-4 w-4" />
                <span className="sr-only">Read {post.title}</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
