import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import more from '../assets/more.png';

const Informasi = () => {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <div className=" w-[1420px] h-[710px] mt-1 ml-[118px]">
        <div className=" ml-[46px] h-[710px] flex flex-row">
          <div className="basis-[850px] h-[710px]">
            {/* Judul */}
            <h1 className="mb-[38px] text-[32px] font-semibold text-black">
              Seputar Sekolah
            </h1>
            {/* Isi */}
            <h1 className="mb-3 text-[24px] font-semibold text-black">
              Pelaksanaan PAS (Penilaian Akhir Semester 1) T.A. 2021-2022
            </h1>
            <div className="text-[14px] w-[709px] h-[542px]">
              <p>
                Pada tanggal 22 November 2021 tepatnya hari Senin, SMA Negeri 1
                Magelang akan melaksanakan kegiatan Penilaian Akhir Semester 1
                Tahun Pelajaran 2021-2022.
              </p>
              <p>
                Untuk itu semua siswa kelas X, XI dan XII agar mempersiapkan
                segala sesuatu yang berhubungan dengan kegiatan tersebut, karena
                pelaksanaan nya akan dilakukan secara PJJ / Full Online.
              </p>
              <p>
                Adapun beberapa hal yang perlu diperhatikan adalah sebagai
                berikut :
              </p>
              <p>A. Tata Tertib PAS Gasal</p>
              <ol>
                <li>
                  Pengerjaan PAS SMTR GASAL dilaksanakan Mandiri di rumah
                  masing-masing dan waktu pengerjaan sesuai dengan jadwal yang
                  sudah diedarkan.
                </li>
                <li>
                  Dilarang melaksanakan pengerjaan secara bergerombol atau
                  berkelompok, Orang tua atau wali siswa dilarang membantu dalam
                  pengerjaan soal dan diharapkan memberikan dukungan kepada
                  putra dan putrinya agar tetap mengerjakan di rumah dan tidak
                  meninggalkan rumah dengan alasan apapun
                </li>
                <li>
                  Siswa yang sakit atau berhalangan tidak bisa mengikuti PAS
                  pada waktu jadwal pelaksanaan dapat mengikuti susulan dengan
                  menunjukkan Surat Keterangan Sakit dari Dokter atau Puskesmas,
                </li>
                <li>
                  Tidak ada waktu tambahan bagi siswa yang bangun kesiangan atau
                  mengikuti ujian di tengah tengah jadwal yg sedang berjalan,
                  Apa bila ada kendala secara teknis dapat menghubungi TIM IT
                  SMA Negeri 1 Magelang.
                </li>
                <li>
                  Siswa wajib memakai seragam sekolah selama PAS. Setiap hari
                  hasil akan kami rekap dan bagi siswa yang masih gagal untuk
                  terekap datanya wajib untuk segera membetulkan datanya.
                </li>
              </ol>
              <p>
                NB: Setiap siswa pada Ujicoba ke 1 dan 2 diberikan 2x kesempatan
                mencoba ! PANITIA PAS Semester Gasal
              </p>
            </div>
          </div>
          <div className="ml-[65px] h-[710px]">
            <h1 className=" mt-[91px] mb-[38px] text-[27px] font-semibold text-black text-right">
              Berita Lainnya
            </h1>
            <div className="overflow-y-scroll flex flex-col h-[540px]">
              <div className="mb-8 bg-card1-image bg-full bg-right bg-no-repeat w-[392px] h-[279px] drop-shadow-[5px_5px_5px_rgba(0,0,0,0.25)] rounded-2xl">
                <div className="bg-shadow-image bg-full bg-right bg-no-repeat w-[392px] h-[279px]">
                  <div className="w-[337px] h-[48px] text-white ml-5 pt-[150px]">
                    <h1 className="text-[20px] font-semibold">
                      Pelaksanaan PAS (Penilaian Akhir Semester 1) T.A.
                      2021-2022
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
              <div className="mb-8 bg-card2-image bg-full bg-right bg-no-repeat w-[392px] h-[279px] drop-shadow-[5px_5px_5px_rgba(0,0,0,0.25)] rounded-2xl">
                <div className="bg-shadow-image bg-full bg-right bg-no-repeat w-[392px] h-[279px]">
                  <div className="w-[337px] h-[48px] text-white ml-5 pt-[150px]">
                    <h1 className="text-[20px] font-semibold">
                      Pelaksanaan PTM terbatas Senin, 8 November 2021 (Kelas
                      XII)
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
      </div>
    </div>
  );
};

export default Informasi;
