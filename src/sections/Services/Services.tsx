import { SectionTitle } from "@/src/components/ui";
import Logo from "@/src/assets/logo.png";
import Image from "next/image";

const mockInfo = [
  {
    id: 1,
    img: Logo,
    title: "Здания из металоконструкций под ключ",
    desc: "Полный цикл строительства быстровозводимых зданий: от проектирования до сдачи объекта",
  },
  {
    id: 2,
    img: Logo,
    title: "Здания из металоконструкций под ключ",
    desc: "Полный цикл строительства быстровозводимых зданий: от проектирования до сдачи объекта",
  },
  {
    id: 3,
    img: Logo,
    title: "Здания из металоконструкций под ключ",
    desc: "Полный цикл строительства быстровозводимых зданий: от проектирования до сдачи объекта",
  },
  {
    id: 4,
    img: Logo,
    title: "Здания из металоконструкций под ключ",
    desc: "Полный цикл строительства быстровозводимых зданий: от проектирования до сдачи объекта",
  },
  {
    id: 5,
    img: Logo,
    title: "Здания из металоконструкций под ключ",
    desc: "Полный цикл строительства быстровозводимых зданий: от проектирования до сдачи объекта",
  },
  {
    id: 6,
    img: Logo,
    title: "Здания из металоконструкций под ключ",
    desc: "Полный цикл строительства быстровозводимых зданий: от проектирования до сдачи объекта",
  },
];

export function Services() {
  return (
    <div className="flex flex-col h-screen w-full items-center justify-center">
      <SectionTitle text="Что мы делаем" />
      <h2>Наши услуги</h2>
      <p>
        Предоставляем полный спеткр услуг по строительству быстровозводимых
        зданий
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {mockInfo.map((info) => (
          <div key={info.id} className="border rounded-2xl p-8">
            <Image src={info.img} alt="img" className="size-22 rounded-2xl" />
            <h2>{info.title}</h2>
            <p>{info.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
