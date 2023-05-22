import React from "react";
import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="odinsum logo" className="w-40 object-contain" />
        <button
          type="button"
          onClick={() => window.open("https://github.com/OdPhil/odinsum")}
          className="black_btn"
        >
          Github
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="first_blue_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Discover Odin <em>Sum</em>, a powerful open-source article summarizer
        that translates lengthy articles into concise and easy-to-read
        summaries, streamlining your reading and/or writing experience.
      </h2>
    </header>
  );
};

export default Hero;
