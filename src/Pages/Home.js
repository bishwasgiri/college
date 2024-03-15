import Header from "../Components/Header";
import HeroSection from "../Components/HeroSection";
import WhySection from "../Components/WhySection";
import CampusDescription from "../Components/CampusDescription";
import StudySection from "../Components/StudySection";
import UpcomingEvent from "../Components/UpcomingEvent";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <div className="wrapper">
        <HeroSection />
        <WhySection />
        <CampusDescription />
        <StudySection />
        <UpcomingEvent />
      </div>
      <Footer />
    </>
  );
};

export default Home;
