import { Directus } from "@directus/sdk";


export const directusService = new Directus(process.env.NEXT_PUBLIC_DIRECTUS_URL, { auth: { mode: 'cookie', autoRefresh: 'true' } });
export const anonimousDirectusService = new Directus(process.env.NEXT_PUBLIC_DIRECTUS_URL, { storage:{prefix:'statX_'}, auth: { staticToken : process.env.NEXT_PUBLIC_DIRECTUS_STATIC_TOKEN } });
