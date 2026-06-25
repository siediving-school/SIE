import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ChevronRight, ArrowLeft, ShoppingCart, Award, Shield, Activity } from "lucide-react";
import { getDictionary, Locale } from "../../../../../i18n";
import { products } from "../../../../../data/products";
import styles from "./product.module.css";

const LANGS = ["es", "en", "fr", "de", "ja", "zh"] as const;

export async function generateStaticParams() {
  return LANGS.flatMap((lang) =>
    products.map((product) => ({
      lang,
      categoria: product.category,
      id: product.id,
    }))
  );
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; categoria: string; id: string }> }) {
  const { lang, categoria, id } = await params;
  const isEs = lang === "es";
  const product = products.find((p) => p.id === id && p.category === categoria);

  if (!product) {
    return {
      title: isEs ? "Producto no encontrado" : "Product Not Found",
    };
  }

  const title = isEs
    ? `${product.name} | Tienda de Buceo SIE DIVING`
    : `${product.name} | SIE DIVING Dive Shop`;
  const description = isEs
    ? `${product.description} Compra equipamiento de buceo profesional con SIE DIVING. Envío y cotización por WhatsApp.`
    : `${product.description} Buy professional scuba gear with SIE DIVING. Shipping and quote via WhatsApp.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: product.image,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ lang: string; categoria: string; id: string }>;
}) {
  const { lang, categoria, id } = await params;
  const isEs = lang === "es";
  const dict = await getDictionary(lang as Locale);

  const product = products.find((p) => p.id === id && p.category === categoria);

  if (!product) {
    notFound();
  }

  // Localized title & short desc
  const title = product.name;
  const shortDesc = product.description;

  // Localized in-depth fields with fallbacks
  const longDescription = isEs 
    ? product.longDescription || product.description
    : product.longDescriptionEn || product.longDescription || product.description;

  const featuresList = isEs 
    ? product.features || []
    : product.featuresEn || product.features || [];

  const benefitsList = isEs 
    ? product.benefits || []
    : product.benefitsEn || product.benefits || [];

  const specsMap = isEs 
    ? product.specs || {}
    : product.specsEn || product.specs || {};

  // Formulate WhatsApp quote link
  const waText = isEs
    ? `Hola, quiero cotizar el producto: ${product.name} de la marca ${product.brand}`
    : `Hi, I want a quote for: ${product.name} by ${product.brand}`;
  const waUrl = `https://wa.me/573017836467?text=${encodeURIComponent(waText)}`;

  // Breadcrumbs category title translation
  const categoryTitles: Record<string, string> = {
    "reguladores": dict.shop?.regulators || "Reguladores",
    "bcd": dict.shop?.bcd || "Chalecos (BCD)",
    "mascaras": dict.shop?.masks || "Máscaras",
    "aletas": dict.shop?.fins || "Aletas",
    "computadores": dict.shop?.computers || "Computadores",
    "trajes-neopreno": dict.shop?.wetsuits || "Trajes de Neopreno",
    "accesorios": dict.shop?.accessories || "Accesorios",
  };
  const categoryTitle = categoryTitles[categoria] || categoria.toUpperCase();

  // Highlight icons
  const icons = [
    <Award key="award" size={32} className={styles.highlightIcon} />,
    <Shield key="shield" size={32} className={styles.highlightIcon} />,
    <Activity key="activity" size={32} className={styles.highlightIcon} />
  ];

  // Default fallbacks for non-detailed products
  const hasDetails = !!product.longDescription;
  
  const finalLongDescription = hasDetails ? longDescription : (
    isEs
      ? `El ${product.name} de la prestigiosa marca ${product.brand} está diseñado para ofrecer un excelente desempeño en tus aventuras submarinas. Fabricado con los más altos estándares de calidad, este producto garantiza una experiencia óptima bajo el agua, brindando la comodidad, seguridad y resistencia que exigen los buceadores en el Caribe y el Pacífico colombiano.`
      : `The ${product.name} by the renowned brand ${product.brand} is engineered to deliver outstanding performance on your underwater adventures. Built to the highest standards, it ensures an optimal experience, providing the safety, comfort, and reliability demanded by divers in both the Caribbean and Pacific oceans.`
  );

  const finalBenefits = benefitsList.length > 0 ? benefitsList : [
    {
      title: isEs ? "Garantía Oficial" : "Official Warranty",
      desc: isEs ? "Respaldo directo del fabricante y revisiones autorizadas en SIE DIVING." : "Direct manufacturer support and authorized servicing at SIE DIVING."
    },
    {
      title: isEs ? "Soporte Experto" : "Expert Support",
      desc: isEs ? "Asesoramiento por instructores PADI para elegir el tamaño y configuración perfectos." : "Guidance by certified PADI instructors to choose the perfect size and setup."
    },
    {
      title: isEs ? "Buceo Seguro" : "Safe Diving",
      desc: isEs ? "Todos los equipos se entregan revisados y probados para su uso inmediato." : "All gear is fully inspected and pressure-tested before delivery."
    }
  ];

  const finalSpecs = Object.keys(specsMap).length > 0 ? specsMap : {
    [isEs ? "Marca" : "Brand"]: product.brand,
    [isEs ? "Categoría" : "Category"]: categoryTitle,
    [isEs ? "Disponibilidad" : "Availability"]: isEs ? "Bajo pedido / Cotización" : "On request / Quote",
    [isEs ? "Origen" : "Origin"]: isEs ? "Distribuidor Autorizado" : "Authorized Dealer"
  };

  return (
    <main className={styles.pageWrapper}>
      {/* Breadcrumbs */}
      <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
        <Link href={`/${lang}`}>{isEs ? "Inicio" : "Home"}</Link>
        <ChevronRight size={14} />
        <Link href={`/${lang}/tienda`}>{isEs ? "Tienda" : "Shop"}</Link>
        <ChevronRight size={14} />
        <Link href={`/${lang}/tienda/${categoria}`}>{categoryTitle}</Link>
        <ChevronRight size={14} />
        <span className={styles.breadcrumbCurrent}>{product.name}</span>
      </nav>

      {/* Product Presentation */}
      <div className={styles.productLayout}>
        {/* Left: Product Image */}
        <div className={styles.imageSection}>
          <div className={styles.imageContainer}>
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              className={styles.productImage}
              sizes="(max-width: 768px) 100vw, 500px"
            />
          </div>
        </div>

        {/* Right: Product Details Card */}
        <div className={styles.infoSection}>
          <span className={styles.brandTag}>{product.brand}</span>
          <h1 id="product-heading" className={`${styles.productTitle} text-gradient`}>{title}</h1>
          <div className={styles.priceTag}>
            <span>${product.price.toLocaleString("es-CO")}</span>
            <span className={styles.currency}>COP</span>
          </div>
          <p className={styles.shortDesc}>{shortDesc}</p>

          <div className={styles.ctaContainer}>
            <a
              id="whatsapp-cta-btn"
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappBtn}
            >
              <ShoppingCart size={20} />
              {isEs ? "Cotizar por WhatsApp" : "Get a Quote on WhatsApp"}
            </a>
            <Link href={`/${lang}/tienda/${categoria}`} className={styles.backBtn}>
              <ArrowLeft size={16} />
              {isEs ? `Volver a ${categoryTitle}` : `Back to ${categoryTitle}`}
            </Link>
          </div>
        </div>
      </div>

      {/* Dynamic Detail Sections */}
      <section className={styles.detailsSection} id="product-details">
        <h2 className={styles.sectionTitle}>{isEs ? "Descripción del Artículo" : "Product Overview"}</h2>
        <p className={styles.longDescription}>{finalLongDescription}</p>

        {/* Highlight Benefits */}
        <h2 className={styles.sectionTitle}>{isEs ? "Beneficios Clave" : "Key Benefits"}</h2>
        <div className={styles.highlightsGrid}>
          {finalBenefits.map((benefit, idx) => (
            <div key={idx} className={styles.highlightCard}>
              <div className={styles.highlightIcon}>
                {icons[idx % icons.length]}
              </div>
              <h3 className={styles.highlightTitle}>{benefit.title}</h3>
              <p className={styles.highlightDesc}>{benefit.desc}</p>
            </div>
          ))}
        </div>

        {/* Technical Specs Table */}
        <h2 className={styles.sectionTitle}>{isEs ? "Especificaciones Técnicas" : "Technical Specifications"}</h2>
        <div className={styles.specsTableContainer}>
          <table className={styles.specsTable} aria-label={isEs ? "Especificaciones Técnicas" : "Technical Specifications"}>
            <tbody>
              {Object.entries(finalSpecs).map(([label, val], idx) => (
                <tr key={idx}>
                  <th scope="row" className={styles.specsLabel}>{label}</th>
                  <td className={styles.specsValue}>{val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Features bullet list if available */}
        {featuresList.length > 0 && (
          <>
            <h2 className={styles.sectionTitle}>{isEs ? "Características Adicionales" : "Key Features"}</h2>
            <ul style={{ paddingLeft: "1.5rem", marginBottom: "4rem", color: "var(--color-text-muted)", fontSize: "1.1rem", lineHeight: "1.8" }}>
              {featuresList.map((feature, idx) => (
                <li key={idx} style={{ marginBottom: "0.5rem" }}>
                  <span style={{ color: "var(--color-primary)", marginRight: "0.5rem" }}>✦</span>
                  {feature}
                </li>
              ))}
            </ul>
          </>
        )}
      </section>
    </main>
  );
}
