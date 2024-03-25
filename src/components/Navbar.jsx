import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { oneHundrend, twoHundrend, fourHundrend, oneThousand } from '../redux/features/numberSlice';
import { addValue } from '../redux/features/inputSlice';
import { addValue1 } from '../redux/features/input1Slice';

const Navbar = () => {
  // const addNumber = useSelector((state) => state.number.value);
  const value = useSelector((state) => state.value);
  const value1 = useSelector((state) => state.value);
  const [form, setForm] = useState('');
  const [form1, setForm1] = useState('');
  const dispatch = useDispatch();

  const addToValue = (e) => {
    e.preventDefault();
    dispatch(addValue(form));
    setForm('');
  };

  const addToValue1 = (e) => {
    e.preventDefault();
    dispatch(addValue1(form1));
    setForm1('');
  };

  // console.log(addNumber);

  return (
    <div className="bg-[#EEEEEE] w-full h-[80px] flex items-center text-xl justify-evenly ">
      {/* <button onClick={() => dispatch(oneHundrend())} className="rounded-full bg-red-400 p-2 hover:scale-105">
        100
      </button>
      <button onClick={() => dispatch(twoHundrend())} className="rounded-full bg-red-400 p-2 hover:scale-105 ">
        200
      </button>
      <button onClick={() => dispatch(fourHundrend())} className="rounded-full bg-red-400 p-2 hover:scale-105">
        400
      </button>
      <button onClick={() => dispatch(oneThousand())} className="rounded-full bg-red-400 p-2 hover:scale-105">
        1000
      </button> */}
      <form
        className="flex
      gap-2"
        onSubmit={addToValue}
      >
        <input
          className="max-w-[100px] shadow appearance-none border  w-full py-2 px-4 text-slate-700 leading-tight focus:outline-none rounded-full focus:shadow-outline"
          type="text"
          placeholder="points.."
          value={form}
          onChange={(e) => setForm(e.target.value)}
        />
        <button type="submit" onClick={addToValue} className="rounded-full bg-red-500 p-2 hover:scale-105">
          add
        </button>{' '}
      </form>
      <form
        className="flex
      gap-2"
        onSubmit={addToValue1}
      >
        <input
          className="max-w-[100px] shadow appearance-none border  w-full py-2 px-4 text-slate-700 leading-tight focus:outline-none rounded-full focus:shadow-outline"
          type="text"
          placeholder="points.."
          value={form1}
          onChange={(e) => setForm1(e.target.value)}
        />
        <button type="submit" onClick={addToValue1} className="rounded-full bg-green-500 p-2 hover:scale-105">
          add
        </button>{' '}
      </form>
      {/* <button className="rounded-full bg-slate-500 p-2 hover:scale-105">
        Clear
      </button>{" "} */}
    </div>
  );
};

export default Navbar;
