import type { Metadata } from "next";
import styles from "./dest.module.css";
import Link from "next/link";
import { getDictionary, Locale } from "../../../../i18n";
import { MapPin, Thermometer, Eye, ChevronRight, Star, Anchor, Utensils, CheckCircle2, Waves, Clock, Fish } from "lucide-react";
import TestimonialsSection, { type Testimonial } from "../../../../components/TestimonialsSection";
import ProfilesSection, { type Profile } from "../../../../components/ProfilesSection";
import { generateHreflang } from "../../layout";

const SITE_URL = "https://siediving.com";
const PATH = "/destinos/providencia";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isEs = lang === "es";
  return {
    title: isEs
      ? "Buceo en Providencia, Colombia | Reserva UNESCO · SIE DIVING"
      : "Diving in Providencia, Colombia | UNESCO Reserve · SIE DIVING",
    description: isEs
      ? "Tercera barrera de arrecife más grande del mundo. Reserva de Biosfera UNESCO con 850+ especies marinas. Paquetes 3-4 días con hospedaje, inmersiones y gastronomía raizal."
      : "Third largest barrier reef in the world. UNESCO Biosphere Reserve with 850+ marine species. 3-4 day packages with accommodation, dives and raizal gastronomy.",
    alternates: {
      canonical: `${SITE_URL}/${lang}${PATH}`,
      languages: generateHreflang(PATH),
    },
    openGraph: {
      title: isEs ? "Buceo en Providencia · SIE DIVING" : "Diving in Providencia · SIE DIVING",
      description: isEs
        ? "El arrecife de barrera más espectacular del Caribe. Tiburones nodriza, mantas raya y cocina raizal única."
        : "The Caribbean's most spectacular barrier reef. Nurse sharks, manta rays and unique raizal cuisine.",
      url: `${SITE_URL}/${lang}${PATH}`,
      images: [{ url: `${SITE_URL}/images/img-04e5f555.jpg`, width: 1200, height: 630, alt: "Buceo en Providencia Colombia" }],
      type: "website",
    },
  };
}

const WHATSAPP = "573017836467";
const WA_ES = `https://wa.me/573017836467?text=${encodeURIComponent("Hola, quiero info sobre bucear en Providencia 🐠")}`;
const WA_EN = `https://wa.me/573017836467?text=${encodeURIComponent("Hi, info about diving in Providencia please 🐠")}`;

const TESTIMONIALS: Testimonial[] = [
  { text: "Providencia fue lo más impresionante que he buceado. Los tiburones nodriza y las mantas raya en el mismo día. Increíble.", name: "Andrés M.", country: "🇨🇴", trip: "Avanzado · Providencia", avatar: "/images/avatar-tomas.jpg" },
  { text: "La cultura raizal, el rondón y el arrecife — es un destino único en el mundo. SIE lo organizó todo perfecto.", name: "Claire D.", country: "🇫🇷", trip: "Intermedio · Providencia", avatar: "/images/avatar-sophie.jpg" },
  { text: "Nunca había visto tanta vida marina. Shark Dive fue épico. Vuelvo el año que viene sin duda.", name: "Juliana P.", country: "🇧🇷", trip: "Open Water · Providencia", avatar: "/images/avatar-mariana.jpg" },
];

const PROFILES: Profile[] = [
  {
    img: "/images/isla-fuerte-perfil-avanzado.jpg",
    emoji: "🦈",
    titleEs: "El buceador avanzado",
    titleEn: "The advanced diver",
    descEs: "Tiburones nodriza, mantas raya, paredes coralinas a 30m y buceo nocturno. Providencia te exige experiencia y te recompensa con algo que muy pocos han visto.",
    descEn: "Nurse sharks, manta rays, coral walls at 30m and night diving. Providencia demands experience and rewards you with something very few have seen.",
  },
  {
    img: "/images/isla-fuerte-perfil-desconectarse.jpg",
    emoji: "🌺",
    titleEs: "El que busca cultura y naturaleza",
    titleEn: "The culture & nature seeker",
    descEs: "UNESCO, rondón raizal, Old Providence. La isla tiene personalidad propia — no es solo buceo, es una experiencia cultural que te cambia.",
    descEn: "UNESCO, raizal rondón, Old Providence. The island has its own personality — it's not just diving, it's a cultural experience that changes you.",
  },
  {
    img: "/images/isla-fuerte-perfil-certificarse.jpg",
    emoji: "🤿",
    titleEs: "El que quiere su primer gran viaje de buceo",
    titleEn: "The one who wants their first big dive trip",
    descEs: "Si ya tienes Open Water y quieres tu primer destino de ensueño, Providencia es el lugar. Aguas cálidas, vida marina increíble y guías expertos.",
    descEn: "If you already have Open Water and want your first dream destination, Providencia is the place. Warm waters, incredible marine life and expert guides.",
  },
];

