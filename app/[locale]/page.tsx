'use client'
import { Separator } from "@/components/_ui/Separator";
import { Footer } from "@/components/SemanticComponents/Footer/Footer";
import { Header } from "@/components/SemanticComponents/Header/Header";
import { Main } from "@/components/SemanticComponents/Main/Main";
import { useTheme } from "@/hooks/useTheme";


export default function Home() {
  const {theme} = useTheme();
  return (
    <div className={`flex flex-col min-h-screen ${theme}`}>
      <Header/>
      <Main />
      <Separator noSpacingEnd noSpacingStart/>
      <Footer />
    </div>
  );
}
