import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import MainNav from '../components/MainNav/MainNav';
import '@fortawesome/fontawesome-svg-core/styles.css'; // import Font Awesome CSS
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <MainNav />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp
