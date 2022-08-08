import React from 'react';

export default function Modalpenilaian({ visible, onClose }) {
  const handleOnClose = () => {
    onClose();
  };
  if (!visible) return null;

  return (
    <div
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-20 flex justify-start"
    >
      <div className="w-[223px] h-[163px] p-2 rounded-sm mt-[50px] ml-4">
        <div className="bg-union-image w-[223px] h-[163px] bg-full bg-right bg-no-repeat pl-[25px]">
          <div className="flex flex-row pt-[34px] border-b-2 border-black w-[175px]">
            <img
              className="h-6 w-6 mr-5"
              src={require('../assets/graduation.svg').default}
              alt="/"
            />
            <h1 className="text-[14px] font-semibold mb-2">Nilaiku</h1>
          </div>
          <div className="flex flex-row mt-[10px] border-b-2 border-black w-[175px]">
            <img
              className="h-6 w-6 mr-5"
              src={require('../assets/editlist.svg').default}
              alt="/"
            />
            <h1 className="text-[14px] font-semibold mb-2">Edit Profile</h1>
          </div>
          <div className="flex flex-row mt-[10px] w-[175px]">
            <img
              className="h-6 w-6 mr-5"
              src={require('../assets/keluar.svg').default}
              alt="/"
            />
            <h1 className="text-[14px] font-semibold mb-2 text-[#FF0000]">
              Keluar
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
