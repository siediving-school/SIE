import styles from "./TestimonialsSection.module.css";

export interface Testimonial {
  text: string;
  name: string;
  country: string;
  trip: string;
  avatar: string;
}

interface Props {
  testimonials: Testimonial[];
  titleEs?: string;
  titleEn?: string;
  isEs: boolean;
}

export default function TestimonialsSection({ testimonials, isEs, titleEs = "Lo Que Dicen Quienes Fueron", titleEn = "What Past Divers Say" }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{isEs ? titleEs : titleEn}</h2>
        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <div key={i} className={styles.card}>
              <p className={styles.text}>"{t.text}"</p>
              <div className={styles.author}>
                <img src={t.avatar} alt={t.name} className={styles.avatar} />
                <div>
                  <strong>{t.name} {t.country}</strong>
                  <span className={styles.trip}>{t.trip}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
