import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getWineDetail } from '../services/WineService';
import type { WineDetail } from '../utils/wines-schema';

const colorImages: Record<string, string> = {
  white: '/images/wine-white.svg',
  red: '/images/wine-red.svg',
  rose: '/images/wine-rose.svg',
};

function WineDetailPage() {
  const { id } = useParams();
  const [wine, setWine] = useState<WineDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    getWineDetail(Number(id))
      .then(setWine)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="p-8">Cargando...</p>;
  if (!wine) return <p className="p-8">No se encontró el vino.</p>;

  return (
    <div className="container mx-auto p-8 max-w-3xl">
      <Link to="/" className="text-[#A0522D] underline">&larr; Volver</Link>

      <div className="bg-[#F5F0E8] rounded-lg shadow p-6 mt-4">
        <img
          src={colorImages[wine.color] ?? '/images/wine-default.jpg'}
          alt={wine.display_name}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

        <h1 className="text-2xl font-bold text-[#3D2B1F]">{wine.display_name}</h1>
        <p className="text-[#A0522D]">
          {wine.producer.display_name} — {wine.region.name}, {wine.region.country}
        </p>

        <div className="mt-4 flex gap-3 text-sm">
          <span className="px-2 py-1 bg-[#C4A35A] text-white rounded">{wine.color}</span>
          <span className="px-2 py-1 bg-[#C4A35A] text-white rounded">{wine.sub_type}</span>
          {wine.residual_sugar && (
            <span className="px-2 py-1 bg-[#C4A35A] text-white rounded">{wine.residual_sugar}</span>
          )}
        </div>

        {wine.description?.text && (
          <div className="mt-6">
            <h2 className="font-bold text-[#3D2B1F] uppercase">Descripción</h2>
            <p className="text-[#3D2B1F]">{wine.description.text}</p>
          </div>
        )}

        {wine.tasting_notes?.text && (
          <div className="mt-6">
            <h2 className="font-bold text-[#3D2B1F] uppercase">Notas de cata</h2>
            <p className="text-[#3D2B1F]">{wine.tasting_notes.text}</p>
          </div>
        )}

        {wine.pairing?.text && (
          <div className="mt-6">
            <h2 className="font-bold text-[#3D2B1F] uppercase">Maridaje</h2>
            <p className="text-[#3D2B1F]">{wine.pairing.text}</p>
          </div>
        )}

        {wine.grapes && wine.grapes.length > 0 && (
          <div className="mt-6">
            <h2 className="font-bold text-[#3D2B1F] uppercase">Uvas</h2>
            <p className="text-[#3D2B1F]">{wine.grapes.map(g => g.name).join(', ')}</p>
          </div>
        )}

        {wine.flavor_profile && (
          <div className="mt-6">
            <h2 className="font-bold text-[#3D2B1F] uppercase mb-2">Perfil de sabor</h2>
            <div className="space-y-1 text-sm text-[#3D2B1F]">
              <div>Dulzura: {wine.flavor_profile.sweetness}/10</div>
              <div>Acidez: {wine.flavor_profile.acidity}/10</div>
              <div>Taninos: {wine.flavor_profile.tannins}/10</div>
              <div>Alcohol: {wine.flavor_profile.alcohol}/10</div>
              <div>Cuerpo: {wine.flavor_profile.body}/10</div>
              <div>Final: {wine.flavor_profile.finish}/10</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default WineDetailPage