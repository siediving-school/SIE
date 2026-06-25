import Link from "next/link";
import Script from "next/script";
import { posts } from "../../../lib/posts";
import type { Metadata } from "next";
import { generateHreflang } from "../layout";

const SITE_URL = "https://siediving.com";
const PATH = "/noticias";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isEs = lang === "es";
  return {
    title: isEs
      ? "Noticias de Buceo en Colombia | Blog SIE DIVING"
      : "Scuba Diving News & Blog | SIE DIVING Colombia",
    description: isEs
      ? "Artículos, guías y consejos sobre buceo en Colombia: mejores temporadas, destinos, cursos PADI y expediciones. Blog oficial de SIE DIVING AND ADVENTURE."
      : "Articles, guides and tips on diving in Colombia: best seasons, destinations, PADI courses and expeditions. Official SIE DIVING blog.",
    alternates: {
      canonical: `${SITE_URL}/${lang}${PATH}`,
      languages: generateHreflang(PATH),
    },
    openGraph: {
      title: isEs ? "Noticias de Buceo en Colombia | Blog SIE DIVING" : "Scuba Diving News | SIE DIVING",
      description: isEs ? "Guías de viaje, temporadas y destinos de buceo en Colombia." : "Travel guides, seasons and diving destinations in Colombia.",
      url: `${SITE_URL}/${lang}${PATH}`,
      siteName: "SIE DIVING AND ADVENTURE",
      type: "website",
    },
  };
}

export default async function NoticiasPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEs = lang === "es";

  const schemaBlog = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": isEs ? "Blog SIE DIVING – Buceo en Colombia" : "SIE DIVING Blog – Scuba Diving in Colombia",
    "url": `${SITE_URL}/${lang}${PATH}`,
    "description": isEs ? "Guías, consejos y noticias sobre buceo en Colombia." : "Guides, tips and news about scuba diving in Colombia.",
    "publisher": {
      "@type": "Organization",
      "name": "SIE DIVING AND ADVENTURE",
      "url": SITE_URL,
    },
  };

  return (
    <main style={{ background: "var(--color-bg)", minHeight: "100vh", paddingTop: "6rem", paddingBottom: "4rem" }}>
      <Script
        id="ld-noticias"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBlog) }}
      />

      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{ color: "var(--color-primary)", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", fontSize: "0.9rem", marginBottom: "0.75rem" }}>
            Blog · {isEs ? "Noticias" : "News"}
          </p>
          <h1 className="text-gradient" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "1rem" }}>
            {isEs ? "Noticias de Buceo en Colombia" : "Scuba Diving News & Guides"}
          </h1>
          <p style={{ color: "var(--color-text-muted)", fontSize: "1.15rem", maxWidth: "650px", margin: "0 auto" }}>
            {isEs
              ? "Guías de viaje, mejores temporadas, destinos y consejos de buceo de nuestros instructores PADI."
              : "Travel guides, best seasons, destinations and diving tips from our PADI instructors."}
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "2rem",
        }}>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/${lang}/noticias/${post.slug}`}
              style={{ textDecoration: "none" }}
            >
              <article
                className="glass-panel blog-card"
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{
                  height: "200px",
                  background: "linear-gradient(135deg, rgba(0,229,255,0.2), rgba(0,100,150,0.4))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "3rem",
                }}>
                  🤿
                </div>

                <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <span style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "var(--color-primary)",
                      background: "rgba(0,229,255,0.1)",
                      borderRadius: "50px",
                      padding: "0.25rem 0.75rem",
                      letterSpacing: "0.05em",
                    }}>
                      {post.category}
                    </span>
                    <span style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>
                      {post.readingTime} min {isEs ? "lectura" : "read"}
                    </span>
                  </div>

                  <h2 style={{ color: "white", fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.75rem", lineHeight: 1.4 }}>
                    {post.title}
                  </h2>
                  <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", lineHeight: 1.6, flex: 1 }}>
                    {post.excerpt}
                  </p>

                  <div style={{ marginTop: "1.25rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>
                      {new Date(post.date).toLocaleDateString(isEs ? "es-CO" : "en-US", { year: "numeric", month: "long", day: "numeric" })}
                    </span>
                    <span style={{ color: "var(--color-primary)", fontSize: "0.9rem", fontWeight: 700 }}>
                      {isEs ? "Leer →" : "Read →"}
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
