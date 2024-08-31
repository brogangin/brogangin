import HeroSection from "./components/heroSection";
import Navbar from "./components/navbar";
import AboutSection from "./components/aboutSection";
import ProjectsSection from "./components/projectSection";
import EmailSection from "./components/emailSection";
import Footer from "./components/footer";
import AchievementsSection from "./components/achievementsSection";

const Page = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
};

export default Page;
