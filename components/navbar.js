import { IoIosArrowDown } from "react-icons/io";
import { TiArrowRightThick } from "react-icons/ti";
import { IoReorderThreeOutline } from "react-icons/io5";


const Navbar = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#012323] to-[#01A1A4] xs:py-3 sm:py-3 md:py-5 lg:py-7  flex justify-between items-center">
        <button className="xs:ml-7 sm:ml-8 md:ml-11 lg:ml-16 bg-[#4C8183] w-[9.3rem] h-[2.688rem] text-white  ">
          Virtual Therpist
        </button>
        <IoReorderThreeOutline className="xs:block sm:hidden text-white text-5xl mr-6" />
        <div className="xs:hidden sm:mr-2 md:mr-4 lg:mr-8 px-12 xs:space-x-4 sm:space-x-4 md:space-x-5 lg:space-x-7 ">
          <button className="text-sm text-white font-semibold ">
            Our Doctors <IoIosArrowDown className=" inline text-black" />
          </button>
          <button className="text-sm text-white font-semibold">Signup</button>
          <button className="text-sm font-semibold rounded-md w-[6.063rem] h-[1.813rem] bg-[#41FCFF] ">
            Login
          </button>
        </div>
      </div>
      <div
        className="xs:hidden sm:h-[250px] md:h-[350px] lg:h-[500px] xl:h-[600px]  flex justify-start items-center w-screen  "
        style={{
          backgroundImage: `url(/img/Header.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
      >
        <div className="sm:ml-8  md:ml-11  lg:ml-16">
        <p className=" sm:text-lg md:text-2xl lg:text-clamp text-white">
          Meet Your Virtual Therapy Heroes:
        </p>
        <p className="  font-[700] text-white sm:text-2xl md:text-3xl lg:text-clamp2">
          Where Healing Meets Fun!
        </p>
        <button className=" md:mt-5 lg:mt-6 flex items-center font-[700] sm:text-[18px] md:text-[22px] rounded-md sm:px-2 sm:py-1 md:px-4 md:py-1 lg:px-6 lg:py-2 bg-[#A8F7D9] ">
          Get Started <TiArrowRightThick className="inline mx-3 sm:text-lg md:text-xl lg:text-2xl" />
        </button>
        </div>  
      </div>
      <div className=" sm:hidden w-screen h-[447px]"
      style={{
        backgroundImage: `url(/img/Header1.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
      }}>
        <div className="pt-8">
        <p className="text-white text-center font-light text-lg ">
        Meet Your Virtual Therapy Heroes:
        </p>
        <p className="font-bold text-[32px] text-white text-center ">
        Where Healing <br/> Meets Fun!
        </p>
        <button className=" bg-[#A8F7D9] px-3 py-1 rounded-md text-black mx-auto flex justify-center items-center font-semibold">Get Started <TiArrowRightThick className=" inline" /></button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
