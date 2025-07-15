import { useEffect, useState } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import NavigationIcon from '../assets/icons/NavigationIcon.svg?react';
import CalendarIcon from '../assets/icons/Calendar.svg?react';
import CostIcon from '../assets/icons/CostIcon.svg?react';
import Person from '../assets/icons/Person.svg?react';
import Circle from '../assets/icons/Circle.svg?react';
import CloseBg from '../assets/icons/CloseBg.svg?react';
import CloseIcon from '../assets/icons/CloseIcon.svg?react';
import LikeBg from '../assets/icons/LikeBg.svg?react';
import LikeIcon from '../assets/icons/Like.svg?react';
import { SlideDummy } from '../data/SlideDummy';

const Home = () => {
  const [index, setIndex] = useState(0);
  const item = SlideDummy[index];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % SlideDummy.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />
      <div className="flex h-[618px] w-full flex-col items-start px-3 py-2">
        <div
          className="relative w-full h-[603px] rounded-3xl overflow-hidden shadow-custom-shadow bg-cover bg-center"
          style={{ backgroundImage: `url(${item.image})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30 z-0" />

          <div className="absolute bottom-0 w-full h-2/5 bg-gradient-to-t from-black via-black/70 to-transparent z-0" />

          <div className="absolute top-4 right-4 z-10 flex items-center gap-1">
            <div className="flex px-3 py-[6px] items-center justify-center rounded-2xl border border-white bg-white gap-1">
              <p className="text-[#313131] text-center font-glyph12-SB">
                상세보기
              </p>
              <NavigationIcon className="h-3 w-3" />
            </div>
          </div>

          <div className="absolute bottom-5 left-3 right-3 flex flex-col gap-2 z-10">
            <div className="text-white font-glyph28-B text-shadow-sm whitespace-pre-line">
              {item.title}
            </div>

            <div className="flex gap-2">
              <div className="flex items-center gap-1 rounded-2xl bg-white px-3 py-1 text-gray-01 text-xs font-glyph12-SB">
                <CalendarIcon className="h-4 w-4" />
                {item.duration}
              </div>
              <div className="flex items-center gap-1 rounded-2xl bg-white px-3 py-1 text-gray-01 text-xs font-glyph12-SB">
                <CostIcon />
                {item.cost}
              </div>
              <div className="flex items-center gap-1 rounded-2xl bg-white px-3 py-1 text-gray-01 text-xs font-glyph12-SB">
                <Person className="h-4 w-4" />
                {item.people}
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex flex-row items-center gap-1 px-[2px]">
                <Circle />
                <div className="text-white font-glyph16-R text-shadow-sm">
                  {item.placeName}
                </div>
              </div>
              <div className="text-white font-glyph16-R text-shadow-sm">
                {item.address}
              </div>
            </div>

            <div className="flex justify-center gap-[31px] mt-4">
              <div className="relative w-[65px] h-[65px] flex items-center justify-center cursor-pointer">
                <CloseBg className="absolute z-0" />
                <CloseIcon className="absolute z-10" />
              </div>
              <div className="relative w-[65px] h-[65px] flex items-center justify-center cursor-pointer">
                <LikeBg className="absolute z-0" />
                <LikeIcon className="absolute z-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
