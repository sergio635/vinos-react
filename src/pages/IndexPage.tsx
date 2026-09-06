import { useAppStore } from '../stores/useAppStore'
import {Link} from 'react-router-dom'

const colorImages: Record<string, string> = {
  white: '/images/wine-white.svg',
  red: '/images/wine-red.svg',
  rose: '/images/wine-rose.svg',
}

function IndexPage() {
  const categories = useAppStore((state) => state.categories);
  const searchResults = useAppStore((state) => state.searchResults);

  // Si hubo búsqueda por texto, mostramos esos resultados; si no, los del filtro de color
  const wines = searchResults.length > 0 ? searchResults : categories;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Resultados</h1>

      {wines.length === 0 ? (
        <p className="text-gray-500">Usa el buscador para ver resultados aquí.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {wines.map((wine) => (
            <Link
              key={wine.id}
              to={`/vino/${wine.id}`}
              className="border border-[#A0522D] rounded-lg p-4 bg-[#F5F0E8] hover:shadow-lg transition"
            >
            <img
              src={colorImages[wine.color] ?? '/images/wine-default.svg'}
              alt={wine.display_name}
              className="w-full h-32  rounded mb-2"
            />
              <h2 className="font-bold text-[#3D2B1F]">{wine.display_name}</h2>
              <p className="text-sm text-[#A0522D]">Color: {wine.color}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default IndexPage