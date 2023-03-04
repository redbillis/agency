import { useEffect, useState } from "react";

const CardSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [groups, setGroups] = useState('');

  useEffect(() => {
    setGroups(document.getElementsByClassName("card-group"));
  }, []);

  const handleLoveClick = () => {
    const nextIndex =
      activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;

    const currentGroup = document.querySelector(
        `[data-index="${activeIndex}"]`
      ),
      nextGroup = document.querySelector(`[data-index="${nextIndex}]`);

    currentGroup.dataset.status = "after";

    nextGroup.dataset.status = "active";

    setActiveIndex(nextIndex);
  };

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="card-swiper">
        <div className="card-groups">
          <div className="card-group" data-index="0" data-status="active">
            <div className="card little-card"></div>

            <div className="card big-card"></div>

            <div className="card little-card"></div>

            <div className="card big-card"></div>

            <div className="card little-card"></div>

            <div className="card big-card"></div>

            <div className="card little-card"></div>

            <div className="card big-card"></div>
          </div>

          <div className="card-group" data-index="1" data-status="unknown">
            <div className="card little-card"></div>

            <div className="card big-card"></div>

            <div className="card little-card"></div>

            <div className="card big-card"></div>

            <div className="card little-card"></div>

            <div className="card big-card"></div>

            <div className="card little-card"></div>

            <div className="card big-card"></div>
          </div>

          <div className="card-group" data-index="2" data-status="unknown">
            <div className="card little-card"></div>

            <div className="card big-card"></div>

            <div className="card little-card"></div>

            <div className="card big-card"></div>

            <div className="card little-card"></div>

            <div className="card big-card"></div>

            <div className="card little-card"></div>

            <div className="card big-card"></div>
          </div>
        </div>
        <div className="card-swiper-buttons flex justify-around mt-20 text-4xl">
          <button
            id="hate-button"
            className=" border-4 rounded-full border-red-600 px-2 py-3"
            // onClick={handleHateClick}
          >
            ❌
          </button>
          <button
            id="love-button"
            className=" border-4 rounded-full border-red-600 px-2 py-3"
            onClick={handleLoveClick}
          >
            ❤️
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardSwiper;
