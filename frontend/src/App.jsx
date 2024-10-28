import "./App.css";
import "./index.css";

import { Icon } from "@mdi/react";
import {
  mdiArrowLeftThinCircleOutline,
  mdiArrowRightThinCircleOutline,
} from "@mdi/js";
import { useState, useEffect } from "react";
import Modal from "./modal";
import Random from "./Components/Random";

export default function App() {
  const [allComics, setAllComics] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setAllComics(result);
      });
  }, []);

  const SelectPreviousComic = () => {
    setCurrentIndex((i) => (i === allComics.length - 1 ? 0 : i + 1));
  };

  const SelectNextComic = () => {
    setCurrentIndex((i) => (i === allComics.length - 1 ? 0 : i + 1));
  };

  return (
    <>
      <div className="App bg-black text-white">
        <div>
          <div className="flex justify-between mb-10">
            <Random
              allComics={allComics}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
            />
            <Modal />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          {allComics.length > 0 ? (
            <>
              <p className="text-white italic text-lg mb-3">
                {allComics[currentIndex].title}
              </p>
              <div className="flex flex-row items-center">
                <div
                  className="flex flex-col justify-center items-center hover"
                  onClick={SelectPreviousComic}
                >
                  <p>Previous</p>
                  <Icon
                    path={mdiArrowLeftThinCircleOutline}
                    size={2}
                    className=" m-4"
                  />
                </div>
                <img
                  src={allComics[currentIndex].image}
                  alt={allComics[currentIndex].title}
                  style={{ height: 450, width: 350 }}
                />
                <div
                  className="flex flex-col justify-center items-center hover"
                  onClick={SelectNextComic}
                >
                  <p>Next</p>
                  <Icon
                    path={mdiArrowRightThinCircleOutline}
                    size={2}
                    className="m-4"
                  />
                </div>
              </div>
              <div className="w-80 mt-5">
                <div className="flex">
                  <p className="italic">Publisher - </p>
                  {allComics[currentIndex].publisher_name}
                </div>
                <p className="mb-5">{allComics[currentIndex].issue}</p>
                <p className="font-bold h-screen">
                  {allComics[currentIndex].description}
                </p>
              </div>
            </>
          ) : (
            <p>No comics to show :(</p>
          )}
        </div>
      </div>
    </>
  );
}
