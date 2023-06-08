import formStyle from "../styles/Form.module.css";
import {ChangeEvent, FormEvent, useState} from "react";
import {useRouter} from "next/router";

interface loginData {
    email: string;
    password: string;
}

export default function LoginForm() {
    const router = useRouter();

    const [loginData, setLoginData] = useState<loginData>({
        email: '',
        password: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement >) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value,
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(localStorage.getItem('formData') === loginData.email) {
        //do stuff
        };
        router.push('/chat')
    };

    return (
        <form className={formStyle.form} onSubmit={handleSubmit}>
            <input
                className={formStyle.input}
                type="email"
                name="email"
                placeholder="Email address"
                onChange={handleChange}
                value={loginData.email}
            />

            <input
                className={formStyle.input}
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                value={loginData.password}
            />

            <button className={`${formStyle.button} loginButton`} type="submit">Submit</button>
        </form>
    )
}