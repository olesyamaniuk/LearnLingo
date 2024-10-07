import React from 'react';
import css from './TeacherCard.module.css'; // Make sure your CSS matches the design

export default function TeacherCard({ teacher }) {
  return (
    <div className={css.card}>
      <div className={css.cardHeader}>
        <img src={teacher.avatar_url} alt={`${teacher.name} ${teacher.surname}`} className={css.avatar} />
        <div className={css.nameAndLanguages}>
          <h2 className={css.teacherName}>{teacher.name} {teacher.surname}</h2>
          <p className={css.languages}><strong>Speaks:</strong> {teacher.languages.join(', ')}</p>
        </div>
      </div>
      
      <div className={css.cardBody}>
        <p className={css.lessonInfo}><strong>Lesson Info:</strong> {teacher.lesson_info}</p>
        <p className={css.conditions}><strong>Conditions:</strong> {teacher.conditions.join(' ')}</p>
        <p className={css.experience}><strong>Experience:</strong> {teacher.experience}</p>
        
        <div className={css.stats}>
          <span>Lessons done: {teacher.lessons_done}</span>
          <span>Rating: {teacher.rating}</span>
          <span>Price: {teacher.price_per_hour}$ / hour</span>
        </div>
        
        <div className={css.levels}>
          {teacher.levels.map(level => (
            <span key={level} className={css.level}>{level}</span>
          ))}
        </div>
        
        <div className={css.reviewsSection}>
          <h3>Reviews:</h3>
          {teacher.reviews.map((review, index) => (
            <div key={index} className={css.review}>
              <p><strong>{review.reviewer_name}:</strong> {review.comment}</p>
              <p>Rating: {review.reviewer_rating}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


