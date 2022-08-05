import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import more from '../assets/more.png';

const Home = () => {
  return (
    <div>
      <Sidebar />
      <Navbar />

      <div className="w-[1420px] h-[710px] overflow-y-auto mt-1 ml-[118px]">
        {/* Judul */}
        <h1 className="ml-[46px] mb-[38px] text-[32px] font-semibold text-black">
          Seputar Sekolah
        </h1>

        {/* cards */}
        <div className="ml-[46px] grid grid-cols-3 gap-[24px]">
          <div className="bg-card1-image bg-full bg-right bg-no-repeat w-[392px] h-[279px] drop-shadow-[5px_5px_5px_rgba(0,0,0,0.25)] rounded-2xl">
            <div className="bg-shadow-image bg-full bg-right bg-no-repeat w-[392px] h-[279px]">
              <div className="w-[337px] h-[48px] text-white ml-5 pt-[150px]">
                <h1 className="text-[20px] font-semibold">
                  Pelaksanaan PAS (Penilaian Akhir Semester 1) T.A. 2021-2022
                </h1>
                <p className="text-[10px] mb-2">
                  11/16/2021 / Berita, Kurikulum
                </p>
                <button className="text-[#4C4C6D] rounded-lg flex flex-row text-[14px] bg-[#FFE194] w-[155px] h-[31px] pl-[7px] font-semibold items-center">
                  Baca Lebih Lanjut
                  <img
                    className="ml-[7px] w-[17px] h-[17px]"
                    src={more}
                    alt="/"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="bg-card2-image bg-full bg-right bg-no-repeat w-[392px] h-[279px] drop-shadow-[5px_5px_5px_rgba(0,0,0,0.25)] rounded-2xl">
            <div className="bg-shadow-image bg-full bg-right bg-no-repeat w-[392px] h-[279px]">
              <div className="w-[337px] h-[48px] text-white ml-5 pt-[150px]">
                <h1 className="text-[20px] font-semibold">
                  Pelaksanaan PTM terbatas Senin, 8 November 2021 (Kelas XII)
                </h1>
                <p className="text-[10px] mb-2">
                  11/16/2021 / Berita, Kurikulum
                </p>
                <button className="text-[#4C4C6D] rounded-lg flex flex-row text-[14px] bg-[#FFE194] w-[155px] h-[31px] pl-[7px] font-semibold items-center">
                  Baca Lebih Lanjut
                  <img
                    className="ml-[7px] w-[17px] h-[17px]"
                    src={more}
                    alt="/"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="bg-card3-image bg-full bg-right bg-no-repeat w-[392px] h-[279px] drop-shadow-[5px_5px_5px_rgba(0,0,0,0.25)] rounded-2xl">
            <div className="bg-shadow-image bg-full bg-right bg-no-repeat w-[392px] h-[279px]">
              <div className="w-[337px] h-[48px] text-white ml-5 pt-[150px]">
                <h1 className="text-[20px] font-semibold">
                  Perubahan Jadwal Pelajaran Berlaku per 25 Oktober 2021
                </h1>
                <p className="text-[10px] mb-2">
                  11/16/2021 / Berita, Kurikulum
                </p>
                <button className="text-[#4C4C6D] rounded-lg flex flex-row text-[14px] bg-[#FFE194] w-[155px] h-[31px] pl-[7px] font-semibold items-center">
                  Baca Lebih Lanjut
                  <img
                    className="ml-[7px] w-[17px] h-[17px]"
                    src={more}
                    alt="/"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="bg-card1-image bg-full bg-right bg-no-repeat w-[392px] h-[279px] drop-shadow-[5px_5px_5px_rgba(0,0,0,0.25)] rounded-2xl">
            <div className="bg-shadow-image bg-full bg-right bg-no-repeat w-[392px] h-[279px]">
              <div className="w-[337px] h-[48px] text-white ml-5 pt-[150px]">
                <h1 className="text-[20px] font-semibold">
                  Pelaksanaan PAS (Penilaian Akhir Semester 1) T.A. 2021-2022
                </h1>
                <p className="text-[10px] mb-2">
                  11/16/2021 / Berita, Kurikulum
                </p>
                <button className="text-[#4C4C6D] rounded-lg flex flex-row text-[14px] bg-[#FFE194] w-[155px] h-[31px] pl-[7px] font-semibold items-center">
                  Baca Lebih Lanjut
                  <img
                    className="ml-[7px] w-[17px] h-[17px]"
                    src={more}
                    alt="/"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="bg-card2-image bg-full bg-right bg-no-repeat w-[392px] h-[279px] drop-shadow-[5px_5px_5px_rgba(0,0,0,0.25)] rounded-2xl">
            <div className="bg-shadow-image bg-full bg-right bg-no-repeat w-[392px] h-[279px]">
              <div className="w-[337px] h-[48px] text-white ml-5 pt-[150px]">
                <h1 className="text-[20px] font-semibold">
                  Pelaksanaan PTM terbatas Senin, 8 November 2021 (Kelas XII)
                </h1>
                <p className="text-[10px] mb-2">
                  11/16/2021 / Berita, Kurikulum
                </p>
                <button className="text-[#4C4C6D] rounded-lg flex flex-row text-[14px] bg-[#FFE194] w-[155px] h-[31px] pl-[7px] font-semibold items-center">
                  Baca Lebih Lanjut
                  <img
                    className="ml-[7px] w-[17px] h-[17px]"
                    src={more}
                    alt="/"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="bg-card3-image bg-full bg-right bg-no-repeat w-[392px] h-[279px] drop-shadow-[5px_5px_5px_rgba(0,0,0,0.25)] rounded-2xl">
            <div className="bg-shadow-image bg-full bg-right bg-no-repeat w-[392px] h-[279px]">
              <div className="w-[337px] h-[48px] text-white ml-5 pt-[150px]">
                <h1 className="text-[20px] font-semibold">
                  Perubahan Jadwal Pelajaran Berlaku per 25 Oktober 2021
                </h1>
                <p className="text-[10px] mb-2">
                  11/16/2021 / Berita, Kurikulum
                </p>
                <button className="text-[#4C4C6D] rounded-lg flex flex-row text-[14px] bg-[#FFE194] w-[155px] h-[31px] pl-[7px] font-semibold items-center">
                  Baca Lebih Lanjut
                  <img
                    className="ml-[7px] w-[17px] h-[17px]"
                    src={more}
                    alt="/"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="bg-card1-image bg-full bg-right bg-no-repeat w-[392px] h-[279px] drop-shadow-[5px_5px_5px_rgba(0,0,0,0.25)] rounded-2xl">
            <div className="bg-shadow-image bg-full bg-right bg-no-repeat w-[392px] h-[279px]">
              <div className="w-[337px] h-[48px] text-white ml-5 pt-[150px]">
                <h1 className="text-[20px] font-semibold">
                  Pelaksanaan PAS (Penilaian Akhir Semester 1) T.A. 2021-2022
                </h1>
                <p className="text-[10px] mb-2">
                  11/16/2021 / Berita, Kurikulum
                </p>
                <button className="text-[#4C4C6D] rounded-lg flex flex-row text-[14px] bg-[#FFE194] w-[155px] h-[31px] pl-[7px] font-semibold items-center">
                  Baca Lebih Lanjut
                  <img
                    className="ml-[7px] w-[17px] h-[17px]"
                    src={more}
                    alt="/"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="bg-card2-image bg-full bg-right bg-no-repeat w-[392px] h-[279px] drop-shadow-[5px_5px_5px_rgba(0,0,0,0.25)] rounded-2xl">
            <div className="bg-shadow-image bg-full bg-right bg-no-repeat w-[392px] h-[279px]">
              <div className="w-[337px] h-[48px] text-white ml-5 pt-[150px]">
                <h1 className="text-[20px] font-semibold">
                  Pelaksanaan PTM terbatas Senin, 8 November 2021 (Kelas XII)
                </h1>
                <p className="text-[10px] mb-2">
                  11/16/2021 / Berita, Kurikulum
                </p>
                <button className="text-[#4C4C6D] rounded-lg flex flex-row text-[14px] bg-[#FFE194] w-[155px] h-[31px] pl-[7px] font-semibold items-center">
                  Baca Lebih Lanjut
                  <img
                    className="ml-[7px] w-[17px] h-[17px]"
                    src={more}
                    alt="/"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="bg-card3-image bg-full bg-right bg-no-repeat w-[392px] h-[279px] drop-shadow-[5px_5px_5px_rgba(0,0,0,0.25)] rounded-2xl">
            <div className="bg-shadow-image bg-full bg-right bg-no-repeat w-[392px] h-[279px]">
              <div className="w-[337px] h-[48px] text-white ml-5 pt-[150px]">
                <h1 className="text-[20px] font-semibold">
                  Perubahan Jadwal Pelajaran Berlaku per 25 Oktober 2021
                </h1>
                <p className="text-[10px] mb-2">
                  11/16/2021 / Berita, Kurikulum
                </p>
                <button className="text-[#4C4C6D] rounded-lg flex flex-row text-[14px] bg-[#FFE194] w-[155px] h-[31px] pl-[7px] font-semibold items-center">
                  Baca Lebih Lanjut
                  <img
                    className="ml-[7px] w-[17px] h-[17px]"
                    src={more}
                    alt="/"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
