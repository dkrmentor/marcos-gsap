import React from "react";
import { Header, Footer, Socials, Intro, Story, Realms, FAQ} from '../components';
// import { gsap } from "gsap";
// import { Player } from '@lottiefiles/react-lottie-player';


const Home = () => {
  return (
    <>
      <Header />
      <main>
      <Intro/>
      <Story />
      <Realms />
      <FAQ />
      </main>
      <Footer />
      <Socials />
    </>
  );
};

export default Home;
