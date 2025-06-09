import type { APIRoute } from 'astro';
import { testConnection } from '../../../lib/db';

export const GET: APIRoute = async () => {
    try {
        const result = await testConnection();
        return new Response(
            JSON.stringify(result),
            {
                status: result.success ? 200 : 500,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    } catch (error) {
        console.error('API Error:', error);
        return new Response(
            JSON.stringify({ 
                success: false, 
                error: error instanceof Error ? error.message : 'Unknown error' 
            }),
            {
                status: 500,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    }
};
