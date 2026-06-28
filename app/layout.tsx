import type { Metadata } from "next";
import { Dancing_Script, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import IntroReveal from "@/components/IntroReveal";
import BackgroundMusic from "@/components/BackgroundMusic";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Happy 24th Birthday Sadaf",
  description: "A romantic birthday website made with love for Sadaf.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", "font-sans", dancingScript.variable, geistSans.variable, geistMono.variable)}
    >
      <body className="min-h-full flex flex-col font-medium">
        <BackgroundMusic />
        <IntroReveal>
          <div className="min-h-full flex flex-col">
            <main className="flex-1">{children}</main>
            <footer className="w-full bg-black border-2 border-[#F5A3C7] px-6 py-10">
              <div className="mx-auto w-full max-w-6xl text-center">
                <div className="px-4 py-2 text-5xl font-semibold tracking-wide text-[#F5A3C7] sm:text-7xl">
                  sadaf
                </div>
              </div>
            </footer>
          </div>
        </IntroReveal>
      </body>
    </html>
  );
}
