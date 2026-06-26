import type { Metadata } from "next";
import styles from "../providencia/dest.module.css";
import Link from "next/link";
import { getDictionary, Locale } from "../../../../i18n";
import { generateHreflang } from "../../layout";
import TestimonialsSection, { type Testimonial } from "../../../../components/TestimonialsSection";
import ProfilesSection, { type Profile } from "../../../../components/ProfilesSection";
import {
  MapPin, Thermometer, Eye, ChevronRight, Anchor,
  CheckCircle2, Waves, Clock, Fish, Navigation, Leaf,
  Calendar, Users, ShieldCheck, Ship
} from "lucide-react";

const SITE_URL = "https://siediving.com";
const PATH = "/destinos/gorgona";

export async function generateMetadata(
  { params }: { params: Promise<{ lang: string }> }
): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: lang === "es"
      ? "Gorgona: Expedición Vida a Bordo | Ballenas y Buceo en el Pacífico · SIE DIVING"
      : "Gorgona Liveaboard Expedition | Whales & Diving in the Pacific · SIE DIVING",
    description: lang === "es"
      ? "Expedición vida a bordo en Gorgona. Barco SeaWolf. Ballenas jorobadas, tiburones y corales del Pacífico colombiano. Reserva Natural Nacional."
      : "Liveaboard expedition to Gorgona. SeaWolf vessel. Humpback whales, sharks and Pacific corals. Colombian National Natural Reserve.",
    alternates: {
      canonical: `${SITE_URL}/${lang}${PATH}`,
      languages: generateHreflang(PATH),
    },
  };
}


const WA_ES = `https://wa.me/573017836467?text=${encodeURIComponent("Hola, quiero información sobre la expedición vida a bordo en Gorgona 🐳")}`;
const WA_EN = `https://wa.me/573017836467?text=${encodeURIComponent("Hi, info about the Gorgona liveaboard expedition please 🐳")}`;

const TESTIMONIALS: Testimonial[] = [
  { text: "Ver ballenas jorobadas desde el barco al amanecer y luego bucear con tiburones martillo fue un sueño hecho realidad.", name: "Carlos V.", country: "🇨🇴", trip: "Liveaboard · Gorgona 2025", avatar: "/images/avatar-tomas.jpg" },
  { text: "Gorgona es de otro planeta. La biodiversidad del Pacífico no tiene comparación. SIE organizó todo impecablemente.", name: "Lena M.", country: "🇩🇪", trip: "Advanced · Gorgona", avatar: "/images/avatar-sophie.jpg" },
  { text: "El avistamiento de ballenas desde el barco mientras el sol salía sobre el Pacífico — eso no se olvida.", name: "Ricardo O.", country: "🇨🇴", trip: "Expedición · Gorgona 2024", avatar: "/images/avatar-mariana.jpg" },
];

const PROFILES: Profile[] = [
  {
    img: "/images/isla-fuerte-perfil-avanzado.jpg",
    emoji: "🦈",
    titleEs: "El buceador avanzado que quiere más",
    titleEn: "The advanced diver who wants more",
    descEs: "Tiburones martillo en cardúmenes de cientos, tortugas, pelágicos y aguas del Pacífico profundo. Gorgona no es para principiantes — es para los que ya tienen historia bajo el agua.",
    descEn: "Hammerhead sharks in schools of hundreds, turtles, pelagics and deep Pacific waters. Gorgona is not for beginners — it's for those who already have a story underwater.",
  },
  {
    img: "/images/isla-fuerte-perfil-desconectarse.jpg",
    emoji: "🐳",
    titleEs: "El amante de la naturaleza extrema",
    titleEn: "The extreme nature lover",
    descEs: "Ballenas jorobadas en agosto, delfines, tiburones ballena de paso. En Gorgona la naturaleza es el espectáculo — tanto en la superficie como debajo.",
    descEn: "Humpback whales in August, dolphins, passing whale sharks. In Gorgona nature is the spectacle — both above and below the surface.",
  },
  {
    img: "/images/isla-fuerte-perfil-certificarse.jpg",
    emoji: "⚓",
    titleEs: "El que sueña con un liveaboard",
    titleEn: "The one who dreams of a liveaboard",
    descEs: "Dormir en el barco, amanecer en el mar y bucear 4 veces al día. La expedición Gorgona en el SeaWolf es tu primer liveaboard soñado.",
    descEn: "Sleep on the boat, wake up at sea and dive 4 times a day. The Gorgona expedition on the SeaWolf is your dream first liveaboard.",
  },
];

