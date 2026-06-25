import styles from "./ProfilesSection.module.css";

export interface Profile {
  img: string;
  emoji: string;
  titleEs: string;
  titleEn: string;
  descEs: string;
  descEn: string;
}

interface Props {
  profiles: Profile[];
  isEs: boolean;
  waLink: string;
}

export default function ProfilesSection({ profiles, isEs, waLink }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{isEs ? "¿Para Quién Es Este Viaje?" : "Who Is This Trip For?"}</h2>
        <div className={styles.grid}>
          {profiles.map((p, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.imgWrap}>
                <img src={p.img} alt={isEs ? p.titleEs : p.titleEn} className={styles.img} />
              </div>
              <div className={styles.body}>
                <div className={styles.emoji}>{p.emoji}</div>
                <h3 className={styles.cardTitle}>{isEs ? p.titleEs : p.titleEn}</h3>
                <p className={styles.desc}>{isEs ? p.descEs : p.descEn}</p>
                <a href={waLink} target="_blank" rel="noopener noreferrer" className={styles.cta}>
                  {isEs ? "Este soy yo →" : "That's me →"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
