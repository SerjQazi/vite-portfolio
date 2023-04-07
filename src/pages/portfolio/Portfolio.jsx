import React from 'react';
import { Link } from 'react-router-dom';

import robot from '../../assets/project-logos/robot.svg';
import beer from '../../assets/project-logos/beer.svg';
import couch from '../../assets/project-logos/couch.svg';
import bookSearch from '../../assets/project-logos/book-search.svg';

const Portfolio = () => {
  return (
    <div className="bg-slate-100 py-2 text-slate-700 xs:py-4 lg:portrait:py-6 landscape:py-4 2xl:landscape:py-6">
      <div className="mx-20 mb-4 flex items-center justify-center border-2 border-dashed border-slate-700 border-opacity-50 md:mx-36 lg:portrait:mx-48 lg:portrait:mb-6 landscape:mx-36 smallTab:landscape:mx-44 lg:landscape:mb-6 xl:landscape:mx-64 xl:landscape:mb-4 2xl:landscape:mx-[24rem] 2xl:landscape:mb-6">
        <h1 className="py-2 text-center text-xl font-black uppercase tracking-widest text-slate-700 md:text-3xl smallTab:text-4xl xl:py-4 lg:portrait:py-4 lg:portrait:text-5xl phone:landscape:text-xl lg:landscape:text-3xl xl:landscape:py-2 2xl:landscape:text-4xl">
          Portfolio
        </h1>
      </div>

      <div className="mx-2 flex-wrap md:mx-6 landscape:mx-6 2xl:landscape:flex">
        <div className="bookSearch mb-4 flex items-center justify-center lg:portrait:mb-6 lg:landscape:mb-6 2xl:landscape:w-1/2 2xl:landscape:pr-3">
          <div className="projectlogo w-20 md:portrait:w-[5.5rem] lg:portrait:w-[7.5rem] landscape:w-[5.5rem] lg:landscape:w-[7.5rem] xl:landscape:w-[6.5rem] 2xl:landscape:w-[10.5rem]">
            <img src={bookSearch} alt="" />
          </div>

          <div className="projectInfo ml-4 w-80 md:mr-0 md:portrait:ml-6 md:portrait:w-[25rem] lg:portrait:w-[35rem] landscape:ml-6 landscape:w-[25rem] lg:landscape:ml-8 lg:landscape:w-[35rem] xl:landscape:ml-16 xl:landscape:w-[45rem] 2xl:landscape:ml-4">
            <div className="">
              <h2 className="text-lg font-bold tracking-widest smallTab:text-xl lg:portrait:text-2xl lg:landscape:text-2xl xl:landscape:text-xl">
                Open Book
              </h2>
              <h3 className="mb-2 text-xs font-thin tracking-wide smallTab:text-sm lg:portrait:text-lg lg:landscape:text-base xl:landscape:text-sm">
                React | JavaScript | HTML5 | SASS | API
              </h3>
              <p className="text-xs tracking-normal smallTab:text-sm lg:portrait:text-lg lg:landscape:text-base">
                Search any title or author and see a list of books, the API
                generates a list of books based on your search. The list can be
                sorted alphabetically by title or numerically by year of
                publication.
              </p>
            </div>

            <div className="buttonContainer mt-4 flex text-sm lg:portrait:text-xl lg:landscape:text-lg">
              <div className="w-fit rounded-lg bg-yellow-500 px-4 py-1 lg:portrait:px-5 lg:portrait:py-2">
                <Link
                  target="_blank"
                  to="https://github.com/SerjQazi/open-book-application"
                  className="font-bold"
                >
                  Github
                </Link>
              </div>

              <div className="ml-6 w-fit rounded-lg bg-yellow-500 px-4 py-1 lg:portrait:px-5 lg:portrait:py-2">
                <Link
                  target="_blank"
                  to="https://open-book-application.netlify.app/"
                  className="font-bold"
                >
                  Live Link
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="roboTrivia mb-4 flex items-center justify-center lg:portrait:mb-6 lg:landscape:mb-6 2xl:landscape:w-1/2 2xl:landscape:pl-3">
          <div className="projectlogo w-20 md:portrait:w-[5.5rem] lg:portrait:w-[7.5rem] landscape:w-[5.5rem] lg:landscape:w-[7.8rem] xl:landscape:w-[6.5rem] 2xl:landscape:w-[10.5rem]">
            <img src={robot} alt="" />
          </div>

          <div className="projectInfo ml-4 w-80 md:mr-0 md:portrait:ml-6 md:portrait:w-[25rem] lg:portrait:w-[35rem] landscape:ml-6 landscape:w-[25rem] lg:landscape:ml-8 lg:landscape:w-[35rem] xl:landscape:ml-16 xl:landscape:w-[45rem] 2xl:landscape:ml-4">
            <div className="">
              <h2 className="text-lg font-bold tracking-widest smallTab:text-xl lg:portrait:text-2xl lg:landscape:text-2xl xl:landscape:text-xl">
                Robo Trivia
              </h2>
              <h3 className="mb-2 text-xs font-thin tracking-wide smallTab:text-sm lg:portrait:text-lg lg:landscape:text-base xl:landscape:text-sm">
                React | JavaScript | HTML5 | SASS | Firebase
              </h3>
              <p className="text-xs tracking-normal smallTab:text-sm lg:portrait:text-lg lg:landscape:text-base">
                A solo or multiplayer trivia game that uses an API to generate
                questions & multiple choice answers. A simpler second API is
                used to generate the avatars for each unique username and
                finally firebase stores all of the user data and assigns the
                score to each user's unique key.
              </p>
            </div>

            <div className="buttonContainer mt-4 flex text-sm lg:portrait:text-xl lg:landscape:text-lg">
              <div className="w-fit rounded-lg bg-yellow-500 px-4 py-1 lg:portrait:px-5 lg:portrait:py-2">
                <Link
                  target="_blank"
                  to="https://github.com/robo-trivia-group/project-4-react"
                  className="font-bold"
                >
                  Github
                </Link>
              </div>

              <div className="ml-6 w-fit rounded-lg bg-yellow-500 px-4 py-1 lg:portrait:px-5 lg:portrait:py-2">
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

        <div className="findMyBeer mb-4 flex items-center justify-center lg:portrait:mb-6 lg:landscape:mb-6 2xl:landscape:w-1/2 2xl:landscape:pr-3">
          <div className="projectlogo w-20 md:portrait:w-[5.5rem] lg:portrait:w-[7.5rem] landscape:w-[5.5rem] lg:landscape:w-[7.8rem] xl:landscape:w-[6.5rem] 2xl:landscape:w-[10.5rem]">
            <img src={beer} alt="" />
          </div>

          <div className="projectInfo ml-4 w-80 md:mr-0 md:portrait:ml-6 md:portrait:w-[25rem] lg:portrait:w-[35rem] landscape:ml-6 landscape:w-[25rem] lg:landscape:ml-8 lg:landscape:w-[35rem] xl:landscape:ml-16 xl:landscape:w-[45rem] 2xl:landscape:ml-4">
            <div className="">
              <h2 className="text-lg font-bold tracking-widest smallTab:text-xl lg:portrait:text-2xl lg:landscape:text-2xl xl:landscape:text-xl">
                Find My Beer
              </h2>
              <h3 className="mb-2 text-xs font-thin tracking-wide smallTab:text-sm lg:portrait:text-lg lg:landscape:text-base xl:landscape:text-sm">
                React | JavaScript | HTML5 | SASS | API
              </h3>
              <p className="text-xs tracking-normal smallTab:text-sm lg:portrait:text-lg lg:landscape:text-base">
                A way to find all the breweries in your state, the API generates
                a list of breweries once you pick a state. The front of the card
                displays name and address, and as you hover over each card the
                back shows brewery type, contact info and brewery website.
              </p>
            </div>

            <div className="buttonContainer mt-4 flex text-sm lg:portrait:text-xl lg:landscape:text-lg">
              <div className="w-fit rounded-lg bg-yellow-500 px-4 py-1 lg:portrait:px-5 lg:portrait:py-2">
                <Link
                  target="_blank"
                  to="https://github.com/SerjQazi/find-my-beer-project-3"
                  className="font-bold"
                >
                  Github
                </Link>
              </div>

              <div className="ml-6 w-fit rounded-lg bg-yellow-500 px-4 py-1 lg:portrait:px-5 lg:portrait:py-2">
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

        <div className="sanctuaryHelper flex items-center justify-center 2xl:landscape:w-1/2 2xl:landscape:pl-3">
          <div className="projectlogo w-20 md:portrait:w-[5.5rem] lg:portrait:w-[7.5rem] landscape:w-[5.5rem] lg:landscape:w-[7.8rem] xl:landscape:w-[6.5rem] 2xl:landscape:w-[10.5rem]">
            <img src={couch} alt="" />
          </div>

          <div className="projectInfo ml-4 w-80 md:mr-0 md:portrait:ml-6 md:portrait:w-[25rem] lg:portrait:w-[35rem] landscape:ml-6 landscape:w-[25rem] lg:landscape:ml-8 lg:landscape:w-[35rem] xl:landscape:ml-16 xl:landscape:w-[45rem] 2xl:landscape:ml-4">
            <div className="">
              <h2 className="text-lg font-bold tracking-widest smallTab:text-xl lg:portrait:text-2xl lg:landscape:text-2xl xl:landscape:text-xl">
                Sanctuary Helper
              </h2>
              <h3 className="mb-2 text-xs font-thin tracking-wide smallTab:text-sm lg:portrait:text-lg lg:landscape:text-base xl:landscape:text-sm">
                HTML5 | SASS
              </h3>
              <p className="text-xs tracking-normal smallTab:text-sm lg:portrait:text-lg lg:landscape:text-base">
                A multi-page PSD conversion that is fully responsive on all
                screen sizes. The mobile and tablet size includes an animated
                collapsing nav styled to pixel perfection with SASS.
              </p>
            </div>

            <div className="buttonContainer mt-4 flex text-sm lg:portrait:text-xl lg:landscape:text-lg">
              <div className="w-fit rounded-lg bg-yellow-500 px-4 py-1 lg:portrait:px-5 lg:portrait:py-2">
                <Link
                  target="_blank"
                  to="https://github.com/serj-jordan-sanctuary-helper/project-one"
                  className="font-bold"
                >
                  Github
                </Link>
              </div>

              <div className="ml-6 w-fit rounded-lg bg-yellow-500 px-4 py-1 lg:portrait:px-5 lg:portrait:py-2">
                <Link
                  target="_blank"
                  to="https://serj-jordan-sanctuary-helper.github.io/project-one/"
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
