"use client";

import { useEffect, useState } from "react";

const mockInfo = [
  { id: 1, value: "2024", desc: "Год основания" },
  { id: 2, value: "50+", desc: "Проектов" },
  { id: 3, value: "100%", desc: "Гарантия" },
];

const images = [
  "https://images.unsplash.com/photo-1515100665905-d66c4dea74ae?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1508125673219-7bb7d7e523b2?auto=format&fit=crop&w=1600&q=80",
];

export function Main() {
  const [imIndex, setimIndex] = useState(0);

  return (
    <div
      className="flex flex-col justify-center items-center gap-4 h-screen w-full "
      style={{
        backgroundImage: `url(${images[imIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col justify-center items-center gap-4 w-full h-full bg-gray-800/80">
        <h1 className="font-bold text-3xl text-white">
          Строительство быстровозводимых зданий под ключ
        </h1>
        <p className="text-white">От проектирования до сдачи объекта</p>
        <button className="bg-amber-600 p-2 rounded-xl">Получить смету</button>
        <div className="flex flex-row gap-10">
          {mockInfo.map((info) => (
            <div
              key={info.id}
              className="flex h-20 w-48 flex-col items-center justify-center bg-amber-500 rounded-xl"
            >
              <h2>{info.value}</h2>
              <p>{info.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
