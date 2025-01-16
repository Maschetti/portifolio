import { JetBrains_Mono } from "next/font/google";
import "../globals.css";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetBrains-mono",
  style: ["normal", "italic"],
});

export default async function LocaleLayout({
  children,
}:{
  children: React.ReactNode;
}) {

  const messages = await getMessages();

  return (
    <body
      className={`${jetBrains.variable} antialiased`}
    >
      <NextIntlClientProvider messages={messages}>
        <div className="max-w-screen-xl w-full mx-auto">
          {children}
        </div>
      </NextIntlClientProvider>
    </body>
  );
}
