import { useLocale } from "next-intl";
import {Link} from '@/i18n/routing';
import IconButton from "../_ui/IconButton";
import { Languages } from "lucide-react";


export const LanguageSwitcher = () => {
  const locale = useLocale();

  return (
    <Link href='/' locale={locale === 'en' ? 'pt' : 'en'}>
      <p className="text-lg font-extralight">
        <IconButton>
          <Languages />
        </IconButton>
      </p>
    </Link>
  );
};
