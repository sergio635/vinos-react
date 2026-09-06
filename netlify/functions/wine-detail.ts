import type { Handler } from '@netlify/functions';

const API_KEY = process.env.GRAPEMINDS_API_KEY;

export const handler: Handler = async (event) => {
    try {
        const id = event.path.split('/').pop();
        const response = await fetch(
            `https://api.grapeminds.eu/public/v1/wines/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${API_KEY}`,
                    'Accept-Language': 'en',
                }
            }
        );
        const data = await response.json();
        return {
            statusCode: response.status,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        };
    }
    catch (error) {
        console.error('Error fetching wine details:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to fetch wine details' }),
        };
    }
}