"use client";
import Post from "../components/Post";
import blogData from "../data/blogData.json";

export default function BlogPage() {
  const blogs = blogData.data;

  return (
    <div className="page">
      <main>
        <h1 className="font-bold text-base">Blog Posts</h1>

        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 justify-between mx-auto">
          {blogs.map((post, index) => {
            return <Post key={index} pmeter={post} />;
          })}
        </div>
      </main>
    </div>
  );
}
