import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {


  return (
    <nav className="bg-orange-950 text-white">
      <div className="container mx-auto flex justify-between items-center p-12 h-10 px-10%">
        <NavLink to="/" className="text-2xl font-bold">
          SchoolGo
        </NavLink>
        <div className="flex gap-10 font-bold">
          <NavLink
            to="/"
            exact
            className="text-white hover:bg-yellow-700 px-3 py-2 rounded"
            activeClassName="bg-blue-500"
          >
            Página Inicial
          </NavLink>
          <NavLink
            to="/users"
            className="text-white hover:bg-yellow-700 px-3 py-2 rounded"
            activeClassName="bg-blue-500"
          >
            Estudantes
          </NavLink>
          <NavLink
            to="/about"
            className="text-white hover:bg-yellow-700 px-3 py-2 rounded"
            activeClassName="bg-blue-500"
          >
            Contatos
          </NavLink>
          
        </div>
        
      </div>

    </nav>
    
  );
};

export default Header;
