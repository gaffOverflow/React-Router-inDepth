import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function RootLayout() {
  const [toggle, setToggle] = useState(true);

  function activateToggle() {
    setToggle((prev) => !prev);
  }

  return (
    <div className="bg-backGround none  h-screen overflow-x-hidden text-white">
      <div className="font-STIX">
        <header className="border-b-2 fixed top-0 left-0 right-0 bg-backGround">
          <nav className="relative m-6 flex justify-between items-center px-4">
            <h1 className="border-orangeAccent border-b-4 font-bold">
              LOOBSTAR WORLD!
            </h1>
            <Icon
              icon="line-md:menu-fold-left"
              onClick={activateToggle}
              className="font-extrabol cursor-pointer text-xl md:hidden border-x-2 m-1"
            />
            <div
              className={`absolute -right-9 -top-6 flex h-screen w-[45vw] flex-col gap-3 pt-5 text-center backdrop-blur-3xl duration-200 md:static md:h-auto md:w-auto md:flex-row md:pt-0 md:backdrop-blur-0 ${
                toggle ? "-right-[60vw]" : ""
              } `}
              onClick={activateToggle}
            >
              <NavLink to="/" className="px-4 py-2 ">
                Home
              </NavLink>
              <NavLink to="about" className="px-4 py-2">
                About
              </NavLink>

              <NavLink to="help" className="px-4 py-2">
                Help
              </NavLink>
            </div>
          </nav>
        </header>
        <main className="m-6 mt-28">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
