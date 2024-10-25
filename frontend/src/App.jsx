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
import Publisher from "./Components/Publisher";

export default function App() {
  useEffect(() => {
    fetch("http://localhost:3000/api")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      });
  }, []);

  const testObject = [
    {
      character: "Wolverine",
      issue: "No.1",
      title: "Wolverine Limited Series #1",
      image:
        "https://upload.wikimedia.org/wikipedia/en/6/6d/Wolverine_%28vol._1%29_1.jpg",
      description:
        "First solo comic book series; First cameo of Yukio; First appearance of Shingen Harada",
    },
    {
      character: "Batman",
      issue: "No.1",
      title: "Batman Vol 1",
      image:
        "https://upload.wikimedia.org/wikipedia/en/4/4d/BatmanComicIssue1%2C1940.png",
      description:
        "The Legend of the Batman - Who He is, and How he Came to Be",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const SelectPreviousComic = () => {
    setCurrentIndex((i) => (i === testObject.length - 1 ? 0 : i + 1));
  };

  const SelectNextComic = () => {
    setCurrentIndex((i) => (i === testObject.length - 1 ? 0 : i + 1));
  };

  return (
    <>
      <div className="App bg-black text-white">
        <div>
          <div className="flex justify-between mb-10">
            <Random
              testObject={testObject}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
            />
            <Publisher />
            <Modal />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center h-screen">
          <p className="text-white italic text-lg mb-3">
            {testObject[currentIndex].title}
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
              src={testObject[currentIndex].image}
              alt={testObject[currentIndex].title}
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
          <div className="w-80 mt-5 h-full">
            <p>Issue - {testObject[currentIndex].issue}</p>
            <p>{testObject[currentIndex].description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
