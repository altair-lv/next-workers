import React from 'react';

const POSTS_COUNT = 5;

export default function PostsListSkeleton() {
  return (
    <div>
      {Array.from({ length: POSTS_COUNT }).map((_, idx) => (
        <div key={idx} className="mb-6 p-3 rounded shadow animate-pulse bg-gray-100 dark:bg-gray-800">
          <div className="h-3 w-5/6 bg-gray-200 dark:bg-gray-700 rounded mb-2" />
          <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded mb-1" />
        </div>
      ))}
    </div>
  );
}
