import CreatePost from '#/components/CreatePost';

export default function PostsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex max-w-full justify-center mt-28">
      <div className="flex flex-col space-y-2 max-w-xl w-full">
        <CreatePost />
        {children}
      </div>
    </div>
  );
}
