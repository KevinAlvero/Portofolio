import { NavLink } from "react-router-dom";
import CV from '../assets/CV.pdf';

const Navbar = () => {
  return (
    <header className="header">
        <NavLink to="/" className="w-10 h-10 rounded-lg bg-blue-200 items-center justify-center flex font-bold shadow-md">
            <p className="bg-gradient-to-r from-blue-600 to-green-800 bg-clip-text text-transparent font-semibold drop-shadow">KAS</p>
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium">
            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-blue-200'}>
                About
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-blue-200'}>
                Projects
            </NavLink>
            <a href={CV} download="KevinAlvero_CV.pdf" className="text-blue-200 hover:text-blue-500">
                Download CV
            </a>
        </nav>
    </header>
  );
}

export default Navbar;
