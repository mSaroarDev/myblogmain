import Link from "next/link";
import Post from "../components/Post";
import blogPosts from "../data/blogData.json";

export default function Homepage() {
  const blogs = blogPosts.data;

  return (
    <main>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Welcome to News & Blogs World</h1>
        <div className="">
          <Link href="../blog">
            <p className="font-bold">Explore Blog ⇾</p>
          </Link>
        </div>
      </div>

      <div>
        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 justify-between mx-auto">
          {blogs.map((post, index) => {
            return <Post key={index} pmeter={post} />;
          })}
        </div>
      </div>
    </main>
  );
}
