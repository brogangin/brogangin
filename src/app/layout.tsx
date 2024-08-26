import type { Metadata } from "next";
import "./globals.css";
import "moment/locale/id";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white">
        <main className="container min-h-screen">{children}</main>
        <footer className="p-[40px] bg-zinc-100 mt-2 text-center">
          Made by <strong>Bima Maulana</strong>
        </footer>
      </body>
    </html>
  );
}
