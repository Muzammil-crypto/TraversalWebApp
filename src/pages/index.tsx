import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <Head>
        <title>Megaverse</title>
        <link rel="icon" href="/public/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </Head>
    </main>
  );
}
