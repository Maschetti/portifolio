'use client'

import { Separator } from "@/components/_ui/Separator";
import { Footer } from "@/components/SemanticComponents/Footer/Footer";
import { Header } from "@/components/SemanticComponents/Header/Header";
import { Main } from "@/components/SemanticComponents/Main/Main";
import { useSection } from "@/hooks/userSection";
import { useTheme } from "@/hooks/useTheme";

export default function Home() {
  useTheme();
  
  const {section, changeSection} = useSection();
  return (
    <div className="flex flex-col min-h-screen">
      <Header setSection={changeSection}/>
      <Main section={section}/>
      <Separator noSpacingEnd noSpacingStart/>
      <Footer />
    </div>
  );
}
