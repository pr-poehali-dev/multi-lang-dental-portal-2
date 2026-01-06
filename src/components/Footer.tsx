import { Language, getTranslation } from '@/lib/i18n';
import Icon from './ui/icon';

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  const t = getTranslation(lang);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Sparkles" size={28} className="text-accent" />
              <span className="text-2xl font-bold">DentalCare</span>
            </div>
            <p className="text-primary-foreground/80">
              {t.meta.home.description}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">{t.footer.contact}</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Icon name="MapPin" size={18} />
                <span className="text-primary-foreground/80">Tel Aviv, Israel</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Phone" size={18} />
                <span className="text-primary-foreground/80">+972-50-123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Mail" size={18} />
                <span className="text-primary-foreground/80">info@dentalcare.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">{t.footer.hours}</h3>
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Icon name="Facebook" size={24} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Icon name="Linkedin" size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>© {currentYear} DentalCare. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
