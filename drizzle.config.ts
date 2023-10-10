import type { Config } from 'drizzle-kit'
import * as dotenv from 'dotenv'

dotenv.config({ // telling this file where the .env is at
    path: '.env',
});

export default {
    driver: 'pg',
    schema: './src/lib/db/schema.ts',
    dbCredentials: {
        connectionString: process.env.DATABASE_URL!,
    }
} satisfies Config