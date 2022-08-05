import React from 'react';
import profile2 from '../assets/profile2.png';
import profile3 from '../assets/profile3.png';
import profile4 from '../assets/profile4.png';
import profile5 from '../assets/profile5.png';
import Mapel from './Matapelajaran.jsx';

export default function Modul() {
  return (
    <div>
      <div>
        <Mapel />
      </div>

      <div className="w-[1420px] h-[702px] ml-[118px] mt-auto">
        <h1 className="mt-[73px] ml-[46px] text-[36px] font-semibold">
          Modul Materi Kali Ini
        </h1>
        {/* modul 1 */}
        <div>
          <div className=" ml-[46px] bg-[#B8DFD8] rounded-xl flex flex-row w-[1224px] h-[76px] mt-8 py-[17px] pl-[46px]">
            <img
              className="h-[42px] w-[34px]"
              src={require('../assets/pdf.svg').default}
              alt="/"
            />
            <div className="text-[24px] font-semibold ml-5">
              <h1>Kehidupan Biotik dan Rantainya</h1>
            </div>
          </div>
        </div>

        {/* modul 2 */}
        <div>
          <div className=" ml-[46px] bg-[#B8DFD8] rounded-xl flex flex-row w-[1224px] h-[76px] mt-8 py-[17px] pl-[46px]">
            <img
              className="h-[42px] w-[34px]"
              src={require('../assets/paper.svg').default}
              alt="/"
            />
            <div className="text-[24px] font-semibold ml-5">
              <h1>Komponen abiotik dan ras nya</h1>
            </div>
          </div>
        </div>

        {/* modul 1 */}
        <div>
          <div className=" ml-[46px] bg-[#B8DFD8] rounded-xl flex flex-row w-[1224px] h-[76px] mt-8 py-[17px] pl-[46px]">
            <img
              className="h-[42px] w-[34px]"
              src={require('../assets/play.svg').default}
              alt="/"
            />
            <div className="text-[24px] font-semibold ml-5">
              <h1>Apa itu komponen biotik dan contohnya?</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
