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
  title: "MemoDB",
  description: "Memory for your LLM App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
            <main className="flex flex-col flex-1 bg-muted/50">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
