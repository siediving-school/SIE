import Script from "next/script";
import styles from "./dest.module.css";
import Link from "next/link";
import { getDictionary, Locale } from "../../../../i18n";
import { MapPin, Thermometer, Eye, ChevronRight, Star, Anchor, Utensils, CheckCircle2, Waves, Clock, Navigation, Ship, Bus } from "lucide-react";
import FaqAccordion from "../../../../components/FaqAccordion";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isEs = lang === "es";
  return {
    title: isEs
      ? "Buceo en Isla Fuerte, Colombia | SIE DIVING"
      : "Diving in Isla Fuerte, Colombia | SIE DIVING",
    description: isEs
      ? "Isla Fuerte: coral virgen, langosta fresca y cero carros. Paquetes de buceo fin de semana desde Cartagena con SIE DIVING. Arrecifes prístinos del Caribe colombiano."
      : "Isla Fuerte: pristine coral, fresh lobster and zero cars. Weekend diving packages from Cartagena with SIE DIVING. Pristine reefs of the Colombian Caribbean.",
    openGraph: {
      images: [{ url: "https://siediving.com/images/isla-fuerte-hero.webp", width: 1920, height: 1440 }],
    },
  };
}

const WA_ES = `https://wa.me/573017836467?text=${encodeURIComponent("Hola, quiero info sobre Isla Fuerte 🦞")}`;
const WA_EN = `https://wa.me/573017836467?text=${encodeURIComponent("Hi, info about Isla Fuerte please 🦞")}`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TouristDestination",
      "@id": "https://siediving.com/es/destinos/isla-fuerte#destination",
      "name": "Isla Fuerte",
      "description": "Isla caribeña colombiana sin carros en Córdoba, con arrecifes de coral prístinos, langosta fresca del día y máximo 200 visitantes por día.",
      "url": "https://siediving.com/es/destinos/isla-fuerte",
      "image": "https://siediving.com/images/isla-fuerte-hero.webp",
      "touristType": ["Buceo recreativo", "Snorkel", "Turismo de naturaleza"],
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 9.3869,
        "longitude": -76.1947,
      },
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": "Córdoba, Colombia",
      },
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "Sin vehículos", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Temperatura del agua", "value": "29°C" },
        { "@type": "LocationFeatureSpecification", "name": "Visibilidad submarina", "value": "15–25 metros" },
        { "@type": "LocationFeatureSpecification", "name": "Aforo máximo diario", "value": "200 visitantes" },
      ],
      "includesAttraction": [
        { "@type": "TouristAttraction", "name": "Punta Arena", "description": "Bahía protegida con coral de fuego, tortugas y peces loro. Profundidad 5–18m, nivel principiante." },
        { "@type": "TouristAttraction", "name": "El Jumbo", "description": "Formaciones coralinas con morenas, rayas guitarra y cardúmenes de pargos. Profundidad 8–22m, nivel intermedio." },
        { "@type": "TouristAttraction", "name": "Los Mangles", "description": "Manglar con caballitos de mar y pulpos. Profundidad 2–8m, nivel principiante." },
        { "@type": "TouristAttraction", "name": "El Planchón", "description": "Plataforma rocosa con langosta espinosa y barracudas. Profundidad 12–28m, nivel avanzado." },
      ],
    },
    {
      "@type": "Product",
      "@id": "https://siediving.com/es/destinos/isla-fuerte#paquete",
      "name": "Paquete Buceo Isla Fuerte – Fin de Semana",
      "description": "Paquete viernes a domingo: transporte marítimo, hospedaje en posada, 4 inmersiones y cena de langosta del día incluida.",
      "brand": { "@type": "Brand", "name": "SIE DIVING" },
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "seller": { "@type": "LocalBusiness", "name": "SIE DIVING" },
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://siediving.com#business",
      "name": "SIE DIVING",
      "url": "https://siediving.com",
      "telephone": "+573017836467",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Taganga",
        "addressRegion": "Magdalena",
        "addressCountry": "CO",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://siediving.com/es/destinos/isla-fuerte#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Necesito saber nadar para bucear en Isla Fuerte?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí, necesitas saber nadar básico — no tiene que ser perfecto. Si tienes dudas cuéntanos y te evaluamos. Para snorkel con chaleco no es necesario.",
          },
        },
        {
          "@type": "Question",
          "name": "¿Puedo ir a Isla Fuerte sin certificación de buceo?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí. Con el curso Open Water te certificas en el mismo viaje. O puedes hacer un Bautizo de Buceo (Discover Scuba) sin certificación previa, para una inmersión guiada.",
          },
        },
        {
          "@type": "Question",
          "name": "¿Qué incluye exactamente el paquete de buceo en Isla Fuerte?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Transporte marítimo ida y vuelta, hospedaje en posada con desayuno, 4 inmersiones con equipo completo, guía certificado y cena de langosta del día.",
          },
        },
        {
          "@type": "Question",
          "name": "¿Hay WiFi en Isla Fuerte?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Señal limitada. Algunos hostales tienen WiFi básico. Considera que esto es parte de la experiencia — desconectarte es el plan.",
          },
        },
      ],
    },
  ],
};

