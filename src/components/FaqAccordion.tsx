"use client";
import { useState } from "react";
import styles from "./FaqAccordion.module.css";

export type FaqItem = { q: string; a: string };

export default function FaqAccordion({ items, ctaLabel, ctaHref }: { items: FaqItem[]; ctaLabel: string; ctaHref: string }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className={styles.wrap}>
      {items.map((item, i) => (
        <div key={i} className={`${styles.item} ${open === i ? styles.itemOpen : ""}`}>
          <button className={styles.question} onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
            <span className={styles.num}>0{i + 1}</span>
            <span className={styles.qText}>{item.q}</span>
            <span className={styles.chevron}>{open === i ? "−" : "+"}</span>
          </button>
          <div className={styles.answerWrap}>
            <p className={styles.answer}>{item.a}</p>
          </div>
        </div>
      ))}
      <div className={styles.cta}>
        <a href={ctaHref} target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
          {ctaLabel} →
        </a>
      </div>
    </div>
  );
}
