import { useRouter } from 'next/router';
import React, { useState } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const Route = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
  e.preventDefault();
  // Effectuez ici l'action souhaitée avec les données du formulaire
  console.log(formData);
  
  // Enregistrez les données dans le localStorage
  localStorage.setItem('formData', JSON.stringify(formData));
    
  Route.push('/')
};


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">Prénom :</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="lastName">Nom :</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Soumettre</button>
    </form>
  );
};

export default Form;
