import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ghulam Sarwar Khan | Secretary General Pakistan Tea Association",
  description: "Secretary General of Pakistan Tea Association with expertise in governance, compliance, and AI-driven systems.",
  keywords: ["Ghulam Sarwar Khan", "Pakistan Tea Association", "Secretary General", "Generative AI", "Governance", "Compliance"],
  authors: [{ name: "Ghulam Sarwar Khan" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
