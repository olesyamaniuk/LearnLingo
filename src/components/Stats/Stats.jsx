import React from 'react';
import css from './Stats.module.css';

export default function Stats() {
  return (
    <section className={css.stats}>
      <ul className={css.statList}>
        <li className={css.statItem}>
          <p className={css.statItemText}>32,000 +</p>
          <span className={css.statItemDesc}>Experienced tutors</span>
        </li>
        <li className={css.statItem}>
          <p className={css.statItemText}> 300,000 +</p>
          <span className={css.statItemDesc}>5-star tutor reviews</span>
        </li>
        <li className={css.statItem}>
          <p className={css.statItemText}>120 +</p>
          <span className={css.statItemDesc}>Subjects taught</span>
        </li>
        <li className={css.statItem}>
          <p className={css.statItemText}>200 +</p>
          <span className={css.statItemDesc}>Tutor nationalities</span>
        </li>
      </ul>
    </section>
  );
}
