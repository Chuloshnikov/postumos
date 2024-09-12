import React from 'react'

type Post = {
    id: string;
    title: string;
    body: string;
}

const PostContainer = (post: Post) => {
  return (
    <li key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
    </li>
  )
}

export default PostContainer;