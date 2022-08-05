import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const PerjanjianAPI = () => {
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
            <h1 className="font-semibold text-[20px]">Perjanjian API</h1>
            <p className="text-[14px]">
              Persyaratan API ini terakhir diperbarui pada Mei 20, 2021.
            </p>
            <p className="mt-6 text-[14px]">
              Untuk membantu instruktur dan afiliasi kami mendapatkan hasil
              maksimal dari Home Learning, kami (Home Learning) menawarkan
              serangkaian API, alat pengembang, dan perangkat lunak terkait
              (bersama-sama disebut "API"). Dengan mengakses atau menggunakan
              API, Anda (atau perusahaan yang Anda wakili) setuju untuk terikat
              dengan persyaratan di bawah ini, yang dapat diperbarui dari waktu
              ke waktu, dan oleh kebijakan dan pedoman yang berlaku (secara
              bersama-sama disebut "Ketentuan").
              <p className="mt-4">
                1.1 Menerima Persyaratan. Anda harus berusia minimal 18 tahun
                untuk menggunakan API. Anda tidak boleh mengakses API jika Anda
                dilarang menggunakan atau menerima API berdasarkan undang-undang
                yang berlaku di Amerika Serikat atau negara lain, termasuk
                negara tempat Anda tinggal atau tempat Anda menggunakan API.
              </p>
              <p className="mt-4">
                1.2 Penggunaan atas Nama Entitas. Jika Anda menggunakan API atas
                nama perusahaan atau entitas lain, Anda menyatakan dan menjamin
                bahwa Anda memiliki kewenangan hukum penuh untuk mengikatnya
                dengan Persyaratan ini dan mengakui bahwa semua referensi untuk
                "Anda" dalam Persyaratan merujuk ke entitas tersebut.
              </p>
              <p className="mt-4">
                1.3 Memperbarui Informasi Anda. Saat Anda mendaftar untuk API,
                kami mungkin meminta Anda untuk mengirimkan informasi tentang
                diri Anda. Anda harus memberikan dan terus memberikan informasi
                yang akurat dan lengkap, termasuk alamat email yang valid.
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerjanjianAPI;
