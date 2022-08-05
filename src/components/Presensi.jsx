import React from 'react';

export default function Presensi({ visible, onClose }) {
  const handleOnClose = () => {
    onClose();
  };
  if (!visible) return null;

  return (
    <div
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center  "
    >
      <div className="w-[1075px] h-[694px] bg-white p-2 rounded-sm">
        <div className=" bg-presensi-image bg-no-repeat mt-10 mx-[188px] w-[700px] h-[525px]">
          <h1 className="text-[42px] font-semibold flex justify-center">
            Presensi
          </h1>
        </div>
        <div className="flex flex-row justify-center items-center text-center">
          <p className="text-[28px] font-semibold  flex justify-center items-center">
            <input
              className="w-14 h-14 mr-5 border-0 bg-[#C4C4C4]"
              type="radio"
            />
            Hadir
          </p>
          <p className="ml-[100px] text-[28px] font-semibold  flex justify-center items-center">
            <input
              className="w-14 h-14 mr-5 border-0 bg-[#C4C4C4]"
              type="radio"
            />
            Terlambat
          </p>
          <p className="ml-[100px] text-[28px] font-semibold  flex justify-center items-center">
            <input
              className="w-14 h-14 mr-5 border-0 bg-[#C4C4C4]"
              type="radio"
            />
            Ijin
          </p>
        </div>
      </div>
    </div>
  );
}
