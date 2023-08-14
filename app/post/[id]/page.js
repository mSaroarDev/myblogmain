import React from "react";
import PostDetails from "../../components/PostDetails";
import blogData from "../../data/blogData.json";

export default function SingleBlog({ params }) {
  const posts = blogData.data;
  const postID = params.id;

  const post = posts.find((post) => post.id === postID);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <main>
      <PostDetails post={post} />
    </main>

    // <main>
    //   <h1>Post ID: {postID}</h1>
    //   {/* You can fetch and render your post details here */}
    // </main>
  );
}
