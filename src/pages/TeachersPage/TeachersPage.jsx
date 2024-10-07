import React, { useEffect, useState } from 'react';
import TeacherCard from '../../components/TeacherCard/TeacherCard.jsx';
import css from './TeachersPage.module.css';
import teachersData from '../../../teachersList.json';

export default function TeachersPage() {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    // Simulating async loading
    setTimeout(() => {
      setTeachers(teachersData);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <div className={css.loading}>Loading teachers...</div>; // Optional loading state
  }

  return (
    <div className={css.list}>
      {teachers.map((teacher) => (
        <TeacherCard key={teacher.name + teacher.surname} teacher={teacher} />
      ))}
          <h1>jhv</h1>
    </div>
  );
}

