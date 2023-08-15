import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";

export default function Appnav() {
  return (
    <>
      <div className="bg-gray-100 shadow-md fixed top-0 z-50 w-full">
        <div className="max-w-6xl mx-auto">
          <div className="navbar ">
            <div className="flex-1">
              <Link href="/" className="normal-case text-xl">
                <Image src={logo} width={220} height={80} alt="Next News24" />
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
