import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import profile from '../assets/profile.png';

const editProfile = () => {
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
            {/* edit profile */}
            <div className="flex items-center justify-center">
              <h1 className="text-[32px] font-semibold">Edit Profile</h1>
            </div>
            <div className="flex flex-row">
              <img className="w-[190px] h-[190px] mt-4" src={profile} alt="/" />
              <div className="w-[44px] h-[44px] mt-40 -ml-10">
                <img src={require('../assets/edit.svg').default} alt="/" />
              </div>

              <div className="ml-10 mt-24">
                <button className="text-white rounded-lg bg-[#3FD15F] w-[202px] h-[42px]">
                  Unggah Foto Disini
                </button>
                <p className="text-[14px] w-[394px] mt-3">
                  Ukuran file maksimum yang diizinkan untuk foto profile yang
                  dapat dikirim adalah 2 MB
                </p>
              </div>
            </div>
            {/* Edit data */}
            <div className="mt-[43px]">
              <h1 className="text-[24px] font-semibold"> Informasi Akun </h1>
              <div className="flex flex-row items-center mt-4">
                <label className="text-[14px]">Nama Siswa</label>
                <p>
                  <input
                    className="px-2 ml-[58px] text-[12px] h-[25px] w-[458px] border-2"
                    type="text"
                    placeholder="Brandon Philips"
                  />
                </p>
              </div>
            </div>
            {/* Edit Password */}
            <div className="mt-[38px]">
              <h1 className="text-[24px] font-semibold"> Ubah Password </h1>
              <div className="flex flex-row items-center mt-4">
                <label className="text-[14px]">Password Baru</label>
                <p>
                  <input
                    className="px-2 ml-[38px] text-[12px] h-[25px] w-[458px] border-2"
                    type="password"
                    placeholder="*************************"
                  />
                </p>
              </div>
              <div className="flex flex-row items-center mt-4">
                <label className="text-[14px]">Password Lama</label>
                <p>
                  <input
                    className="px-2 ml-[33px] text-[12px] h-[25px] w-[458px] border-2"
                    type="password"
                    placeholder="*************************"
                  />
                </p>
              </div>
            </div>
            {/* Button */}
            <div className="flex flex-row mt-14">
              <button className="mr-5 bg-[#DE0D0D] text-white h-[42px] w-[147px] rounded-xl text-[20px]">
                Batal Simpan
              </button>
              <button className="mr-5 bg-[#3FD15F] text-white h-[42px] w-[93px] rounded-xl text-[20px]">
                Simpan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default editProfile;
