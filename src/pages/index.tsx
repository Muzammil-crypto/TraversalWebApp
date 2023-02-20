import { Inter } from "@next/font/google";
import { Hero } from "../features/sections/Hero/Hero";
import { Services } from "../features/sections/Services/Services";
import { Processes } from "@/features/sections/Processes/Processes";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Processes />
    </>
  );
}
