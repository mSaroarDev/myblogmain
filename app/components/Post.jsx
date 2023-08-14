import Image from "next/image";
import Link from "next/link";

export default function Post({ pmeter }) {
  const { id, title, image, author, content, postedOn } = pmeter;
  const excert = content.slice(0, 100);

  return (
    <>
      <Link href={`post/${id}`}>
        <div className="card w-[350px] bg-base-100 shadow-xl mb-6">
          <figure>
            <Image width={350} height={300} src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="font-bold text-lg font-fontBn">{title}</h2>
            <p className="text-md font-fontBn">{excert}</p>
            <div className="card-actions justify-between items-center">
              <p className="text-sm">On: {postedOn}</p>
              <p className="text-sm">By: {author}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
