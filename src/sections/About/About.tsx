import Logo from "@/src/assets/logo.png";
import Image from "next/image";
import { SectionTitle } from "@/src/components/ui";

const mockInfo = [
  { id: 1, img: Logo, title: "2024", desc: "Год основания" },
  { id: 2, img: Logo, title: "Казахстан", desc: "География работы" },
  { id: 3, img: Logo, title: "Под ключ", desc: "Полный цикл работ" },
];

const mockInfo2 = [
  { id: 1, title: "Быстрые сроки строительства" },
  { id: 2, title: "Гарантии качества" },
  { id: 3, title: "Полный цикл работ" },
  { id: 4, title: "Собственное производство" },
];

export function About() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full gap-12">
      <SectionTitle text="О компании"/>
      <h2 className="text-5xl">TOO Q17 Construction</h2>
      <div className="grid grid-cols-3 gap-8">
        {mockInfo.map((info) => (
          <div
            key={info.id}
            className="flex flex-col rounded-xl border items-center justify-center p-8 gap-2"
          >
            <Image src={info.img} alt="img" className="size-20" />
            <h3 className="text-3xl">{info.title}</h3>
            <p>{info.desc}</p>
          </div>
        ))}
      </div>
      <div className="bg-gray-800 p-10 grid grid-cols-2 gap-6 rounded-2xl">
        {mockInfo2.map((info) => (
          <div
            key={info.id}
            className="flex flex-row items-center p-6 bg-gray-500 gap-2 rounded-2xl"
          >
            <Image src={Logo} alt="img" className="size-6" />
            <p>{info.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
