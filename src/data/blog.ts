import { stock } from '@/lib/img'

export interface Post {
  slug: string
  title: string
  excerpt: string
  cover: string
  category: string
  date: string // formato legible
  readTime: string
  // Cuerpo en párrafos (simula contenido SEO). Reemplazable por el cliente.
  body: string[]
}

// PLACEHOLDER: artículos de ejemplo con enfoque SEO real de fisioterapia.
// El cliente puede editarlos o conectarlos a un CMS más adelante.
export const POSTS: Post[] = [
  {
    slug: 'dolor-lumbar-causas-soluciones',
    title: 'Dolor lumbar: causas más comunes y cómo aliviarlo',
    excerpt:
      'El dolor de espalda baja afecta a 8 de cada 10 personas. Te explicamos por qué aparece y qué puedes hacer para recuperarte.',
    cover: stock('blog-espalda.jpg'),
    category: 'Espalda',
    date: '2 de junio, 2026',
    readTime: '5 min',
    body: [
      'El dolor lumbar es una de las consultas más frecuentes en fisioterapia. Aunque suele asustar, en la mayoría de los casos tiene una solución clara cuando se identifica la causa real.',
      'Entre las causas más comunes están las malas posturas mantenidas, la debilidad del core, el sedentarismo y los movimientos bruscos al levantar peso. Cada una requiere un abordaje distinto.',
      'En Fisiolife realizamos una evaluación biomecánica completa para entender el origen de tu dolor y diseñar un plan de tratamiento personalizado. No tratamos solo el síntoma: vamos a la raíz.',
      'Si tu dolor lumbar lleva más de dos semanas o se irradia hacia la pierna, no lo dejes pasar. Una evaluación temprana acelera la recuperación y previene recaídas.',
    ],
  },
  {
    slug: 'lesiones-deportivas-prevencion',
    title: 'Lesiones deportivas: cómo prevenirlas y volver más fuerte',
    excerpt:
      'Una buena rutina de calentamiento y recuperación puede reducir hasta un 50% el riesgo de lesión. Te contamos cómo.',
    cover: stock('blog-deporte.jpg'),
    category: 'Deporte',
    date: '28 de mayo, 2026',
    readTime: '6 min',
    body: [
      'Las lesiones deportivas no son inevitables. Con la preparación adecuada, la mayoría se pueden prevenir, y cuando ocurren, una buena rehabilitación marca la diferencia entre volver o recaer.',
      'El calentamiento dinámico, el trabajo de fuerza específico y el stretching post-actividad son pilares fundamentales. El vendaje neuromuscular también ayuda a dar soporte sin limitar el movimiento.',
      'Tras una lesión, el retorno al deporte debe ser progresivo y guiado. Volver demasiado pronto es la causa #1 de recaídas.',
      'Nuestro equipo te acompaña en todo el proceso, desde la fase aguda hasta el retorno completo a tu actividad, con técnicas basadas en evidencia.',
    ],
  },
  {
    slug: 'mejora-tu-postura-trabajo',
    title: 'Mejora tu postura en el trabajo y di adiós al dolor de cuello',
    excerpt:
      'Pasar horas frente a la pantalla pasa factura. Pequeños cambios ergonómicos pueden transformar tu bienestar diario.',
    cover: stock('blog-postura.jpg'),
    category: 'Postura',
    date: '20 de mayo, 2026',
    readTime: '4 min',
    body: [
      'El teletrabajo y las largas jornadas frente a la computadora han disparado las consultas por dolor cervical y de hombros. La buena noticia: la mayoría se resuelve con ajustes simples.',
      'La pantalla a la altura de los ojos, los pies apoyados, las pausas activas cada hora y un buen soporte lumbar son cambios pequeños con gran impacto.',
      'En Fisiolife ofrecemos asesoramiento ergonómico personalizado para tu puesto de trabajo, además de técnicas para liberar la tensión acumulada.',
      'No esperes a que el dolor sea crónico. La prevención postural es la inversión más rentable para tu salud a largo plazo.',
    ],
  },
  {
    slug: 'punzion-seca-que-es',
    title: 'Punción seca: qué es y cuándo está indicada',
    excerpt:
      'Una técnica eficaz para tratar puntos gatillo y aliviar el dolor muscular profundo. Resolvemos tus dudas.',
    cover: stock('blog-cervical.jpg'),
    category: 'Tratamientos',
    date: '14 de mayo, 2026',
    readTime: '5 min',
    body: [
      'La punción seca es una técnica de fisioterapia invasiva que trata los puntos gatillo miofasciales, esas zonas de tensión que generan dolor referido en otras partes del cuerpo.',
      'A diferencia de la acupuntura, se basa en criterios anatómicos y neurofisiológicos. Su objetivo es desactivar el punto gatillo y restaurar la función normal del músculo.',
      'Está indicada en contracturas persistentes, dolor miofascial y ciertas tendinopatías. Siempre la realiza un fisioterapeuta capacitado y en condiciones de bioseguridad.',
      'Si arrastras una contractura que no cede con masaje, la punción seca puede ser la solución. Consúltanos para evaluar tu caso.',
    ],
  },
  {
    slug: 'ejercicios-en-casa-recuperacion',
    title: '5 ejercicios en casa para acelerar tu recuperación',
    excerpt:
      'Complementa tu tratamiento con rutinas seguras que puedes hacer en cualquier momento. Movimiento es salud.',
    cover: stock('blog-ejercicio.jpg'),
    category: 'Ejercicios',
    date: '7 de mayo, 2026',
    readTime: '4 min',
    body: [
      'El ejercicio terapéutico es parte esencial de cualquier recuperación. Hacerlo en casa, entre sesiones, potencia los resultados y te da autonomía.',
      'Movilidad de cadera, activación del core, estiramiento de isquiotibiales, fortalecimiento de glúteos y respiración diafragmática son básicos que casi todos pueden incorporar.',
      'La clave está en la técnica y la progresión. Por eso siempre recomendamos que un fisioterapeuta supervise tu rutina al inicio.',
      'En tus sesiones te enseñamos exactamente qué hacer y cómo, adaptado a tu caso. La recuperación es un trabajo en equipo.',
    ],
  },
  {
    slug: 'fisioterapia-a-domicilio-ventajas',
    title: 'Fisioterapia a domicilio: comodidad sin renunciar a la calidad',
    excerpt:
      'Llevar el tratamiento a tu hogar tiene ventajas que van más allá de la comodidad. Te las explicamos.',
    cover: stock('blog-recuperacion.jpg'),
    category: 'Servicios',
    date: '1 de mayo, 2026',
    readTime: '3 min',
    body: [
      'La fisioterapia a domicilio ha crecido enormemente, y no solo por comodidad. Tratar al paciente en su entorno real aporta información valiosa sobre sus hábitos y posturas cotidianas.',
      'Es ideal para personas con movilidad reducida, recuperaciones postoperatorias o quienes simplemente prefieren evitar desplazamientos. Todo con los mismos protocolos de bioseguridad de la consulta.',
      'En Fisiolife atendemos a domicilio en los principales distritos de Lima, con el mismo equipo profesional y la misma calidad de siempre.',
      '¿Quieres saber si llegamos a tu zona? Escríbenos por WhatsApp y te confirmamos al instante.',
    ],
  },
]
