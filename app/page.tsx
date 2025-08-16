import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Work from "@/components/Work/Work";
import Education from "@/components/Education/Education";

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      <Hero/>
      <About/>
      <Work/>
      <Education/>
    </div>
  );
}
