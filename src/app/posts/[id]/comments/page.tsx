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
      <div className="px-4">
        <h1 className="text-2xl mb-2">Comments for Post {id}</h1>
        <ul>
          {comments.map((comment) => (
            <li 
            className="border-2 border-gray-200 p-4 mb-2 rounded-md"
            key={comment.id}
            >
              <h2>{comment.name}</h2>
              <p>{comment.body}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }