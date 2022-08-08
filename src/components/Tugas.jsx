import React from 'react';
import Mapel from './Matapelajaran.jsx';

export default function Tugas() {
  return (
    <div>
      <div>
        <Mapel />
      </div>

      <div className="w-[1420px] h-[702px] ml-[118px] mt-auto">
        <h1 className="mt-[73px] ml-[46px] text-[36px] font-semibold">
          Tugasmu Hari Ini
        </h1>
        <h1 className="text-[24px] mt-6 font-semibold  ml-[46px]">
          Tugas Pertemuan 1
        </h1>
        <p className="text-[14px] mt-4  ml-[46px]">
          Fungsi komponen biotik dan abiotik terhadap lingkungan hidup? Buatlah
          Makalah dan kumpulkan dalam bentuk pdf.
        </p>
        <div className=" ml-[46px] flex flex-row">
          <div className="basis-1/2">
            {/* tabel */}
            <table className="text-[18px] mt-6 flex flex-row border-collapse w-[540px]">
              <thead className="flex flex-col items-start w-[180px]">
                <th className="bg-gray-200 p-3 border border-slate-300">
                  Status pengiriman
                </th>
                <th className="p-3 h-[52px] w-[180px]">Status penilaian</th>
                <th className="bg-gray-200 p-3 border border-slate-300 w-[180px]">
                  Tenggat waktu
                </th>
                <th className="p-3 h-[80px] w-[180px]">Waktu yang tersisa</th>
                <th className="bg-gray-200 p-3 border border-slate-300 w-[180px]">
                  Terakhir diubah
                </th>
                <th className="p-3 w-[180px]">Pengiriman berkas</th>
              </thead>
              <tbody className="flex flex-col">
                <td className="bg-green-200 p-3 border border-slate-300 h-[80px] w-[360px]">
                  dikumpulkan untuk dinilai
                </td>
                <td className="bg-gray-200 p-3 border w-[360px] h-[52px]">
                  Tidak dinilai
                </td>
                <td className="bg-gray-200 p-3 border border-slate-300 w-[360px]">
                  Rabu, 24 November 2021, 12.00 WIB
                </td>
                <td className="bg-green-200 p-3 border  h-[80px] w-[360px]">
                  Tugas dikirim 15 hari 11 jam lebih awal
                </td>
                <td className="bg-gray-200 p-3 border border-slate-300  w-[360px]">
                  Kamis, 18 November 2021, 12.21
                </td>
                <td className="p-3 w-[360px]">berkas</td>
              </tbody>
            </table>
            {/* tombol */}
            <div className="mt-9">
              <button className="text-[16px] text-white font-semibold rounded-lg bg-[#E23B45] w-[145px] h-12 p-3">
                Hapus Kiriman
              </button>
              <button className="ml-3 text-[16px] text-white font-semibold rounded-lg bg-[#E2B93B] w-[145px] h-12 p-3">
                Edit Kiriman
              </button>
            </div>
          </div>
          {/* pengiriman */}
          <div>
            <div className="rounded-lg border-dashed border-4 mt-6 w-[606px] h-[431px] py-8">
              <h1 className="flex text-[24px] font-semibold justify-center">
                Drag and Drop File Here Or
              </h1>
              <img
                className="ml-[180px] w-[247x]"
                src={require('../assets/cloud.svg').default}
                alt="/"
              />
              <button className="p-2 w-[511px] rounded-lg bg-[#E2B93B] text-[40px] text-white font-semibold ml-[47px]">
                Browse
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
