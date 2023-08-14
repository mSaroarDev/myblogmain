import React from "react";
import BlogPosts from "../data/blogData.json";
import Link from "next/link";

const Sidebar = () => {
  const Posts = BlogPosts.data;

  return (
    <>
      <div className="shadow-md rounded-sm p-6">
        <h1 className="text-lg mb-4 font-bold">Recent Blogs</h1>
        <ul className="pl-2">
          {Posts.map((post, index) => {
            return (
              <li className="mb-2" key={index}>
                »{" "}
                <span className="hover:underline cursor-pointer font-fontBn">
                  <Link href={`../post/${post.id}`}>{post.title}</Link>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
