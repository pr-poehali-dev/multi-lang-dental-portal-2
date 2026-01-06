import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Language, getTranslation, isRTL } from '@/lib/i18n';
import { getServiceBySlug } from '@/lib/services';
import SEOHead from '@/components/SEOHead';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [lang, setLang] = useState<Language>('he');
  const [bookingOpen, setBookingOpen] = useState(false);
  const t = getTranslation(lang);
  const rtl = isRTL(lang);

  if (!slug) {
    navigate('/');
    return null;
  }

  const service = getServiceBySlug(slug, lang);

  if (!service) {
    navigate('/');
    return null;
  }

  const serviceTitle = t.services[slug.replace('-', '') as keyof typeof t.services]?.title || '';
  const serviceDescription = t.services[slug.replace('-', '') as keyof typeof t.services]?.description || '';

  return (
    <div dir={rtl ? 'rtl' : 'ltr'} className="min-h-screen">
      <SEOHead
        title={`${serviceTitle} | ${t.meta.home.title}`}
        description={serviceDescription}
        lang={lang}
        path={`/services/${slug}`}
      />

      <Header
        lang={lang}
        onLanguageChange={setLang}
        onBookClick={() => setBookingOpen(true)}
      />

      <main className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <Icon name="ArrowRight" size={20} className={rtl ? '' : 'rotate-180'} />
            <span>{t.nav.services}</span>
          </button>

          <div className="mb-12">
            <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mb-6">
              <Icon name={service.icon as any} size={40} className="text-accent" />
            </div>
            <h1 className="text-5xl font-bold mb-4 text-primary">
              {serviceTitle}
            </h1>
            <p className="text-xl text-muted-foreground">
              {serviceDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Clock" size={24} className="text-accent" />
                <h3 className="text-xl font-semibold text-primary">
                  {lang === 'he' ? 'משך טיפול' : lang === 'ru' ? 'Продолжительность' : lang === 'ar' ? 'المدة' : 'Duration'}
                </h3>
              </div>
              <p className="text-2xl font-bold text-accent">{service.duration}</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Banknote" size={24} className="text-accent" />
                <h3 className="text-xl font-semibold text-primary">
                  {lang === 'he' ? 'טווח מחירים' : lang === 'ru' ? 'Диапазон цен' : lang === 'ar' ? 'نطاق السعر' : 'Price Range'}
                </h3>
              </div>
              <p className="text-2xl font-bold text-accent">{service.price}</p>
            </Card>
          </div>

          <Card className="p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-primary">
              {lang === 'he' ? 'יתרונות הטיפול' : lang === 'ru' ? 'Преимущества лечения' : lang === 'ar' ? 'فوائد العلاج' : 'Treatment Benefits'}
            </h2>
            <ul className="space-y-4">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={24} className="text-accent flex-shrink-0 mt-1" />
                  <span className="text-lg text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-primary">
              {lang === 'he' ? 'תהליך הטיפול' : lang === 'ru' ? 'Процесс лечения' : lang === 'ar' ? 'عملية العلاج' : 'Treatment Process'}
            </h2>
            <ol className="space-y-4">
              {service.process.map((step, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-lg text-foreground pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </Card>

          <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              {lang === 'he' ? 'מוכנים להתחיל?' : lang === 'ru' ? 'Готовы начать?' : lang === 'ar' ? 'هل أنت مستعد للبدء؟' : 'Ready to Start?'}
            </h2>
            <p className="text-lg mb-6 opacity-90">
              {t.booking.subtitle}
            </p>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => setBookingOpen(true)}
              className="text-lg px-8 py-6 gap-2 hover-scale"
            >
              <Icon name="Calendar" size={20} />
              {t.nav.book}
            </Button>
          </div>
        </div>
      </main>

      <Footer lang={lang} />

      <BookingModal
        open={bookingOpen}
        onOpenChange={setBookingOpen}
        lang={lang}
      />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": serviceTitle,
          "provider": {
            "@type": "Dentist",
            "name": "DentalCare"
          },
          "description": serviceDescription,
          "offers": {
            "@type": "Offer",
            "price": service.price,
            "priceCurrency": "ILS"
          }
        })}
      </script>
    </div>
  );
}
