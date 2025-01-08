import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";
import CraftingDigital from "@/components/CraftingDigital";
import CreativeAgency from "@/components/CreativeAgency";
import DigitalPartner from "@/components/DigitalPartner";
import ExperiencedTeam from "@/components/ExperiencedTeam";
import GlobalCompanies from "@/components/GlobalCompanies";
import Hero from "@/components/Hero";
import ImgSection from "@/components/ImgSection";
import ReviewSection from "@/components/ReviewSection";
import RunningText from "@/components/RunningText";
import Services from "@/components/Services";
import WorkSection from "@/components/WorkSection";

export default function Home() {
  return (
    <main className="main">
      <h1>Hello</h1>
      <Hero></Hero>
      <CaseStudies></CaseStudies>
      <WorkSection></WorkSection>
      <CreativeAgency></CreativeAgency>
      <DigitalPartner></DigitalPartner>
      <ImgSection></ImgSection>
      <GlobalCompanies></GlobalCompanies>
      <RunningText></RunningText>
      <ExperiencedTeam></ExperiencedTeam>
      <CraftingDigital></CraftingDigital>
      <Services></Services>
      <ReviewSection></ReviewSection>
      <Contact></Contact>
    </main>
  );
}
