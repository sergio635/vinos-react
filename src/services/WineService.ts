import axios from 'axios';
import { WinesAPIResponseSchema, WinesSearchAPIResponseSchema } from '../utils/wines-schema';

export async function getWines(color?: string) {
  const url = '/.netlify/functions/wines'; // ruta relativa, no la URL de GrapeMinds
  const response = await axios.get(url, {params: color ? { color } : {}});
  return WinesAPIResponseSchema.parse(response.data);
}


export async function searchWines(query: string){
  if(query.trim().length < 3){
    return { data: [], meta: { query, count: 0 } };
  }
  const url = '/.netlify/functions/wines-search';
  const response = await axios.get(url, { params: { q:query } });
  return WinesSearchAPIResponseSchema.parse(response.data);
}