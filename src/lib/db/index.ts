import { neon, neonConfig } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'

neonConfig.fetchConnectionCache = true; // cache all the connection so that it doesnt repeat connecting new connection when we reload page

if(!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not defined');
}

const sql = neon(process.env.DATABASE_URL); // invoke the neon function with the database url

export const db = drizzle(sql);