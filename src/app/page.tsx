import Image from "next/image";

interface Post {
  id: number;
  title: string;
  body: string;
}

export default async function Home() {

  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await response.json();

  console.log(posts);
  return (
    <div>
      fdgdgdgdghfghfgh
    </div>
  );
}
