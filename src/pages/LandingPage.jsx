import { Layout } from "antd";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import InvestorLogos from "../components/InvestorsLogos";
import HowItWorks from "../components/HowItWorks";
import SubscribeToEmail from "../components/SubscribeToEmail";
import Testimonials from "../components/Testimonials";
import OfferDetails from "../components/OfferDetails";
import RecentlySold from "../components/RecentlySold";
import FAQ from "../components/FAQ";
import FooterBox from "../components/FooterBox";
import LogoSlider from "../components/LogoSlider";



export default function LandingPage() {
  return (
    <Layout>
      <Header />
      <Layout.Content style={{backgroundColor: 'white'}}>
        <HeroSection />
        <InvestorLogos />
        <HowItWorks />
        <SubscribeToEmail />
        <Testimonials/>
        <OfferDetails/>
        <RecentlySold/>
        <FAQ/>
      </Layout.Content>
        <FooterBox/>
        <LogoSlider/>
    </Layout>
  );
}
