import Hero from '../components/HeroSection/HeroSection';
import LogoCloud from '../components/LogoCloud/LogoCloud';
import RecentProjects from '../components/RecentProjects/RecentProjects';
import Testimonials from '../components/Testimonials/Testimonials';

export default function Home() {
  return (
    <div className="grow">
      <Hero />
      <LogoCloud />
      <RecentProjects />
      <Testimonials />
    </div>
  );
};
