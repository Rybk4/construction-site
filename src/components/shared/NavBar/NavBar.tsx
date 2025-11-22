import Image from "next/image";
import Logo from "@/src/assets/logo.png"

export function NavBar() {
  return (
    <div className="flex justify-around w-full items-center h-20 fixed top-0 bg-white z-50">
      <div className="flex flex-row gap-2 items-center">
        <Image
          src={Logo}
          alt="h"
          width={40}
          height={40}
          className="bg-amber-600"
        />
        <h2>Q17 Construction</h2>
      </div>
      <nav className="flex flex-row gap-4">
        <a href="">О компании</a>
        <a href="">Услуги</a>
        <a href="">Портфолио</a>
        <a href="">Отзывы</a>
        <a href="">Контакты</a>
      </nav>
      <button className="bg-amber-600 p-2 rounded-xl">Получить смету</button>
    </div>
  );
}
