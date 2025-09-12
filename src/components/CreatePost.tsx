'use client';

import { createPost } from '#/lib/api/posts-actions';
import { startTransition, useCallback, useState } from 'react';

const CreatePost = () => {
  const [input, setInput] = useState('');
  const [error, setError] = useState<null | string>(null);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const trimInput = input.trim();
      if (trimInput === '') {
        setError('Your message should contain at least 1 character.');
        return;
      }
      startTransition(async () => {
        await createPost({ message: input });
        setInput('');
        setError(null);
      });
    },
    [input]
  );
  return (
    <form onSubmit={handleSubmit} className="flex flex-col min-w-full">
      <div className="flex w-full gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tell us something"
          className="px-2 py-1 w-full border border-blue-400 rounded-xs outline-0"
        />
        <button type="submit" className="px-2 rounded cursor-pointer border border-blue-400 active:scale-90 transition-transform duration-100 ease-in">
          📨
        </button>
      </div>
      <p className="text-red-500 mt-2 text-[14px]">{error}</p>
    </form>
  );
};

export default CreatePost;
