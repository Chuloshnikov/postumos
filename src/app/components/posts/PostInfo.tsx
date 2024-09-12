"use client"
import Link from 'next/link';


const PostInfo = ({postInfo}: {postInfo: Post}) => {


  return (
    <div className='border-gray-200 flex flex-col gap-4'>
        <span className='text-gray-400 text-sm'>User ID: {postInfo.userId}</span>
        <span className='text-xl font-semibold'>{postInfo.title}</span>
        <span className='text-lg'>{postInfo.body}</span>
        <Link 
        className="py-2 px-4 text-sm bg-gray-200 dark:bg-gray-800 rounded-full border-2 border-gray-200 max-w-max"
        href={`${postInfo.id}/comments`}
        >
        Comments
        </Link>
  </div>
  )
}

export default PostInfo;