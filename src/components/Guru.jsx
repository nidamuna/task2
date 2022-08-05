import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import guru1 from '../assets/guru1.png';
import guru2 from '../assets/guru2.png';
import guru3 from '../assets/guru3.png';
import guru4 from '../assets/guru4.png';

const Guru = () => {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <div className="w-[1240px] h-[702px] ml-[164px] mt-[27px]">
        <h1 className="mt-[78px] text-[32px] font-semibold">
          Daftar Guru SMA Harapan Bangsa
        </h1>
        <div className="flex flex-row mt-5">
          <input
            className="w-[533px] h-[60px] border-2 p-3 rounded-2xl"
            type="text"
            placeholder="Ketikan Nama Guru Disini"
          ></input>
          <img
            className="-ml-10"
            src={require('../assets/search.svg').default}
            alt="/"
          />
        </div>
        {/* daftar guru */}
        <div className="grid grid-cols-4 gap-7 mt-11">
          {/* guru 1 */}
          <div className="w-[289px] h-[429px] bg-[#DADDDF] rounded-3xl">
            <img src={guru1} alt="/" />
            <div className="ml-5 mt-[30px]">
              <h1 className="text-[20px] font-semibold">Cristofer Culhane</h1>
              <p className="text-[14px]">Guru Ilmu Pengetahuan Alam</p>
            </div>
          </div>
          {/* guru 2 */}
          <div className="w-[289px] h-[429px] bg-[#DADDDF] rounded-3xl">
            <img src={guru2} alt="/" />
            <div className="ml-5 mt-[30px]">
              <h1 className="text-[20px] font-semibold">Kianna Bergson</h1>
              <p className="text-[14px]">Guru Biologi Kelas 12</p>
            </div>
          </div>
          {/* guru 3 */}
          <div className="w-[289px] h-[429px] bg-[#DADDDF] rounded-3xl">
            <img src={guru3} alt="/" />
            <div className="ml-5 mt-[30px]">
              <h1 className="text-[20px] font-semibold">Tiana Schleifer</h1>
              <p className="text-[14px]">Guru Sosiologi</p>
            </div>
          </div>
          {/* guru 4 */}
          <div className="w-[289px] h-[429px] bg-[#DADDDF] rounded-3xl">
            <img src={guru4} alt="/" />
            <div className="ml-5 mt-[30px]">
              <h1 className="text-[20px] font-semibold">Anika George</h1>
              <p className="text-[14px]">Guru Ilmu Pengetahuan Alam</p>
            </div>
          </div>
          {/* guru line 2 */}
          {/* guru 1 */}
          <div className="w-[289px] h-[429px] bg-[#DADDDF] rounded-3xl">
            <img src={guru1} alt="/" />
            <div className="ml-5 mt-[30px]">
              <h1 className="text-[20px] font-semibold">Cristofer Culhane</h1>
              <p className="text-[14px]">Guru Ilmu Pengetahuan Alam</p>
            </div>
          </div>
          {/* guru 2 */}
          <div className="w-[289px] h-[429px] bg-[#DADDDF] rounded-3xl">
            <img src={guru2} alt="/" />
            <div className="ml-5 mt-[30px]">
              <h1 className="text-[20px] font-semibold">Kianna Bergson</h1>
              <p className="text-[14px]">Guru Biologi Kelas 12</p>
            </div>
          </div>
          {/* guru 3 */}
          <div className="w-[289px] h-[429px] bg-[#DADDDF] rounded-3xl">
            <img src={guru3} alt="/" />
            <div className="ml-5 mt-[30px]">
              <h1 className="text-[20px] font-semibold">Tiana Schleifer</h1>
              <p className="text-[14px]">Guru Sosiologi</p>
            </div>
          </div>
          {/* guru 4 */}
          <div className="w-[289px] h-[429px] bg-[#DADDDF] rounded-3xl">
            <img src={guru4} alt="/" />
            <div className="ml-5 mt-[30px]">
              <h1 className="text-[20px] font-semibold">Anika George</h1>
              <p className="text-[14px]">Guru Ilmu Pengetahuan Alam</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guru;
