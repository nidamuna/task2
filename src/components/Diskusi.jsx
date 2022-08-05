import React from 'react';
import profile2 from '../assets/profile2.png';
import profile3 from '../assets/profile3.png';
import profile4 from '../assets/profile4.png';
import profile5 from '../assets/profile5.png';
import Mapel from './Matapelajaran.jsx';

export default function Diskusi() {
  return (
    <div>
      <div>
        <Mapel />
      </div>

      <div className="w-[1420px] h-[702px] ml-[118px] mt-auto">
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
    </div>
  );
}
