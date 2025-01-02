'use client';
import { BlogList } from '@/components/blog/blog-list';
import { blogPosts } from '@/lib/blog-data';
import "./../app/globals.css"; 
export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-stone-500 to-stone-700 bg-clip-text text-transparent">
            Welcome to My Blog!
          </h1>
          <p className="text-lg text-muted-foreground">
            Explore thoughts, ideas, and stories in a clean, distraction-free environment.
          </p>

        </div>
        <div className="relative borer border-gray-200 rounded-3xl overflow-hidden">
          <div className="absolute  inset-0 bg-gray-200  opacity-50 animate-pulse "></div>
          <BlogList posts={blogPosts} />
        </div>
   
      </div>
    </main>
  );
}
