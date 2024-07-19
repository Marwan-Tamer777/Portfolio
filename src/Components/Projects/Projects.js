import React, { useContext } from "react";
import udacityMimicImg from '../../Images/Udacity-Mimic.PNG'
import techTalksImg from '../../Images/Tech-Talks.PNG'
import myReadsImg from "../../Images/my-reads.jpg"
import { ThemeContext } from "../../utils/Context/ThemeContext";

function Projects() {
  const { theme, code, colors } = useContext(ThemeContext);

  return (
    <div id="Experiences" className={`p-5 my-5`}>
      <h2
        className={`${colors.mainText} text-center my-2 text-3xl font-extrabold`}
      >
        Past Projects
      </h2>
      <p className={`${colors.aviText} lg:w-1/2 lg:mx-auto text-center my-4`}>
        All Projects can be found on my{" "}
        <a
          href="https://github.com/thetimelord777/"
          target="_blank"
          className={`${colors.linkText} scale-up font-bold m-1`}
        >
          github
        </a>
        and hosted active projects will be listed below
      </p>

      <div className={`flex flex-row justify-between p-5`}>
        <a
          href="https://udacity-mimic.netlify.app"
          target={"_blank"}
          className="w-[45%] scale-up"
        >
          <div className={`flex flex-col rounded-xl ${colors.cardBg}`}>
            <img
              src={udacityMimicImg}
              className="object-cover rounded-[inherit] w-full"
            ></img>
            <p className={` text-center ${colors.mainText} my-4`}>
              {" "}
              E-learning website!
            </p>
            <p className={` text-center ${colors.secText} capitalize p-4`}>
              this website is a small attempt at making a full stack E-learning
              website. The UI is based off udacity as well as the courses
              structures. The website is built on React, Redux, Tailwindcss,
              Node.js, MongoDB. And it supports adding more courses and lessons
              on the back-end It is hosted using heroku and netlify and the
              source code is available at my github.
            </p>
          </div>
        </a>

        <a
          href="https://tech-talks-mt.netlify.app/"
          target={"_blank"}
          className="w-[45%] scale-up"
        >
          <div className={`flex flex-col rounded-xl ${colors.cardBg}`}>
            <img
              src={techTalksImg}
              className="object-cover rounded-[inherit] w-full"
            ></img>
            <p className={` text-center ${colors.mainText} my-4`}>
              {" "}
              A Podcast Website!
            </p>
            <p className={` text-center ${colors.secText} capitalize p-4`}>
              This project was a submission for "Fundamentals of Management"
              subject at My University. It is build on vanilla html, css,js. and
              has a server that uses spotify free API to embed top podcasts into
              the website (Due to spotify terms, a website can't use their Full
              API for free, so this website version doesn't use the embeds
              feature. but you can download the source code from my github and
              update the server to use your own API keys to try it yourself!)
            </p>
          </div>
        </a>

        <a
          href="https://myreads-marwan.netlify.app/"
          target={"_blank"}
          className="w-[45%] scale-up"
        >
          <div className={`flex flex-col rounded-xl ${colors.cardBg}`}>
            <img
              src={myReadsImg}
              className="object-cover rounded-[inherit] w-full"
            ></img>
            <p className={` text-center ${colors.mainText} my-4`}>
              {" "}
              A book search Website!
            </p>
            <p className={` text-center ${colors.secText} capitalize p-4`}>
              This project was a submission for Udacity's front-end professional nanodegree.
              It is a simple book tracking app that you can add your books on it and search for new books
              using a third party API
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Projects;
