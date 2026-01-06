import { useState } from 'react';
import { Language, getTranslation, isRTL } from '@/lib/i18n';
import SEOHead from '@/components/SEOHead';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [lang, setLang] = useState<Language>('he');
  const [bookingOpen, setBookingOpen] = useState(false);
  const t = getTranslation(lang);
  const rtl = isRTL(lang);

  const services = [
    {
      icon: 'Stethoscope',
      title: t.services.implants.title,
      description: t.services.implants.description
    },
    {
      icon: 'Sparkles',
      title: t.services.whitening.title,
      description: t.services.whitening.description
    },
    {
      icon: 'Smile',
      title: t.services.orthodontics.title,
      description: t.services.orthodontics.description
    },
    {
      icon: 'Heart',
      title: t.services.cosmetic.title,
      description: t.services.cosmetic.description
    },
    {
      icon: 'Shield',
      title: t.services.prevention.title,
      description: t.services.prevention.description
    },
    {
      icon: 'Scissors',
      title: t.services.surgery.title,
      description: t.services.surgery.description
    }
  ];

  const stats = [
    { value: '15,000+', label: t.home.stats.patients },
    { value: '15+', label: t.home.stats.experience },
    { value: '8', label: t.home.stats.specialists },
    { value: '98%', label: t.home.stats.success }
  ];

  const doctors = [
    {
      name: 'Dr. Sarah Cohen',
      specialty: 'Implantology & Oral Surgery',
      image: '/placeholder.svg'
    },
    {
      name: 'Dr. David Levi',
      specialty: 'Orthodontics',
      image: '/placeholder.svg'
    },
    {
      name: 'Dr. Rachel Stein',
      specialty: 'Cosmetic Dentistry',
      image: '/placeholder.svg'
    }
  ];

  const faqs = [
    { q: t.faq.q1, a: t.faq.a1 },
    { q: t.faq.q2, a: t.faq.a2 },
    { q: t.faq.q3, a: t.faq.a3 },
    { q: t.faq.q4, a: t.faq.a4 },
    { q: t.faq.q5, a: t.faq.a5 }
  ];

  return (
    <div dir={rtl ? 'rtl' : 'ltr'} className="min-h-screen">
      <SEOHead
        title={t.meta.home.title}
        description={t.meta.home.description}
        lang={lang}
        path="/"
      />

      <Header
        lang={lang}
        onLanguageChange={setLang}
        onBookClick={() => setBookingOpen(true)}
      />

      <main>
        <section id="home" className="relative py-24 md:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary animate-fade-in">
                {t.home.hero.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
                {t.home.hero.subtitle}
              </p>
              <Button
                size="lg"
                onClick={() => setBookingOpen(true)}
                className="text-lg px-8 py-6 gap-2 hover-scale animate-scale-in"
              >
                <Icon name="Calendar" size={20} />
                {t.home.hero.cta}
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-fade-in">
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
                {t.services.title}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t.services.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="p-8 hover:shadow-xl transition-all hover:-translate-y-1 border-border/50"
                >
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                    <Icon name={service.icon as any} size={28} className="text-accent" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-primary">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
                {t.team.title}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t.team.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {doctors.map((doctor, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <Icon name="User" size={80} className="text-primary/30" />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-semibold mb-2 text-primary">
                      {doctor.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {doctor.specialty}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
                {t.faq.title}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t.faq.subtitle}
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-card border rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-lg font-medium text-primary hover:no-underline">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t.booking.title}
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
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
        </section>
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
          "@type": "Dentist",
          "name": "DentalCare",
          "url": "https://yourdomain.com",
          "logo": "https://yourdomain.com/logo.png",
          "description": t.meta.home.description,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Tel Aviv",
            "addressCountry": "IL"
          },
          "telephone": "+972-50-123-4567",
          "priceRange": "$$",
          "openingHours": "Mo-Fr 08:00-20:00"
        })}
      </script>
    </div>
  );
}
