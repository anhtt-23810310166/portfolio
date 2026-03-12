import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tuan Anh | Backend Developer Portfolio",
  description: "Software Engineering student at Electric Power University, passionate about building optimized backend systems using Modular Monolith architecture.",
  keywords: ["Tuan Anh", "Backend Developer", "NodeJS", "NestJS", "Software Engineer Portfolio", "EPU Student"],
  authors: [{ name: "Tuan Anh" }],
  openGraph: {
    title: "Tuan Anh | Backend Developer Portfolio",
    description: "Building robust systems with NestJS, PostgreSQL, and Docker.",
    url: "https://your-portfolio-url.com",
    siteName: "Tuan Anh Portfolio",
    locale: "en_US",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
