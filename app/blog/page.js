"use client";
import blogData from "../data/blogData.json";

export default function BlogPage() {
  const blogs = blogData.data;

  return (
    <div className="page">
      <main>
        <h1>Blog Posts</h1>

        {blogs.map((blog, index) => {
          return (
            <div key={index}>
              <h1 className="font-bold mb-3">{blog.title}</h1>
            </div>
          );
        })}
      </main>
    </div>
  );
}
