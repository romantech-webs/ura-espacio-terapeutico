export const clinic = {
  name: "URA Espacio Terapéutico",
  logo: "/images/logo.png",
  tagline: "Tu bienestar integral en Donostia-San Sebastián",
  description: "URA Espacio Terapéutico es tu clínica de fisioterapia y bienestar en Donostia-San Sebastián, con valoración de 5 estrellas en Google. Nos especializamos en tratamientos que combinan fisioterapia manual, presoterapia, drenaje linfático y masajes terapéuticos. Patricia y su equipo crean experiencias únicas donde la recuperación física se une al bienestar emocional, cuidando cada detalle para que salgas renovado.",
  colors: {
    primary: "#2563EB",
    secondary: "#1E293B",
    accent: "#06B6D4",
    neutral: "#F8FAFC"
  },
  phone: "943 42 57 04",
  whatsapp: "+34943425704",
  whatsappMessage: "Hola, me gustaría solicitar información sobre vuestros tratamientos de fisioterapia.",
  email: "",
  address: {
    street: "Calle Garibai 6, 1C",
    city: "Donostia-San Sebastián",
    province: "Gipuzkoa",
    postalCode: "20004",
    country: "España"
  },
  googleMapsUrl: "https://maps.google.com/?cid=2255735729507680569&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
  googleMapsEmbed: "https://maps.google.com/maps?q=URA%20Espacio%20Terap%C3%A9utico%20%4043.3215%2C-1.98411&z=16&output=embed",
  coordinates: {
    lat: 43.3215,
    lng: -1.98411
  },
  schedule: [
    {
      days: "lunes - viernes",
      hours: "9:30–19:00"
    },
    {
      days: "sábado - domingo",
      hours: "Cerrado"
    }
  ],
  social: {
    instagram: null,
    facebook: null,
    linkedin: null,
    tiktok: null
  },
  reviews: {
    rating: 5,
    count: 103,
    url: "https://maps.google.com/?cid=2255735729507680569&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
    featured: [
      {
        author: "Abene Estudio",
        rating: 5,
        text: "Patricia es maravillosa, estoy muy sorprendida con la calidad del servicio. He podido asistir a diferentes fisioterapeutas a lo largo de los años pero nunca he recibido una atención y servicio tan buenos. Una vez conocida a ella, creo que el resto se quedan atrás y voy a explicar por qué: como profesional de la fisioterapia me ha encantado. He notado cómo me liberaba cada uno de mis músculos y el resultado ha sido muy bueno. El estrés del trabajo y las infinitas horas delante del ordenador me habían dejado agarrotada y a los días de su sesión me noto mucho más libre en los movimientos y más ligera. Pero su servicio no sólo se limita a mejorar estas molestias o dolores específicos. La hora en su cabina ha sido una hora dedicada al bienestar. Los aceites esenciales, la presoterapia  del final (descargando también las piernas) mientras te da un masaje en cuello, cara y cabeza... ha sido una maravilla. He salido flotando, totalmente relajada, como si hubiese estado en un tratamiento de bienestar pero a su vez solucionando el problema de carga y agarrotamiento en la espalda. Sin duda volveré, quiero incorporar su servicio más como un mantenimiento. El dinero mejor invertido del año!",
        date: "Hace 4 meses"
      },
      {
        author: "Pau",
        rating: 5,
        text: "Me recomendaron la clínica para hacerme un tratamiento de presoterapia y la verdad es que acertaron de pleno. Desde que entré, el trato fue profesional y cercano. Cuidan muchísimo los detalles. El ambiente es tranquilo, la decoración está hecha con mimo y la música suave y agradable que crea sensación de calma. Además, están pendientes de que estés cómodo en cada momento, lo que transmite mucha confianza.\nLa sesión fue muy agradable y se nota que Patricia sabe muy bien lo que hace. Sin duda volveré.",
        date: "Hace 2 meses"
      },
      {
        author: "gorka lopez",
        rating: 5,
        text: "Mi experiencia con el masaje de drenaje linfático fue muy positivo. El lugar es agradable y transmite una gran calma. La profesional no solo demostró un alto nivel de profusión y técnica sino también fue muy  empática y cercana (el masaje fue muy profesional), ¡Un servicio de 10!",
        date: "Hace 2 meses"
      },
      {
        author: "Miguel Matarranz",
        rating: 5,
        text: "De lo mejor de Donosti. La calidad del tratamiento así como la energía y el cariño de su titular Patricia merece destacarse. Soy muy asiduo. Destacar además su puesta al día en diferentes tratamientos que siempre aplica al cliente con la máxima dedicación. Un tesoro de sanación.",
        date: "Hace 2 meses"
      },
      {
        author: "Ane Goitia",
        rating: 5,
        text: "Una gozada de trato. Transmite muchísima tranquilidad, comprensión y profesionalidad. Me sentí súper bien durante el tratamiento y después también!",
        date: "Hace 4 meses"
      }
    ]
  },
  services: [
    {
      id: "fisioterapia-manual",
      name: "Fisioterapia Manual",
      description: "Técnicas manuales especializadas que liberan cada músculo con precisión profesional. Ideal para dolores de espalda, contracturas y tensiones acumuladas por estrés laboral o malas posturas. Notarás la diferencia desde la primera sesión, con movimientos más libres y sensación de ligereza.",
      benefits: [
        "Alivio inmediato de contracturas y dolor muscular",
        "Mejora significativa de la movilidad articular",
        "Recuperación de la funcionalidad en tu día a día"
      ],
      icon: "Hand"
    },
    {
      id: "presoterapia",
      name: "Presoterapia",
      description: "Tratamiento avanzado de compresión terapéutica que mejora la circulación y drena líquidos retenidos. Perfecta para piernas cansadas, recuperación deportiva o complemento a otros tratamientos. Durante la sesión, disfrutarás de un masaje relajante en cuello, cara y cabeza que completa la experiencia de bienestar.",
      benefits: [
        "Descarga y alivio profundo en piernas pesadas",
        "Mejora la circulación sanguínea y linfática",
        "Sensación de ligereza y descanso inmediato"
      ],
      icon: "Activity"
    },
    {
      id: "drenaje-linfatico",
      name: "Drenaje Linfático",
      description: "Masaje terapéutico especializado que estimula el sistema linfático para eliminar toxinas y reducir la retención de líquidos. Aplicado con técnica profesional y gran empatía, este tratamiento mejora tu bienestar general y aporta una profunda sensación de calma.",
      benefits: [
        "Eliminación efectiva de toxinas y líquidos retenidos",
        "Reducción visible de hinchazón y edemas",
        "Fortalecimiento del sistema inmunológico"
      ],
      icon: "Heart"
    },
    {
      id: "masaje-terapeutico",
      name: "Masaje Terapéutico",
      description: "Sesiones diseñadas para combinar recuperación física con bienestar emocional. Utilizamos aceites esenciales en un ambiente cuidado al detalle, con música suave y decoración pensada para tu relajación. Ideal para mantener tu cuerpo en equilibrio y prevenir molestias.",
      benefits: [
        "Liberación de tensión muscular y estrés acumulado",
        "Experiencia de bienestar integral cuerpo-mente",
        "Prevención de futuras lesiones y contracturas"
      ],
      icon: "Hand"
    },
    {
      id: "tratamiento-espalda",
      name: "Tratamiento de Espalda",
      description: "Especializado en dolores y agarrotamientos causados por largas horas frente al ordenador o posturas mantenidas. Combinamos técnicas manuales con terapias complementarias para liberar cada zona de tensión. Notarás cómo recuperas libertad de movimiento y ligereza.",
      benefits: [
        "Solución efectiva para dolor cervical y lumbar",
        "Corrección de desequilibrios posturales",
        "Mayor libertad de movimiento en tu día a día"
      ],
      icon: "Target"
    },
    {
      id: "fisioterapia-deportiva",
      name: "Fisioterapia Deportiva",
      description: "Recuperación y prevención de lesiones deportivas con técnicas avanzadas. Tratamientos personalizados que aceleran tu vuelta a la actividad física, manteniendo siempre el enfoque en tu bienestar integral y recuperación completa.",
      benefits: [
        "Recuperación más rápida de lesiones deportivas",
        "Prevención de recaídas y nuevas lesiones",
        "Optimización del rendimiento deportivo"
      ],
      icon: "Dumbbell"
    },
    {
      id: "rehabilitacion",
      name: "Rehabilitación Personalizada",
      description: "Programas de rehabilitación diseñados específicamente para ti, con seguimiento continuo hasta tu completa recuperación. Aplicamos las técnicas más actualizadas con dedicación máxima, adaptándonos a tu evolución en cada sesión.",
      benefits: [
        "Plan de tratamiento adaptado a tu caso específico",
        "Seguimiento profesional en cada fase",
        "Recuperación completa y duradera"
      ],
      icon: "Activity"
    },
    {
      id: "tratamientos-bienestar",
      name: "Tratamientos de Bienestar",
      description: "Sesiones pensadas para el autocuidado y mantenimiento de tu salud. Más allá de tratar dolencias específicas, creamos experiencias donde cada detalle cuenta: desde el ambiente hasta la atención personalizada. El mejor regalo que puedes hacerte.",
      benefits: [
        "Prevención de dolencias y mantenimiento de la salud",
        "Reducción de estrés y mejora del bienestar emocional",
        "Experiencia completa de cuidado personal"
      ],
      icon: "Heart"
    }
  ],
  process: [
    {
      step: 1,
      title: "Contacta con Nosotros",
      description: "Llámanos al 943 42 57 04 o escríbenos por WhatsApp. Te atenderemos con cercanía y profesionalidad para encontrar el mejor momento para tu primera sesión en URA Espacio Terapéutico."
    },
    {
      step: 2,
      title: "Primera Sesión Personalizada",
      description: "Patricia evaluará tu situación específica con empatía y profesionalidad. Diseñaremos juntos un plan de tratamiento adaptado a tus necesidades, combinando las técnicas más adecuadas para tu recuperación y bienestar."
    },
    {
      step: 3,
      title: "Experiencia de Tratamiento",
      description: "Disfruta de tu sesión en un ambiente cuidado al detalle: música suave, aceites esenciales y decoración pensada para tu calma. Cada tratamiento combina técnica profesional con atención al bienestar integral, para que salgas renovado."
    },
    {
      step: 4,
      title: "Seguimiento y Mantenimiento",
      description: "Acompañamos tu evolución con seguimiento continuo hasta tu completa recuperación. Muchos de nuestros pacientes incorporan nuestros tratamientos como mantenimiento regular, porque el cuidado constante es la mejor inversión en tu salud."
    }
  ],
  whyUs: [
    {
      title: "Valoración Excelente de Nuestros Pacientes",
      description: "Contamos con 5 estrellas en Google con más de 103 reseñas reales. Nuestros pacientes destacan la calidad profesional, el trato cercano y empático, y los resultados efectivos que experimentan desde la primera sesión. Una confianza ganada con dedicación y excelencia.",
      icon: "Heart"
    },
    {
      title: "Experiencia de Bienestar Integral",
      description: "No solo tratamos tu dolencia, creamos experiencias completas de recuperación y bienestar. Cuidamos cada detalle: aceites esenciales, música suave, decoración pensada para tu calma, y tratamientos complementarios como presoterapia con masaje facial incluido. Saldrás renovado física y emocionalmente.",
      icon: "Hand"
    },
    {
      title: "Profesionalidad y Técnica Avanzada",
      description: "Patricia y su equipo combinan alta cualificación profesional con formación constante en técnicas actualizadas. Notarás cómo liberamos cada músculo con precisión, aplicando los tratamientos más efectivos para tu caso específico. Profesionalidad que se siente en cada sesión.",
      icon: "Target"
    },
    {
      title: "Atención Personalizada y Cercana",
      description: "Cada paciente es único y así te tratamos. Desde la primera llamada hasta el seguimiento de tu evolución, recibirás atención empática, cercana y totalmente adaptada a ti. Estamos pendientes de tu comodidad en cada momento, transmitiendo la confianza que necesitas para tu recuperación.",
      icon: "Heart"
    }
  ],
  team: [
    {
      name: "Patricia",
      role: "Fisioterapeuta y Directora",
      image: "/images/team/placeholder.jpg",
      bio: "Profesionales apasionados por la fisioterapia y la rehabilitación. En URA Espacio Terapéutico nos dedicamos a devolver la calidad de vida a nuestros pacientes con tratamientos personalizados y tecnología avanzada."
    }
  ],
  gallery: [
    {
      src: "/images/gallery/1.webp",
      alt: "URA Espacio Terapéutico - Imagen 1"
    },
    {
      src: "/images/hero.webp",
      alt: "URA Espacio Terapéutico - Imagen 2"
    },
    {
      src: "/images/gallery/3.webp",
      alt: "URA Espacio Terapéutico - Imagen 3"
    },
    {
      src: "/images/gallery/4.webp",
      alt: "URA Espacio Terapéutico - Imagen 4"
    },
    {
      src: "/images/gallery/5.webp",
      alt: "URA Espacio Terapéutico - Imagen 5"
    },
    {
      src: "/images/gallery/6.webp",
      alt: "URA Espacio Terapéutico - Imagen 6"
    },
    {
      src: "/images/gallery/7.webp",
      alt: "URA Espacio Terapéutico - Imagen 7"
    },
    {
      src: "/images/gallery/8.webp",
      alt: "URA Espacio Terapéutico - Imagen 8"
    },
    {
      src: "/images/gallery/9.webp",
      alt: "URA Espacio Terapéutico - Imagen 9"
    },
    {
      src: "/images/gallery/10.webp",
      alt: "URA Espacio Terapéutico - Imagen 10"
    }
  ],
  faq: [
    {
      question: "¿Qué tipo de tratamientos ofrece URA Espacio Terapéutico?",
      answer: "En URA Espacio Terapéutico combinamos fisioterapia manual, presoterapia, drenaje linfático y masajes terapéuticos. Nos especializamos en tratar dolores de espalda, contracturas por estrés laboral, piernas cansadas y lesiones deportivas. Cada tratamiento se personaliza según tus necesidades específicas, siempre en un ambiente diseñado para tu máximo bienestar y relajación."
    },
    {
      question: "¿Cómo es una sesión en vuestra clínica?",
      answer: "Nuestras sesiones son experiencias completas de bienestar. Utilizamos aceites esenciales, música suave y cuidamos cada detalle del ambiente para tu relajación. Los tratamientos combinan técnicas profesionales de fisioterapia con terapias complementarias como presoterapia y masajes faciales. La duración aproximada es de una hora, donde estarás en manos expertas y saldrás sintiéndote renovado y ligero."
    },
    {
      question: "¿Necesito una valoración previa antes del tratamiento?",
      answer: "Sí, en tu primera visita realizamos una valoración personalizada para entender tu situación específica y diseñar el mejor plan de tratamiento. Patricia evaluará tus necesidades con profesionalidad y empatía, explicándote qué técnicas son las más adecuadas para ti. Esta primera sesión nos permite crear un tratamiento totalmente adaptado a tu caso particular."
    },
    {
      question: "¿La presoterapia está incluida en los tratamientos?",
      answer: "La presoterapia puede ser un tratamiento independiente o complemento a otras terapias según tus necesidades. Es especialmente efectiva para piernas cansadas, mejora de circulación y recuperación deportiva. Durante la sesión de presoterapia, además recibirás un masaje relajante en cuello, cara y cabeza que completa la experiencia de bienestar y descarga completa."
    },
    {
      question: "¿Por qué los clientes valoran tan bien URA Espacio Terapéutico?",
      answer: "Contamos con valoración de 5 estrellas en Google con más de 103 reseñas. Nuestros pacientes destacan la calidad técnica profesional, la atención cercana y empática, y especialmente el cuidado en cada detalle del ambiente. Muchos comentan que es la mejor experiencia que han tenido en fisioterapia, combinando efectividad en la recuperación con una sensación de bienestar integral que no encuentran en otros lugares."
    },
    {
      question: "¿Tratáis dolores de espalda por trabajo de oficina?",
      answer: "Sí, es una de nuestras especialidades. Las largas horas frente al ordenador generan contracturas y agarrotamiento que tratamos con gran efectividad. Liberamos cada músculo con técnicas manuales especializadas y notarás mayor libertad de movimiento y ligereza desde las primeras sesiones. Muchos de nuestros pacientes incorporan tratamientos regulares como mantenimiento preventivo para evitar que las molestias reaparezcan."
    },
    {
      question: "¿Cómo puedo reservar mi cita en URA Espacio Terapéutico?",
      answer: "Puedes llamarnos directamente al 943 42 57 04 o contactarnos por WhatsApp. Te atenderemos personalmente para encontrar el mejor horario según tu disponibilidad. Estamos en Donostia-San Sebastián y te recibiremos en un espacio tranquilo donde cada detalle está pensado para tu comodidad y recuperación."
    },
    {
      question: "¿Ofrecéis tratamientos de mantenimiento o solo para lesiones?",
      answer: "Ofrecemos ambos. Además de tratar lesiones y dolencias específicas, muchos de nuestros pacientes vienen regularmente para mantenimiento y prevención. Nuestros tratamientos de bienestar están diseñados para cuidar tu salud de forma continua, reducir el estrés acumulado y prevenir futuras molestias. Como dicen nuestros clientes, es la mejor inversión en tu bienestar que puedes hacer."
    }
  ],
  seo: {
    titleTemplate: "%s | URA Espacio Terapéutico",
    defaultTitle: "URA Espacio Terapéutico | Fisioterapia en Donostia-San Sebastián",
    defaultDescription: "Fisioterapia y bienestar en Donostia-San Sebastián. Tratamientos de fisioterapia manual, presoterapia y drenaje linfático. Valoración 5★ en Google. Reserva tu cita: 943 42 57 04",
    keywords: [
      "fisioterapia Donostia-San Sebastián",
      "URA Espacio Terapéutico",
      "presoterapia Donostia-San Sebastián",
      "drenaje linfático Donostia-San Sebastián",
      "fisioterapeuta Donostia-San Sebastián",
      "masaje terapéutico Donostia-San Sebastián",
      "tratamiento espalda Donostia-San Sebastián",
      "fisioterapia manual Donostia-San Sebastián",
      "clínica fisioterapia Donostia-San Sebastián",
      "fisioterapia deportiva Donostia-San Sebastián",
      "Patricia fisioterapeuta",
      "bienestar integral Donostia-San Sebastián"
    ],
    ogImage: "/og-image.jpg"
  },
  legal: {
    companyName: "URA Espacio Terapéutico",
    cif: "",
    registeredAddress: "Calle Garibai 6, 1C, 20004 Donostia-San Sebastián, Gipuzkoa, España"
  },
  heroHeadline: [
    "Tu Centro de",
    "Fisioterapia",
    "en Donostia"
  ],
  heroDescription: "En URA Espacio Terapéutico transformamos tu recuperación en una experiencia de bienestar completa. Combinamos técnicas de fisioterapia avanzada con tratamientos que cuidan tu cuerpo y mente, en un ambiente diseñado para tu máxima relajación y recuperación.",
  specialty: "Fisioterapia y Bienestar",
  ctaLabel: "Tu Recuperación",
  ctaHeadline: "¿Listo para sentirte mejor que nunca?",
  ctaDescription: "Reserva tu sesión en URA Espacio Terapéutico y descubre por qué nuestros clientes nos valoran con 5 estrellas. Tu recuperación y bienestar comienzan aquí.",
  statsLabel: "Pacientes",
  schemaType: "PhysicalTherapy",
  sectionCopy: {
    servicesLabel: "Nuestros Servicios",
    servicesTitle: "Tratamientos especializados",
    servicesDescription: "Soluciones profesionales adaptadas a tus necesidades de salud.",
    processLabel: "Cómo Trabajamos",
    processTitle: "Tu camino hacia la recuperación en 4 pasos",
    processDescription: "Un proceso simple y transparente diseñado para tu comodidad.",
    whyUsLabel: "Por Qué Elegirnos",
    whyUsTitle: "Tu salud, nuestra prioridad",
    whyUsDescription: "Combinamos experiencia, las mejores técnicas y un trato personalizado para cuidar de tu salud.",
    reviewsLabel: "Opiniones",
    reviewsTitle: "Lo que dicen nuestros pacientes",
    galleryLabel: "Instalaciones",
    galleryTitle: "Conoce nuestra clínica",
    galleryDescription: "Un espacio diseñado para tu bienestar y recuperación",
    faqLabel: "FAQ",
    faqTitle: "Preguntas frecuentes",
    faqDescription: "Resolvemos las dudas más comunes de nuestros pacientes.",
    locationLabel: "Ubicación",
    locationTitle: "Cómo llegar",
    teamLabel: "Nuestro Equipo",
    teamTitle: "Profesionales especializados",
    teamDescription: "Experiencia y dedicación al servicio de tu salud"
  }
}

export type Clinic = typeof clinic
