export type Language = 'he' | 'ru' | 'en' | 'ar';

export const languages: Language[] = ['he', 'ru', 'en', 'ar'];

export const languageNames: Record<Language, string> = {
  he: 'עברית',
  ru: 'Русский',
  en: 'English',
  ar: 'العربية'
};

export const isRTL = (lang: Language): boolean => {
  return lang === 'he' || lang === 'ar';
};

type TranslationKeys = {
  nav: {
    home: string;
    services: string;
    team: string;
    faq: string;
    contact: string;
    book: string;
  };
  home: {
    hero: {
      title: string;
      subtitle: string;
      cta: string;
    };
    services: {
      title: string;
      subtitle: string;
    };
    stats: {
      patients: string;
      experience: string;
      specialists: string;
      success: string;
    };
  };
  services: {
    title: string;
    subtitle: string;
    implants: {
      title: string;
      description: string;
    };
    whitening: {
      title: string;
      description: string;
    };
    orthodontics: {
      title: string;
      description: string;
    };
    cosmetic: {
      title: string;
      description: string;
    };
    prevention: {
      title: string;
      description: string;
    };
    surgery: {
      title: string;
      description: string;
    };
  };
  team: {
    title: string;
    subtitle: string;
  };
  faq: {
    title: string;
    subtitle: string;
    q1: string;
    a1: string;
    q2: string;
    a2: string;
    q3: string;
    a3: string;
    q4: string;
    a4: string;
    q5: string;
    a5: string;
  };
  booking: {
    title: string;
    subtitle: string;
    name: string;
    phone: string;
    service: string;
    message: string;
    submit: string;
    success: string;
  };
  footer: {
    about: string;
    contact: string;
    hours: string;
    rights: string;
  };
  meta: {
    home: {
      title: string;
      description: string;
    };
    services: {
      title: string;
      description: string;
    };
    team: {
      title: string;
      description: string;
    };
    faq: {
      title: string;
      description: string;
    };
  };
};

