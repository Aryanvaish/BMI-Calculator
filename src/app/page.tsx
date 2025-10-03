"use client";

import { useCallback, useEffect, useState } from "react";
import BmiCard from "../../components/layouts/bmiCard";
import HomeScore from "../../components/layouts/homeScore";
import InformationCard from "../../components/layouts/informationCard";
import History from "../../components/layouts/historyCard";
import Footer from "../../components/layouts/footer";

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';


type User = {
  userName: string;
  userGender: string;
  bmi: number;
  time: string;
  expire: number;
};

export default function Home() {
  const [bmi, setBmi] = useState<number | null>(null);
  const [userName, setUsername] = useState<string>("");
  const [userGender, setUserGender] = useState<string | null>(null);

  const saveData = useCallback(() => {
    if (!userName || !userGender || !bmi) return;

    const expiry = new Date();
    expiry.setMonth(expiry.getMonth() + 6);

    const newUser: User = {
      userName,
      userGender,
      bmi,
      time: new Date().toISOString(),
      expire: expiry.getTime(),
    };

    const rawData = localStorage.getItem("UserData") || "[]";
    let users: User[] = JSON.parse(rawData);

    const now = Date.now();
    users = users.filter((user: User) => user.expire > now);

    users.push(newUser);
    localStorage.setItem("UserData", JSON.stringify(users));

    window.dispatchEvent(new Event("userDataUpdated"));

    // console.log("Saved:", newUser);
    // console.log("All Users:", users);
  }, [userName, userGender, bmi]);

  useEffect(() => {
    saveData();
  }, [saveData]);

  return (
    <div className="font-sans">
      <div className="max-w-[1200px] w-full flex flex-col items-center m-auto px-4">
        <h1 className="text-3xl sm:text-5xl lg:leading-15 leading-10 font-semibold mt-8 lg:mt-12 mb-5 text-center">
          Track Your Health With an Easy BMI Calculator
        </h1>
        <h2 className="text-sm sm:text-lg lg:leading-8 leading-6 font-medium text-center px-4 sm:px-20 mb-6 lg:mb-10">
          Body Mass Index (BMI) is a quick way to estimate whether your weight is
          in a healthy range for your height. While it works the same for adult men
          and women, BMI doesn’t tell the full story — it doesn’t account for muscle,
          bone strength, or overall body composition. Think of it as a starting point,
          not the final answer. For a complete picture of your health, always pair
          your BMI with professional medical advice.
        </h2>
        <div className="w-full flex flex-col lg:flex-row flex-wrap items-center gap-5">
          <div className="w-full flex flex-col lg:flex-row items-center gap-5">
            <BmiCard setBmi={setBmi} setUsername={setUsername} setUserGender={setUserGender} />
            <InformationCard />
          </div>
          {bmi && bmi > 0 && (
            <div className="w-full">
              <HomeScore bmi={bmi} userName={userName} />
            </div>
          )}
          <div className="w-full">
            <History />
          </div>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </div>
      </div>
    </div>
  );
}
