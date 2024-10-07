import css from './Hero.module.css';
import React from 'react';
export default function Hero() {
  return (
    <section className={css.hero}>
      <div className={css.textSection}>
        <h1 className={css.text}>Unlock your potential with the best <span className={css.highlight}>language</span> tutors</h1>
        <p className={css.description}>Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors.</p>
        <button className={css.getStarted}>Get started</button>
      </div>
      <div className={css.imageSection}>
        <img src="/src/pictures/block.png" alt="Language Tutors" />
      </div>
    </section>
  );
}