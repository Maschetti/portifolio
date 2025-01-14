'use client'

import { Separator } from "@/components/_ui/Separator";
import { Footer } from "@/components/SemanticComponents/Footer/Footer";
import { Header } from "@/components/SemanticComponents/Header/Header";
import { Main } from "@/components/SemanticComponents/Main/Main";
import { useTheme } from "@/hooks/useTheme";

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Main />
      <Separator noSpacingEnd/>
      <Footer />
    </div>
  );
}
