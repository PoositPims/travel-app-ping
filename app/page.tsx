import Camp from "./components/Camp";
import Carousel from "./components/Carousel";
import Features from "./components/Features";
import GetApp from "./components/GetApp";
import Guide from "./components/Guide";
import Hero from "./components/Hero";

export default function Home() {
  const images: any = [
    "/yala-pic1.jpg",
    "/yala-pic2.jpg",
    "/yala-pic3.jpg",
    "/yala-pic4.jpg",
  ];
  return (
    <>
      <Carousel />
      {/* <Hero /> */}
      <Camp />
      {/* <Guide />
      <Features />
      <GetApp /> */}
    </>
  );
}
