"use client";

import { useEffect, useState } from "react";

type User = {
  userName: string;
  userGender: string;
  bmi: number;
  time: string;
  expire: number;
};

type HistorProps = {
  itemsToShow?: number;
};

export default function History({ itemsToShow }: HistorProps) {
  const [users, setUsers] = useState<User[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const rawData = localStorage.getItem("UserData");
    setUsers(rawData ? JSON.parse(rawData) : []);

    const loadData = () => {
      const data = localStorage.getItem("UserData");
      setUsers(data ? JSON.parse(data) : []);
    };

    window.addEventListener("userDataUpdated", loadData);
    window.addEventListener("storage", loadData);

    return () => {
      window.removeEventListener("userDataUpdated", loadData);
      window.removeEventListener("storage", loadData);
    };
  }, []);

  const handleDelete = (index: number) => {
    const updated = [...users];
    updated.splice(index, 1);
    setUsers(updated);
    localStorage.setItem("UserData", JSON.stringify(updated));
  };

  if (!mounted) return null; 

  const displayedUsers = itemsToShow ? users.slice(0, itemsToShow) : users;

  return (
    <div className="w-full rounded-xl bg-white/5 backdrop-blur-2xl shadow-lg border border-[hsl(0,0%,15%)]">
      <h2 className="text-xl sm:text-2xl font-semibold border-b-1 px-4 sm:px-5 py-4 sm:py-5 border-[hsl(0,0%,20%)]">
        History
      </h2>
      <p className="text-s text-gray-400 italic px-5 sm:px-5 pt-5 lg:pb-2 pb-1">
        📜 Your BMI history is stored locally and will be available for up to 6 months.
      </p>
      <div className="px-4 sm:px-5 py-4 flex flex-col gap-3">
        {displayedUsers.length === 0 ? (
          <p className="text-gray-400 italic text-sm sm:text-base">No records found</p>
        ) : (
          displayedUsers.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-row justify-between items-center bg-[#ffffff14] px-3 sm:px-4 py-2.5 rounded-[6px] text-white font-medium overflow-hidden transition-all"
            >
              <div>
                <p className="capitalize text-base mb-1 sm:text-lg">{item.userName}</p>
                <p className="text-xs capitalize sm:text-sm text-gray-300">
                  {item.userGender} • {new Date(item.time).toLocaleDateString()}
                </p>
              </div>
              <div className="text-blue-400 font-bold text-sm pr-5 sm:text-lg">{item.bmi}</div>
              <div onClick={() => handleDelete(index)} className="absolute -top-0.5 right-2 text-gray-400 hover:text-gray-200 cursor-pointer font-bold text-lg transition-opacity duration-200 opacity-100 sm:opacity-0 group-hover:opacity-100" > × </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
