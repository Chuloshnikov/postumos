import PostInfo from '@/app/components/posts/PostInfo';
import React from 'react'

interface Post {
  id: number;
  userId: number;
  name: string;
  body: string;
}


interface PostParams {
  params: {
    id: number;
  };
}

export default async function Post({ params }: PostParams) {
  const { id } = params;

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post: Post[] = await response.json();
  return (
   <div className='px-2'>
      <PostInfo postInfo={post}/>
   </div>
  )
}
