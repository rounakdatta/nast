import * as fs from "fs"
import * as path from "path"
import { renderToHTML } from "../src"

const tree = require("./tree.json")

test()

function test(): void {
  const content = renderToHTML(tree)
  const html = renderPage(tree.title, content)

  fs.writeFileSync(path.join(__dirname, "test.html"), html)
}

function renderPage(pageTitle: string, contentHTML: string): string {
  const pageHTML = `\
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- iOS Safari -->
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <!-- Chrome, Firefox OS and Opera Status Bar Color -->
    <meta name="theme-color" content="#FFFFFF">
    <title>${pageTitle}</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.10.2/dist/katex.min.css" integrity="sha384-yFRtMMDnQtDRO8rLpMIKrtPCD5jdktao2TV19YiZYWMDkUR5GQZR/NOVTdquEx1j" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="css/prism.css">
    <link rel="stylesheet" type="text/css" href="css/layout.css">
    <link rel="stylesheet" type="text/css" href="css/notion-color.css">
    <link rel="stylesheet" type="text/css" href="css/notablog.css">
    <link rel="stylesheet" type="text/css" href="css/theme.css">
    <link rel="stylesheet" type="text/css" href="css/debug.css">
    <style>
      :root {
        font-size: 16px;
      }
      body {
        width: 8.3in;
        max-width: calc((100vw - 15px) - 192px);
        margin: 100px auto;
        padding: 0 50px;
      }
    </style>
  </head>
  <body>
    ${contentHTML}
  </body>
</html>`
  return pageHTML
}