import {useAppStore} from '../stores/useAppStore'
import { useEffect } from 'react'
function IndexPage() {
  const categories = useAppStore((state) => state.categories)
  const searchResults = useAppStore((state) => state.searchResults)

return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Resultados</h1>

      {wines.length === 0 ? (
        <p className="text-gray-500">Usa el buscador para ver resultados aquí.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {wines.map((wine) => (
            <div key={wine.id} className="border border-[#A0522D] rounded-lg p-4 bg-[#F5F0E8]">
              <h2 className="font-bold text-[#3D2B1F]">{wine.display_name}</h2>
              <p className="text-sm text-[#A0522D]">Color: {wine.color}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default IndexPage