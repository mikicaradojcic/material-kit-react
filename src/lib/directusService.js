import { Directus } from "@directus/sdk";


export const directusService = new Directus(process.env.NEXT_PUBLIC_DIRECTUS_URL);