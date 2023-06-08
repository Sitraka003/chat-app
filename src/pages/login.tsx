import Head from "next/head";
import signUpStyle from "@/styles/Auth.module.css";
import LoginForm from "@/components/loginForm";
import Link from "next/link";

export default function Login() {

    return (
        <>
            <Head>
                <title>Login</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={signUpStyle.container}>
                <h1 className={signUpStyle.title}>Login</h1>
                <LoginForm/>
                <Link href="/sign-up">Don't have an account? Register here</Link>
            </main>
        </>
    );
}