import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="mt-20 mb-20 flex justify-center">
        <p>
          Not focused on design. I'm doing it as I go. Built with{" "}
          <Link className="footerLink" href="https://nextjs.org/">
            Next Js
          </Link>{" "}
          and{" "}
          <Link className="footerLink" href="https://tailwindcss.com/">
            Tailwind CSS
          </Link>{" "}
          using{" "}
          <Link className="footerLink" href="https://code.visualstudio.com/">
            Visual Studio Code
          </Link>
          . All texts written in{" "}
          <Link
            className="footerLink"
            href="https://fonts.google.com/specimen/Roboto"
          >
            Roboto Font
          </Link>
          . Deployed with <Link href="https://vercel.com">Vercel</Link>
        </p>
      </footer>
    </>
  );
}
