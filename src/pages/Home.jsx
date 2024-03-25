import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Home = () => {
  const [active, setActive] = useState(0);
  // const addNumber = useSelector((state) => state.number.value);
  const value = useSelector((state) => state.value);
  console.log(value);
  // const num1 = parseInt(val.number);
  // const num2 = parseInt(addNumber);
  // const sum = num1 + num2;

  const value1 = useSelector((state) => state.value1);
  console.log(value1);
  return (
    <div className="grid grid-cols-2">
      <div className={active === 0 ? 'active' : 'bg-slate-400 h-screen'} onClick={() => setActive(0)}>
        <h1 className="text-6xl text-center mb-4">Εμεις</h1>
        <hr className="border-b border-solid border-black" />
        <div className="text-5xl text-center mt-6 mb-6 flex flex-col gap-5 justify-center items-center text-red-300 ">
          {value.value.map((val) => (
            <p key={val.id} className="">
              {val.number}
            </p>
          ))}
         
        </div>
      </div>

      <div className={active === 1 ? 'active' : 'h-screen bg-slate-400'} onClick={() => setActive(1)}>
        <h1 className="text-6xl  text-white text-center mb-4">Αλλοι</h1>
        <hr className="border-b border-solid border-white " />
        <div className="text-5xl text-center mt-6 mb-6 flex flex-col gap-5 justify-center items-center text-green-300 ">
          {value1.value1.map((val1) => (
            <p key={val1.id} className="">
              {val1.number}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
