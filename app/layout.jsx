import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata = {
  title: "Digital Portfolio",
  description: "Bruno Garcia's Digital Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <main className="max-w-" style={{ border: "1px solid red" }}>
          {children}
        </main>
      </body>
    </html>
  );
}
