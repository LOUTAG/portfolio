import React from "react";
import { Link } from "react-router-dom";
import { FaReact, FaNode, FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiJavascript,
  SiMysql,
} from "react-icons/si";
import { connect } from "react-redux";

import AOS from 'aos';

import Layout from "../components/Layout";

AOS.init({
    duration: 1000
});

const Home = ({ languageActif }) => {
  const transalte = require(`../translations/${languageActif}/home.json`);
  return (
    <Layout>
      <section title="intro">
        <div className="h-screen bg-theme">
          <div className="grid grid-cols-1 sm:grid-cols-2 h-full items-center sm:border-4 sm:border-white sm:transform sm:rotate-12 bg-theme">
            <div className="h-96 z-10">
              <lottie-player
                src="https://assets3.lottiefiles.com/packages/lf20_kkflmtur.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className="font-montserrat text-white font-semibold text-center sm:text-left z-0">
              <h1
                className="text-4xl sm:text-7xl mb-2" data-aos='slide-right'
                dangerouslySetInnerHTML={{
                  __html: transalte.intro.titleLineOne,
                }}
              ></h1>
              <h1
                className="text-2xl sm:text-4xl mb-4" data-aos='slide-left'
                dangerouslySetInnerHTML={{
                  __html: transalte.intro.titleLineTwo,
                }}
              ></h1>
            </div>
          </div>
        </div>
      </section>
      <section title="stack">
        <div className="pt-20">
          <h1 className="text-4xl text-center font-bold font-montserrat mb-16">
            {transalte.stack.title}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-20 px-4">
            <SiJavascript
              size={180}
              className="w-full text-center text-[#f2bf26]"
            />
            <FaReact
              size={180}
              className="w-full text-center text-[#61dafb] animate-bounce"
            />
            <SiMongodb
              size={180}
              className="w-full text-center text-[#4eb03f]"
            />
            <SiTailwindcss
              size={180}
              className="w-full text-center text-sky-500"
            />
            <SiMysql size={180} className="w-full text-center text-[#02566c]" />
            <FaHtml5 size={180} className="w-full text-center text-[#d84924]" />
            <FaCss3Alt
              size={180}
              className="w-full text-center text-[#0c74b8]"
            />
            <FaNode
              size={180}
              className="w-full text-center text-[#026e00] animate-bounce"
            />
          </div>
        </div>
      </section>
      <section title="buff">
        <div className="text-center h-72 sm:h-60 bg-theme p-2 mt-10 font-montserrat">
          <h1
            className="font-semibold text-4xl text-white mt-12 sm:mt-10 mx-4"
            dangerouslySetInnerHTML={{ __html: transalte.mern.title }}
          ></h1>
        </div>
        <div className="font-montserrat mx-5 sm:mx-40 shadow-lg rounded-md -mt-8 sm:-mt-20 bg-gray-50">
          <div className="h-96">
            <lottie-player
              src="https://assets4.lottiefiles.com/packages/lf20_arqvyeaq.json"
              background="transparent"
              speed="1"
              loop
              autoplay
              data-aos="zoom-in"
            ></lottie-player>
          </div>
          <p
            className="text-xl my-3 p-5"
            dangerouslySetInnerHTML={{ __html: transalte.mern.content }}
          ></p>
        </div>
      </section>
      <section title="about me">
        <div className="font-montserrat mt-10">
          <h1 className="text-4xl text-center font-bold mb-8">
            {transalte.aboutMe.title}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-items-center px-6">
            <div className="w-[90%]">
              <img src="./img/cvimage.png" alt="empty" data-aos="fade-right" />
            </div>
            <div className="w-[90%] space-y-4">
              <h2 className="text-xl lg:text-2xl">
                {transalte.aboutMe.subTitle}
              </h2>
              <p
                className="text-base lg:text-xl"
                dangerouslySetInnerHTML={{ __html: transalte.aboutMe.first }}
              ></p>
              <p
                className="text-base lg:text-xl"
                dangerouslySetInnerHTML={{ __html: transalte.aboutMe.second }}
              ></p>
              <p className="text-base lg:text-xl">{transalte.aboutMe.third}</p>
              <p className="text-base lg:text-xl">{transalte.aboutMe.fourth}</p>
              <p className="text-base lg:text-xl">
                <Link
                  className="underline tracking-wide hover:font-semibold"
                  to="/files/cv_lou_tagliasco.pdf"
                  target="_blank"
                  rel="nofollow noreferrer"
                  download
                >
                  {transalte.aboutMe.resume}
                </Link>
              </p>
              <p className="text-base lg:text-xl">
                <a
                  className="underline tracking-wide hover:font-semibold"
                  href="https://github.com/LOUTAG/"
                  target="_blank"
                  rel="nofollow noreferrer"
                >
                  GITHUB
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
const mapStateToProps = (state) => {
  return {
    languageActif: state.languageActif,
  };
};
export default connect(mapStateToProps)(Home);
