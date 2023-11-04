import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "XeroCodee",
  description: "Build your audience and grow your brand",
  metadataBase: new URL("https://xerocodeedelta.vercel.app/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="shortcut icon" href={favicon} /> */}
        <link rel="icon" href="/metalogo.png" sizes="any" />
        {/* <link rel="shortcut icon" href="../images/icons/favicon.ico" /> */}
      </head>
      <body className={inter.className}>
        <>
          <div className="flex justify-center ">
            <Navbar />
          </div>
          {children}
        </>
      </body>
    </html>
  );
}
