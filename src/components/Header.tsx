import { useState } from 'react';
import { Language, getTranslation } from '@/lib/i18n';
import LanguageSwitcher from './LanguageSwitcher';
import { Button } from './ui/button';
import Icon from './ui/icon';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

interface HeaderProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onBookClick: () => void;
}

export default function Header({ lang, onLanguageChange, onBookClick }: HeaderProps) {
  const t = getTranslation(lang);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: t.nav.home, id: 'home' },
    { label: t.nav.services, id: 'services' },
    { label: t.nav.team, id: 'team' },
    { label: t.nav.faq, id: 'faq' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Sparkles" size={28} className="text-accent" />
            <span className="text-2xl font-bold text-primary">DentalCare</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher currentLang={lang} onLanguageChange={onLanguageChange} />
            <Button onClick={onBookClick} className="gap-2">
              <Icon name="Calendar" size={16} />
              {t.nav.book}
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher currentLang={lang} onLanguageChange={onLanguageChange} />
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-lg text-foreground hover:text-primary transition-colors text-left font-medium"
                    >
                      {item.label}
                    </button>
                  ))}
                  <Button onClick={() => { onBookClick(); setMobileMenuOpen(false); }} className="mt-4 gap-2">
                    <Icon name="Calendar" size={16} />
                    {t.nav.book}
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
