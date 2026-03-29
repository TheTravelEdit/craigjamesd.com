# CJ Davitt — craigjamesd.com

Artist website for CJ Davitt, Angling Artist · Sandy Hook, NJ.

## File Structure

```
/
├── index.html          # Main site
├── images/             # All painting photos
│   ├── cover-row-no5.jpg
│   ├── cj-davitt-artist.jpg
│   ├── the-drifter.jpg
│   ├── six-bobbers.jpg
│   ├── bushel-of-blues.jpg
│   ├── storm-horizon.jpg
│   ├── red-white-bobber.jpg
│   ├── tied-fast.jpg
│   ├── wrong-cork.jpg
│   ├── the-road-home.jpg
│   ├── megalodon.jpg
│   ├── the-claws.jpg
│   ├── red-white-no2.jpg
│   ├── yellowfin.jpg
│   ├── october-fog.jpg
│   └── green-white-bobber.jpg
└── README.md
```

## Before Going Live

1. Sign up at formspree.io
2. Create a new form → copy the endpoint ID (looks like `xyzabc12`)
3. In index.html, find `REPLACE_WITH_YOUR_ID` and replace with your ID
4. Test the contact form

## Deployment (GitHub Pages + Cloudflare)

1. Push this repo to GitHub
2. Settings → Pages → Deploy from main branch → / (root)
3. Add domain in Cloudflare DNS pointing to GitHub Pages
4. Enable Full SSL in Cloudflare

## Adding New Paintings

1. Optimize the image (keep under 200KB — use squoosh.app)
2. Add to `/images/` folder
3. Add a new `.art-card` block in `index.html` following the existing pattern
4. Commit and push — live within 60 seconds