const TESTIMONIALS = [
  { text: "Nunca había buceado y en 3 días me certifiqué. Los corales de Isla Fuerte son increíbles, como de película.", name: "Mariana R.", country: "🇦🇷", trip: "Open Water · Isla Fuerte", avatar: "/images/avatar-mariana.webp" },
  { text: "El paquete de fin de semana vale cada peso. Langosta, buceo y cero turistas. Exactamente lo que buscaba.", name: "Tomás V.", country: "🇨🇴", trip: "Avanzado · Fin de semana", avatar: "/images/avatar-tomas.webp" },
  { text: "SIE coordinó todo desde WhatsApp. Llegamos, nos esperaban y fue perfecto. Lo recomiendo sin dudar.", name: "Sophie L.", country: "🇫🇷", trip: "Principiante · Isla Fuerte", avatar: "/images/avatar-sophie.webp" },
];

const PROFILES = [
  {
    img: "/images/isla-fuerte-perfil-certificarse.webp",
    emoji: "🤿",
    title: "El que quiere certificarse",
    desc: "Nunca has buceado pero siempre quisiste. Isla Fuerte tiene aguas calmadas, temperatura perfecta y un arrecife que hace que el aprendizaje sea una experiencia, no una clase.",
  },
  {
    img: "/images/isla-fuerte-perfil-desconectarse.webp",
    emoji: "🦞",
    title: "El que quiere desconectarse",
    desc: "Sin carros, sin ruido, sin señal de celular buena. Máximo 200 visitantes en toda la isla. Llegas, buceas, comes langosta y duermes como nunca.",
  },
  {
    img: "/images/isla-fuerte-perfil-avanzado.webp",
    emoji: "🦈",
    title: "El buceador avanzado",
    desc: "El Planchón a 28m con barracudas y langosta espinosa, El Jumbo con morenas y rayas guitarra. Isla Fuerte tiene sitios que muy pocos han visto.",
  },
];

const FAQS = [
  {
    q: "¿Necesito saber nadar para bucear?",
    a: "Sí, necesitas saber nadar básico — no tiene que ser perfecto. Si tienes dudas cuéntanos y te evaluamos. Para snorkel con chaleco no es necesario.",
  },
  {
    q: "¿Puedo ir sin certificación de buceo?",
    a: "Sí. Con el curso Open Water te certificas en el mismo viaje. O puedes hacer un Bautizo de Buceo (Discover Scuba) sin certificación previa, para una inmersión guiada.",
  },
  {
    q: "¿Qué incluye exactamente el paquete?",
    a: "Transporte marítimo ida y vuelta, hospedaje en posada con desayuno, 4 inmersiones con equipo completo, guía certificado y cena de langosta del día.",
  },
  {
    q: "¿Hay WiFi en Isla Fuerte?",
    a: "Señal limitada. Algunos hostales tienen WiFi básico. Considera que esto es parte de la experiencia — desconectarte es el plan.",
  },
];

const DIVE_SPOTS = [
  { name: "Punta Arena", depth: "5–18m", level: "Principiante", desc: "La bahía más protegida de la isla: coral de fuego, tortugas y peces loro en aguas muy cálidas." },
  { name: "El Jumbo", depth: "8–22m", level: "Intermedio", desc: "Formaciones coralinas imponentes con morenas, rayas guitarra y cardúmenes de pargos." },
  { name: "Los Mangles", depth: "2–8m", level: "Principiante", desc: "Snorkel y buceo en el mangle: caballitos de mar, pulpos y juveniles de peces tropicales entre raíces." },
  { name: "El Planchón", depth: "12–28m", level: "Avanzado", desc: "Plataforma rocosa con agregaciones de langosta espinosa y grandes barracudas. Espectacular." },
];

