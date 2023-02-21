import { Inter } from "@next/font/google";
import { Hero } from "../features/sections/Hero/Hero";
import { Services } from "../features/sections/Services/Services";
import { Processes } from "@/features/sections/Processes/Processes";
import { Reviews } from "@/features/sections/Reviews/Reviews";
import { Accomplishments } from "@/features/sections/Accomplishments/Accomplishments";
import { Faq } from "@/features/sections/FAQ/Faq";
import { Footer } from "@/features/sections/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Processes />
      <Reviews />
      <Accomplishments />
      <Faq />
      <Footer />
    </>
  );
}
