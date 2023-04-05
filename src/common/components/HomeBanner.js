import React from 'react';
import Typewriter from "typewriter-effect";
import { ChevronDownIcon } from '@heroicons/react/20/solid';
function HomeBanner() {
  const wordsToWrite = [
    'Search for solutions',
    'Consult the opinion of experts',
    'Share your ideas with the community',
    'Learn <strong>programming</strong> playing games',
    'Manage your projects with your team in real time'
  ]
  return (
      <div className='home h-5/6 bg-fixed bg-no-repeat bg-center text-white flex justify-center items-center z-0'>
        <header className="m-0 flex flex-column justify-center">
          <div className='home-title absolute top-60 flex justify-center left-1/6 w-5/6 mx-3xl  z-0'>
            <h1 className='text-3xl md:text-4xl lg:text-6xl text-center max-w-50 z-0'>
              <Typewriter
                options={{
                  strings: wordsToWrite,
                  autoStart: true,
                  loop: true,
                  wrapperClassName: 'z-0'
                }}
              />
            </h1>
          </div>
          <div className="flex justify-center mt-60">
            <button className='rounded-lg bg-amber-400 px-4 py-3 text-md font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600'>Get Started</button>
          </div>
          <div className="flex absolute bottom-24  justify-center">
              <button className="rounded-full bg-white py-2 px-4"><span className="text-zinc-850 font-bold text-xl" aria-hidden="true">&darr;</span></button>
          </div>
        </header>
      </div>
  );
}

export default HomeBanner;
