import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import back from '../assets/back.png';
import video from '../assets/video.png';
import profile2 from '../assets/profile2.png';
import profile3 from '../assets/profile3.png';
import profile4 from '../assets/profile4.png';
import profile5 from '../assets/profile5.png';
import Presensi from './Presensi.jsx';

export default function Diskusi() {
  const [showPresensi, setShowPresensi] = useState(false);
  const handleOnClose = () => setShowPresensi(false);
  return (
    <div>
      <Sidebar />
      <Navbar />
      <div className="w-[1420px] h-[702px] ml-[118px] mt-[27px] overflow-y-auto">
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
        {/* form diskusi */}
        <h1 className="mt-[73px] ml-[46px] text-[36px] font-semibold">
          Yuk Diskusi
        </h1>
        {/* profile 1 */}
        <div>
          <div className="ml-[46px] flex flex-row border-b-2 w-[1230px] h-[163px] mt-7">
            <img className="w-32 h-32" src={profile2} alt="/" />
            <div className="ml-7">
              <h1 className="text-[24px] font-semibold text-[#1B4D61]">
                Kianna Herwitz
              </h1>
              <p className="text-[14px]">
                Makhluk hidup akan melakukan perpindahan dari satu ruangan
                tertentu ke ruangan lainnya jika makhluk hidup tersebut
                mengalami ancaman atau gangguan dari makhluk lainnya.
                Perpindahan ruangan hewan juga dapat terjadi karena aktivitas
                manusia yang dapat mengganggu ruangan dari hewan tersebut.
                Misalnya, aktivitas manusia saat melakukan penebangan pohon
                secara sembarangan maka yang dapat terjadi adalah hewan tersebut
                akan merasa terganggu karena aktivitas manusia.
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-end  w-[1210px] ml-[46px] mt-4">
            <div className="mr-5 w-9 h-9">
              <img src={require('../assets/arrowBack.svg').default} alt="/" />
            </div>
            <div className="w-9 h-9">
              <img src={require('../assets/favorite.svg').default} alt="/" />
            </div>
          </div>
        </div>
        {/* profile 2 */}
        <div>
          <div className="ml-[46px] flex flex-row border-b-2 w-[1230px] h-[163px] mt-7">
            <img className="w-32 h-32" src={profile3} alt="/" />
            <div className="ml-7">
              <h1 className="text-[24px] font-semibold text-[#1B4D61]">
                Theo Hernandez
              </h1>
              <p className="text-[14px]">
                Pada dasarnya suatu ekosistem tersusun atas komponen hidup
                (biotik) dan komponen tak hidup (abiotik). Kedua komponen
                tersebut saling memengaruhi dan berinteraksi satu sama lain.
                Nah, pada materi kali ini kita akan membahas lebih jauh mengenai
                komponen abiotik dalam ekosistem. Seperti apa ya kira-kira?
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-end  w-[1210px] ml-[46px] mt-4">
            <div className="mr-5 w-9 h-9">
              <img src={require('../assets/arrowBack.svg').default} alt="/" />
            </div>
            <div className="w-9 h-9">
              <img src={require('../assets/favorite.svg').default} alt="/" />
            </div>
          </div>
        </div>
        {/* profile 3 */}
        <div>
          <div className="ml-[46px] flex flex-row border-b-2 w-[1230px] h-[163px] mt-7">
            <img className="w-32 h-32" src={profile4} alt="/" />
            <div className="ml-7">
              <h1 className="text-[24px] font-semibold text-[#1B4D61]">
                Ircham Al Fickry
              </h1>
              <p className="text-[14px]">
                Komponen abiotik adalah komponen yang terdiri dari benda tak
                hidup atau komponen berupa makhluk mati. Komponen abiotik sangat
                berpengaruh dalam kehidupan dan keberlangsungan makhluk hidup.
                Komponen tersebut diantaranya air, gas, oksigen, dan karbon
                dioksida, tanah, kelembapan, suhu, cahaya matahari, serta
                ruangan.
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-end  w-[1210px] ml-[46px] mt-4">
            <div className="mr-5 w-9 h-9">
              <img src={require('../assets/arrowBack.svg').default} alt="/" />
            </div>
            <div className="w-9 h-9">
              <img src={require('../assets/favorite.svg').default} alt="/" />
            </div>
          </div>
        </div>
        {/* Comment */}
        <div>
          <div className="ml-[46px] flex flex-row w-[1230px] h-[163px] mt-12">
            <img className="w-32 h-32" src={profile5} alt="/" />
            <div className="ml-7">
              <input
                className="w-[1065px] h-[128px] border-2 p-2"
                type="text"
                placeholder="Ketikan sesuatu disini......."
              ></input>
            </div>
          </div>
          <button className="ml-[200px] bg-[#E2B93B] w-[214px] rounded-2xl h-[51px] text-[18px] text-white font-bold">
            Kirimkan Tanggapan
          </button>
        </div>
      </div>
      <Presensi onClose={handleOnClose} visible={showPresensi} />
    </div>
  );
}
