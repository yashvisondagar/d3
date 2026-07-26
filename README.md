# D3 Studio

Dream Design Dwell — interior design studio website (Next.js App Router).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Replace demo images

Demo photos use Unsplash URLs. To use your own (~20 per location):

1. Drop files into `public/projects/<location-id>/`  
   Location ids: `andheri`, `khar`, `malad`, `parel`, `prabhadevi`, `lower-parel`, `bandra`
2. Update `src/data/locations.ts` — set `src` to `/projects/<location-id>/your-file.jpg`

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm test` — Vitest unit/component tests
