import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center gap-8'>
      <Hero/>
      <About/>
    </div>
  );
}
