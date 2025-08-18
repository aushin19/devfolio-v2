import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Work from "@/components/Work/Work";
import Education from "@/components/Education/Education";
import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Projects/Projects";


export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      <Hero />
      <div className="flex flex-col md:px-56 items-center justify-center gap-2">
        <About />
        <Work />
        <Education />
        <Skills />
        <Projects />
      </div>
    </div>
  );
}
