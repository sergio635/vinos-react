import axios from 'axios';
import { WinesAPIResponseSchema } from '../utils/wines-schema';

export async function getWines() {
  const url = '/.netlify/functions/wines'; // ruta relativa, no la URL de GrapeMinds
  const response = await axios.get(url);
  return WinesAPIResponseSchema.parse(response.data);
}