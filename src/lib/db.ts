import { neon } from '@neondatabase/serverless';

// Load environment variables
import 'dotenv/config';

if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL environment variable is not set');
}

// Create the database connection
const sql = neon(process.env.DATABASE_URL);

// Example query function
export async function testConnection() {
    try {
        const result = await sql`SELECT NOW();`;
        console.log('Database connection successful:', result);
        return { success: true, timestamp: result[0].now };
    } catch (error) {
        console.error('Database connection failed:', error);
        return { success: false, error };
    }
}
