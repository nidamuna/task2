import React from 'react';
import logo from '../assets/Logo-HLI.png';
import home from '../assets/home.png';
import kelas from '../assets/kelas.png';
import nilai from '../assets/nilaiku.png';
import guru from '../assets/guru.png';
import bantuan from '../assets/bantuan.png';
import Kelas from './Kelas.jsx';

function Sidebar() {
  return (
    <div>
      <div className="w-[118px] h-[900px] bg-[#66A7FF] rounded-r-3xl mt-0">
        <div className="pt-[59px] mx-[28px] w-[52px] h-[44px]">
          <img src={logo} alt="/" />
        </div>
        <div>
          <ul className="mt-32 mx-9 justify-center">
            <li className="mb-8">
              <img src={home} alt="/" />
            </li>
            <li className="mb-8">
              <a href={<Kelas />}>
                <img src={kelas} alt="/" />
              </a>
            </li>
            <li className="mb-8">
              <img src={nilai} alt="/" />
            </li>
            <li className="mb-8">
              <img src={guru} alt="/" />
            </li>
            <li>
              <img src={bantuan} alt="/" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
