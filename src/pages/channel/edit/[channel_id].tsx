import EditChannelForm from "@/components/editChannelForm";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Channel() {
    const router = useRouter();
    const {id} = router.query;

    return(
        <>
            <Head>
                <title>Edit channel {id}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <EditChannelForm/>
            </main>
        </>
    );
}