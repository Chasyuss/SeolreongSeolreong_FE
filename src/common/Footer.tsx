import Matching from '../assets/icons/MachingIcon.svg?react';
import Search from '../assets/icons/Search.svg?react';
import MapIcon from '../assets/icons/MapIcon.svg?react';
import CommunityIcon from '../assets/icons/CommunityIcon.svg?react';
import MyPageIcon from '../assets/icons/MyPageIcon.svg?react';

const Footer = () => {
  return (
    <div className="flex w-full h-[56px] px-2 items-center bg-white justify-between flex-row">
      <div className="flex w-[70px] flex-col justify-center items-center gap-1 cursor-pointer">
        <Matching className="w-[26px] h-[26px]" />
        <p className="text-[#B3B3B3] font-glyph11-R">매칭</p>
      </div>

      <div className="flex w-[70px] flex-col justify-center items-center gap-1 cursor-pointer">
        <Search className="w-[26px] h-[26px]" />
        <p className="text-[#B3B3B3] font-glyph11-R">검색</p>
      </div>

      <div className="flex w-[70px] flex-col justify-center items-center gap-1 cursor-pointer">
        <MapIcon className="w-[26px] h-[26px]" />
        <p className="text-[#B3B3B3] font-glyph11-R">지도</p>
      </div>

      <div className="flex w-[70px] flex-col justify-center items-center gap-1 cursor-pointer">
        <CommunityIcon className="w-[26px] h-[26px]" />
        <p className="text-[#B3B3B3] font-glyph11-R">커뮤니티</p>
      </div>

      <div className="flex w-[70px] flex-col justify-center items-center gap-1 cursor-pointer">
        <MyPageIcon className="w-[26px] h-[26px]" />
        <p className="text-[#B3B3B3] font-glyph11-R">마이페이지</p>
      </div>
    </div>
  );
};

export default Footer;
