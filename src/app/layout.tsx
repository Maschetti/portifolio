import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetBrains-mono",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Mateus Viana",
  description: "Portifolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetBrains.variable} antialiased`}
      >
        <div className="max-w-screen-xl w-full mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
