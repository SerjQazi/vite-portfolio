import React from 'react';
import { Link } from 'react-router-dom';

import robot from '../../assets/project-logos/robot.svg';
import beer from '../../assets/project-logos/beer.svg';
import bookSearch from '../../assets/project-logos/book-search.svg';

const Portfolio = () => {
  return (
    <div className="bg-slate-100 py-2 text-slate-700 xs:py-4 landscape:min-h-[94.4vh] landscape:py-4">
      <div className="mx-20 mb-4 flex items-center justify-center border-2 border-dashed border-slate-700 border-opacity-50 landscape:mx-36">
        <h1 className="py-2 text-center text-xl font-black uppercase tracking-widest text-slate-700 md:text-3xl">
          Portfolio
        </h1>
      </div>

      <div className="mx-2">
        <div className="roboTrivia mb-4 flex items-center justify-center">
          <div className="projectlogo w-20">
            <img src={robot} alt="" />
          </div>

          <div className="projectInfo ml-4 w-80 md:mr-0">
            <div className="">
              <h2 className="text-lg font-bold tracking-widest">Robo Trivia</h2>
              <h3 className="mb-2 text-xs font-thin tracking-wide">
                React | JavaScript | HTML5 | SASS | Firebase
              </h3>
              <p className="text-xs tracking-normal">
                A solo or multiplayer trivia game that uses an API to generate
                questions & multiple choice answers. A simpler second API is
                used to generate the avatars for each unique username and
                finally firebase stores all of the user data and assigns the
                score to each user's unique key.
              </p>
            </div>

            <div className="buttonContainer mt-4 flex text-sm">
              <div className="w-fit rounded-lg bg-yellow-500 px-4 py-1">
                <Link
                  target="_blank"
                  to="https://github.com/robo-trivia-group/project-4-react"
                  className="font-bold"
                >
                  Github
                </Link>
              </div>

              <div className="ml-6 w-fit rounded-lg bg-yellow-500 px-4 py-1">
                <Link
                  target="_blank"
                  to="https://robo-trivia-react.netlify.app/"
                  className="font-bold"
                >
                  Live Link
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="findMyBeer mb-4 flex items-center justify-center">
          <div className="projectlogo w-20">
            <img src={beer} alt="" />
          </div>

          <div className="projectInfo ml-4 w-80 md:mr-0">
            <div className="">
              <h2 className="text-lg font-bold tracking-widest">
                Find My Beer
              </h2>
              <h3 className="mb-2 text-xs font-thin tracking-wide">
                React | JavaScript | HTML5 | SASS | API
              </h3>
              <p className="text-xs tracking-normal">
                A way to find all the breweries in your state, the API generates
                a list of breweries once you pick a state. The front of the card
                displays name and address, and as you hover over each card the
                back shows brewery type, contact info and brewery website.
              </p>
            </div>

            <div className="buttonContainer mt-4 flex text-sm">
              <div className="w-fit rounded-lg bg-yellow-500 px-4 py-1">
                <Link
                  target="_blank"
                  to="https://github.com/SerjQazi/find-my-beer-project-3"
                  className="font-bold"
                >
                  Github
                </Link>
              </div>

              <div className="ml-6 w-fit rounded-lg bg-yellow-500 px-4 py-1">
                <Link
                  target="_blank"
                  to="https://find-my-beer.netlify.app/"
                  className="font-bold"
                >
                  Live Link
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bookSearch flex items-center justify-center">
          <div className="projectlogo w-20">
            <img src={bookSearch} alt="" />
          </div>

          <div className="projectInfo ml-4 w-80 md:mr-0">
            <div className="">
              <h2 className="text-lg font-bold tracking-widest">Open Book</h2>
              <h3 className="mb-2 text-xs font-thin tracking-wide">
                React | JavaScript | HTML5 | SASS | API
              </h3>
              <p className="text-xs tracking-normal">
                A way to find all the breweries in your state, the API generates
                a list of breweries once you pick a state. The front of the card
                displays name and address, and as you hover over each card the
                back shows brewery type, contact info and brewery website.
              </p>
            </div>

            <div className="buttonContainer mt-4 flex text-sm">
              <div className="w-fit rounded-lg bg-yellow-500 px-4 py-1">
                <Link
                  target="_blank"
                  to="https://github.com/SerjQazi/find-my-beer-project-3"
                  className="font-bold"
                >
                  Github
                </Link>
              </div>

              <div className="ml-6 w-fit rounded-lg bg-yellow-500 px-4 py-1">
                <Link
                  target="_blank"
                  to="https://find-my-beer.netlify.app/"
                  className="font-bold"
                >
                  Live Link
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
