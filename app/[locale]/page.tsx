'use client'

import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Main } from "@/components/Main/Main";
import { useTheme } from "@/hooks/useTheme";

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="divide-y divide-border flex flex-col min-h-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
