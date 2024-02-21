'use server'
import type { Post } from "@prisma/client";
import { db } from "@/db";
import { notFound } from "next/navigation";

export async function createPosts(data:any) {
  const post = await db.post.create({
    data: data,
  });

  console.log(post);

  return post;
}
