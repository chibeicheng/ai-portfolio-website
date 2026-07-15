import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Tan Yaokai | AI 项目助理",
  description: "Portfolio of Tan Yaokai, AI 项目助理 focusing on Multimodal Models and AI Data Pipelines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-[#ffffff] text-[#111111] selection:bg-indigo-100 selection:text-indigo-900">
        <Navbar />
        <main className="flex-1 pt-20">
          {children}
        </main>
        <footer className="py-10 text-center text-sm text-gray-500 border-t border-gray-100 mt-20">
          <p>© {new Date().getFullYear()} Tan Yaokai. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
