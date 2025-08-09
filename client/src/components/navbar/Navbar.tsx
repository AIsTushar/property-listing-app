import Image from "next/image";
import Link from "next/link";
import Button from "../UI/Button";

export default function Navbar() {
  return (
    <nav className="h-16 mx-32 flex items-center justify-between bg-white border-b border-gray-200">
      {/* Logo */}

      <Link href="/" className="w-32">
        <Image
          src="/images/logo.png"
          alt="Main Logo"
          width={200}
          height={100}
        />
      </Link>

      {/* Middle Part */}
      <div>
        <ul className="flex items-center gap-6">
          <li>
            <Link href="/" className="text-sm font-semibold">
              Home
            </Link>
          </li>
          <li>
            <Link href="/properties" className="text-sm font-semibold">
              Properties
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-sm font-semibold">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-sm font-semibold">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-sm font-semibold">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Right Part */}

      <div>
        <ul className="flex items-center gap-6 ml-auto">
          <li>
            <Link href="/login" className="text-sm font-semibold">
              Login/Register
            </Link>
          </li>
          <li>
            <Link href="/register" className="text-sm font-semibold">
              <Button text="Submit Property" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
