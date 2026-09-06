import type { Handler } from '@netlify/functions';

const API_KEY = process.env.GRAPEMINDS_API_KEY;

export const handler: Handler = async (event) => {
  try {
    const queryString = event.rawQuery ? `?${event.rawQuery}` : '';
    const response = await fetch(
      `https://api.grapeminds.eu/public/v1/wines/search${queryString}`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    const data = await response.json();

    return {
      statusCode: response.status,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error al conectar con GrapeMinds' }),
    };
  }
};