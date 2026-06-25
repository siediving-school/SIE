import styles from "./FaqAccordion.module.css";

export type FaqItem = { q: string; a: string };

export default function FaqAccordion({ items, ctaLabel, ctaHref }: { items: FaqItem[]; ctaLabel: string; ctaHref: string }) {
  return (
    <div className={styles.wrap}>
      {items.map((item, i) => (
        <details key={i} className={styles.item} open={i === 0}>
          <summary className={styles.question}>
            <span className={styles.num}>0{i + 1}</span>
            <span className={styles.qText}>{item.q}</span>
            <span className={styles.chevron} aria-hidden="true" />
          </summary>
          <p className={styles.answer}>{item.a}</p>
        </details>
      ))}
      <div className={styles.cta}>
        <a href={ctaHref} target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
          {ctaLabel} →
        </a>
      </div>
    </div>
  );
}
