# Md Ariful Haq — Personal Site

A lightweight, dependency-free personal landing page.

## Structure

- `index.html` — the whole page
- `css/site.css` — styles

No build step is required.

## Local preview

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000

## Deployment

Pushes to `master` are published to GitHub Pages by
`.github/workflows/deploy-pages.yml`. Set **Settings → Pages → Source** to
**GitHub Actions** for the workflow to take effect.
