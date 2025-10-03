"use client";
import { useState } from "react"
import Image from 'next/image'

export default function BmiCard({ setBmi, setUsername, setUserGender }: { setBmi: (val: number) => void, setUsername: (val: string) => void, setUserGender: (val: string | null) => void }) {

  const [gender, setGender] = useState<string | null>(null);

  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);

  const [name, setName] = useState<string>("");

  const calculateBMI = () => {
    if (!name) {
      alert("Please enter your name");
      return;
    }
    if (height <= 0 || weight <= 0) {
      alert("Height and Weight must be bigger than 0");
      return;
    }

    const heightInMeters = height / 100;
    const bmiResult = +(weight / (heightInMeters * heightInMeters)).toFixed(1);
    setBmi(bmiResult);
    setUsername(name);
    setUserGender(gender);
  };


  return (
    <div className="w-full rounded-xl bg-white/5 backdrop-blur-2xl shadow-lg border border-[hsl(0,0%,15%)]">
      <h2 className="text-2xl font-semibold border-b-1 px-5 py-5 border-[hsl(0,0%,20%)]">
        BMI Calculator
      </h2>

      <div className="flex flex-col md:flex-row gap-y-2.5 gap-x-5 justify-between px-5 py-8 pb-0">
        <input
          type="text"
          name="Name"
          id="UserName"
          className="w-full sm:flex py-2 flex-1/2 md:w-[200px] md:h-[40px] rounded-[5px] bg-[#ffffff14] focus:outline-none focus:ring-white focus:ring-1 focus:border-white text-center text-white placeholder:text-white font-semibold text-[16px] capitalize"
          placeholder="Your Name"
          required
          onChange={(e) => setName(e.target.value)}
        />

        <ul className="flex flex-1/2 flex-nowrap items-center gap-2 w-full md:w-auto justify-center md:justify-start">
          <li onClick={() => setGender("male")} className={`text-[16px] font-semibold flex items-center justify-center gap-2 bg-[#ffffff14] px-6 md:px-8 py-2 rounded-[5px] cursor-pointer flex-1/2 md:flex-none ${gender === "male" ? "activeTab" : "bg-[#ffffff14]"}`} >
            Male
            <Image
              src="/male.svg"
              width={15}
              height={15}
              alt="male"
              className="invert"
            />
          </li>

          <li onClick={() => setGender("female")} className={`text-[16px]  font-semibold flex items-center justify-center gap-1 bg-[#ffffff14] px-6 md:px-6 py-2 rounded-[5px] cursor-pointer flex-1/2 md:flex-none ${gender === "female" ? "activeTab" : "bg-[#ffffff14]"}`}>
            Female
            <Image
              src="/female.svg"
              width={15}
              height={15}
              alt="female"
              className="invert"
            />
          </li>
        </ul>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-5 px-5 py-5">
        <div className="w-full">
          <strong className="text-xl">Height</strong>
          <div className="flex items-center gap-2 my-5">
            <input
              type="text"
              name="height"
              id="heightInput"
              className="w-full max-w-[120px] h-[35px] rounded-[5px] bg-[#ffffff14] focus:outline-none focus:ring-white focus:ring-1 focus:border-white text-center text-white"
              placeholder="0"
              value={height}
              min={0}
              max={280}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value)) setHeight(Number(value));
              }}
              required
            />
            <label htmlFor="heightInput" className="text-[15px]">
              Centimeters
            </label>
          </div>
          <input
            type="range"
            id="heightRange"
            className="w-full md:w-[200px]"
            min={0}
            max={280}
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
          />
        </div>
        <div className="w-full">
          <strong className="text-xl">Weight</strong>
          <div className="flex items-center gap-2 my-5">
            <input
              type="text"
              name="weight"
              id="weightInput"
              className="w-full max-w-[140px] h-[35px] rounded-[5px] bg-[#ffffff14] focus:outline-none focus:ring-white focus:ring-1 focus:border-white text-center text-white"
              placeholder="0"
              value={weight}
              min={0}
              max={250}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value)) setWeight(Number(value));
              }}
              required
            />
            <label htmlFor="weightInput" className="text-[15px]">Kilograms</label>
          </div>
          <input
            type="range"
            id="weightRange"
            className="w-full md:max-w-[200px]"
            min={0}
            max={250}
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
          />
        </div>
      </div>

      <div className="px-5 lg:pt-5 pb-6">
        <button className="w-full py-2 rounded-[6px] font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-400 cursor-pointer shadow-md hover:shadow-lg hover:from-blue-700 hover:to-blue-500 transition-all duration-300" onClick={() => calculateBMI()} >
          Calculate
        </button>
      </div>
    </div>
  );

}

