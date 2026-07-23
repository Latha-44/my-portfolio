import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import ThankYou from "@/components/ThankYou";


export default function Home() {


  return (

    <main
      className="
      min-h-screen
      bg-black
      text-white
      scroll-smooth
      "
    >


      {/* NAVBAR */}

      <Navbar />





      {/* HOME SECTION */}

      <section id="home">

        <Hero />

      </section>






      {/* ABOUT SECTION */}

      <section id="about">

        <About />

      </section>






      {/* SKILLS SECTION */}

      <section id="skills">

        <Skills />

      </section>






      {/* PROJECTS SECTION */}

      <section id="projects">

        <Projects />

      </section>






      {/* CERTIFICATIONS SECTION */}

      <section id="certificates">

        <Certificates />

      </section>






      {/* CONTACT SECTION */}

      <section id="contact">

        <Contact />

      </section>


      <section>
  <ThankYou />
</section>





    </main>

  );

}