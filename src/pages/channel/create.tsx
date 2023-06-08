import CreateChannelForm from "@/components/createChannelForm";
import Head from "next/head";
import createChannelStyle from "@/styles/Auth.module.css";

export default function CreateChannel() {
    return(
        <>
        <Head>
            <title>Create Channel</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={createChannelStyle.container}>
            <h1 className={createChannelStyle.title}>Create a new channel</h1>
            <CreateChannelForm/>
        </main>
        </>
    );
}