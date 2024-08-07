import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Aula 1", href: "/aula1" },
  { name: "Aula 2", href: "/aula2" },
  { name: "About", href: "/about" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Funcef</span>
            <img
              alt=""
              src="https://www.funcef.com.br/funcef/portal/img/lgo/funcef.png?color=indigo&shade=600"
              className="h-8 w-auto"
            />
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link to={item.href}>
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to="/login">
            <a
              href="/login"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
