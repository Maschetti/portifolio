import { useTheme } from '@/hooks/useTheme';
import { routing } from '@/i18n/routing';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import React from 'react';
export async function generateStaticParams() {
  const locales = ['en', 'pt']; // Liste aqui todos os locais suportados
  return locales.map((locale) => ({
    locale, // Gera um parâmetro para cada local
  }));
}
export const metadata: Metadata = {
  title: "Mateus Viana",
  description: "Portifolio",
};
type Locale = 'en' | 'pt';
type Params = {locale: Locale};
export default async function Layout({ children, params }: { children: React.ReactNode, params: Promise<Params>; }) {
  const {locale} = (await params);
  
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  
  const {theme} = useTheme();
  return (
    <html lang={locale} className={`${theme}`} >
      {children}
    </html>
  );
}