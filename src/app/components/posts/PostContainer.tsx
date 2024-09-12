import Link from 'next/link';
import React from 'react'

type Post = {
    id: number;
    title: string;
    body: string;
}

const PostContainer = (post: Post) => {
  return (
    <li key={post.id}>
      <Link href={`/posts/${post.id}`}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </Link>
        
    </li>
  )
}

export default PostContainer;