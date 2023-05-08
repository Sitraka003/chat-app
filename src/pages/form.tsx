import React, { useEffect } from 'react';
import Router from 'next/router';
import Form from '../components/Form';

const FormPage: React.FC = () => {
  useEffect(() => {
    const hasFormData = localStorage.getItem('formData');

    if (hasFormData) {
      Router.push('/'); // Redirige vers l'index.tsx s'il y a des données dans le localStorage
    }
  }, []);

  return (
    <div>
      <Form />
    </div>
  );
};

export default FormPage;
