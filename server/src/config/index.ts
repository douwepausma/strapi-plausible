import z from 'zod';

export default {
    default: ({ env }) => ({
        plausibleInstance: 'https://plausible.io',
        domains: []
    }),
    validator: (config) => {
        const schema = z.object({
            plausibleInstance: z.string(),
            domains: z.array(z.object({
                name: z.string().min(1, 'Domain name is required').regex(/^(?!\-)(?:[a-zA-Z0-9\-]{1,63}(?<!\-)\.)+[a-zA-Z]{2,63}$/, 'Invalid domain name format, example: example.com'),
                auth: z.string().min(1, 'Auth token is required'),
            })),
        });

        return schema.parse(config);
    },
};