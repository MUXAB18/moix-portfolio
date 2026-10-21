import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "Abdul Moiz | Full Stack Engineer",
  description: "Abdul Moiz is a Full Stack Engineer building modern, scalable and high-performance web applications.",
  metadataBase: new URL('https://abdulmoiz.dev'),
  openGraph: {
    title: "Abdul Moiz | Full Stack Engineer",
    description: "Building modern, scalable and high-performance web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
