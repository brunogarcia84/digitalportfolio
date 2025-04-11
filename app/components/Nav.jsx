import Link from "next/link";

export default function Nav() {
  return (
    <>
      <nav className="flex justify-evenly sticky top-0 z-10 bg-[#191919] border-0 rounded-2xl">
        <Link href="/">
          <h2>
            Bruno<span className="highlight">Garcia</span>
          </h2>
        </Link>
        <ul className="flex flex-row gap-10 mt-5">
          <Link href="/#about">
            <li className="pb-10 hover:text-[#b87333] transition-all duration-300">
              About
            </li>
          </Link>
          <Link href="/#experience">
            <li className="pb-10 hover:text-[#b87333] transition-all duration-300">
              Experience
            </li>
          </Link>
          <Link href="/#education">
            <li className="pb-10 hover:text-[#b87333] transition-all duration-300">
              Education
            </li>
          </Link>
          <Link href="/#languages">
            <li className="pb-10 hover:text-[#b87333] transition-all duration-300">
              Languages
            </li>
          </Link>
          <Link href="/interests">
            <li className="pb-10 hover:text-[#b87333] transition-all duration-300">
              Interests and Hobbies
            </li>
          </Link>
          <Link href="/contact">
            <li className="hover:text-[#b87333] transition-all duration-300">
              Contact
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
}
