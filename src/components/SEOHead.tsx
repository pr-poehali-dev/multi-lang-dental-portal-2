import { Helmet } from 'react-helmet-async';
import { Language } from '@/lib/i18n';

interface SEOHeadProps {
  title: string;
  description: string;
  lang: Language;
  path: string;
}

export default function SEOHead({ title, description, lang, path }: SEOHeadProps) {
  const baseUrl = 'https://yourdomain.com';
  const fullUrl = `${baseUrl}/${lang}${path}`;

  return (
    <Helmet>
      <html lang={lang} dir={lang === 'he' || lang === 'ar' ? 'rtl' : 'ltr'} />
      <title>{title}</title>
      <meta name="description" content={description} />
      
      <link rel="canonical" href={fullUrl} />
      
      <link rel="alternate" hrefLang="he" href={`${baseUrl}/he${path}`} />
      <link rel="alternate" hrefLang="ru" href={`${baseUrl}/ru${path}`} />
      <link rel="alternate" hrefLang="en" href={`${baseUrl}/en${path}`} />
      <link rel="alternate" hrefLang="ar" href={`${baseUrl}/ar${path}`} />
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/en${path}`} />
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={lang} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