const GASTRO = [
  { dish: "Langosta a la Plancha", img: "/images/img-b707a6e7.jpg", desc: "Langosta espinosa del Caribe, capturada ese mismo día por pescadores locales. Servida a la plancha con mantequilla de ajo y limón.", tags: ["Fresco del día","Premium","Caribe"] },
  { dish: "Pargo Rojo al Coco", img: "/images/img-a0fe9562.jpg", desc: "Pargo entero cocinado en leche de coco con yuca, plátano maduro y hogao costeño. Plato de la abuela isleña.", tags: ["Artesanal","Coco","Tradición"] },
  { dish: "Ceviche de Camarón", img: "/images/img-6aa47b93.jpg", desc: "Camarones tigre marinados en limón con ají dulce, cilantro y leche de coco. Refrescante tras una mañana de buceo.", tags: ["Ligero","Fresco","Local"] },
  { dish: "Arroz con Calamares", img: "/images/img-ad10244c.jpg", desc: "Arroz negro cocinado en tinta de calamar con anillos de calamar y mariscos mixtos. Influencia de pescadores artesanales.", tags: ["Artesanal","Mariscos","Único"] },
];

export default async function IslaFuertePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  await getDictionary(lang as Locale);
  const isEs = lang === "es";
  const WA = isEs ? WA_ES : WA_EN;

  return (
    <main className={styles.page}>
      <Script id="ld-isla-fuerte" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className={styles.hero} style={{ backgroundImage: "url('/images/isla-fuerte-hero.webp')" }}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <div className={styles.heroCrumb}>
            <Link href={`/${lang}`}>{isEs ? "Inicio" : "Home"}</Link><span>/</span>
            <span>{isEs ? "Destinos" : "Destinations"}</span><span>/</span>
            <span>Isla Fuerte</span>
          </div>
          <div className={styles.heroTag}><MapPin size={14} />{isEs ? "San Antero, Córdoba · Caribe Colombiano" : "San Antero, Córdoba · Colombian Caribbean"}</div>
          <h1 className={styles.heroTitle}>{isEs ? "Buceo en Isla Fuerte, Córdoba — Colombia" : "Diving in Isla Fuerte, Córdoba — Colombia"}</h1>
          <p className={styles.heroSubtitle}>{isEs ? "La isla sin carros, sin ruido, sin masas. Arrecifes de coral en estado prístino, manglar, langosta fresca del día y una calma que no encontrarás en otra parte." : "The island with no cars, no noise, no crowds. Pristine coral reefs, mangrove, fresh lobster and a calm you won't find anywhere else."}</p>
          <div className={styles.heroStats}>
            <div className={styles.heroStat}><Thermometer size={16} /><span>29°C</span></div>
            <div className={styles.heroStat}><Eye size={16} /><span>15–25m {isEs ? "visibilidad" : "visibility"}</span></div>
            <div className={styles.heroStat}><Star size={16} /><span>{isEs ? "Sin carros" : "No cars"}</span></div>
            <div className={styles.heroStat}><Anchor size={16} /><span>{isEs ? "Coral virgen" : "Pristine coral"}</span></div>
          </div>
          <div className={styles.urgencyBadge}>
            ⚡ {isEs ? "Solo 8 cupos disponibles este fin de semana" : "Only 8 spots available this weekend"}
          </div>
          <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.heroCta}>
            {isEs ? "Reservar Isla Fuerte" : "Book Isla Fuerte"}<ChevronRight size={18} />
          </a>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <div className={styles.sectionBadge}><Anchor size={14} />{isEs ? "Buceo" : "Diving"}</div>
            <h2 className={styles.sectionTitle}>{isEs ? "Coral Intacto, Fauna Abundante" : "Intact Coral, Abundant Wildlife"}</h2>
            <p className={styles.sectionDesc}>{isEs ? "Isla Fuerte es uno de los pocos ecosistemas coralinos del Caribe colombiano que se mantiene en estado casi prístino gracias a su bajo tráfico turístico." : "Isla Fuerte is one of the few Colombian Caribbean coral ecosystems in nearly pristine condition thanks to its low tourist traffic."}</p>
          </div>
          <div className={styles.diveImgWrap}>
            <img src="/images/isla-fuerte-coral.webp" alt="Arrecife de coral virgen en Isla Fuerte, Caribe colombiano" className={styles.diveImg} />
            <div className={styles.diveImgOverlay}><span>{isEs ? "Coral en estado prístino · Temperatura 29°C todo el año" : "Pristine coral · 29°C water year-round"}</span></div>
          </div>
          <h2 className={styles.subSectionTitle}>{isEs ? "Sitios de Buceo" : "Dive Sites"}</h2>
          <div className={styles.spotsGrid}>
            {DIVE_SPOTS.map((s, i) => (
              <div key={i} className={styles.spotCard}>
                <div className={styles.spotHeader}>
                  <h3 className={styles.spotName}>{s.name}</h3>
                  <span className={`${styles.levelBadge} ${styles[`level_${s.level.toLowerCase()}`]}`}>{s.level}</span>
                </div>
                <div className={styles.spotDepth}><Waves size={14} />{s.depth}</div>
                <p className={styles.spotDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
          <h2 className={styles.subSectionTitle}>{isEs ? "El Plan Incluye" : "What's Included"}</h2>
          <div className={styles.infoBoxRow}>
            {[
              { icon: <CheckCircle2 size={18} className={styles.infoIcon} />, title: isEs ? "Sin masas turísticas" : "No tourist crowds", desc: isEs ? "Máximo 200 visitantes por día en toda la isla." : "Maximum 200 visitors per day on the whole island." },
              { icon: <Clock size={18} className={styles.infoIcon} />, title: isEs ? "Paquete fin de semana" : "Weekend package", desc: isEs ? "Viernes a domingo: lancha, posada y 4 inmersiones." : "Fri–Sun: boat, guesthouse and 4 dives." },
              { icon: <Anchor size={18} className={styles.infoIcon} />, title: isEs ? "Langosta incluida" : "Lobster included", desc: isEs ? "Nuestros paquetes incluyen cena de langosta del día." : "Our packages include a same-day lobster dinner." },
            ].map((b, i) => (
              <div key={i} className={styles.infoBox}>{b.icon}<div><strong>{b.title}</strong><p>{b.desc}</p></div></div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.heroCta}>
              {isEs ? "Consultar fechas disponibles" : "Check available dates"}<ChevronRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <div className={`${styles.sectionBadge} ${styles.badgeGold}`}><Utensils size={14} />{isEs ? "Gastronomía" : "Gastronomy"}</div>
            <h2 className={styles.sectionTitle}>{isEs ? "Del Mar a Tu Mesa" : "From the Sea to Your Table"}</h2>
            <p className={styles.sectionDesc}>{isEs ? "En Isla Fuerte, el menú lo dicta el mar ese mismo día. Langosta, pargo, camarón y calamar capturados por pescadores artesanales de la isla." : "In Isla Fuerte, the menu is set by the sea that same day. Lobster, snapper, shrimp and squid caught by local artisan fishermen."}</p>
          </div>
          <div className={styles.gastroGrid}>
            {GASTRO.map((item, i) => (
              <div key={i} className={styles.gastroCard}>
                <div className={styles.gastroImgWrap}><img src={item.img} alt={item.dish} className={styles.gastroImg} /></div>
                <div className={styles.gastroBody}>
                  <h3 className={styles.gastroDish}>{item.dish}</h3>
                  <p className={styles.gastroDesc}>{item.desc}</p>
                  <div className={styles.gastroTags}>{item.tags.map((t, j) => <span key={j} className={styles.gastroTag}>{t}</span>)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERFILES — ¿Para quién es este viaje? */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>{isEs ? "¿Para Quién Es Este Viaje?" : "Who Is This Trip For?"}</h2>
            <p className={styles.sectionDesc}>{isEs ? "Isla Fuerte funciona para todos — lo que cambia es el ritmo." : "Isla Fuerte works for everyone — what changes is the pace."}</p>
          </div>
          <div className={styles.profilesGrid}>
            {PROFILES.map((p, i) => (
              <div key={i} className={styles.profileCard} style={{ backgroundImage: `url('${p.img}')` }}>
                <div className={styles.profileCardOverlay} />
                <div className={styles.profileCardContent}>
                  <div className={styles.profileEmoji}>{p.emoji}</div>
                  <h3 className={styles.profileTitle}>{p.title}</h3>
                  <p className={styles.profileDesc}>{p.desc}</p>
                  <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.profileCta}>
                    {isEs ? "Este soy yo →" : "That's me →"}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>{isEs ? "Lo Que Dicen Quienes Fueron" : "What Past Divers Say"}</h2>
          </div>
          <div className={styles.testimonialsGrid}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className={styles.testimonialCard}>
                <p className={styles.testimonialText}>"{t.text}"</p>
                <div className={styles.testimonialAuthor}>
                  <img src={t.avatar} alt={t.name} className={styles.testimonialAvatar} />
                  <div>
                    <strong>{t.name} {t.country}</strong>
                    <span className={styles.testimonialTrip}>{t.trip}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CÓMO LLEGAR */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <div className={styles.sectionBadge}><Navigation size={14} />{isEs ? "Logística" : "Getting There"}</div>
            <h2 className={styles.sectionTitle}>{isEs ? "Cómo Llegar a Isla Fuerte" : "How to Get to Isla Fuerte"}</h2>
            <p className={styles.sectionDesc}>{isEs ? "Isla Fuerte no tiene aeropuerto ni carros. Eso es precisamente lo que la hace especial. Nosotros coordinamos toda la logística." : "Isla Fuerte has no airport and no cars. That's exactly what makes it special. We handle all the logistics."}</p>
          </div>
          <div className={styles.infoBoxRow}>
            {[
              { icon: <Ship size={18} className={styles.infoIcon} />, title: isEs ? "Desde Cartagena" : "From Cartagena", desc: isEs ? "Lancha rápida desde el muelle de Cartagena. Aprox. 3.5 horas. Salidas regulares viernes y sábado en la mañana." : "Fast boat from Cartagena dock. Approx. 3.5 hours. Regular departures Friday and Saturday mornings." },
              { icon: <Bus size={18} className={styles.infoIcon} />, title: isEs ? "Desde Montería / Moñitos" : "From Montería / Moñitos", desc: isEs ? "Bus Montería → Moñitos (2 hrs) + lancha a Isla Fuerte (40 min). Opción más económica desde el interior." : "Bus Montería → Moñitos (2 hrs) + boat to Isla Fuerte (40 min). Most affordable option from inland." },
              { icon: <Anchor size={18} className={styles.infoIcon} />, title: isEs ? "Nosotros lo coordinamos" : "We coordinate it all", desc: isEs ? "SIE DIVING organiza el transporte marítimo, hospedaje y buceo en un solo paquete. Solo trae tu maleta." : "SIE DIVING arranges the boat, accommodation and diving in one package. Just bring your bag." },
            ].map((b, i) => (
              <div key={i} className={styles.infoBox}>{b.icon}<div><strong>{b.title}</strong><p>{b.desc}</p></div></div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — ACORDEÓN */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle} style={{ textAlign: "center" }}>{isEs ? "Preguntas Frecuentes" : "Frequently Asked Questions"}</h2>
          </div>
          <FaqAccordion
            items={FAQS}
            ctaLabel={isEs ? "¿Otra pregunta? Escríbenos por WhatsApp" : "More questions? Write us on WhatsApp"}
            ctaHref={WA}
          />
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle} style={{ textAlign: "center", marginBottom: "2.5rem" }}>{isEs ? "Más Destinos" : "More Destinations"}</h2>
          <div className={styles.otherGrid}>
            <Link href={`/${lang}/destinos/santa-marta`} className={styles.otherCard} style={{ backgroundImage: "url('/Morena.jpg')" }}>
              <div className={styles.otherOverlay} />
              <div className={styles.otherBody}><span className={styles.otherTag}>Caribe</span><h3>Santa Marta</h3><p>{isEs ? "Taganga, corales y gastronomía costeña" : "Taganga, corals and coastal gastronomy"}</p></div>
            </Link>
            <Link href={`/${lang}/destinos/providencia`} className={styles.otherCard} style={{ backgroundImage: "url('/images/img-860a4676.jpg')" }}>
              <div className={styles.otherOverlay} />
              <div className={styles.otherBody}><span className={styles.otherTag}>UNESCO</span><h3>Providencia</h3><p>{isEs ? "El tercer mayor arrecife de barrera del mundo" : "The world's third largest barrier reef"}</p></div>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2>{isEs ? "¿Listo para Isla Fuerte?" : "Ready for Isla Fuerte?"}</h2>
          <p>{isEs ? "Sin carros, sin ruido. Solo mar, coral y langosta fresca." : "No cars, no noise. Just sea, coral and fresh lobster."}</p>
          <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.heroCta}>{isEs ? "Reservar por WhatsApp" : "Book via WhatsApp"}<ChevronRight size={18} /></a>
        </div>
      </section>
    </main>
  );
}
