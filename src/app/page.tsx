import PostContainer from "./components/posts/PostContainer";

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export default async function Home() {

  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await response.json();

  console.log(posts);
  return (
    <div className="px-4">
       <ul>
        {posts.map((post) => (
          <PostContainer key={post.id} {...post}/>
        ))}
      </ul>
    </div>
  );
}
