import React from "react";
import Image from "next/image";
const thumb =
  "https://roar.media/wp-content/uploads/2023/01/Feature-Image-New-copy-20.jpg";

const SinglePostContent = ({ post }) => {
  const { title, content, image, author, postedOn } = post;

  return (
    <>
      <div className="w-full md:max-w-full lg:max-w-2/3 shadow-md rounded-md p-8">
        <h1 className="font-bold text-4xl mb-5 font-fontBn">{title}</h1>

        <p className="text-base mb-5">
          Posted On: {postedOn}, Posted By: {author}
        </p>

        <Image src={image} alt="Image" width={1000} height={300} />

        <p className="mt-5 font-fontBn">{content}</p>
      </div>
    </>
  );
};

export default SinglePostContent;
