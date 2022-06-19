import React from "react";

import bgImg from "../assets/i1.png";
import Bottom from '../Components/Bottom'

const Main = () => {
  return (
    <div>
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800 flex flex-col justify-between"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <h1 className="py-3 text-5xl md:text-7xl font-bold">
            Learn to code,fast !.
          </h1>
          <p className="text-2xl">
            {" "}
            The quickest way to go from beginner to expert
          </p>
          <button className="py-3 px-6 sm:w-[60%] my-4 ">Get Started</button>
        </div>
        <div>
          <img className="w-full mb-8" src={bgImg} alt="/" />
        </div>
        <br />
        <br />

        <div
          className="absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-slate-300 rounded-xl text-center shadow-xl"
        >
          <strong className="text-2xl text-slate-800">
            Some of the available Languages
          </strong>

          <br />
          <div class="flex">
            <strong class="flex-1 px-4 py-2 text-slate-500">JAVA</strong>
            <strong class="flex-1 px-4 py-2 text-slate-500">JAVASCRIPT</strong>
            <strong class="flex-1 px-4 py-2 text-slate-500">PYTHON</strong>
            <strong class="flex-1 px-4 py-2 text-slate-500">RUBY</strong>
            <strong class="flex-1 px-4 py-2 text-slate-500">REACT</strong>
          </div>
          <div class="flex">
            <strong class="flex-1 px-4 py-2 text-slate-500">C#</strong>
            <strong class="flex-1 px-4 py-2 text-slate-500">CPP</strong>
            <strong class="flex-1 px-4 py-2 text-slate-500">C</strong>
            <strong class="flex-1 px-4 py-2 text-slate-500">PHP</strong>
            <strong class="flex-1 px-4 py-2 text-slate-500">PERL</strong>
          </div>
        </div>
      </div>
    </div>
    <Bottom/>

    </div>
  );
};

export default Main;
