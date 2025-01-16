import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "../globals.css";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

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

type Locale = 'en' | 'pt'

export default async function RootLayout({
  children,
  params
}:{
  children: React.ReactNode;
  params: {locale: Locale};
}) {
  const {locale} = params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${jetBrains.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <div className="max-w-screen-xl w-full mx-auto">
            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
