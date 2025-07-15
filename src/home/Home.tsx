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

const Home = () => {
  return (
    <>
      <Header />
      <div className="flex h-[618px] w-full flex-col items-start px-3 py-2">
        <div className="flex h-[603px] w-full flex-col items-start justify-between rounded-3xl">
          <div className="flex w-full items-center justify-end gap-1 py-4 pl-4 pr-7">
            <p className="text-center text-[#313131] font-glyph12-SB">
              상세보기
            </p>
            <NavigationIcon className="h-3 w-3" />
          </div>

          <div className="flex h-[380px] w-full flex-col items-start justify-end gap-2 bg-black-fade px-3 pb-5 rounded-b-3xl shadow-custom-shadow">
            <div className="text-white font-glyph28-B ">
              {' '}
              월간장수산 7월: 장안산
            </div>

            <div className="flex w-full flex-row items-start gap-2">
              <div className="border-rgba(255, 255, 255, 0.12) flex items-center justify-center gap-[2px] rounded-2xl border bg-white px-3 py-1">
                <CalendarIcon className="h-4 w-4" />
                <div className="text-center text-gray-01 font-glyph12-SB">
                  1박 2일{' '}
                </div>
              </div>

              <div className="border-rgba(255, 255, 255, 0.12) flex items-center justify-center gap-1 rounded-2xl border bg-white px-3 py-1">
                <CostIcon />
                <div className="text-center text-gray-01 font-glyph12-SB">
                  100만원
                </div>
              </div>

              <div className="border-rgba(255, 255, 255, 0.12) flex items-center justify-center gap-1 rounded-2xl border bg-white px-3 py-1">
                <Person className="h-4 w-4" />
                <div className="text-center text-gray-01 font-glyph12-SB">
                  10명{' '}
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex flex-row items-center gap-1 px-[2px]">
                <Circle />
                <div className="text-white font-glyph16-R">트레일빌리지</div>
              </div>
              <div className="text-white font-glyph16-R">
                경상남도 함양군 함양읍 삼휴길 200
              </div>
            </div>

            <div className="relative mt-4 flex flex-row items-center justify-center w-full gap-[31px]">
              <div className="relative w-[65px] h-[65px] flex items-center justify-center cursor-pointer">
                <CloseBg className="absolute z-0" />
                <CloseIcon className="absolute z-10" />
              </div>

              <div className="relative w-[65px] h-[65px]  flex items-center justify-center cursor-pointer">
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
