import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SearchBox from "@/components/SearchBox";

export default function HomePage() {
  return (
    <>
      
      
      <Navbar />
      <main>
        <Hero />
        <SearchBox />
      </main>
      <Footer />
    </>
  );
}
