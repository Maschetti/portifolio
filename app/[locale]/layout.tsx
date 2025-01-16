import { JetBrains_Mono } from "next/font/google";
import "../globals.css";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { Metadata } from "next";
import { routing } from "@/i18n/routing";
import React from "react";
import { notFound } from "next/navigation";

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

type Locale = 'en' | 'pt';
type Params = {locale: Locale};

export async function generateStaticParams() {
  const locales = ['en', 'pt']; // Liste aqui todos os locais suportados
  return locales.map((locale) => ({
    locale, // Gera um parâmetro para cada local
  }));
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode, params: Promise<Params>; }) {
  const {locale} = (await params);
  
  if (!routing.locales.includes(locale as any)) {
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
