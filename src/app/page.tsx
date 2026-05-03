import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

function WaveDown({ from, to }: { from: string; to: string }) {
  return (
    <div className={`${from} -mb-px`}>
      <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
        <path d="M0 0 C360 48 1080 48 1440 0 L1440 48 L0 48 Z" className={to} />
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WaveDown from="bg-white" to="fill-gray-50" />
        <Problem />
        <WaveDown from="bg-gray-50" to="fill-white" />
        <Solution />
        <WaveDown from="bg-white" to="fill-gray-50" />
        <HowItWorks />
        <WaveDown from="bg-gray-50" to="fill-white" />
        <Features />
        <WaveDown from="bg-white" to="fill-gray-50" />
        <Waitlist />
        <WaveDown from="bg-gray-50" to="fill-white" />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
