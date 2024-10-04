import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils"
import { Header } from "@/components/header";
import { Providers } from "@/components/providers";
import CanvasBackground from "@/components/background";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "MemoBase",
  description: "Manage user memory for your LLM applications",
};

export const runtime = 'edge'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.className
      )}><Providers
        attribute="class"
        defaultTheme="dark"
        disableTransitionOnChange
      >
          <div className="flex flex-col grow min-h-screen">
            <CanvasBackground />
            <Header />
            <main className="mt-8 flex flex-col flex-1">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
