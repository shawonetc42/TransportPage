import AboutUs from "@/components/AboutUs/AboutUs";
import BLogM2 from "@/components/Blog/BlogM2";
import ContactForm from "@/components/Contract/Contract";
import Maps from "@/components/Contract/Maps";
import FAQPage from "@/components/Faq/Faq";
import Footer from "@/components/Footer/Footer";
import TransportPage from "@/components/Hero/TransportPage";
import TeamSection from "@/components/Meet/MeetOurTeam";
import Menubar from "@/components/Menubar/Menubar";
import Testimonials from "@/components/Testimonials/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Menubar />
      <TransportPage />
      <WhyChooseUs />
      <AboutUs />
      <TeamSection />
      <Testimonials />
      <FAQPage />
      <Maps />
      <BLogM2 />
      <ContactForm />
      <Footer />
    </main>
  );
}
