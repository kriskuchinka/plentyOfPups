import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Plenty of Dogs",
  description: "Find your Paw-rtner Today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <a href="/">Pupster</a>
          <a href="/">About</a>
          <a href="/discover">Discover</a>
          <a href="/search">Search</a>
        </nav>
        {children}
      </body>
    </html>
  );
}
