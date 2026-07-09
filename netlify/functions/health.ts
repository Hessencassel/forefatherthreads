export default async (req: Request) => Response.json({ ok: true, ts: Date.now() });

export const config = {
  path: '/api/health',
};
