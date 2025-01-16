
import { Separator } from "@/components/_ui/Separator";
import { Footer } from "@/components/SemanticComponents/Footer/Footer";
import { Header } from "@/components/SemanticComponents/Header/Header";
import { Main } from "@/components/SemanticComponents/Main/Main";

export async function generateStaticParams() {
  const locales = ['en', 'pt']; // Liste aqui todos os locais suportados

  return locales.map((locale) => ({
    locale, // Gera um parâmetro para cada local
  }));
}

export default function Home() {
  
  return (
    <div className='flex flex-col min-h-screen'>
      <Header/>
      <Main />
      <Separator noSpacingEnd noSpacingStart/>
      <Footer />
    </div>
  );
}
