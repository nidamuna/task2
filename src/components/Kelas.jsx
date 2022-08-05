import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import history from '../assets/history.png';
import sort from '../assets/sort.png';
import ipa1 from '../assets/ipa1.png';
import ipa2 from '../assets/ipa2.png';
import ipa3 from '../assets/ipa3.png';

const Informasi = () => {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <div className="w-[1420px] ml-[118px] mt-[74px] flex flex-row">
        {/* sisi kiri */}
        <div className="ml-[46px] basis-[600px] flex flex-col">
          <h1 className=" text-[32px] font-semibold">Mata Pelajaran</h1>
          {/* last acces */}
          <div className="text-[#080435] flex flex-row mt-[11px]">
            <div className="flex felx-row text-[16px] w-[150px]">
              <img className="h-8 w-8" src={history} alt="/" />
              <h6 className="ml-3 text-center">Last Acces</h6>
            </div>
            <div className="text-[#080435] flex felx-row text-[16px] w-[150px]">
              <img className="h-8 w-8" src={sort} alt="/" />
              <h6 className="ml-3 text-center">Filter by</h6>
            </div>
          </div>
          <div className="overflow-y-scroll">
            {/* mapel1 */}
            <div className="flex flex-col border-b-2 w-[502px] h-[111px] mt-4">
              <div className="text-[20px] font-semibold">
                Ilmu Pengetahuan Alam (Bilogi Kelas 11)
              </div>
              <div className="text-[14px]">
                Soal IPA Kelas 12 tahun 2020-2021 tingkat SMA/MA/SMK atau
                sekolah menengah atas, semester 1 dan 2, PG atau Essay pada
                pelajaran IPA kurikulum tahun ajaran baru
              </div>
            </div>
            {/* mapel2 */}
            <div className="flex flex-col border-b-2 w-[502px] h-[111px] mt-4">
              <div className="text-[20px] font-semibold">Matematika</div>
              <div className="text-[14px]">
                1. Geometri Bidang Datar 2. Geometri Bidang Ruang 3. Mean,
                Median, Modus 4. Kuartil, Desil, Simpangan Baku, Varian, dsb 5.
                Kaidah Pencacahan, Peluang, Permutasi, dan Kombinasi
              </div>
            </div>
            {/* mapel3 */}
            <div className="flex flex-col border-b-2 w-[502px] h-[111px] mt-4">
              <div className="text-[20px] font-semibold">
                Pendidikan Kewarga Negaraan
              </div>
              <div className="text-[14px]">
                Materi PKN SMA kelas 12 dan soal PKN SMA kelas 12 dari edutore
                by Gramedia. Telah disesuaikan dengan kurikulum terbaru.
              </div>
            </div>
            {/* mapel4 */}
            <div className="flex flex-col border-b-2 w-[502px] h-[111px] mt-4">
              <div className="text-[20px] font-semibold">
                Pendidikan Agama Islam
              </div>
              <div className="text-[14px]">
                Pendidikan Agama Islam dan Budi Pekerti jenjang Sekolah Menengah
                Atas dan Sekolah Menengah Kejuruan Kelas 12, Terbitan
                Kementerian Pendidikan dan Kebudayaan Tahun 2015
              </div>
            </div>
          </div>
        </div>
        {/* sisi kanan */}
        <div className="ml-8 text-[32px] font-semibold w-[665px]">
          <h1 className="mb-[57px]">Pertemuan/ Bab</h1>
          <div className="overflow-y-scroll">
            <div className="flex flex-col w-[502px]">
              {/* card1 */}
              <h6 className="text-[20px] font-semibold mb-3">
                Tiana Stanton - IPA Pertemuan 2 - 15/09/2021
              </h6>
              <div className="grid-cols-1 col-span-3 h-[110px] w-[619px] bg-[#B8DFD8] rounded-xl">
                <div className="flex flex-row">
                  <img src={ipa1} alt="/" />
                  <div className="text-[#080435] my-7 ml-8">
                    <h1 className="text-[20px] w-[376px] h-4">
                      Pendahuluan Biologi
                    </h1>
                    <p className="text-[14px] w-[376px] h-9 pt-3">
                      RPL Biologi kelas 12 IPA
                    </p>
                  </div>
                </div>
              </div>
              {/* card2 */}
              <h6 className="mt-4 text-[20px] font-semibold mb-3">
                Tiana Stanton - IPA Pertemuan 2 - 15/09/2021
              </h6>
              <div className="grid-cols-1 col-span-3 h-[110px] w-[619px] bg-[#B8DFD8] rounded-xl">
                <div className="flex flex-row">
                  <img src={ipa2} alt="/" />
                  <div className="text-[#080435] my-7 ml-8">
                    <h1 className="text-[20px] w-[376px] h-4">
                      Komponen Biotik dan Abiotik
                    </h1>
                    <p className="text-[14px] w-[376px] h-9 pt-3">
                      Pengertian Biotik dan Abiotik, Jenis Komponen biotik dan
                      abiotik
                    </p>
                  </div>
                </div>
              </div>
              {/* card3 */}
              <h6 className="mt-4 text-[20px] font-semibold mb-3">
                Tiana Stanton - IPA Pertemuan 3 - 15/09/2021
              </h6>
              <div className="grid-cols-1 col-span-3 h-[110px] w-[619px] bg-[#B8DFD8] rounded-xl">
                <div className="flex flex-row">
                  <img src={ipa3} alt="/" />
                  <div className="text-[#080435] my-7 ml-8">
                    <h1 className="text-[20px] w-[376px] h-4">
                      Endogen dan Eksogen
                    </h1>
                    <p className="text-[14px] w-[376px] h-9 pt-3">
                      Proses pembentukan muka bumi berdasarkan tenaga
                      pembentuknya, yaitu tenaga endogen dan eksogen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Informasi;
