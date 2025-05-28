import About from "@/components/widgets/about-us";
import WhyUs from "@/components/widgets/advantage";
import BlogSection from "@/components/widgets/blog";
import CallToAction from "@/components/widgets/contact";
import ContactForm from "@/components/widgets/contact-form";
import Hero from "@/components/widgets/hero";
import Services from "@/components/widgets/services";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <About />
      <BlogSection />
      <CallToAction />
      <ContactForm />
    </>
  );
}
