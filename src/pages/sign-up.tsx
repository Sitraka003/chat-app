import RegistrationForm from "../components/registrationForm";
import Head from "next/head";
import signUpStyle from "../styles/Auth.module.css"
import Link from "next/link";

export default function SignUp() {
    return (
        <>
            <Head>
                <title>Sign Up</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={signUpStyle.container}>
                <h1 className={signUpStyle.title}>Sign up</h1>
                <RegistrationForm/>
                <Link href="/login">Already have an account? Login here</Link>
            </main>
        </>
    );
}