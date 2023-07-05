import { Inter } from "next/font/google";
import Head from "next/head";
import Footer from "../../components/Footer";
import Banner from "../../components/HomePage/Banner";
import Brands from "../../components/HomePage/Brands";
import FAQ from "../../components/HomePage/FAQ";
import HeroSection from "../../components/HomePage/HeroSection";
import Navbar from "../../components/Navbar";
import Info from "../../components/HomePage/Info";
import FeaturedProduct from "../../components/HomePage/FeaturedProduct";
import Categories from "../../components/HomePage/Categories";
import TopDeals from "../../components/HomePage/TopDeals";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Favoland Sellers Platform</title>
        <meta name="description" content="Platform for sellers in favoland" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/fevicon32X32.png"
        />
        <link rel="icon" type="image/png" sizes="16x16" href="/fevicon16.png" />
      </Head>
      <div>
        <Navbar />
        <Banner />
        <Info/>
        <Brands />
        <HeroSection />
        <TopDeals/>
        <FeaturedProduct/>
        <Categories/>
        <FAQ />
        <Footer />
      </div>
    </>
  );
}
