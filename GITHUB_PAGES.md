# GitHub Pages Setup

To enable GitHub Pages for this branch and share a live preview of the prototype:

## Steps to Enable GitHub Pages

1. Go to the repository on GitHub: https://github.com/bryannegrete10/bypeople
2. Click on **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select:
   - **Branch**: `copilot/add-static-visual-prototype`
   - **Folder**: `/ (root)` or `/prototype` 
5. Click **Save**
6. Wait a few minutes for deployment

## Access the Prototype

Once enabled, the prototype will be available at:
- Root deployment: `https://bryannegrete10.github.io/bypeople/prototype/`
- Or if /prototype is selected as root: `https://bryannegrete10.github.io/bypeople/`

## Alternative: Direct File Access

The prototype can also be viewed locally by:
1. Cloning this branch
2. Opening `prototype/index.html` directly in a browser
3. Or running a local server: `cd prototype && python3 -m http.server 8080`

## Files Structure for GitHub Pages

```
/
├── .nojekyll          # Disables Jekyll processing
├── prototype/
│   ├── index.html     # Main prototype page
│   ├── styles.css     # Styles
│   ├── script.js      # Interactivity
│   └── README.md      # Prototype documentation
└── GITHUB_PAGES.md    # This file
```

The `.nojekyll` file ensures GitHub Pages serves the files as-is without Jekyll processing.
