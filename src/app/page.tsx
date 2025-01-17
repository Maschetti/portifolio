import { Separator } from "@/Components/_ui/Separator";
import { Footer } from "@/Components/Footer/Footer";
import { Header } from "@/Components/Header/Header";
import { Main } from "@/Components/Main/Main";
import { SectionProvider } from "@/hooks/SectionContext";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <SectionProvider>
        <Header />
        <Main />
      </SectionProvider>

      <Separator noSpacingEnd noSpacingStart />
      <Footer />
    </div>
  );
}
