import { Link, useLocation } from "react-router-dom";
import { useMemo, useEffect } from "react";
import Logo from "../assets/logo.svg";
import { useAppStore } from "../stores/useAppStore";

function Header() {
  const location = useLocation();
  const isHome = useMemo(() => location.pathname === '/', [location.pathname]);

  const fetchCategories = useAppStore((state) => state.fetchCategories);
  const categories = useAppStore((state) => state.categories);

  useEffect(() => {
    fetchCategories();
  }, []);

  // Extrae los colores únicos disponibles en los datos (white, red, rosé, etc.)
  const colors = useMemo(() => {
    const unique = new Set(categories.map((wine) => wine.color));
    return Array.from(unique);
  }, [categories]);

  // Traducción SOLO para mostrar en pantalla, el value real sigue en inglés
  const colorLabels: Record<string, string> = {
    white: 'Blanco',
    red: 'Tinto',
    rosé: 'Rosado',
    rose: 'Rosado',
  };

  return (
    <header className="bg-cover bg-center relative" style={{ backgroundImage: 'url(/images/header.jpg)' }}>
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex justify-between items-center">
          <img src={Logo} alt="Logo" className="w-70 h-33 object-contain " />
        </div>
        <nav className="flex gap-4">
          <Link to="/" className="text-white hover:text-[#C4A35A] font-bold">Inicio</Link>
          <Link to="/favoritos" className="text-white hover:text-[#C4A35A] font-bold">Favoritos</Link>
        </nav>
      </div>
      <div>
        {isHome && (
          <form className=" md:w-1/2 2xl:w-1/3 my-32 bg-[#F5F0E8] p-10 shadow space-y-6">
            <div className='space-y-4'>
              <label
                htmlFor="display_name"
                className="block font-extrabold text-[#3D2B1F] uppercase"
              >
                Nombre
              </label>
              <input
                type="text"
                name="display_name"
                id="display_name"
                className="p-3 w-full rounded-lg bg-[#F5F0E8] text-[#A0522D] placeholder:text-[#A0522D] border border-[#A0522D] focus:ring-[#C4A35A] focus:outline-none"
                placeholder="Buscar por nombre... Ej: Vino tinto, Vino blanco, Manzana, etc..."
              />
            </div>
            <div className='space-y-4'>
              <label
                htmlFor="color"
                className="block font-extrabold text-[#3D2B1F] uppercase"
              >
                Tipo de Vino
              </label>
              <select
                name="color"
                id="color"
                className="p-3 w-full rounded-lg bg-[#F5F0E8] text-[#A0522D] placeholder:text-[#A0522D] border border-[#A0522D] focus:ring-[#C4A35A] focus:outline-none"
              >
                <option value="">-- Seleccione --</option>
                {colors.map((color) => (
                  <option key={color} value={color}>
                    {colorLabels[color] ?? color}
                  </option>
                ))}
              </select>
            </div>
            <input
              type="submit"
              value="Buscar"
              className="cursor-pointer bg-[#3D2B1F] hover:bg-[#6B4226] text-white font-extrabold w-full p-2 rounded-lg uppercase"
            />
          </form>
        )}
      </div>
      <div className="bg-[#C4A35A] h-0.5 w-dvw"></div>
    </header>
  )
}

export default Header