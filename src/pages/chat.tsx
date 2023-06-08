import Head from "next/head";
import { useRouter } from "next/router";
import style from "../styles/Chat.module.css"

export default function Chat() {
    const router = useRouter();
    const logout = ()=>{
        localStorage.clear();
        router.push('/login')
    }
    return (
        <>
            <Head>
                <title>Chat App</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={style.main} >
                <h1>Welcome</h1>
                <button className={style.button} onClick={logout}>logout</button>
            </main>
        </>
    );
}