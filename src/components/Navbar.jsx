import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { oneHundrend, twoHundrend, fourHundrend, oneThousand } from '../redux/features/numberSlice';
import { addValue } from "../redux/features/inputSlice";
import { addValue1 } from "../redux/features/input1Slice";

const Navbar = () => {
  // const addNumber = useSelector((state) => state.number.value);
  const value = useSelector((state) => state.value);
  const value1 = useSelector((state) => state.value1);
  const [form, setForm] = useState([]);
  const [form1, setForm1] = useState([]);
  const dispatch = useDispatch();

  const addToValue = (e) => {
    e.preventDefault();
    dispatch(addValue(form));
    setForm([]);
  };

  const addToValue1 = (e) => {
    e.preventDefault();
    dispatch(addValue1(form1));
    setForm1("");
  };
  let concat = value.value.reduce((acc, x) => acc.concat(+x.number), []);
  console.log(concat);
  const sum = concat.reduce((a, b) => a + b, 0);
  console.log(sum);

  let concat1 = value1.value1.reduce((acc, x) => acc.concat(+x.number), []);
  console.log(concat1);
  const sum1 = concat1.reduce((a, b) => a + b, 0);
  console.log(sum1);

  return (
    <div className="bg-[#EEEEEE] w-full h-[80px] flex items-center text-xl justify-evenly ">
      <p className="text-xl flex bg-red-400 p-3 rounded-full">{sum}</p>
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
        <button
          type="submit"
          onClick={addToValue}
          className="rounded-full bg-red-500 p-2 hover:scale-105"
        >
          add
        </button>{" "}
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
        <button
          type="submit"
          onClick={addToValue1}
          className="rounded-full bg-green-500 p-2 hover:scale-105"
        >
          add
        </button>{" "}
      </form>
      <p className="text-xl flex bg-green-400 p-2 rounded-full">{sum1}</p>
    </div>
  );
};

export default Navbar;