const DIVE_SPOTS = [
  { name: "Third Encounter", depth: "10–30m", level: "Intermedio", desc: "Paredes verticales de coral y cardúmenes masivos de barracudas. Uno de los 10 mejores del Caribe." },
  { name: "Manta's Place", depth: "8–20m", level: "Principiante", desc: "Zona de encuentro con mantas raya y tiburones nodriza que descansan en el fondo arenoso." },
  { name: "Shark Dive", depth: "15–25m", level: "Intermedio", desc: "Inmersión guiada con tiburones grises de arrecife en su entorno natural. 100% segura." },
];

const GASTRO = [
  { dish: "Rondón", img: "/images/rondon.png", desc: "El plato insignia de Providencia: caracol, cangrejo y ñame cocidos en leche de coco. Patrimonio Cultural UNESCO.", tags: ["Patrimonio","Caribe","Coco"] },
  { dish: "Cangrejo Negro", img: "/images/cangrejo_negro.png", desc: "Especie endémica de la isla, preparada al vapor o en sopa de coco. Una delicia que solo existe aquí.", tags: ["Endémico","Sostenible","Único"] },
  { dish: "Ceviche de Caracol", img: "/images/ceviche_caracol.png", desc: "Caracola reina marinada en limón con ají chombo local, cebolla cabezona y tomates frescos.", tags: ["Fresco","Picante","Local"] },
  { dish: "Paté de Ackee", img: "/images/ackee_saltfish.png", desc: "Fruta ackee sofrita con bacalao salado. Un desayuno típico de la cultura raizal anglófona.", tags: ["Raizal","Afro-Caribe","Tradicional"] },
];

