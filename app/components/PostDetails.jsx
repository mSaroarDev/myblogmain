import Sidebar from "./Sidebar";
import SinglePostContent from "./SinglePostContent";

export default function PostDetails({ post }) {
  const postDetails = post;

  return (
    <>
      <main>
        <div className="lg:flex w-full gap-5 ">
          <SinglePostContent post={postDetails} />
          <div className="w-full md:w-full lg:w-1/3">
            <Sidebar />
          </div>
        </div>
      </main>
    </>
  );
}
