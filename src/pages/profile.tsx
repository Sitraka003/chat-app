import EditProfileForm from "@/components/editProfileForm"
import Head from "next/head"
import signUpStyle from "../styles/Auth.module.css"

export default function Profile() {
    return(
        <>
        <Head>
            <title>Profile</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={signUpStyle.container}>
            <EditProfileForm/>
        </main>
        </>
    );
}