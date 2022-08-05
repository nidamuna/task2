import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Bantuan = () => {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <div className="w-[1240px] h-[702px] ml-[164px] mt-[21px]">
        <div className="flex flex-row">
          <div className="flex flex-col">
            <button className="text-left h-[53px] w-[313px] text-[20px] font-semibold pl-5 bg-[#B9E0D9] border-2 border-slate-700">
              Ketentuan Pengguna
            </button>
            <button className="text-left h-[53px] w-[313px] text-[20px] font-semibold pl-5 border-2 border-slate-700">
              Kebijakan Privasi
            </button>
            <button className="text-left h-[53px] w-[313px] text-[20px] font-semibold pl-5 border-2 border-slate-700">
              Perjanjian API
            </button>
            <button className="text-left h-[53px] w-[313px] text-[20px] font-semibold pl-5 border-2 border-slate-700">
              Edit Profile
            </button>
          </div>
          <div className="mt-[14px] ml-8 w-[881px]">
            <h1 className="font-semibold text-[20px]">Ketentuan Penggunaan</h1>
            <p className="text-[14px]">
              Ketentuan Penggunaan ("Ketentuan") ini terakhir diperbarui pada
              Mei 20, 2021.
            </p>
            <p className="mt-6 text-[14px]">
              Home Learning adalah untuk meningkatkan kehidupan melalui
              pembelajaran. Kami memungkinkan siapa saja di mana saja untuk
              membuat dan berbagi konten pendidikan (instruktur) dan mengakses
              konten pendidikan tersebut untuk dipelajari (siswa). Kami
              menganggap model pasar kami sebagai cara terbaik untuk menawarkan
              konten pendidikan yang berharga kepada pengguna kami. Kami
              membutuhkan aturan untuk menjaga platform dan layanan kami tetap
              aman untuk Anda, kami, dan komunitas siswa dan instruktur kami.
              Jika Anda memublikasikan kursus di platform Home Learning, Anda
              juga harus menyetujui Persyaratan Instruktur . Kami juga
              memberikan perincian mengenai pemrosesan data pribadi siswa dan
              instruktur kami dalam Kebijakan Privasi kami .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bantuan;
