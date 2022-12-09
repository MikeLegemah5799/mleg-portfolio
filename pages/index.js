import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import MainNav from '../components/MainNav/MainNav';

export default function Home() {
  return (
    <div className={styles.container}>
      <MainNav />
    </div>
  )
}
