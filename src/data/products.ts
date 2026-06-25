export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "reguladores" | "bcd" | "mascaras" | "aletas" | "computadores" | "trajes-neopreno" | "accesorios";
  brand: string;
  image: string;
  isPopular?: boolean;
  longDescription?: string;
  longDescriptionEn?: string;
  features?: string[];
  featuresEn?: string[];
  benefits?: { title: string; desc: string }[];
  benefitsEn?: { title: string; desc: string }[];
  specs?: Record<string, string>;
  specsEn?: Record<string, string>;
}

export const products: Product[] = [
  // REGULADORES
  {
    id: "reg-1",
    name: "REGULADOR MK2 EVO / R095",
    description: "Diseñado para operación. El caballito de batalla de los centros de buceo. Confiable y duradero.",
    price: 1278800,
    category: "reguladores",
    brand: "Scubapro",
    image: "/images/regulador-mk2-evo-r095.png",
    isPopular: true,
    longDescription: "El MK2 EVO es el único regulador de pistón downstream clásico con componentes internos totalmente aislados para resistir el agua fría. Es el regulador de referencia para escuelas de buceo y buceadores que buscan la máxima sencillez y durabilidad. El R095 es una segunda etapa fiable con válvula clásica downstream y mando VIVA preajustado para evitar flujos continuos no deseados.",
    longDescriptionEn: "The MK2 EVO is the only classic downstream piston first stage with internal components fully insulated to resist cold water. It is the go-to choice for dive centers and divers seeking maximum simplicity and durability. The R095 is a reliable second stage featuring a classic downstream valve and a pre-tuned VIVA control to prevent unwanted free-flows.",
    features: [
      "Primera etapa con sistema XTIS (Extended Thermal Insulating System) para resistir la congelación.",
      "Cuerpo de latón marino cromado extremadamente duradero.",
      "1 puerto de alta presión (HP) y 4 puertos de baja presión (LP).",
      "Segunda etapa R095 con válvula clásica downstream.",
      "Mando VIVA preajustado para evitar flujos continuos.",
      "Boquilla ortodóncica de gran comodidad."
    ],
    featuresEn: [
      "First stage with XTIS (Extended Thermal Insulating System) for freezing resistance.",
      "Extremely durable chrome-plated marine brass body.",
      "1 high pressure (HP) port and 4 low pressure (LP) ports.",
      "R095 second stage with classic downstream valve.",
      "Pre-tuned VIVA switch to prevent free-flow.",
      "Orthodontic high-comfort mouthpiece."
    ],
    benefits: [
      { "title": "Durabilidad Legendaria", "desc": "Ideal para un uso intensivo diario en centros de buceo y condiciones de alquiler exigentes." },
      { "title": "Resistencia Térmica", "desc": "La tecnología XTIS ofrece un 50% más de protección contra la congelación en aguas frías." },
      { "title": "Mantenimiento Simple", "desc": "Diseño clásico y simple que minimiza costos y facilita las revisiones periódicas." }
    ],
    benefitsEn: [
      { "title": "Legendary Durability", "desc": "Ideal for intensive daily use in dive centers and demanding rental conditions." },
      { "title": "Thermal Resistance", "desc": "XTIS technology offers 50% more protection against freezing in cold water." },
      { "title": "Simple Maintenance", "desc": "Classic, straightforward design that minimizes costs and simplifies periodic servicing." }
    ],
    specs: {
      "Tipo de Primera Etapa": "Pistón clásico compensado (downstream)",
      "Cuerpo de la Primera Etapa": "Latón marino cromado",
      "Puertos HP": "1",
      "Puertos LP": "4",
      "Tecnología Térmica": "XTIS (Aislamiento Térmico Avanzado)",
      "Tipo de Segunda Etapa": "Válvula clásica downstream",
      "Mando de control": "VIVA preajustado",
      "Compatibilidad Nitrox": "Hasta 40%",
      "Peso (DIN/INT)": "485g / 706g",
      "Flujo de Aire a 200 bar": "1400 l/min"
    },
    specsEn: {
      "First Stage Type": "Classic downstream piston",
      "First Stage Body": "Chrome-plated marine brass",
      "HP Ports": "1",
      "LP Ports": "4",
      "Thermal Technology": "XTIS (Advanced Thermal Insulation)",
      "Second Stage Type": "Classic downstream valve",
      "Control Switch": "Pre-tuned VIVA",
      "Nitrox Compatibility": "Up to 40%",
      "Weight (DIN/INT)": "485g / 706g",
      "Air Flow at 200 bar": "1400 l/min"
    }
  },
  {
    id: "reg-2",
    name: "REGULADOR MK11 EVO / C370",
    description: "Diseñado para viajeros. Compacto, ligero y con un rendimiento respiratorio excepcional.",
    price: 2375100,
    category: "reguladores",
    brand: "Scubapro",
    image: "/images/regulador-mk11-evo-c370.png",
    longDescription: "El MK11 EVO / C370 es la opción perfecta para el buceador viajero. Cuenta con una primera etapa de diafragma compensado extremadamente compacta y ligera, con piezas selladas para evitar la entrada de agua y contaminantes. La segunda etapa C370 combina un tamaño reducido con un rendimiento respiratorio excepcional, gracias a su válvula compensada y controles ajustables por el buceador.",
    longDescriptionEn: "The MK11 EVO / C370 is the perfect choice for the traveling diver. It features an extremely compact and lightweight balanced diaphragm first stage, with sealed parts to prevent water and contaminant entry. The C370 second stage combines small dimensions with exceptional breathing performance, thanks to its balanced valve and diver-adjustable controls.",
    features: [
      "Primera etapa de diafragma compensado para un flujo de aire constante e independiente de la profundidad.",
      "Cuerpo de latón marino forjado supercompacto y ligero.",
      "Cámara seca sellada que evita la congelación y la entrada de partículas.",
      "2 puertos de alta presión (HP) a 15° y 4 puertos de baja presión (LP) de alto flujo.",
      "Segunda etapa C370 compensada que reduce el esfuerzo inspiratorio.",
      "Perilla de regulación de esfuerzo y palanca VIVA coaxial ajustable."
    ],
    featuresEn: [
      "Balanced diaphragm first stage for constant, depth-independent airflow.",
      "Super-compact and lightweight forged marine brass body.",
      "Factory-sealed dry chamber that prevents freezing and particle intrusion.",
      "2 high pressure (HP) ports at 15° and 4 high-flow low pressure (LP) ports.",
      "Pneumatically balanced C370 second stage that reduces inhalation effort.",
      "Adjustable inhalation resistance knob and coaxial VIVA lever."
    ],
    benefits: [
      { "title": "Compañero de Viaje", "desc": "Peso y volumen reducidos, ideal para optimizar el equipaje sin comprometer el rendimiento." },
      { "title": "Flujo Compensado", "desc": "Garantiza una entrega de aire suave y constante, sin importar la profundidad o la presión del tanque." },
      { "title": "Control de Esfuerzo", "desc": "La perilla ajustable permite personalizar el flujo de aire según las condiciones de la inmersión." }
    ],
    benefitsEn: [
      { "title": "Travel Friendly", "desc": "Reduced weight and volume, perfect for saving luggage space without sacrificing performance." },
      { "title": "Balanced Flow", "desc": "Guarantees smooth and constant air delivery, regardless of depth or tank pressure." },
      { "title": "Breathing Control", "desc": "Adjustable knob allows customization of airflow based on diving conditions." }
    ],
    specs: {
      "Tipo de Primera Etapa": "Diafragma compensado",
      "Cuerpo de la Primera Etapa": "Latón marino forjado cromado",
      "Puertos HP": "2 (con inclinación de 15°)",
      "Puertos LP": "4 de alto flujo (High-Flow)",
      "Cámara Seca": "Sellada de fábrica",
      "Tipo de Segunda Etapa": "Neumáticamente compensada",
      "Controles": "Esfuerzo de inhalación ajustable y VIVA coaxial",
      "Compatibilidad Nitrox": "Hasta 40%",
      "Peso (DIN/INT)": "490g / 710g",
      "Flujo de Aire a 200 bar": "1600 l/min"
    },
    specsEn: {
      "First Stage Type": "Balanced diaphragm",
      "First Stage Body": "Chrome-plated forged marine brass",
      "HP Ports": "2 (15° angled)",
      "LP Ports": "4 High-Flow",
      "Dry Chamber": "Factory sealed",
      "Second Stage Type": "Pneumatically balanced",
      "Control Switch": "Adjustable inhalation effort and coaxial VIVA",
      "Nitrox Compatibility": "Up to 40%",
      "Weight (DIN/INT)": "490g / 710g",
      "Air Flow at 200 bar": "1600 l/min"
    }
  },
  {
    id: "reg-3",
    name: "REGULADOR MK25 EVO / S600",
    description: "La facilidad para respirar es la esencia de este sistema. Máximo rendimiento en cualquier condición.",
    price: 3936000,
    category: "reguladores",
    brand: "Scubapro",
    image: "/images/regulador-mk25-evo-s600.png",
    longDescription: "El MK25 EVO / S600 es el sistema de regulador insignia de Scubapro. La primera etapa de pistón compensado de flujo directo ofrece una entrega de aire instantánea y constante en cualquier situación de profundidad o presión de botella. Combinada con la legendaria segunda etapa S600, con su robusto alojamiento metálico de válvula y ajustes de precisión, este sistema ofrece la respiración más suave y natural del mercado.",
    longDescriptionEn: "The MK25 EVO / S600 is Scubapro's flagship regulator system. The balanced flow-through piston first stage offers instantaneous and constant air delivery under any depth or tank pressure condition. Paired with the legendary S600 second stage, featuring its rugged metal valve housing and precision adjustments, this system delivers the smoothest and most natural breathing on the market.",
    features: [
      "Primera etapa de pistón compensado de flujo directo para una entrega de aire insuperable.",
      "Cuerpo de latón marino cromado con torreta giratoria de 360 grados.",
      "Extended Thermal Insulating System (XTIS) para protección térmica extrema.",
      "2 puertos de alta presión (HP) opuestos y 5 puertos de baja presión (LP) de alto flujo.",
      "Segunda etapa S600 neumáticamente compensada con carcasa reforzada.",
      "Alojamiento metálico de la válvula (barrel) para máxima resistencia y durabilidad."
    ],
    featuresEn: [
      "Balanced flow-through piston first stage for unmatched air delivery.",
      "Chrome-plated marine brass body with 360-degree swivel turret.",
      "Extended Thermal Insulating System (XTIS) for extreme thermal protection.",
      "2 opposite high pressure (HP) ports and 5 high-flow low pressure (LP) ports.",
      "Pneumatically balanced S600 second stage with reinforced casing.",
      "Rugged metal valve housing (barrel) for maximum durability."
    ],
    benefits: [
      { "title": "Rendimiento Élite", "desc": "Respiración extremadamente suave y natural, ideal para buceo profundo y técnico." },
      { "title": "Enrutamiento Perfecto", "desc": "La torreta giratoria de 360° en la primera etapa permite una colocación de latiguillos impecable." },
      { "title": "Resistencia Sub-Cero", "desc": "La tecnología XTIS lo hace idóneo para inmersiones en aguas extremadamente frías sin riesgo de flujo continuo." }
    ],
    benefitsEn: [
      { "title": "Elite Performance", "desc": "Extremely smooth and natural breathing, ideal for deep and technical diving." },
      { "title": "Perfect Routing", "desc": "The 360° swivel turret on the first stage allows for flawless hose configuration." },
      { "title": "Sub-Zero Resistance", "desc": "XTIS technology makes it perfect for diving in extremely cold waters without free-flow risk." }
    ],
    specs: {
      "Tipo de Primera Etapa": "Pistón compensado de flujo directo",
      "Cuerpo de la Primera Etapa": "Latón marino cromado con torreta giratoria 360°",
      "Puertos HP": "2 opuestos",
      "Puertos LP": "5 de alto flujo (LP High-Flow)",
      "Tecnología Térmica": "XTIS (Aislamiento Térmico Avanzado)",
      "Tipo de Segunda Etapa": "Neumáticamente compensada",
      "Controles": "Perilla de inhalación ajustable y palanca VIVA dive/pre-dive",
      "Compatibilidad Nitrox": "Hasta 40%",
      "Peso (DIN/INT)": "570g / 790g",
      "Flujo de Aire a 200 bar": "1850 l/min"
    },
    specsEn: {
      "First Stage Type": "Balanced flow-through piston",
      "First Stage Body": "Chrome-plated marine brass with 360° swivel turret",
      "HP Ports": "2 opposite",
      "LP Ports": "5 High-Flow",
      "Thermal Technology": "XTIS (Advanced Thermal Insulation)",
      "Second Stage Type": "Pneumatically balanced",
      "Control Switch": "Adjustable inhalation effort and VIVA dive/pre-dive",
      "Nitrox Compatibility": "Up to 40%",
      "Weight (DIN/INT)": "570g / 790g",
      "Air Flow at 200 bar": "1850 l/min"
    }
  },

  // BCD (Chalecos)
  {
    id: "bcd-1",
    name: "CHALECO T-ONE",
    description: "Diseño mejorado ideal para renta. Cordura de Nylon de 1000 Deniers interna y externamente.",
    price: 1987400,
    category: "bcd",
    brand: "Scubapro",
    image: "https://images.unsplash.com/photo-1621217036735-a77c3855ff4b?w=600&q=80"
  },
  {
    id: "bcd-2",
    name: "CHALECO LEVEL BPI",
    description: "Nylon EndurTex 420 Deniers de alta densidad. Diseño ajustable frontal envolvente y sistema de lastre integrado.",
    price: 3250000,
    category: "bcd",
    brand: "Scubapro",
    image: "https://images.unsplash.com/photo-1621217036735-a77c3855ff4b?w=600&q=80",
    isPopular: true
  },
  {
    id: "bcd-3",
    name: "CHALECO HYDROS PRO",
    description: "Un verdadero avance en la comodidad. Monprene ajustable con múltiples puntos de unión. Ganador del premio RED DOT 2016.",
    price: 6248800,
    category: "bcd",
    brand: "Scubapro",
    image: "https://images.unsplash.com/photo-1621217036735-a77c3855ff4b?w=600&q=80"
  },

  // COMPUTADORES
  {
    id: "comp-1",
    name: "COMPUTADOR ALADIN ONE MATRIX",
    description: "Algoritmo ZH-L16, Ajustes Aire/Nitrox. Pila sustituible por el usuario CR2450.",
    price: 2049900,
    category: "computadores",
    brand: "Scubapro",
    image: "https://images.unsplash.com/photo-1610486337583-04b31174092b?w=600&q=80"
  },
  {
    id: "comp-2",
    name: "COMPUTADOR LUNA 2.0",
    description: "Pantalla LCD de alto contraste con caracteres grandes y retroiluminación LED brillante. Compatible con Nitrox.",
    price: 3062500,
    category: "computadores",
    brand: "Scubapro",
    image: "https://images.unsplash.com/photo-1610486337583-04b31174092b?w=600&q=80",
    isPopular: true
  },
  {
    id: "comp-3",
    name: "COMPUTADOR G3 TI",
    description: "Pantalla a todo color de alto contraste. Batería de litio recargable. Interfaz Bluetooth.",
    price: 4074900,
    category: "computadores",
    brand: "Scubapro",
    image: "https://images.unsplash.com/photo-1610486337583-04b31174092b?w=600&q=80"
  },

  // MÁSCARAS
  {
    id: "mask-1",
    name: "TRINIDAD 3 MASK",
    description: "Diseño elegante sin marco. Disponible en amarillo, azul, rosado, naranja y turquesa.",
    price: 368900,
    category: "mascaras",
    brand: "Scubapro",
    image: "https://images.unsplash.com/photo-1596328325026-6a4a7f058098?w=600&q=80"
  },
  {
    id: "mask-2",
    name: "CARETA GHOST FRAMELESS",
    description: "Máscara de amplio campo visual y bajo volumen interno. Perfecta para fotografía submarina.",
    price: 374900,
    category: "mascaras",
    brand: "Scubapro",
    image: "https://images.unsplash.com/photo-1596328325026-6a4a7f058098?w=600&q=80"
  },
  {
    id: "mask-3",
    name: "CARETA ZOOM EVO",
    description: "Sistema de cambio de lentes rápido. Diseño de bajo volumen.",
    price: 469500,
    category: "mascaras",
    brand: "Scubapro",
    image: "https://images.unsplash.com/photo-1596328325026-6a4a7f058098?w=600&q=80",
    isPopular: true
  },
  {
    id: "mask-4",
    name: "EXPLORER MASK",
    description: "Doble lente de vidrio templado, bajo volumen interno y amplio campo visual. Marco reforzado.",
    price: 138800,
    category: "mascaras",
    brand: "Oceans Sub",
    image: "https://images.unsplash.com/photo-1596328325026-6a4a7f058098?w=600&q=80"
  },

  // ALETAS
  {
    id: "fin-1",
    name: "ALETAS JET CLUB",
    description: "Aletas de pie completo. Diseño moderno y de líneas puras.",
    price: 359900,
    category: "aletas",
    brand: "Scubapro",
    image: "https://images.unsplash.com/photo-1510619865039-4977464a2f45?w=600&q=80"
  },
  {
    id: "fin-2",
    name: "ALETAS GO TRAVEL",
    description: "Diseño 100% Monprene ultrarresistente y liviano ideal para viajes.",
    price: 536400,
    category: "aletas",
    brand: "Scubapro",
    image: "https://images.unsplash.com/photo-1510619865039-4977464a2f45?w=600&q=80",
    isPopular: true
  },
  {
    id: "fin-3",
    name: "ALETAS SEAWING NOVA",
    description: "Mundialmente galardonadas con las últimas innovaciones de diseño hidrodinámico. Más rendimiento con menor esfuerzo.",
    price: 1590300,
    category: "aletas",
    brand: "Scubapro",
    image: "https://images.unsplash.com/photo-1510619865039-4977464a2f45?w=600&q=80"
  },
  {
    id: "fin-4",
    name: "MANTA FINS",
    description: "Aleta de correa ajustable, ideal para renta. No requiere escarpines.",
    price: 224900,
    category: "aletas",
    brand: "Oceans Sub",
    image: "https://images.unsplash.com/photo-1510619865039-4977464a2f45?w=600&q=80"
  },

  // TRAJES NEOPRENO
  {
    id: "suit-1",
    name: "TRAJE ONEFLEX 3MM",
    description: "Traje todo terreno. Neopreno N2S de secado rápido y material antiabrasión en rodillas y caderas.",
    price: 1004800,
    category: "trajes-neopreno",
    brand: "Scubapro",
    image: "https://images.unsplash.com/photo-1513253245468-b7781b29a286?w=600&q=80",
    isPopular: true
  },
  {
    id: "suit-2",
    name: "TRAJE SPORT 3MM ENTERIZO",
    description: "Ideal para temperaturas del agua de 21°C a 27°C. Flexibilidad y confort superior.",
    price: 1068000,
    category: "trajes-neopreno",
    brand: "Scubapro",
    image: "https://images.unsplash.com/photo-1513253245468-b7781b29a286?w=600&q=80"
  },
  {
    id: "suit-3",
    name: "TRAJE EVERFLEX YULEX 3/2MM",
    description: "100% en neopreno Everflex YULEX, elaborado a partir de procesos ambientalmente amigables.",
    price: 2550500,
    category: "trajes-neopreno",
    brand: "Scubapro",
    image: "https://images.unsplash.com/photo-1513253245468-b7781b29a286?w=600&q=80"
  },

  // ACCESORIOS
  {
    id: "acc-1",
    name: "LINTERNA NOVA LIGHT 250 LED",
    description: "Luz auxiliar de 250 lumen. Modos: 100%, 50% y flash. Robusta y compacta.",
    price: 734900,
    category: "accesorios",
    brand: "Scubapro",
    image: "https://images.unsplash.com/photo-1588616405785-02cd201f8101?w=600&q=80",
    isPopular: true
  },
  {
    id: "acc-2",
    name: "CUCHILLO MAKO TITANIUM",
    description: "Titanio endurecido, ligero, durable y mínima corrosión. Funda con mecanismo de bloqueo.",
    price: 1013850,
    category: "accesorios",
    brand: "Scubapro",
    image: "https://images.unsplash.com/photo-1588616405785-02cd201f8101?w=600&q=80"
  },
  {
    id: "acc-3",
    name: "SNORKEL SPECTRA DRY",
    description: "Sistema Seco, boquilla en silicona antialérgica. Diseño hidrodinámico superior.",
    price: 294000,
    category: "accesorios",
    brand: "Scubapro",
    image: "https://images.unsplash.com/photo-1588616405785-02cd201f8101?w=600&q=80"
  },
  {
    id: "acc-4",
    name: "MALETIN PLEGABLE BACK PACK",
    description: "Tela de nylon 420 denniers, tamaño amplio para todo el equipo de buceo.",
    price: 265900,
    category: "accesorios",
    brand: "Problue",
    image: "https://images.unsplash.com/photo-1588616405785-02cd201f8101?w=600&q=80"
  }
];
