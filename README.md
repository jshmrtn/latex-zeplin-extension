# Zeplin Latex Extension

[Zeplin](https://zeplin.io) extension that generates latex definitions.

## Getting started

Add the extension to your project via the manifest URL `https://zeplin-latex.joshmartin.rocks/manifest.json`.

## Output

<details>
  <summary>
    Example Output
  </summary>

```tex
\NeedsTeXFormat{LaTeX2e}[1994/06/01]
\ProvidesPackage{acrColors}[2019/7/17 Project Colors]

\RequirePackage{xcolor}

\definecolor{acrBlack}{RGB}{29, 28, 27}
\definecolor{acrGreyThree}{RGB}{183, 180, 176}
\definecolor{acrRedCorp}{RGB}{220, 0, 68}
\definecolor{acrRedCorpDark}{RGB}{138, 2, 44}
\definecolor{acrGreyOne}{RGB}{85, 81, 75}
\definecolor{acrGreyFive}{RGB}{241, 238, 236}
\definecolor{acrGreenCorp}{RGB}{67, 148, 158}
\definecolor{acrGreenCorpDark}{RGB}{26, 88, 104}
\definecolor{acrRedError}{RGB}{255, 56, 0}
\definecolor{acrGreyFour}{RGB}{226, 224, 222}
\definecolor{acrGreyTwo}{RGB}{143, 139, 132}
\definecolor{acrWhite}{RGB}{255, 255, 255}
\definecolor{acrGreenConfirm}{RGB}{5, 189, 11}
```

</details>

## Development

This extension is developed using [zem](https://github.com/zeplin/zem), Zeplin Extension Manager. zem is a command line tool that lets you quickly create, test and publish extensions.

To learn more about creating Zeplin extensions, [see documentation](https://github.com/zeplin/zeplin-extension-documentation).

## Deployment

```bash
npm run build
npm run deploy
now ln --scope joshmartin YOUR_NEW_DEPLOYMENT_DOMAIN https://zeplin-latex.joshmartin.rocks
```