export default async function ProvidenciaPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  await getDictionary(lang as Locale);
  const isEs = lang === "es";
  const WA = isEs ? WA_ES : WA_EN;

  return (
    <main className={styles.page}>
      <section className={styles.hero} style={{ backgroundImage: "url('/images/img-04e5f555.jpg')" }}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <div className={styles.heroCrumb}>
            <Link href={`/${lang}`}>{isEs ? "Inicio" : "Home"}</Link><span>/</span>
            <span>{isEs ? "Destinos" : "Destinations"}</span><span>/</span>
            <span>Providencia</span>
          </div>
          <div className={styles.heroTag}><MapPin size={14} />{isEs ? "Caribe · Reserva UNESCO" : "Caribbean · UNESCO Reserve"}</div>
          <h1 className={styles.heroTitle}>{isEs ? "Providencia: El Paraíso Virgen" : "Providencia: Untouched Paradise"}</h1>
          <p className={styles.heroSubtitle}>{isEs ? "El tercer arrecife de barrera más grande del mundo y una cultura raizal única. Aquí la naturaleza y la gastronomía te sorprenderán." : "The world's third largest barrier reef. Nature and gastronomy will astonish you."}</p>
          <div className={styles.heroStats}>
            <div className={styles.heroStat}><Thermometer size={16} /><span>27°C</span></div>
            <div className={styles.heroStat}><Eye size={16} /><span>20–30m {isEs ? "visibilidad" : "visibility"}</span></div>
            <div className={styles.heroStat}><Fish size={16} /><span>850+ {isEs ? "especies" : "species"}</span></div>
            <div className={styles.heroStat}><Star size={16} /><span>{isEs ? "Intermedio" : "Intermediate"}</span></div>
          </div>
          <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.heroCta}>
            {isEs ? "Reservar Providencia" : "Book Providencia"}<ChevronRight size={18} />
          </a>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <div className={styles.sectionBadge}><Anchor size={14} />{isEs ? "Buceo" : "Diving"}</div>
            <h2 className={styles.sectionTitle}>{isEs ? "El Mejor Arrecife del Caribe" : "The Caribbean's Best Reef"}</h2>
            <p className={styles.sectionDesc}>{isEs ? "Reserva de Biosfera UNESCO. El arrecife de barrera de Providencia concentra la mayor biodiversidad del Caribe occidental." : "UNESCO Biosphere Reserve. The barrier reef hosts the highest marine biodiversity in the western Caribbean."}</p>
          </div>
          <div className={styles.diveImgWrap} style={{ height: "auto", aspectRatio: "16/9" }}>
            <iframe 
              src="https://www.youtube.com/embed/4NzoEjkW3Kc?autoplay=1&mute=1&loop=1&playlist=4NzoEjkW3Kc" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
              style={{ width: "100%", height: "100%", borderRadius: "20px" }}
            ></iframe>
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
              { icon: <CheckCircle2 size={18} className={styles.infoIcon} />, title: isEs ? "Hospedaje + Buceo incluido" : "Accommodation + Diving included", desc: isEs ? "Alojamiento en acomodación múltiple e inmersiones coordinadas en un solo paquete (Incluye Desayuno)." : "Multiple accommodation and coordinated dives in one package (Breakfast included)." },
              { icon: <Clock size={18} className={styles.infoIcon} />, title: isEs ? "Paquetes de 3 o 4 días" : "3 or 4-day packages", desc: isEs ? "A convenir dependiendo de la cantidad de aventuras a diseñar (Si eres Advance bucearemos de noche)." : "To be agreed depending on the adventures you want to design (Advanced divers dive at night)." },
              { icon: <Anchor size={18} className={styles.infoIcon} />, title: isEs ? "Área Protegida" : "Protected Area", desc: isEs ? "Bucearemos en Parque Nacional Natural Old Providence McBean Lagoon, el cual forma parte de la gran Reserva de la Biósfera Seaflower." : "We dive in the Old Providence McBean Lagoon National Natural Park, part of the Seaflower Biosphere Reserve." },
            ].map((b, i) => (
              <div key={i} className={styles.infoBox}>{b.icon}<div><strong>{b.title}</strong><p>{b.desc}</p></div></div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <div className={`${styles.sectionBadge} ${styles.badgeGold}`}><Utensils size={14} />{isEs ? "Gastronomía Raizal" : "Raizal Gastronomy"}</div>
            <h2 className={styles.sectionTitle}>{isEs ? "Sabores Únicos en el Mundo" : "Flavors Unique in the World"}</h2>
            <p className={styles.sectionDesc}>{isEs ? "La cocina raizal de Providencia es Patrimonio Cultural. Una fusión de África, el Caribe y Colombia que no encontrarás en ningún otro lugar." : "Raizal cuisine is Cultural Heritage of Colombia — a fusion of Africa, Caribbean and Colombia found nowhere else."}</p>
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

      <ProfilesSection profiles={PROFILES} isEs={isEs} waLink={WA} />
      <TestimonialsSection testimonials={TESTIMONIALS} isEs={isEs} />

      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle} style={{ textAlign: "center", marginBottom: "2.5rem" }}>{isEs ? "Más Destinos" : "More Destinations"}</h2>
          <div className={styles.otherGrid}>
            <Link href={`/${lang}/destinos/santa-marta`} className={styles.otherCard} style={{ backgroundImage: "url('/Morena.jpg')" }}>
              <div className={styles.otherOverlay} />
              <div className={styles.otherBody}><span className={styles.otherTag}>Caribe</span><h3>Santa Marta</h3><p>{isEs ? "Taganga, corales y gastronomía costeña" : "Taganga, corals and coastal gastronomy"}</p></div>
            </Link>
            <Link href={`/${lang}/destinos/isla-fuerte`} className={styles.otherCard} style={{ backgroundImage: "url('/images/img-9a1071ef.jpg')" }}>
              <div className={styles.otherOverlay} />
              <div className={styles.otherBody}><span className={styles.otherTag}>Caribe</span><h3>Isla Fuerte</h3><p>{isEs ? "Manglar, langosta y coral virgen" : "Mangrove, lobster and pristine coral"}</p></div>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2>{isEs ? "¿Listo para descubrir Providencia?" : "Ready to discover Providencia?"}</h2>
          <p>{isEs ? "Pocos viajeros conocen esta joya. Cupos muy limitados." : "Few travelers know this gem. Very limited spots."}</p>
          <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.heroCta}>{isEs ? "Reservar por WhatsApp" : "Book via WhatsApp"}<ChevronRight size={18} /></a>
        </div>
      </section>
    </main>
  );
}
