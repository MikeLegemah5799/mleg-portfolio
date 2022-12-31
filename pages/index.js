import Hero from '../components/HeroSection/HeroSection';
import LogoCloud from '../components/LogoCloud/LogoCloud';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className="container mx-auto grow">
      <Hero />
      <LogoCloud />
    </div>
  )
}
