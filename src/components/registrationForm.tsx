import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/router";
import formStyle from "../styles/Form.module.css"

interface RegistrationData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegistrationForm = () => {
  const router = useRouter();
  const [registrationData, setRegistrationData] = useState<RegistrationData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement >) => {
    const { name, value } = e.target;
    setRegistrationData({
      ...registrationData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem('formData', JSON.stringify(registrationData));
    router.push('/chat')
  };

  return (
    <form className={formStyle.form} onSubmit={handleSubmit}>
      <input
        className={formStyle.input}
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
        value={registrationData.name}
      />

      <input
        className={formStyle.input}
        type="email"
        name="email"
        placeholder="Email address"
        onChange={handleChange}
        value={registrationData.email}
      />

      <input
        className={formStyle.input}
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        value={registrationData.password}
      />

      <input
        className={formStyle.input}
        type="password"
        name="confirmPassword"
        placeholder="Confirm password"
        onChange={handleChange}
        value={registrationData.confirmPassword}
      />

      <button className={`${formStyle.button} registerButton`} type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
