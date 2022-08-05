import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import back from '../assets/back.png';
import video from '../assets/video.png';
import Presensi from './Presensi.jsx';

export default function Matapelajaran() {
  const [showPresensi, setShowPresensi] = useState(false);
  const handleOnClose = () => setShowPresensi(false);
  return (
    <div>
      <Sidebar />
      <Navbar />
      <div className="w-[1420px] h-auto ml-[118px] mt-[27px] overflow-hidden">
        {/* back */}
        <div className="flex flex-row ml-[46px] items-center text-center">
          <img className="w-8 h-8" src={back} alt="/" />
          <p className="ml-3 text-[16px] text-[#00000065]">Kembali Ke Kelas</p>
        </div>
        {/* judul */}
        <div className=" ml-[46px] font-semibold mt-6">
          <h1 className="text-[32px]">Mata Pelajaran</h1>
          <p className="text-[20px]">Komponen Biotik dan Abiotik</p>
        </div>
        {/* video */}
        <div className="h-[514px] w-[1220px] ml-[46px] mt-7">
          <img src={video} alt="/" />
        </div>
        {/* penjelasan */}
        <div className="w-[1210px] h-[309px] ml-[46px] my-[47px]">
          <h1 className="text-[32px] font-semibold mb-2">
            Penjelasan Komponen Biotik dan Abiotik serta Contohnya
          </h1>
          <p className="text-[14px]">
            Komponen biotik adalah komponen hidup yang ada di alam dan meliputi
            semua makhluk hidup, seperti hewan dan manusia. Komponen abiotik
            adalah seluruh unsur yang tak hidup, misalnya tanah. komponen hidup
            yang ada di alam dan meliputi semua makhluk hidup, seperti hewan,
            tumbuhan, mikroorganisme, dan manusia. Sedangkan komponen abiotik
            adalah seluruh unsur yang tak hidup, misalnya tanah, air, dan udara.
            Komponen biotik adalah komponen hidup yang ada di alam dan meliputi
            semua makhluk hidup, seperti hewan dan manusia. Komponen abiotik
            adalah seluruh unsur yang tak hidup, misalnya tanah. mengutip, ,
            komponen abiotik dalam ekosistem terdiri dari udara, air, tanah dan
            mineral, cahaya, pH, suhu, dan kelembapan. Komponen abiotik. Makhluk
            hidup dalam perkembangan dan pertumbuhannya tidak dapat hidup
            sendiri, selalu memerlukan makhluk lainnya maupun lingkungan dalam
            menjalani kehidupannya. Hal tersebut dikenal dengan ekosistem, yaitu
            suatu tatanan timbal balik antara makhluk hidup dengan lingkungan.
            Pada dasarnya suatu ekosistem tersusun atas komponen hidup (biotik)
            dan komponen tak hidup (abiotik). Kedua komponen tersebut saling
            memengaruhi dan berinteraksi satu sama lain. Nah, pada materi kali
            ini kita akan membahas lebih jauh mengenai komponen abiotik dalam
            ekosistem
          </p>
        </div>
        {/* icon */}
        <div className="h-[80px] ml-[46px] my-[47px]">
          <div className="ml-[161px] grid grid-cols-5 gap-[146px] w-[883px]">
            <button onClick={() => setShowPresensi(true)}>
              <img src={require('../assets/absen.svg').default} alt="/" />
            </button>
            <img src={require('../assets/meet.svg').default} alt="/" />
            <img src={require('../assets/question.svg').default} alt="/" />
            <img src={require('../assets/modul.svg').default} alt="/" />
            <img src={require('../assets/tugas.svg').default} alt="/" />
          </div>
          <div className="ml-[140px] w-[900px] text-[24px] font-semibold flex flex-row">
            <h1 className="w-[100px] mr-[85px]">Presensi</h1>
            <h1 className="w-[180px] mr-[100px]">Online Meet</h1>
            <h1 className="w-[100px] mr-[120px]">Diskusi</h1>
            <h1 className="w-[100px] bg-red-20 mr-[120px]">Modul</h1>
            <h1>Tugas</h1>
          </div>
        </div>
      </div>
      <Presensi onClose={handleOnClose} visible={showPresensi} />
    </div>
  );
}
