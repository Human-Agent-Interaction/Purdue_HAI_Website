# Purdue HAI Lab — Website

React + Tailwind + Framer Motion single-page experience that showcases the Human-Agent Interaction (HAI) Lab at Purdue.

## Getting Started

```bash
npm install
npm run dev
```

The dev server defaults to `http://localhost:5173`.

## Structure

- `src/pages` — standalone route views matching the nav.
- `src/components` — shared UI elements such as the floating navigation, background, and footer.
- `src/data` — content for research pillars, projects, people, publications, stats, etc.

## Updating Lab Content

Most content lives in `src/data/labData.ts`. Edit this file to update copy, add new entries, or reorder items. When adding links or images, keep the object structure consistent with the surrounding examples.

### People
- Add new portraits (JPG/PNG) to `assets/people/` and create a matching import at the top of `src/data/labData.ts` (e.g., `import janeDoeImage from "../../assets/people/Jane_Doe.jpg";`).
- Update the `peopleGroups` array for group membership changes. Each person object supports `name`, `image`, `role`, `focus`, `bio`, and `links` (GitHub, Scholar, LinkedIn, Website).
- For principal investigator details, edit the dedicated `principalInvestigator` object near the top of `People.tsx` if titles or bio need revisions.

### Projects
- Edit the `projects` array in `src/data/labData.ts` to adjust titles, descriptions, tags, or links.
- If you add custom artwork, keep assets under `assets/islands/` (or another logical folder) and reference them by path in the `image` field.

### News
- Update the `newsItems` array in `src/data/labData.ts`. Each entry includes `title`, `date`, `summary`, `image`, and `link` (used on the News page for “Read story →” buttons).
- Add supporting imagery to `assets/news/` (create the folder if needed) and reference it via the `image` property.

### Publications
- Modify the `publications` array in `src/data/labData.ts` to add or reorder papers.
- Include any available resource URLs inside the nested `links` object (`pdf`, `video`, `code`).

### Previewing Changes

After editing content or assets, run `npm run dev` to preview locally or `npm run build` to ensure the project still builds successfully. Commit both the data updates and any new files under `assets/`.

### Deployment

Deployment is done on commit via the [lab Vercel](https://vercel.com/new?>teamSlug=hai-lab-sites-projects). 