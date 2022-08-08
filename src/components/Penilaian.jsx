import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import profile from '../assets/profile.png';
import Edit from './Modalpenilaian.jsx';

const Penilaian = () => {
  const [showEdit, setShowEdit] = useState(false);
  const handleOnClose = () => setShowEdit(false);
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
          {/* Tugas */}
          <div className="flex flex-row justify-center items-center mr-5">
            <div className="h-[61px] w-[65px] p-3 rounded-lg bg-[#4C4C6D]">
              <img src={require('../assets/task.svg').default} alt="/" />
            </div>
            <div className="ml-5 flex flex-col">
              <h1 className="text-[32px] font-semibold -mb-3">234</h1>
              <p className="text-[14px] font-semibold">Semua Tugasku</p>
            </div>
          </div>
          {/* Nilai Pending */}
          <div className="flex flex-row justify-center items-center mr-5">
            <div className="h-[61px] w-[65px] p-3 rounded-lg bg-[#4C4C6D]">
              <img src={require('../assets/task.svg').default} alt="/" />
            </div>
            <div className="ml-5 flex flex-col">
              <h1 className="text-[32px] font-semibold -mb-3">234</h1>
              <p className="text-[14px] font-semibold">Nilai yang pending</p>
            </div>
          </div>
          {/* Nilai Selesai */}
          <div className="flex flex-row justify-center items-center mr-5">
            <div className="h-[61px] w-[65px] p-3 rounded-lg bg-[#4C4C6D]">
              <img src={require('../assets/task.svg').default} alt="/" />
            </div>
            <div className="ml-5 flex flex-col">
              <h1 className="text-[32px] font-semibold -mb-3">234</h1>
              <p className="text-[14px] font-semibold">
                Tugas yang sudah dinilai
              </p>
            </div>
          </div>
        </div>
        {/* Pencarian */}
        <div className="flex flex-row">
          <div className="w-[796px]">
            <div className="flex flex-row mt-[93px]">
              <div className="flex flex-row text-[#080435] font-semibold justify-center items-center">
                <img
                  className="h-8 w-8"
                  src={require('../assets/history.svg').default}
                  alt="/"
                />
                <p>Terbaru</p>
              </div>
              <div className=" ml-[48px] flex flex-row text-[#080435] font-semibold justify-center items-center">
                <img
                  className="h-8 w-8"
                  src={require('../assets/filter.svg').default}
                  alt="/"
                />
                <p>Filter by</p>
              </div>
              <div className="flex flex-row ml-[144px]">
                <input
                  className="w-[315px] h-[60px] border-2 p-3 rounded-2xl border-[#080435]"
                  type="text"
                  placeholder="Cari Mata Pelajaran"
                ></input>
                <img
                  className="-ml-10"
                  src={require('../assets/search.svg').default}
                  alt="/"
                />
              </div>
            </div>
            {/* Daftar nilai */}
            <div className="h-[238px] w-[769px] mt-10">
              <table className="w-full text-[14px] gap-4">
                <thead>
                  <tr>
                    <th className="w-[75px]">No</th>
                    <th className="w-[278px]">Mata Pelajaran</th>
                    <th className="w-[155px]">Status</th>
                    <th className="w-[265px]">Nilai</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr className="h-6 pt-4">
                    <td className="w-[75px]">1</td>
                    <td className="w-[278px]">Ilmu Pengetahuan Alam</td>
                    <td className="w-[155px]">Grade</td>
                    <td className="w-[265px]">83.8</td>
                  </tr>
                  <tr className="h-6 bg-[#B9E0D9]">
                    <td className="w-[75px]">2</td>
                    <td className="w-[278px]">Ilmu Pengetahuan Sosial</td>
                    <td className="w-[155px]">Grade</td>
                    <td className="w-[265px]">83.8</td>
                  </tr>
                  <tr className="h-6 mt-4">
                    <td className="w-[75px]">3</td>
                    <td className="w-[278px]">Matematika kelas 12</td>
                    <td className="w-[155px]">Pending</td>
                    <td className="w-[265px]">-</td>
                  </tr>
                  <tr className="h-6 mt-4">
                    <td className="w-[75px]">4</td>
                    <td className="w-[278px]">Sosiologi</td>
                    <td className="w-[155px]">Grade</td>
                    <td className="w-[265px]">83.8</td>
                  </tr>
                  <tr className="h-6 mt-4">
                    <td className="w-[75px]">5</td>
                    <td className="w-[278px]">Pendidikan Agama</td>
                    <td className="w-[155px]">Grade</td>
                    <td className="w-[265px]">83.8</td>
                  </tr>
                  <tr className="h-6 mt-4">
                    <td className="w-[75px]">6</td>
                    <td className="w-[278px]">PPKN</td>
                    <td className="w-[155px]">Grade</td>
                    <td className="w-[265px]">83.8</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Card */}
          <div className="w-[427px] h-[471px] rounded-2xl drop-shadow-xl bg-white">
            <div className="flex flex-row bg-[#B9E0D9] w-full rounded-t-2xl">
              <div className="h-[78px] w-[78px] my-5 ml-9">
                <button onClick={() => setShowEdit(true)}>
                  <img src={profile} alt="/" />
                </button>
                <Edit onClose={handleOnClose} visible={showEdit} />
              </div>
              <div className="flex flex-col my-5 ml-3">
                <h1 className="uppercase  text-[24px] font-semibold text-[#000850]">
                  BRANDON PHILIPS
                </h1>
                <p className="uppercase text-[20px] text-white">XII IPA 1</p>
              </div>
            </div>
            {/* User detail */}
            <div className="ml-9 mt-[25px]">
              <h1 className="text-[#4C4C6D] font-semibold text-[24px]">
                Users Details
              </h1>
              <div className="mt-[15px]">
                <p className="font-semibold text-[20px]">Nisn</p>
                <p className="text-[14px] text-slate-400">237327942667</p>
              </div>
              <div className="-mt-1">
                <p className="font-semibold text-[20px]">Jenis Kelamin</p>
                <p className="text-[14px] text-slate-400">Perempuan</p>
              </div>
            </div>
            {/* Aktifitas */}
            <div className="ml-9 mt-[30px]">
              <h1 className="text-[#4C4C6D] font-semibold text-[24px]">
                Aktivitas Masuk
              </h1>
              <div className="mt-[15px]">
                <p className="font-semibold text-[20px]">
                  Akses terakhir ke situs
                </p>
                <p className="text-[14px] text-slate-400">
                  Jumat, 26 November 2021, 15:02 (sekarang)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Penilaian;
