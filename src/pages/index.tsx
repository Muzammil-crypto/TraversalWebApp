import { Hero } from "../features/Sections/Hero/Hero";
import { Services } from "../features/Sections/Services/Services";
import { Processes } from "@/features/Sections/Processes/Processes";
import { Reviews } from "@/features/Sections/Reviews/Reviews";
import { Accomplishments } from "@/features/Sections/Accomplishments/Accomplishments";
import { Faq } from "@/features/Sections/FAQ/Faq";
import { Footer } from "@/features/Sections/Footer/Footer";

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
