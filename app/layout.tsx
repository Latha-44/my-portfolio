import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Deevi Lathasri | Frontend Developer",
  description:
    "Portfolio of Deevi Lathasri, an aspiring software developer specializing in frontend development using HTML, CSS, JavaScript and React.js.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html lang="en">

      <body>

        {children}

      </body>

    </html>

  );
}