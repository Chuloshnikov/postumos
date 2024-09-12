import Link from 'next/link';
import React from 'react'

type Post = {
    id: number;
    userId: number;
    title: string;
    body: string;
}

const PostContainer = (post: Post) => {
  return (
    <li 
    className='rounded-md border-2 border-gray-200 p-4 my-1 mx-4'
    key={post.id}
    >
      <Link 
      className='text-sm'
      href={`/posts/${post.id}`}
      >
        <h2 className='text-xl font-semibold'>{post.title}</h2>
        <p>{post.body}</p>
      </Link>
        
    </li>
  )
}

export default PostContainer;