import React from 'react';
import profile from '../assets/profile.png';

const Navbar = () => {
  return (
    <div className="flex flex-row w-[1397px] h-[168px] mr-0 ml-[118px] -mt-[900px]">
      <div className="basis-[956px]">
        <h1 className="ml-[46px] pt-[52px] mb-[30px] text-[32px] font-semibold text-[#4C4C6D]">
          Hallo, <p>Selamat Pagi</p>
        </h1>
      </div>
      <div className="mb-7">
        <h1 className="uppercase ml-[46px] pt-[52px] text-[32px] font-semibold text-[#000850] text-right">
          BRANDON PHILIPS
        </h1>
        <p className="uppercase ml-[46px] text-[24px] text-[#C4C4C4] text-right">
          XII IPA 1
        </p>
      </div>
      <div className="pt-[52px] ml-5 mr-0">
        <img src={profile} alt="/" />
      </div>
    </div>
  );
};

export default Navbar;
