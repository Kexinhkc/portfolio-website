import { FloatingNav } from "@/components/ui/FloatingNavBar";
import Hero from "@/components/Hero";
// import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import { navItems } from "@/data";

import dynamic from 'next/dynamic';


export default function Home() {
  const Grid = dynamic(() => import('@/components/Grid'), {
    ssr: false
  });
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10" >
    <div className="max-w-7xl w-full px-6 md:px-0">
      <FloatingNav navItems={navItems }/>
      <Hero />
      <Grid />
      <RecentProjects /> 
      <Experience /> 
      <Footer />
    </div>
    </main>
  );
}
