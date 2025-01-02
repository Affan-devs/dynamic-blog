"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar } from "@/components/ui/avatar";
import { formatDate } from "@/lib/utils";



interface Comment {
  id: string;
  content: string;
  author: string;
  date: Date;
}

export function Comments({ postSlug }: { postSlug: string }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: Date.now().toString(),
      content: newComment,
      author: "Anonymous User",
      date: new Date(),
    };

    setComments((prev) => [comment, ...prev]);
    setNewComment("");
  };
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold tracking-tight">Comments</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <Textarea
          placeholder="Leave a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="min-h-[100px]"
        />
        <Button type="submit">Post Comment</Button>
      </form>

      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-4">
            <Avatar />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-medium">{comment.author}</span>
                <span className="text-sm text-muted-foreground">
                  {formatDate(comment.date)}
                </span>
              </div>
              <p className="text-muted-foreground">{comment.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
