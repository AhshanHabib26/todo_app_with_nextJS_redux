import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-secondary text-white">
        <div className="navbar-start">
          <span className=" text-2xl font-extrabold opacity-75">
            <Link href="/" className="btn btn-ghost">
              TodoApps
            </Link>
          </span>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link href='/todomanager'>
                <a>Add Todo</a>
              </Link>
            </li>
            <li>
              <Link href='/showtodos'>
                <a>Todo List</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn m-1">
              Get Started
            </label>
            <ul
              tabIndex="0"
              className="dropdown-content menu p-2 shadow  bg-secondary rounded-box w-52"
            >
              <li>
                <Link href="/register">
                  <a>Register</a>
                </Link>
              </li>
              <li>
                <Link href="/login">
                  <a>Login</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
