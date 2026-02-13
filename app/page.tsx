import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import DigitalArk from "@/components/DigitalArk";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Khizr from "@/components/Khizr";
import Footer from "@/components/Footer";
import FloatingHireButton from "@/components/FloatingHireButton";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function Home() {
    return (
        <main className="relative min-h-screen">
            <AnimatedBackground />
            <Navbar />
            <Hero />
            <About />
            <DigitalArk />
            <Projects />
            <Experience />
            <Skills />
            <Contact />
            <Khizr />
            <Footer />
            <FloatingHireButton />
        </main>
    );
}