export const translations: Record<Language, TranslationKeys> = {
  he: {
    nav: {
      home: 'בית',
      services: 'שירותים',
      team: 'הצוות שלנו',
      faq: 'שאלות נפוצות',
      contact: 'יצירת קשר',
      book: 'קביעת תור'
    },
    home: {
      hero: {
        title: 'חיוך בריא מתחיל כאן',
        subtitle: 'טיפול שיניים מתקדם עם טכנולוגיה חדשנית וצוות מומחים מנוסה',
        cta: 'קבע תור עכשיו'
      },
      services: {
        title: 'השירותים שלנו',
        subtitle: 'פתרונות מקיפים לכל צרכי בריאות הפה שלך'
      },
      stats: {
        patients: 'מטופלים מרוצים',
        experience: 'שנות ניסיון',
        specialists: 'רופאי שיניים מומחים',
        success: 'שיעור הצלחה'
      }
    },
    services: {
      title: 'השירותים שלנו',
      subtitle: 'טיפולי שיניים מתקדמים עם סטנדרט איכות גבוה',
      implants: {
        title: 'שתלי שיניים',
        description: 'פתרונות שתלים מתקדמים עם טכנולוגיית דיגיטל 3D'
      },
      whitening: {
        title: 'הלבנת שיניים',
        description: 'הלבנה מקצועית לחיוך זוהר ובטוח'
      },
      orthodontics: {
        title: 'יישור שיניים',
        description: 'גשרי שיניים שקופים ומערכות יישור מתקדמות'
      },
      cosmetic: {
        title: 'אסתטיקה דנטלית',
        description: 'ציפויים, עיצוב חיוך ושיפוץ מלא'
      },
      prevention: {
        title: 'רפואה מונעת',
        description: 'ניקוי מקצועי, פלואוריד וטיפול חניכיים'
      },
      surgery: {
        title: 'כירורגיה פה ולסת',
        description: 'עקירות, השתלות עצם ותיקון מבנה הלסת'
      }
    },
    team: {
      title: 'הצוות המקצועי שלנו',
      subtitle: 'רופאי שיניים מומחים עם הכשרה בינלאומית'
    },
    faq: {
      title: 'שאלות נפוצות',
      subtitle: 'תשובות לשאלות הנפוצות ביותר מהמטופלים שלנו',
      q1: 'כמה עולה טיפול שתל שן?',
      a1: 'עלות שתל שן משתנה בהתאם למקרה. בבדיקת ייעוץ ראשונית נציג תוכנית טיפול מפורטת ומחירון ברור.',
      q2: 'האם הטיפולים כואבים?',
      a2: 'אנו משתמשים בטכנולוגיות מתקדמות והרדמה מקומית יעילה. רוב הטיפולים מתבצעים ללא כאב כלל.',
      q3: 'כמה זמן לוקח טיפול שתלים?',
      a3: 'תהליך השתלת שן מלא נמשך 3-6 חודשים. זה כולל התאחות עצם והתקנת הכתר הקבוע.',
      q4: 'האם אתם מקבלים ביטוח בריאות?',
      a4: 'אנו עובדים עם כל קופות החולים ומרבית חברות הביטוח. צוות המזכירות יסייע בהגשת התביעות.',
      q5: 'מה כולל הביקור הראשון?',
      a5: 'בביקור הראשון נבצע בדיקה מקיפה, צילומי רנטגן דיגיטליים, ונציג תוכנית טיפול מותאמת אישית.'
    },
    booking: {
      title: 'קביעת תור',
      subtitle: 'השאר פרטים ונחזור אליך בהקדם',
      name: 'שם מלא',
      phone: 'טלפון',
      service: 'סוג טיפול (אופציונלי)',
      message: 'הודעה נוספת',
      submit: 'שלח בקשה',
      success: 'הבקשה התקבלה! נחזור אליך בקרוב'
    },
    footer: {
      about: 'אודות',
      contact: 'יצירת קשר',
      hours: 'שעות פעילות: א׳-ה׳ 8:00-20:00',
      rights: 'כל הזכויות שמורות'
    },
    meta: {
      home: {
        title: 'מרפאת שיניים | טיפול מתקדם ומקצועי',
        description: 'מרפאת שיניים מובילה עם צוות מומחים, טכנולוגיה מתקדמת וטיפול אישי. שתלים, הלבנה, יישור ועוד.'
      },
      services: {
        title: 'שירותי שיניים | כל סוגי הטיפולים',
        description: 'מגוון רחב של טיפולי שיניים: שתלים, הלבנה, יישור, אסתטיקה, כירורגיה ורפואה מונעת.'
      },
      team: {
        title: 'הצוות שלנו | רופאי שיניים מומחים',
        description: 'הכר את הצוות המקצועי שלנו - רופאי שיניים מומחים עם הכשרה בינלאומית וניסיון רב.'
      },
      faq: {
        title: 'שאלות נפוצות | מרפאת שיניים',
        description: 'תשובות לשאלות הנפוצות ביותר על טיפולי שיניים, עלויות, ביטוח ותהליכי טיפול.'
      }
    }
  },
  ru: {
    nav: {
      home: 'Главная',
      services: 'Услуги',
      team: 'Команда',
      faq: 'FAQ',
      contact: 'Контакты',
      book: 'Записаться'
    },
    home: {
      hero: {
        title: 'Здоровая улыбка начинается здесь',
        subtitle: 'Современное стоматологическое лечение с инновационными технологиями и опытной командой специалистов',
        cta: 'Записаться на прием'
      },
      services: {
        title: 'Наши услуги',
        subtitle: 'Комплексные решения для всех ваших потребностей в уходе за полостью рта'
      },
      stats: {
        patients: 'Довольных пациентов',
        experience: 'Лет опыта',
        specialists: 'Врачей-стоматологов',
        success: 'Успешных процедур'
      }
    },
    services: {
      title: 'Наши услуги',
      subtitle: 'Передовые стоматологические процедуры высочайшего качества',
      implants: {
        title: 'Имплантация',
        description: 'Современные имплантологические решения с 3D цифровой технологией'
      },
      whitening: {
        title: 'Отбеливание',
        description: 'Профессиональное отбеливание для яркой и безопасной улыбки'
      },
      orthodontics: {
        title: 'Ортодонтия',
        description: 'Прозрачные брекеты и современные системы выравнивания зубов'
      },
      cosmetic: {
        title: 'Эстетическая стоматология',
        description: 'Виниры, дизайн улыбки и полная реконструкция'
      },
      prevention: {
        title: 'Профилактика',
        description: 'Профессиональная чистка, фторирование и лечение десен'
      },
      surgery: {
        title: 'Хирургия',
        description: 'Удаление, костная пластика и реконструкция челюсти'
      }
    },
    team: {
      title: 'Наша профессиональная команда',
      subtitle: 'Врачи-стоматологи с международной квалификацией'
    },
    faq: {
      title: 'Частые вопросы',
      subtitle: 'Ответы на самые популярные вопросы наших пациентов',
      q1: 'Сколько стоит имплантация зуба?',
      a1: 'Стоимость имплантации варьируется в зависимости от случая. На первичной консультации мы представим подробный план лечения и прозрачный прайс-лист.',
      q2: 'Больно ли проходить лечение?',
      a2: 'Мы используем передовые технологии и эффективную местную анестезию. Большинство процедур проходят совершенно безболезненно.',
      q3: 'Сколько времени занимает имплантация?',
      a3: 'Полный процесс имплантации занимает 3-6 месяцев. Это включает приживление кости и установку постоянной коронки.',
      q4: 'Принимаете ли вы медицинскую страховку?',
      a4: 'Мы работаем со всеми больничными кассами и большинством страховых компаний. Секретариат поможет с подачей заявок.',
      q5: 'Что включает первый визит?',
      a5: 'При первом визите проводим комплексное обследование, цифровые рентгеновские снимки и представляем индивидуальный план лечения.'
    },
    booking: {
      title: 'Запись на прием',
      subtitle: 'Оставьте ваши данные и мы свяжемся с вами в ближайшее время',
      name: 'Полное имя',
      phone: 'Телефон',
      service: 'Тип лечения (опционально)',
      message: 'Дополнительное сообщение',
      submit: 'Отправить заявку',
      success: 'Заявка получена! Скоро свяжемся с вами'
    },
    footer: {
      about: 'О нас',
      contact: 'Контакты',
      hours: 'Часы работы: Пн-Пт 8:00-20:00',
      rights: 'Все права защищены'
    },
    meta: {
      home: {
        title: 'Стоматологическая клиника | Современное профессиональное лечение',
        description: 'Ведущая стоматологическая клиника с командой экспертов, передовыми технологиями и индивидуальным подходом. Имплантация, отбеливание, ортодонтия и многое другое.'
      },
      services: {
        title: 'Стоматологические услуги | Все виды лечения',
        description: 'Широкий спектр стоматологических услуг: имплантация, отбеливание, ортодонтия, эстетическая стоматология, хирургия и профилактика.'
      },
      team: {
        title: 'Наша команда | Врачи-стоматологи эксперты',
        description: 'Познакомьтесь с нашей профессиональной командой - врачами-стоматологами с международной квалификацией и большим опытом.'
      },
      faq: {
        title: 'Частые вопросы | Стоматологическая клиника',
        description: 'Ответы на самые частые вопросы о стоматологическом лечении, стоимости, страховке и процессах лечения.'
      }
    }
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      team: 'Our Team',
      faq: 'FAQ',
      contact: 'Contact',
      book: 'Book Appointment'
    },
    home: {
      hero: {
        title: 'Your Healthy Smile Starts Here',
        subtitle: 'Advanced dental care with innovative technology and experienced team of specialists',
        cta: 'Book Appointment Now'
      },
      services: {
        title: 'Our Services',
        subtitle: 'Comprehensive solutions for all your oral health needs'
      },
      stats: {
        patients: 'Happy Patients',
        experience: 'Years Experience',
        specialists: 'Dental Specialists',
        success: 'Success Rate'
      }
    },
    services: {
      title: 'Our Services',
      subtitle: 'Advanced dental treatments with highest quality standards',
      implants: {
        title: 'Dental Implants',
        description: 'Advanced implant solutions with 3D digital technology'
      },
      whitening: {
        title: 'Teeth Whitening',
        description: 'Professional whitening for a bright and safe smile'
      },
      orthodontics: {
        title: 'Orthodontics',
        description: 'Clear braces and advanced teeth alignment systems'
      },
      cosmetic: {
        title: 'Cosmetic Dentistry',
        description: 'Veneers, smile design and complete makeovers'
      },
      prevention: {
        title: 'Preventive Care',
        description: 'Professional cleaning, fluoride and gum treatment'
      },
      surgery: {
        title: 'Oral Surgery',
        description: 'Extractions, bone grafting and jaw reconstruction'
      }
    },
    team: {
      title: 'Our Professional Team',
      subtitle: 'Expert dentists with international training'
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Answers to the most common questions from our patients',
      q1: 'How much does a dental implant cost?',
      a1: 'The cost of a dental implant varies depending on the case. At the initial consultation, we will present a detailed treatment plan and transparent pricing.',
      q2: 'Are the treatments painful?',
      a2: 'We use advanced technologies and effective local anesthesia. Most treatments are performed completely pain-free.',
      q3: 'How long does implant treatment take?',
      a3: 'The complete dental implant process takes 3-6 months. This includes bone integration and permanent crown placement.',
      q4: 'Do you accept health insurance?',
      a4: 'We work with all health funds and most insurance companies. Our secretarial team will assist with claim submissions.',
      q5: 'What does the first visit include?',
      a5: 'On the first visit, we perform a comprehensive examination, digital X-rays, and present a personalized treatment plan.'
    },
    booking: {
      title: 'Book an Appointment',
      subtitle: 'Leave your details and we will get back to you soon',
      name: 'Full Name',
      phone: 'Phone',
      service: 'Type of Treatment (optional)',
      message: 'Additional Message',
      submit: 'Send Request',
      success: 'Request received! We will contact you soon'
    },
    footer: {
      about: 'About',
      contact: 'Contact',
      hours: 'Hours: Mon-Fri 8:00-20:00',
      rights: 'All rights reserved'
    },
    meta: {
      home: {
        title: 'Dental Clinic | Advanced Professional Care',
        description: 'Leading dental clinic with expert team, advanced technology and personalized care. Implants, whitening, orthodontics and more.'
      },
      services: {
        title: 'Dental Services | All Treatment Types',
        description: 'Wide range of dental services: implants, whitening, orthodontics, cosmetic dentistry, surgery and preventive care.'
      },
      team: {
        title: 'Our Team | Expert Dentists',
        description: 'Meet our professional team - expert dentists with international training and extensive experience.'
      },
      faq: {
        title: 'FAQ | Dental Clinic',
        description: 'Answers to the most common questions about dental treatments, costs, insurance and treatment processes.'
      }
    }
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      services: 'الخدمات',
      team: 'فريقنا',
      faq: 'الأسئلة الشائعة',
      contact: 'اتصل بنا',
      book: 'حجز موعد'
    },
    home: {
      hero: {
        title: 'ابتسامة صحية تبدأ هنا',
        subtitle: 'رعاية أسنان متقدمة مع تكنولوجيا مبتكرة وفريق من المتخصصين ذوي الخبرة',
        cta: 'احجز موعدك الآن'
      },
      services: {
        title: 'خدماتنا',
        subtitle: 'حلول شاملة لجميع احتياجات صحة الفم'
      },
      stats: {
        patients: 'مريض راضٍ',
        experience: 'سنوات من الخبرة',
        specialists: 'أخصائي أسنان',
        success: 'معدل النجاح'
      }
    },
    services: {
      title: 'خدماتنا',
      subtitle: 'علاجات أسنان متقدمة بأعلى معايير الجودة',
      implants: {
        title: 'زراعة الأسنان',
        description: 'حلول زراعة متقدمة بتقنية رقمية ثلاثية الأبعاد'
      },
      whitening: {
        title: 'تبييض الأسنان',
        description: 'تبييض احترافي لابتسامة مشرقة وآمنة'
      },
      orthodontics: {
        title: 'تقويم الأسنان',
        description: 'تقويم شفاف وأنظمة محاذاة متقدمة'
      },
      cosmetic: {
        title: 'طب الأسنان التجميلي',
        description: 'قشور، تصميم الابتسامة والتجديد الكامل'
      },
      prevention: {
        title: 'الرعاية الوقائية',
        description: 'تنظيف احترافي، فلورايد وعلاج اللثة'
      },
      surgery: {
        title: 'جراحة الفم',
        description: 'خلع، ترقيع العظام وإعادة بناء الفك'
      }
    },
    team: {
      title: 'فريقنا المحترف',
      subtitle: 'أطباء أسنان خبراء بتدريب دولي'
    },
    faq: {
      title: 'الأسئلة الشائعة',
      subtitle: 'إجابات على الأسئلة الأكثر شيوعًا من مرضانا',
      q1: 'كم تكلفة زراعة الأسنان؟',
      a1: 'تختلف تكلفة زراعة الأسنان حسب الحالة. في الاستشارة الأولية، سنقدم خطة علاج مفصلة وأسعار شفافة.',
      q2: 'هل العلاجات مؤلمة؟',
      a2: 'نستخدم تقنيات متقدمة وتخدير موضعي فعال. معظم العلاجات تتم دون ألم تمامًا.',
      q3: 'كم من الوقت يستغرق علاج الزراعة؟',
      a3: 'تستغرق عملية زراعة الأسنان الكاملة 3-6 أشهر. يشمل ذلك التحام العظم وتركيب التاج الدائم.',
      q4: 'هل تقبلون التأمين الصحي؟',
      a4: 'نعمل مع جميع صناديق الصحة ومعظم شركات التأمين. سيساعد فريق السكرتارية في تقديم المطالبات.',
      q5: 'ماذا تتضمن الزيارة الأولى؟',
      a5: 'في الزيارة الأولى، نجري فحصًا شاملاً، أشعة سينية رقمية، ونقدم خطة علاج شخصية.'
    },
    booking: {
      title: 'حجز موعد',
      subtitle: 'اترك بياناتك وسنتواصل معك قريبًا',
      name: 'الاسم الكامل',
      phone: 'الهاتف',
      service: 'نوع العلاج (اختياري)',
      message: 'رسالة إضافية',
      submit: 'إرسال الطلب',
      success: 'تم استلام الطلب! سنتواصل معك قريبًا'
    },
    footer: {
      about: 'عن',
      contact: 'اتصل',
      hours: 'ساعات العمل: الإثنين-الجمعة 8:00-20:00',
      rights: 'جميع الحقوق محفوظة'
    },
    meta: {
      home: {
        title: 'عيادة أسنان | رعاية احترافية متقدمة',
        description: 'عيادة أسنان رائدة مع فريق خبراء، تكنولوجيا متقدمة ورعاية شخصية. زراعة، تبييض، تقويم وأكثر.'
      },
      services: {
        title: 'خدمات الأسنان | جميع أنواع العلاج',
        description: 'مجموعة واسعة من خدمات الأسنان: زراعة، تبييض، تقويم، طب أسنان تجميلي، جراحة ورعاية وقائية.'
      },
      team: {
        title: 'فريقنا | أطباء أسنان خبراء',
        description: 'تعرف على فريقنا المحترف - أطباء أسنان خبراء بتدريب دولي وخبرة واسعة.'
      },
      faq: {
        title: 'الأسئلة الشائعة | عيادة أسنان',
        description: 'إجابات على الأسئلة الأكثر شيوعًا حول علاجات الأسنان، التكاليف، التأمين وعمليات العلاج.'
      }
    }
  }
};

export const getTranslation = (lang: Language): TranslationKeys => {
  return translations[lang] || translations['en'];
};
