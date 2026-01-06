import { Language } from './i18n';

export interface ServiceDetail {
  slug: string;
  icon: string;
  benefits: string[];
  process: string[];
  duration: string;
  price: string;
}

export const serviceDetails: Record<string, Record<Language, ServiceDetail>> = {
  'dental-implants': {
    he: {
      slug: 'dental-implants',
      icon: 'Stethoscope',
      benefits: [
        'פתרון קבוע ועמיד לשיניים חסרות',
        'מראה ותחושה טבעיים',
        'שמירה על צפיפות העצם',
        'חיוך מלא ויציב',
        'אחוזי הצלחה גבוהים מאוד'
      ],
      process: [
        'בדיקה וצילום CT מקיף',
        'תכנון דיגיטלי מדויק',
        'השתלת השתל בעצם הלסת',
        'תקופת ריפוי והתאחות',
        'התקנת כתר קבוע'
      ],
      duration: '3-6 חודשים',
      price: '₪8,000 - ₪15,000'
    },
    ru: {
      slug: 'dental-implants',
      icon: 'Stethoscope',
      benefits: [
        'Постоянное и долговечное решение для отсутствующих зубов',
        'Естественный вид и ощущения',
        'Сохранение плотности костной ткани',
        'Полная и стабильная улыбка',
        'Очень высокий процент успеха'
      ],
      process: [
        'Обследование и полная КТ-диагностика',
        'Точное цифровое планирование',
        'Установка имплантата в челюстную кость',
        'Период заживления и приживления',
        'Установка постоянной коронки'
      ],
      duration: '3-6 месяцев',
      price: '₪8,000 - ₪15,000'
    },
    en: {
      slug: 'dental-implants',
      icon: 'Stethoscope',
      benefits: [
        'Permanent and durable solution for missing teeth',
        'Natural appearance and feel',
        'Preserves bone density',
        'Complete and stable smile',
        'Very high success rates'
      ],
      process: [
        'Comprehensive examination and CT scan',
        'Precise digital planning',
        'Implant placement in jawbone',
        'Healing and osseointegration period',
        'Permanent crown placement'
      ],
      duration: '3-6 months',
      price: '₪8,000 - ₪15,000'
    },
    ar: {
      slug: 'dental-implants',
      icon: 'Stethoscope',
      benefits: [
        'حل دائم ومتين للأسنان المفقودة',
        'مظهر وإحساس طبيعي',
        'الحفاظ على كثافة العظام',
        'ابتسامة كاملة ومستقرة',
        'معدلات نجاح عالية جدًا'
      ],
      process: [
        'فحص شامل وتصوير مقطعي',
        'تخطيط رقمي دقيق',
        'زراعة الغرسة في عظم الفك',
        'فترة الشفاء والالتحام',
        'تركيب التاج الدائم'
      ],
      duration: '3-6 أشهر',
      price: '₪8,000 - ₪15,000'
    }
  },
  'teeth-whitening': {
    he: {
      slug: 'teeth-whitening',
      icon: 'Sparkles',
      benefits: [
        'שיניים בהירות יותר ב-2-8 גוונים',
        'תוצאות מיידיות בטיפול אחד',
        'בטיחות מוכחת לשיניים',
        'חיוך צעיר ומרשים',
        'שיטות מתקדמות ללא רגישות'
      ],
      process: [
        'ניקוי מקצועי של השיניים',
        'הגנה על חניכיים',
        'מריחת ג\'ל הלבנה מקצועי',
        'הפעלת אור LED מיוחד',
        'הוראות טיפול ושמירה'
      ],
      duration: 'שעה אחת',
      price: '₪1,500 - ₪3,000'
    },
    ru: {
      slug: 'teeth-whitening',
      icon: 'Sparkles',
      benefits: [
        'Зубы светлее на 2-8 тонов',
        'Мгновенные результаты за одну процедуру',
        'Доказанная безопасность для зубов',
        'Молодая и впечатляющая улыбка',
        'Передовые методы без чувствительности'
      ],
      process: [
        'Профессиональная чистка зубов',
        'Защита десен',
        'Нанесение профессионального отбеливающего геля',
        'Активация специальным LED-светом',
        'Инструкции по уходу и поддержанию'
      ],
      duration: '1 час',
      price: '₪1,500 - ₪3,000'
    },
    en: {
      slug: 'teeth-whitening',
      icon: 'Sparkles',
      benefits: [
        'Teeth 2-8 shades brighter',
        'Immediate results in one treatment',
        'Proven safety for teeth',
        'Youthful and impressive smile',
        'Advanced methods without sensitivity'
      ],
      process: [
        'Professional teeth cleaning',
        'Gum protection',
        'Application of professional whitening gel',
        'Activation with special LED light',
        'Care and maintenance instructions'
      ],
      duration: '1 hour',
      price: '₪1,500 - ₪3,000'
    },
    ar: {
      slug: 'teeth-whitening',
      icon: 'Sparkles',
      benefits: [
        'أسنان أفتح بمقدار 2-8 درجات',
        'نتائج فورية في جلسة واحدة',
        'سلامة مثبتة للأسنان',
        'ابتسامة شابة ومذهلة',
        'طرق متقدمة بدون حساسية'
      ],
      process: [
        'تنظيف احترافي للأسنان',
        'حماية اللثة',
        'تطبيق جل تبييض احترافي',
        'تفعيل بضوء LED خاص',
        'تعليمات العناية والحفاظ'
      ],
      duration: 'ساعة واحدة',
      price: '₪1,500 - ₪3,000'
    }
  },
  'orthodontics': {
    he: {
      slug: 'orthodontics',
      icon: 'Smile',
      benefits: [
        'שיניים ישרות ומיושרות',
        'שיפור עיסה ותפקוד',
        'חיוך אסתטי ומושך',
        'בריאות חניכיים משופרת',
        'אפשרויות טיפול שקופות'
      ],
      process: [
        'צילום ומיפוי דיגיטלי',
        'תכנון תנועת השיניים',
        'התקנת מכשיר יישור',
        'ביקורי התאמה תקופתיים',
        'שמירה לאחר הטיפול'
      ],
      duration: '12-24 חודשים',
      price: '₪15,000 - ₪25,000'
    },
    ru: {
      slug: 'orthodontics',
      icon: 'Smile',
      benefits: [
        'Прямые и выровненные зубы',
        'Улучшенное жевание и функция',
        'Эстетичная и привлекательная улыбка',
        'Улучшенное здоровье десен',
        'Варианты прозрачного лечения'
      ],
      process: [
        'Сканирование и цифровое картирование',
        'Планирование движения зубов',
        'Установка ортодонтической системы',
        'Периодические визиты для корректировки',
        'Ретенция после лечения'
      ],
      duration: '12-24 месяца',
      price: '₪15,000 - ₪25,000'
    },
    en: {
      slug: 'orthodontics',
      icon: 'Smile',
      benefits: [
        'Straight and aligned teeth',
        'Improved chewing and function',
        'Aesthetic and attractive smile',
        'Improved gum health',
        'Clear treatment options'
      ],
      process: [
        'Imaging and digital mapping',
        'Tooth movement planning',
        'Orthodontic appliance placement',
        'Periodic adjustment visits',
        'Retention after treatment'
      ],
      duration: '12-24 months',
      price: '₪15,000 - ₪25,000'
    },
    ar: {
      slug: 'orthodontics',
      icon: 'Smile',
      benefits: [
        'أسنان مستقيمة ومحاذاة',
        'تحسين المضغ والوظيفة',
        'ابتسامة جمالية وجذابة',
        'صحة لثة محسنة',
        'خيارات علاج شفافة'
      ],
      process: [
        'تصوير ورسم خرائط رقمي',
        'تخطيط حركة الأسنان',
        'تركيب جهاز التقويم',
        'زيارات دورية للتعديل',
        'التثبيت بعد العلاج'
      ],
      duration: '12-24 شهرًا',
      price: '₪15,000 - ₪25,000'
    }
  }
};

export const getServiceBySlug = (slug: string, lang: Language): ServiceDetail | null => {
  return serviceDetails[slug]?.[lang] || null;
};

export const getAllServiceSlugs = (): string[] => {
  return Object.keys(serviceDetails);
};
