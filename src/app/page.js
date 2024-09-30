import About from "@/components/About";
import Hero from "@/components/Hero";
import Preloader from "@/components/Preloader/Preloader";
import Preps from "@/components/Preps";

export default function Home() {
  return (
    <>
      <Preloader />
      <main>
        <Hero />
        <About />
        <Preps />
      </main>
    </>
  );
}
