import React from "react";
import logo from "../assets/logo.png";
import { format } from 'date-fns';

const Header = () => {
    const now = new Date();
  return (
    
    <div className="flex flex-col justify-center items-center gap-3">
      <img className="w-[400]" src={logo} alt="" />
      <p className="text-accent">Journalism Without Fear or Favour</p>
      <p className="text-semibold text-accent">{format(now, "eeee, MMMM dd, yyyy")}</p>
    </div>
  );
};

export default Header;
