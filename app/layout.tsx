import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import { ThemeProvider } from "./providers/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio - Software Developer",
  description: "A portfolio showcasing my work experience and technical blog posts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 min-h-screen transition-colors`}
      >
        <ThemeProvider>
          <Navigation />
          <main className="max-w-4xl mx-auto px-6 py-12">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
