import React from "react";
import Image from "next/image";
// import { Link } from "next/link";
import { BsFacebook } from "react-icons/bs";
import { IoLogoWhatsapp, IoIosShareAlt } from "react-icons/io";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";

const SinglePostContent = ({ post }) => {
  const { title, content, image, author, postedOn } = post;

  return (
    <>
      <div className="w-full md:max-w-full lg:max-w-2/3 shadow-md rounded-md p-8 mb-20">
        <h1 className="font-bold text-4xl mb-5 font-fontBn">{title}</h1>

        <p className="text-base mb-5">
          Posted On: {postedOn}, Posted By: {author}
        </p>

        <Image src={image} alt="Image" width={1000} height={300} />

        <p className="mt-5 font-fontBn mb-10">{content}</p>

        <div className="flex items-center justify-center gap-10">
          <span className="text-xl font-fontBn">Share at</span>
          <IoIosShareAlt className="text-2xl" />
          <BsFacebook className="text-4xl cursor-pointer" />
          <IoLogoWhatsapp className="text-4xl cursor-pointer" />
          <AiFillTwitterCircle className="text-4xl cursor-pointer" />
          <AiFillInstagram className="text-4xl cursor-pointer" />
        </div>
      </div>
    </>
  );
};
export default SinglePostContent;
