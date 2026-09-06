import axios from 'axios';
import { WinesAPIResponseSchema } from '../utils/wines-schema';

export async function getWines(color?: string) {
  const url = '/.netlify/functions/wines'; // ruta relativa, no la URL de GrapeMinds
  const response = await axios.get(url, {params: color ? { color } : {}});
  return WinesAPIResponseSchema.parse(response.data);
}


export async function searchWines(query: string){
  const response = await axios.get('/.netlify/functions/wines-search', { params: { q:query } });
  return response.data;
}