const DIVE_SPOTS = [
  {
    name: "La Tiburonera",
    depth: "5–20m",
    level: "Principiante",
    desc: "Zona de limpieza icónica de Gorgona. Decenas de tiburones nodriza descansan en el fondo de arena. Impresionante para fotografía submarina.",
  },
  {
    name: "La Catedral",
    depth: "8–18m",
    level: "Principiante",
    desc: "Formación de roca basáltica volcánica que crea una gruta submarina habitada por morenas gigantes y peces scorpion camuflados.",
  },
  {
    name: "El Planchón",
    depth: "12–30m",
    level: "Intermedio",
    desc: "El sitio estrella. Meseta rocosa cubierta de coral donde confluyen mantas, tiburones ballena y enormes cardúmenes de peces loro.",
  },
  {
    name: "Bajo Tiburón",
    depth: "20–35m",
    level: "Avanzado",
    desc: "Pináculo submarino frecuentado por tiburones de punta blanca oceánica, especialmente en temporada de ballenas jorobadas.",
  },
];



const PRECIOS = [
  { tipo: "Múltiple Lower Deck", precio: "$4'290.000", tag: "Más popular" },
  { tipo: "Doble Lower Deck", precio: "$4'390.000", tag: "" },
  { tipo: "Múltiple Upper Deck", precio: "$4'390.000", tag: "" },
  { tipo: "Doble Upper Deck", precio: "$4'490.000", tag: "Premium" },
];

