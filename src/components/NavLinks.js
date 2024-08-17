import React from "react";
import { NavLink } from "react-router-dom";
import links from "../utils/links";
import { toggleSidebar } from "../features/user/userSlice";
import { useDispatch } from "react-redux";

function NavLinks() {
  const dispatch = useDispatch();
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { icon, path, text, id } = link;
        return (
          <NavLink
            to={path}
            key={id}
            className={({ isActive }) => {
              return isActive ? "nav-link active" : "nav-link";
            }}
            onClick={() => dispatch(toggleSidebar())}
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
}

export default NavLinks;
