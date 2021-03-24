import React from "react";
import Fade from "react-reveal/Fade";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="main home my-landing text-right">
      <Fade bottom>
        <div className="home-background">
          <img src="https://res.cloudinary.com/dfpleoyv6/image/upload/v1616091664/blob_kdtsio.svg" alt="home-blob"/>
        </div>
        <h1>
          Hi. I’m Sofia.<br></br>I am a Web developer.
        </h1>
      </Fade>
      <Footer />
    </div>
  );
}
