import axios from 'axios';
import { WinesAPIResponseSchema, WinesSearchAPIResponseSchema, WineDetailSchema } from '../utils/wines-schema';

export async function getWines(color?: string, per_page: number = 15) {
  const url = '/.netlify/functions/wines'; // ruta relativa, no la URL de GrapeMinds
  const response = await axios.get(url, {
    params: {...(color ? { color } : {}), per_page},
  });
  return WinesAPIResponseSchema.parse(response.data);
}

export async function getWineDetail(id: number) {
  const url = `/.netlify/functions/wine-detail/${id}`;
  const response = await axios.get(url);
  return WineDetailSchema.parse(response.data);
}

export async function searchWines(query: string, limit: number = 20) {
  if(query.trim().length < 3){
    return { data: [], meta: { query, count: 0 } };
  }
  const url = '/.netlify/functions/wines-search';
  const response = await axios.get(url, { params: { q:query, limit } });
  return WinesSearchAPIResponseSchema.parse(response.data);
}