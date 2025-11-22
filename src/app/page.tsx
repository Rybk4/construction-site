import { NavBar } from "@/src/components/shared";
import { Main } from "@/src/sections";
import { About } from "@/src/sections";
import { Services } from "@/src/sections";

export default function MainPage() {
  return (
    <>
      <NavBar />
      <Main />
      <div className="max-w-7xl flex justify-center flex-col items-center m-auto">
        <About />
        <Services />
      </div>
    </>
  );
}
