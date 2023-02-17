import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { H4 } from "@/components/base/Typography/Typography";
import { Hero } from "./sections/Hero/Hero";
import { Services } from "./sections/Services/Services";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
    </>
  );
}
