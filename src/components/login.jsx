import React from 'react';
import Dashboard from './Sidebar.jsx';
import account from '../assets/account.png';
import lock from '../assets/lock-open.png';
import logo from '../assets/Logo-HLI.png';

const login = () => {
  return (
    <div className="flex flex-row w-[1440px] h-[900px]">
      {/* WALLPAPER */}
      <div className="bg-hero-image w-[950px] h-[900px] bg-full bg-right bg-no-repeat top-0">
        {/*<img src={Wallpaper} alt="/" />*/}
        <div className="w-[140px] h-[119px] mt-[257px] ml-[303px]">
          <img src={logo} alt="/" />
        </div>
        <div className="text-center mt-[51px]">
          <h1 className="w-[387px] h-[126px] ml-[180px] font-bold text-white text-[48px]">
            Suzuran High School
          </h1>
          <p className="ml-[66px] text-[18px] w-[615px] text-white mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis sed
            nunc hendrerit sed. Donec nulla tempor et ac porttitor tortor semper
            et. Facilisis nam sem quis elementum morbi duis. Mattis purus id
            orci mi posuere pretium fringilla et quis. Nec placerat arcu,
            egestas velit enim egestas et consectetur
          </p>
          <p className="ml-[66px] text-[20px] w-[615px] text-semibold text-white mt-[108px]">
            Powerd by : Home Learning
          </p>
        </div>
      </div>

      {/* LOGIN */}
      <div className="flex flex-col w-[654px] ml-[135px]">
        <div className="text-[32px] w-[203px] h-[76px] text-darkgrey font-semibold mt-[79px] text-[#4C4C6D]">
          <p>Hallo,</p>
          <p>Selamat Pagi</p>
        </div>
        <div className="w-[430px] text-darkgrey mt-[114px] text-[#4C4C6D]">
          <form>
            <h2 className="text-center text-[36px] mb-[62px]">
              Login dengan akunmu
            </h2>
            <div>
              <label className="text-[14px]">E-mail address</label>
              <p>
                <div className="flex flex-row">
                  <input
                    className="text-[12px] h-[40px] w-[400px] border-b-2"
                    type="text"
                    placeholder="contoh@email.com"
                  />
                  <img className="-ml-9 h-7 mt-2" src={account} alt="/" />
                </div>
              </p>
            </div>
            <div>
              <label className="mt-3 text-[14px]">Password</label>
              <p>
                <div className="flex flex-row">
                  <input
                    className="text-[12px] h-[40px] w-[400px] border-b-2"
                    type="password"
                    placeholder="*************************"
                  />
                  <img className="-ml-9 h-7 mt-2" src={lock} alt="/" />
                </div>
              </p>
            </div>
            <div>
              <p className="mt-2 text-[14px]">
                <input type="checkbox" />
                Remember me?
                <a className="ml-[168px]" href="/">
                  Forget Password?
                </a>
              </p>
            </div>

            <button
              onclick={Dashboard}
              className="mb-20 mt-[74px] bg-[#E2B93B] w-[402px] rounded-2xl h-[57px] text-[24px] text-white font-bold"
            >
              Login
            </button>
          </form>
          <div className="w-[430px] text-center text-[14px] text-[#4C4C6D]">
            <a href="/">Butuh bantuan untuk login/ Bermasalah login?</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
