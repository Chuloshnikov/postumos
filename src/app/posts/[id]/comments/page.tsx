interface Comment {
    id: number;
    name: string;
    body: string;
  }
  
  interface CommentsPageProps {
    params: {
      id: string;
    };
  }
  
  export default async function CommentsPage({ params }: CommentsPageProps) {
    const { id } = params;
  
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    const comments: Comment[] = await response.json();
  
    return (
      <div>
        <h1>Comments for Post {id}</h1>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <h2>{comment.name}</h2>
              <p>{comment.body}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }