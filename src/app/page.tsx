import Aboutus from "@/components/pages/aboutus";
import Footer from "@/components/pages/footer";
import Hero from "@/components/pages/hero";
import Pricing from "@/components/pages/pricing";
import Team from "@/components/pages/team";

import Image from "next/image";

export default function Home() {
  return (
    <div >
      <section >
      <Hero />
      </section>
      <section >
      <Aboutus />
      </section>
      <section className="py-14">
      < Pricing/>
      </section>
 
      <section className="py-14">
      <Team />
      </section>
      <section >
      <Footer/>
      </section>
    </div>
  );
}
