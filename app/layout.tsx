import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Likhith Yogesh — Cloud & DevOps Engineer",
  description:
    "Software Engineer specializing in cloud infrastructure, DevOps, and distributed systems. MS Information Systems at Northeastern University.",
  keywords: ["cloud engineer", "devops", "aws", "kubernetes", "terraform", "software engineer"],
  openGraph: {
    title: "Likhith Yogesh — Cloud & DevOps Engineer",
    description: "Software Engineer specializing in cloud infrastructure, DevOps, and distributed systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
