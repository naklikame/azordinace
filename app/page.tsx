import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Ordinace } from "@/components/ordinace";
import { ProcNas } from "@/components/proc-nas";
import { Services } from "@/components/services";
import { Banner } from "@/components/banner";
import { Pricing } from "@/components/pricing";
import { Testimonials } from "@/components/testimonials";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="obsah" className="flex-1">
        <Hero />
        <Ordinace />
        <ProcNas />
        <Services />
        <Banner />
        <Pricing />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
