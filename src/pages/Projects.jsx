import React from "react";
import GoTop from "../components/GoTop";
import Footer from "../components/Footer";
import Fade from "react-reveal/Fade";

export default function Projects() {
  return (
    <>
      <Fade bottom>
        <section className="main my-card-project text-left">
          <h1 className="project-title">The Social Code</h1>
          <div className="my-project-links">
            <a
              target="_blank"
              rel="noreferrer"
              className="text-blue"
              href="https://the-social-code.herokuapp.com/"
            >
              Live Web
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              className="text-blue"
              href="https://github.com/marta8919/the-social-code-client"
            >
              Repo Client
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              className="text-blue"
              href="https://github.com/marta8919/the-social-code-server"
            >
              Repo Server
            </a>
          </div>

          <p>
            The Social Code (TSC) is a Full Stack Web social media app where
            developers can share their experiences and create online events to
            network and share knowledge with other people
          </p>
          <div className="my-project-tags text-blue">
            <p>React</p>
            <p>JavaScript</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>Nodejs</p>
            <p>MongoDB</p>
            <p>MaterialUI</p>
          </div>
          <a
            className="my-project-image"
            href="https://the-social-code.herokuapp.com/"
          >
            <img
              src="https://res.cloudinary.com/dfpleoyv6/image/upload/v1616667301/layout_TSC_fntomu.png"
              alt="TSCProject"
            />
          </a>
        </section>
        <section className="main my-card-project text-left">
          <h1>flatme</h1>
          <div className="my-project-links">
            <a
              target="_blank"
              rel="noreferrer"
              className="text-blue"
              href="https://flatme.herokuapp.com/"
            >
              Live Web
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              className="text-blue"
              href="https://github.com/SofSanUrb/flatme"
            >
              GitHub
            </a>
          </div>

          <p>
            flatme is a Full Stack platform that gathers district reviews
            globally, for users who need to move to an area or a city they don't
            know and gather as much information as possible.
          </p>
          <div className="my-project-tags text-blue">
            <p>Handlebars</p>
            <p>JavaScript</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>Nodejs</p>
            <p>MongoDB</p>
            <p>Bootstrap</p>
          </div>
          <a className="my-project-image" href="https://flatme.herokuapp.com/">
            <img
              src="https://res.cloudinary.com/dfpleoyv6/image/upload/v1616667301/layout_flatme_ynidyj.png"
              alt="TSCProject"
            />
          </a>
        </section>
        <section className="main my-card-project text-left">
          <h1>ssurbano Portfolio</h1>
          <div className="my-project-links">
            <a
              target="_blank"
              rel="noreferrer"
              className="text-blue"
              href="https://ssurbano.com/"
            >
              Live Web
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              className="text-blue"
              href="https://github.com/SofSanUrb/ssurbano"
            >
              GitHub
            </a>
          </div>

          <p>Personal Website with my latest selected projects</p>
          <div className="my-project-tags text-blue">
            <p>React</p>
            <p>JavaScript</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>Bootstrap</p>
          </div>
          <a className="my-project-image" href="https://ssurbano.com/">
            <img
              src="https://res.cloudinary.com/dfpleoyv6/image/upload/v1616667301/layout_ssurbano_gernkg.png"
              alt="TSCProject"
            />
          </a>
        </section>
        <section className="main my-card-project last-title text-left">
          <h1>No Adults Allowed</h1>
          <div className="my-project-links">
            <a
              target="_blank"
              rel="noreferrer"
              className="text-blue"
              href="https://sofsanurb.github.io/no-adults-allowed/"
            >
              Live Web
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              className="text-blue"
              href="https://github.com/SofSanUrb/no-adults-allowed"
            >
              GitHub
            </a>
          </div>

          <p>
            Readme is a Fullstack responsive social media web platform that
            gather street and district reviews over different countries, with
            the goal of helping people that need to move to an area or a city
            they don't know, have as much information as possible.
          </p>
          <div className="my-project-tags text-blue">
            <p>Canvas</p>
            <p>JavaScript</p>
            <p>HTML</p>
            <p>CSS</p>
          </div>
          <a
            className="my-project-image"
            href="https://sofsanurb.github.io/no-adults-allowed/"
          >
            <img
              src="https://res.cloudinary.com/dfpleoyv6/image/upload/v1616667301/layout_gameNAA_okre6i.png"
              alt="TSCProject"
            />
          </a>
        </section>
        <GoTop className="my-gotop" scrollStepInPx="100" delayInMs="20.50" />
      </Fade>
      <Footer />
    </>
  );
}
