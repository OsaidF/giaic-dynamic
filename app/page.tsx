import Footer from "./components/footer/footer";
import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";
import Resume from "./components/resume/resume";
import styles from "./page.module.css";

export default function Home() {

  return (
    <div>
      <Navbar />
      <Hero />
      <Resume />
      <Footer />
    </div>
  );
}
