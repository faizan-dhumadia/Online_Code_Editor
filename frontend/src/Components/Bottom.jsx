import React from "react";

import { ArrowSmRightIcon } from "@heroicons/react/outline";

const Bottom = () => {
  return (
    <div name="support" className="w-full mt-24">
      <div className="w-full h-[700px] bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          //   src={supportImg}
          alt="/"
        />
      </div>

      <div className="max-w-[1240px] mx-auto text-black relative">
        <div className="px-4 py-12">
          <h3 className="text-5xl font-bold py-6 text-center">
            Finding the right Compiler
          </h3>
          <p className="py-4 text-3xl text-black-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            repudiandae veritatis ratione error tenetur, voluptates architecto
            possimus ad! Omnis minima ea quidem quisquam unde beatae, minus illo
            et cum vel?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <h3 className="font-bold text-2xl my-6">Quickly Test Code</h3>
              <p className="text-gray-600 text-xl">
                Want to just test code ,without opening up a bulky IDE.XYZ runs
                directly on the web to make it a breeze to quickly test code.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                LETS START
                <ArrowSmRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <h3 className="font-bold text-2xl my-6">NO DOWNLOADS !</h3>
              <p className="text-gray-600 text-xl">
                No more downloading a full-blown IDE/compiler just to try
                testing out a new language.you can choose the technology you
                prefer to develop.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                LETS START
                <ArrowSmRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <h3 className="font-bold text-2xl my-6">PERFECT FOR LEARNING</h3>
              <p className="text-gray-600 text-xl">
                Programmers love learning new things.Don't loose interest by
                spending all your time setting up an environment.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                LETS START <ArrowSmRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
