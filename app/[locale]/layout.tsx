import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "../globals.css";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { useTheme } from "@/hooks/useTheme";

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

export default async function RootLayout({
  children,
  params
}:{
  children: React.ReactNode;
  params: Promise<Params>;
}) {
  const {locale} = (await params);

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();
  const {theme} = useTheme();

  return (
    <html lang={locale}>
      <body
        className={`${jetBrains.variable, theme} antialiased`}
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
