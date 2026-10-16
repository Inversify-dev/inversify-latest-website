# Optional licensed display fonts

The redesign references **Alro Bold** and **Pink Crab** in the expressive headline stack, but their font binaries were not included with the source assets. They are optional: the site intentionally falls back to the loaded **Clash Display** and **Satoshi** families, so it remains polished without those files.

If you have licensed webfont files for these families, add the `.woff2` files in this folder (for example, `alro-bold.woff2` and `pink-crab.woff2`) and declare them in `app/globals.css`:

```css
@font-face {
  font-family: "Alro Bold";
  src: url("/fonts/alro-bold.woff2") format("woff2");
  font-style: normal;
  font-weight: 700;
  font-display: swap;
}

@font-face {
  font-family: "Pink Crab";
  src: url("/fonts/pink-crab.woff2") format("woff2");
  font-style: normal;
  font-weight: 400 700;
  font-display: swap;
}
```

Use only files and weights covered by your license. No font binaries are bundled or redistributed here. The existing fallback stacks already route expressive headlines and the highlighted hero word through these faces when available, then to Clash Display/Satoshi if they are absent.
