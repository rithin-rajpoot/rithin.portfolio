import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import Footer from "./components/Footer";
import SnowBackground from "./components/SnowBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rithin Rajpoot - Full Stack Developer",
  description: "Full Stack Developer & DSA Enthusiast - Portfolio showcasing modern web development projects and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 transition-colors dark:bg-black dark:text-white relative`}
      >
        <ThemeProvider>
          {/* Snow Background */}
          <SnowBackground />
          
          {/* Main Content */}
          <div className="relative z-10">
            <Navbar />
            <main className="min-h-screen pt-24">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}