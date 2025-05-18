import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="bg-primary bg-gray-950 text-white py-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-2xl text-green-500 font-bold">Games Store</h1>
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-green-500 font-semibold'
                  : 'hover:text-secondary transition hover:text-green-500 hover:font-semibold'
              }
            >
              Início
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/games"
              className={({ isActive }) =>
                isActive
                  ? 'text-green-500 font-semibold'
                  : 'hover:text-secondary transition hover:text-green-500 hover:font-semibold'
              }
            >
              Explore
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sobre"
              className={({ isActive }) =>
                isActive
                  ? 'text-green-500 font-semibold'
                  : 'hover:text-secondary transition hover:text-green-500 hover:font-semibold'
              }
            >
              Sobre
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contato"
              className={({ isActive }) =>
                isActive
                  ? 'text-green-500 font-semibold'
                  : 'hover:text-secondary transition hover:text-green-500 hover:font-semibold'
              }
            >
              Contato
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;