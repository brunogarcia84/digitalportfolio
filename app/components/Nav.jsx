import Link from "next/link";

export default function Nav() {
  return (
    <>
      <nav className="flex justify-evenly mb-20">
        <h2>
          <Link href="/">
            Bruno<span className="highlight">Garcia</span>
          </Link>
        </h2>
        <ul className="flex flex-row gap-10 mt-[auto]">
          <li className="pb-10 hover:text-[#b87333] transition-all duration-300">
            <Link href="/about">About</Link>
          </li>
          <li className="pb-10 hover:text-[#b87333] transition-all duration-300">
            <Link href="/experience">Experience</Link>
          </li>
          <li className="hover:text-[#b87333] transition-all duration-300">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
