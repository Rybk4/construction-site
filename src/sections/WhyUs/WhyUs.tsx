import { SectionTitle } from "@/src/components/ui";
import Logo from "@/src/assets/logo.png";
import Image from "next/image";

const mockInfo = [
  {
    id: 1,
    img: Logo,
    title: "Быстровозводимость",
    desc: "Строим в 3-4 раза быстрее традиционных методов благодаря технологии БМЗ",
  },
  {
    id: 2,
    img: Logo,
    title: "Быстровозводимость",
    desc: "Строим в 3-4 раза быстрее традиционных методов благодаря технологии БМЗ",
  },
  {
    id: 3,
    img: Logo,
    title: "Быстровозводимость",
    desc: "Строим в 3-4 раза быстрее традиционных методов благодаря технологии БМЗ",
  },
  {
    id: 4,
    img: Logo,
    title: "Быстровозводимость",
    desc: "Строим в 3-4 раза быстрее традиционных методов благодаря технологии БМЗ",
  },
  {
    id: 5,
    img: Logo,
    title: "Быстровозводимость",
    desc: "Строим в 3-4 раза быстрее традиционных методов благодаря технологии БМЗ",
  },
];

export function WhyUs() {
  return (
    <div className="bg-gray-600">
      <div className="flex flex-col h-screen w-full items-center justify-center gap-4 max-w-7xl m-auto text-white">
        <SectionTitle text="Наши преимущества" />
        <h2>Почему выбирают нас</h2>
        <p>Мы предлагаем оптимальное сочетание скорости,качества и цены</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
          {mockInfo.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-4 items-center justify-center bg-gray-500 rounded-2xl p-4"
            >
              <Image
                src={item.img}
                alt={item.title}
                className="size-20 rounded-2xl"
              />
              <h3>{item.title}</h3>
              <p className="text-center">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-row gap-4 items-center justify-center bg-gray-500 rounded-2xl p-10">
          <div>
            <h2>15+</h2>
            <p>Лет опыта</p>
          </div>
          <div className="w-1 h-10 bg-white rounded-full" />
          <div>
            <h2>500+</h2>
            <p>Довольных клиентов</p>
          </div>
          <div className="w-1 h-10 bg-white rounded-full" />
          <div>
            <h2>1000+</h2>
            <p>Реализованных м²</p>
          </div>
        </div>
      </div>
    </div>
  );
}
