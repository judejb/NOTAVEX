# Publish the Notavex Demo

This is a static site. No build step is required.

## Recommended: Netlify

1. Create a new site in Netlify.
2. Connect the GitHub repository or drag this project folder into Netlify.
3. Use these settings:
   - Build command: leave blank
   - Publish directory: `.`
4. The demo opens from `/` and `/demo`.

## Vercel

1. Create a new Vercel project.
2. Import the repository.
3. Use these settings:
   - Framework preset: Other
   - Build command: leave blank
   - Output directory: `.`
4. The demo opens from `/` and `/demo`.

## GitHub Pages

1. Push this folder to a GitHub repository.
2. Go to Settings > Pages.
3. Set source to the main branch and root directory.
4. The demo opens from the GitHub Pages URL.

## Local Preview

Run:

```bash
python3 -m http.server 4173
```

Then open:

```text
http://localhost:4173
```
