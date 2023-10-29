import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import MainNav from '../components/MainNav/MainNav';
import Footer from '../components/Footer/Footer';
import { DefaultSeo } from 'next-seo';
import '@fortawesome/fontawesome-svg-core/styles.css'; // import Font Awesome CSS
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <DefaultSeo
        title ="Home | Michael Legemah"
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://www.mleg.tech/',
          description: 'Michael Legemah Front End Developer/Software Engineer',
          keywords: 'portfolio, javascript, react, wordpress, developer, software engineer, front end developer, php, nodejs, python, tech lead, solutions architect, aws, front end engineer, shopify'
        }}
        twitter={{
          handle: '@MikeLegemah',
          cardType: 'summary_large_image'
        }}
      />
      <MainNav />
        <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp
