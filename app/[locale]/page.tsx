'use client'

import { Header } from "@/components/Header";
import { useTheme } from "@/hooks/useTheme";
import {Link} from '@/i18n/routing';

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <Header />
      <main>
      <div>
        <p>O tema atual é: {theme}</p>
        <button onClick={toggleTheme}>Alternar Tema</button>
        <Link href='/' locale='en'>Ingles</Link>
        <Link href='/' locale='pt'>Portugues</Link>
      </div>
        
      </main>
      <footer>
        
      </footer>
    </div>
  );
}
