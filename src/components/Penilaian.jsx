import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Penilaian = () => {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <div className="w-[1420px] h-[702px] ml-[164px] mt-[27px]">
        <h1 className="text-[32px] font-semibold">Nilaiku</h1>
        <p className="text-[14px]">
          Perhatian ! Nilai yang ada di halaman ini adalah daftar nilai
          berdasarkan mata pelajaran yang pernah anda tempuh.
        </p>
        <div className="flex flex-row w-[769px] h-[61px] mt-[49px]">
          <div className="flex flex-row justify-center items-center">
            <div className="h-[61px] w-[65px] p-3 rounded-lg bg-[#4C4C6D]">
              <img src={require('../assets/task.svg').default} alt="/" />
            </div>
            <div className="ml-5 flex flex-col">
              <h1 className="text-[32px] font-semibold -mb-3">234</h1>
              <p className="text-[14px] font-semibold">Semua Tugasku</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Penilaian;
