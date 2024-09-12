import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from './components/theme/ThemeContext';
import "./globals.css";
import Header from "./components/header/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Postumus",
  description: "Just a posts from json placeholder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased container mx-auto`}
      >
        <ThemeProvider>
          <Header/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
