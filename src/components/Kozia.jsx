import { BsSuitSpadeFill } from "react-icons/bs";
import { TbDiamondsFilled } from "react-icons/tb";
import { PiHeartStraightFill } from "react-icons/pi";
import { TbClubsFilled } from "react-icons/tb";
import { useState } from "react";

const Kozia = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  return (
    <div className="w-full h-[80px] flex items-center justify-evenly bg-slate-500 text-slate-800 cursor-pointer ">
      <div
        className={
          activeButtonIndex === 0
            ? "activeCat"
            : "bg-orange-600 rounded-full  hover:bg-blue-700"
        }
        onClick={() => setActiveButtonIndex(0)}
      >
        <BsSuitSpadeFill size={50} />
      </div>
      <div
        className={
          activeButtonIndex === 1
            ? "activeCat"
            : "bg-orange-600 rounded-full  hover:bg-blue-700"
        }
        onClick={() => setActiveButtonIndex(1)}
      >
        <TbDiamondsFilled size={50} />
      </div>
      <div
        className={
          activeButtonIndex === 2
            ? "activeCat"
            : "bg-orange-600 rounded-full  hover:bg-blue-700"
        }
        onClick={() => setActiveButtonIndex(2)}
      >
        <PiHeartStraightFill size={50} />
      </div>
      <div
        className={
          activeButtonIndex === 3
            ? "activeCat"
            : "bg-orange-600 rounded-full  hover:bg-blue-700"
        }
        onClick={() => setActiveButtonIndex(3)}
      >
        <TbClubsFilled size={50} />
      </div>
    </div>
  );
};

export default Kozia;
