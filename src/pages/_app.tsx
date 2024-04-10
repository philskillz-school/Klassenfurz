import Layout from "@/components/Layout";
import "../styles/globals.css"
import { AppProps } from "next/app";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
    return <Layout>
        <Head>
            <title>Klassenfurz</title>
            <meta name="description" content="Klassenfurz is a Website by Philskillz_" />
            <link rel="icon" href="favicon.ico" />
        </Head>
        <Component {...pageProps} />
    </Layout>
}