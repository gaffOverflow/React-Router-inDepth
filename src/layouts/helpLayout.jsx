import { Outlet, NavLink } from "react-router-dom";

export default function Help() {
  return (
    <div className="flex flex-col gap-6 px-4">
      <h1 className="font-extrabold">Website Help ⁉</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
        officiis eum ex officia quidem aliquam quos ducimus possimus. Quaerat
        consequuntur inventore officia voluptatibus rem, dolor fugiat illum!
        Voluptatibus illum reiciendis perferendis, ab nulla nesciunt. Distinctio
        exercitationem explicabo atque eos! Voluptatibus.
      </p>
      <button className="bg-orangeAccent w-20 p-2 text-sm">Layout</button>
      <div>
        <nav className="item-center flex justify-center gap-4 p-4">
          <NavLink
            to="faq"
            className="rounded-sm border-2 p-[.8rem] text-sm font-semibold"
          >
            View the FAQ
          </NavLink>
          <NavLink
            to="contact"
            className="rounded-sm border-2 p-[.8rem] text-sm font-semibold"
          >
            Contact Us
          </NavLink>
        </nav>
        <Outlet />
      </div>
    </div>
  );
}
