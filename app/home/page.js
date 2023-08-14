import Link from "next/link";

export default function Homepage() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Welcome to News & Blogs World</h1>
        <Link href="../blog">
          <p className="font-bold mt-7">Explore Blog ⇾</p>
        </Link>
      </div>
    </div>
  );
}