export default async function GorgonaPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  await getDictionary(lang as Locale);
  const isEs = lang === "es";
  const WA = isEs ? WA_ES : WA_EN;

  return (
    <main className={styles.page}>
      {/* ── HERO ── */}
      <section
        className={styles.hero}
        style={{
          backgroundImage:
            "url('/images/img-7a48a693.jpg')",
        }}
      >
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <div className={styles.heroCrumb}>
            <Link href={`/${lang}`}>{isEs ? "Inicio" : "Home"}</Link>
            <span>/</span>
            <span>{isEs ? "Destinos" : "Destinations"}</span>
            <span>/</span>
            <span>Gorgona</span>
          </div>
          <div className={styles.heroTag}>
            <Ship size={14} />
            {isEs ? "SeaWolf · Liveaboard" : "SeaWolf · Liveaboard"}
          </div>
          <h1 className={styles.heroTitle}>
            {isEs ? "Gorgona: La Isla Ciencia" : "Gorgona: The Science Island"}
          </h1>
          <p className={styles.heroSubtitle}>
            {isEs
              ? "Temporada de ballenas jorobadas de Julio a Noviembre. Una isla remota en el Pacífico colombiano, solo accesible en expedición vida a bordo del SeaWolf."
              : "Humpback whale season from July to November. A remote island in the Colombian Pacific, only accessible on a liveaboard expedition aboard the SeaWolf."}
          </p>
          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <Calendar size={16} />
              <span>{isEs ? "Julio – Noviembre" : "July – November"}</span>
            </div>
            <div className={styles.heroStat}>
              <Users size={16} />
              <span>{isEs ? "Cupos limitados" : "Limited spots"}</span>
            </div>
            <div className={styles.heroStat}>
              <Navigation size={16} />
              <span>{isEs ? "Vida a Bordo" : "Liveaboard"}</span>
            </div>
            <div className={styles.heroStat}>
              <Fish size={16} />
              <span>{isEs ? "Ballenas + Tiburones" : "Whales + Sharks"}</span>
            </div>
          </div>
          <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.heroCta}>
            {isEs ? "Reservar Expedición" : "Book Expedition"}
            <ChevronRight size={18} />
          </a>
        </div>
      </section>

      {/* ── DESCRIPCIÓN ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <div className={styles.sectionBadge}>
              <Anchor size={14} />
              {isEs ? "La Expedición" : "The Expedition"}
            </div>
            <h2 className={styles.sectionTitle}>
              {isEs ? "Embarcación SeaWolf · Temporada de Ballenas" : "SeaWolf Vessel · Whale Season"}
            </h2>
            <p className={styles.sectionDesc}>
              {isEs
                ? "Explora la maravilla oculta de Gorgona, a 56 km de la costa del Pacífico colombiano. Reserva Natural Nacional con biodiversidad excepcional. Buceo en los mejores sitios de la isla junto a tiburones, morenas, ballenas jorobadas y cardúmenes de todos los colores."
                : "Explore the hidden wonder of Gorgona, 56 km off the Colombian Pacific coast. A National Natural Reserve with exceptional biodiversity. Dive the island's best spots alongside sharks, eels, humpback whales and colorful schools of fish."}
            </p>
          </div>

          <div className={styles.diveImgWrap}>
            <img
              src="/images/img-38ae7bf1.jpg"
              alt="Ballenas jorobadas Gorgona Pacífico"
              className={styles.diveImg}
              style={{ objectPosition: "center 30%" }}
            />
            <div className={styles.diveImgOverlay}>
              <span>
                {isEs
                  ? "Parque Nacional · Temporada ballenas julio–octubre"
                  : "National Park · Whale season July–October"}
              </span>
            </div>
          </div>

          <div className={styles.spotsGrid}>
            {DIVE_SPOTS.map((s, i) => (
              <div key={i} className={styles.spotCard}>
                <div className={styles.spotHeader}>
                  <h3 className={styles.spotName}>{s.name}</h3>
                  <span className={`${styles.levelBadge} ${styles[`level_${s.level.toLowerCase()}`]}`}>
                    {s.level}
                  </span>
                </div>
                <div className={styles.spotDepth}>
                  <Waves size={14} />
                  {s.depth}
                </div>
                <p className={styles.spotDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INFO EXPEDICIÓN ── */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <div className={`${styles.sectionBadge} ${styles.badgeGold}`}>
              <Calendar size={14} />
              {isEs ? "Información de la Expedición" : "Expedition Info"}
            </div>
            <h2 className={styles.sectionTitle}>
              {isEs ? "Detalles del Plan" : "Plan Details"}
            </h2>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginTop: "2rem" }}>
            {/* Box 1 */}
            <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: "12px", padding: "2rem", border: "1px solid rgba(255,255,255,0.1)" }}>
              <h3 style={{ color: "var(--color-primary)", marginBottom: "1rem", fontSize: "1.2rem" }}>🌊 ISLA GORGONA</h3>
              <p style={{ color: "var(--color-text-muted)", marginBottom: "1.5rem" }}>
                {isEs ? "Paraíso del Pacífico Colombiano ✨" : "Colombian Pacific Paradise ✨"}
              </p>
              <ul style={{ listStyle: "none", padding: 0, color: "var(--color-text-muted)", display: "flex", flexDirection: "column", gap: "1rem" }}>
                <li style={{ display: "flex", gap: "0.75rem" }}>🐋 <span>{isEs ? "Vida a bordo en el barco SEA WOLF" : "Liveaboard on SEA WOLF"}</span></li>
                <li style={{ display: "flex", gap: "0.75rem" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <span style={{ fontWeight: "bold" }}>{isEs ? "PRÓXIMAS SALIDAS 2026:" : "UPCOMING DEPARTURES 2026:"}</span>
                    <span style={{ display: "flex", gap: "0.5rem" }}>📅 {isEs ? "OCTUBRE | 23 al 27" : "OCTOBER | 23 to 27"}</span>
                    <span style={{ display: "flex", gap: "0.5rem" }}>📅 {isEs ? "DICIEMBRE | 04 al 08" : "DECEMBER | 04 to 08"}</span>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Box 2 */}
            <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: "12px", padding: "2rem", border: "1px solid rgba(255,255,255,0.1)" }}>
              <h3 style={{ color: "var(--color-primary)", marginBottom: "1.5rem", fontSize: "1.2rem" }}>✅ {isEs ? "EL PLAN INCLUYE" : "THE PLAN INCLUDES"}</h3>
              <ul style={{ listStyle: "none", padding: 0, color: "var(--color-text-muted)", display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.9rem" }}>
                <li style={{ display: "flex", gap: "0.5rem" }}>🚤 <span>{isEs ? "Transporte Buenaventura – Gorgona – Buenaventura" : "Transport Buenaventura – Gorgona – Buenaventura"}</span></li>
                <li style={{ display: "flex", gap: "0.5rem" }}>🏨 <span>{isEs ? "Alojamiento 4 días / 4 noches a bordo del Sea Wolf" : "4 days / 4 nights accommodation on Sea Wolf"}</span></li>
                <li style={{ display: "flex", gap: "0.5rem" }}>🍽️ <span>{isEs ? "Alimentación completa (desayuno, almuerzo y cena)" : "Full meals (breakfast, lunch, dinner)"}</span></li>
                <li style={{ display: "flex", gap: "0.5rem" }}>🥤 <span>{isEs ? "Refrigerios entre inmersiones" : "Snacks between dives"}</span></li>
                <li style={{ display: "flex", gap: "0.5rem" }}>🏝️ <span>{isEs ? "Impuesto de entrada al PNN Isla Gorgona" : "Gorgona NNP entrance tax"}</span></li>
                <li style={{ display: "flex", gap: "0.5rem" }}>🤿 <span>{isEs ? "3 inmersiones diurnas por día" : "3 daytime dives per day"}</span></li>
                <li style={{ display: "flex", gap: "0.5rem" }}>🌙 <span>{isEs ? "2 inmersiones nocturnas (para buzos con certificación avanzada)" : "2 night dives (for advanced certified divers)"}</span></li>
                <li style={{ display: "flex", gap: "0.5rem" }}>🗺️ <span>{isEs ? "Traslado a los sitios de buceo" : "Transfer to dive sites"}</span></li>
                <li style={{ display: "flex", gap: "0.5rem" }}>⚓ <span>{isEs ? "Servicio de bote" : "Boat service"}</span></li>
                <li style={{ display: "flex", gap: "0.5rem" }}>🧯 <span>{isEs ? "Tanque con aire y lastre" : "Tank with air and weights"}</span></li>
                <li style={{ display: "flex", gap: "0.5rem" }}>🧑‍🏫 <span>{isEs ? "Guía / Instructor de buceo" : "Dive Guide / Instructor"}</span></li>
                <li style={{ display: "flex", gap: "0.5rem" }}>🛡️ <span>{isEs ? "Seguro de buceo incluido" : "Dive insurance included"}</span></li>
              </ul>
            </div>

            {/* Box 3 */}
            <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: "12px", padding: "2rem", border: "1px solid rgba(255,255,255,0.1)" }}>
              <h3 style={{ color: "#ff7070", marginBottom: "1.5rem", fontSize: "1.2rem" }}>❌ {isEs ? "NO INCLUYE" : "NOT INCLUDED"}</h3>
              <ul style={{ listStyle: "none", padding: 0, color: "var(--color-text-muted)", display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.9rem" }}>
                <li style={{ display: "flex", gap: "0.5rem" }}>🚐 <span>{isEs ? "Transporte Cali – Buenaventura – Cali" : "Transport Cali – Buenaventura – Cali"}</span></li>
                <li style={{ display: "flex", gap: "0.5rem" }}>🦺 <span>{isEs ? "Alquiler de chaleco hidrostático y regulador" : "BCD and regulator rental"}</span></li>
                <li style={{ display: "flex", gap: "0.5rem" }}>🥽 <span>{isEs ? "Alquiler de traje de buceo" : "Wetsuit rental"}</span></li>
                <li style={{ display: "flex", gap: "0.5rem" }}>🔦 <span>{isEs ? "Alquiler de linterna y baterías" : "Flashlight and battery rental"}</span></li>
                <li style={{ display: "flex", gap: "0.5rem" }}>💰 <span>{isEs ? "Propinas" : "Tips"}</span></li>
                <li style={{ display: "flex", gap: "0.5rem" }}>📄 <span>{isEs ? "Servicios no especificados en el programa" : "Services not specified in the program"}</span></li>
              </ul>
            </div>
          </div>
          
          <div style={{ marginTop: "3rem", padding: "2rem", background: "rgba(255,255,255,0.02)", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.05)" }}>
            <h3 style={{ color: "var(--color-primary)", marginBottom: "1rem", fontSize: "1.1rem" }}>📜 {isEs ? "POLÍTICA DE CANCELACIÓN Y REEMBOLSO" : "CANCELLATION AND REFUND POLICY"}</h3>
            <ul style={{ color: "var(--color-text-muted)", paddingLeft: "1.2rem", display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.9rem" }}>
              <li>{isEs ? "Cancelación con 60 a 90 días de antelación → penalidad del 50%" : "Cancellation 60-90 days in advance → 50% penalty"}</li>
              <li>{isEs ? "Cancelación con 30 a 60 días de antelación → penalidad del 70%" : "Cancellation 30-60 days in advance → 70% penalty"}</li>
              <li>{isEs ? "No hay reembolso con cancelaciones a menos de 30 días del viaje." : "No refund for cancellations less than 30 days before the trip."}</li>
              <li>{isEs ? "En casos médicos comprobables, se podrá otorgar nota de crédito o devolución parcial, descontando gastos bancarios y penalidades del operador." : "In verifiable medical cases, a credit note or partial refund may be granted, deducting bank charges and operator penalties."}</li>
              <li>{isEs ? "No se reembolsa dinero por causas de fuerza mayor, clima o cancelaciones de aerolíneas." : "No refunds for force majeure, weather, or airline cancellations."}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── PRECIOS ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <div className={styles.sectionBadge}>
              <Ship size={14} />
              {isEs ? "Acomodación a Bordo" : "On-board Accommodation"}
            </div>
            <h2 className={styles.sectionTitle}>
              {isEs ? "Precios IVA Incluido" : "All-inclusive Prices (Tax Included)"}
            </h2>
            <p className={styles.sectionDesc}>
              {isEs
                ? "Plan de pagos en 4 cuotas del 25% c/u. Primer pago para separar cupo. Extranjeros pagan $300.000 COP adicional."
                : "4-installment payment plan at 25% each. First payment to reserve your spot. Foreigners pay an additional $300,000 COP."}
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
            {PRECIOS.map((p, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.04)", borderRadius: "12px",
                padding: "2rem 1.5rem", textAlign: "center",
                border: p.tag ? "2px solid var(--color-primary)" : "1px solid rgba(255,255,255,0.1)",
                position: "relative", overflow: "hidden"
              }}>
                {p.tag && (
                  <span style={{
                    position: "absolute", top: "12px", right: "12px",
                    background: "var(--color-primary)", color: "black",
                    fontSize: "0.7rem", fontWeight: "bold", padding: "0.2rem 0.5rem",
                    borderRadius: "20px"
                  }}>{p.tag}</span>
                )}
                <div style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", marginBottom: "0.75rem" }}>{p.tipo}</div>
                <div style={{ color: "var(--color-primary)", fontSize: "1.7rem", fontWeight: "bold", marginBottom: "0.5rem" }}>{p.precio}</div>
                <div style={{ color: "var(--color-text-muted)", fontSize: "0.8rem" }}>COP · IVA incluido</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.heroCta}>
              {isEs ? "Reservar mi Cupo" : "Book My Spot"}
              <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ── PRECIOS SECTION CONTINUES ── */}

      <ProfilesSection profiles={PROFILES} isEs={isEs} waLink={WA} />
      <TestimonialsSection testimonials={TESTIMONIALS} isEs={isEs} />

      {/* ── MÁS DESTINOS ── */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle} style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            {isEs ? "Más Destinos" : "More Destinations"}
          </h2>
          <div className={styles.otherGrid}>
            <Link href={`/${lang}/destinos/malpelo`} className={styles.otherCard}
              style={{ backgroundImage: "url('/images/img-239db711.jpg')" }}>
              <div className={styles.otherOverlay} />
              <div className={styles.otherBody}>
                <span className={styles.otherTag}>Pacífico</span>
                <h3>Malpelo</h3>
                <p>{isEs ? "La roca viviente · Tiburones martillo" : "The living rock · Hammerhead sharks"}</p>
              </div>
            </Link>
            <Link href={`/${lang}/destinos/providencia`} className={styles.otherCard}
              style={{ backgroundImage: "url('/images/img-860a4676.jpg')" }}>
              <div className={styles.otherOverlay} />
              <div className={styles.otherBody}>
                <span className={styles.otherTag}>Caribe</span>
                <h3>Providencia</h3>
                <p>{isEs ? "Reserva UNESCO · Arrecife de barrera" : "UNESCO Reserve · Barrier reef"}</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2>{isEs ? "¡Cupos muy limitados!" : "Very Limited Spots!"}</h2>
          <p>{isEs ? "Embarcación SeaWolf · Temporada de ballenas jorobadas de Julio a Noviembre en el Pacífico colombiano." : "SeaWolf vessel · Humpback whale season from July to November in the Colombian Pacific."}</p>
          <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.heroCta}>
            {isEs ? "Reservar mi Cupo Ahora" : "Book My Spot Now"}
            <ChevronRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}
