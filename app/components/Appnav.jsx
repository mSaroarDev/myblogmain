import Link from "next/link";

export default function Appnav() {
  return (
    <>
      <div className="bg-gray-100 shadow-md fixed top-0 z-50 w-full">
        <div className="max-w-6xl mx-auto ">
          <div className="navbar ">
            <div className="flex-1">
              <Link href="/" className="normal-case text-xl">
                Blog
              </Link>
            </div>
            <div className="flex-none">
              <ul className="menu menu-horizontal px-1 gap-x-3">
                <Link href="/">
                  <li className="btn btn-ghost uppercase">Home</li>
                </Link>
                <Link href="/blog">
                  <li className="btn btn-ghost uppercase">Blog</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
