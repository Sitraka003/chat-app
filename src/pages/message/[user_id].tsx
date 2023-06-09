import SendMessageFom from "@/components/sendMessageFom";
import Head from "next/head";
import { useRouter } from "next/router";

export default function User() {
    const router = useRouter();
    const {user_id} = router.query;

    return(
        <>
            <Head>
                <title>User {user_id}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div>
                    <div>{user_id} informations</div>
                    <div>Message list</div>
                    <SendMessageFom/>
                </div>
            </main>
        </>
    );
}