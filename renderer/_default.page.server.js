import { renderToString } from "@vue/server-renderer";
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr";
import { createPageApp } from "./app";

// Stylesheets
import "/pages/index.css";
import "uno.css";

export const passToClient = [
  "urlParsed",
  "pageProps"
];

export async function render(pageContext) {
  const page = createPageApp(pageContext, false);
  const pageHtml = pageContext.Page ? await renderToString(page) : "";

  return escapeInject`
    <html>
      <head>
        <title>test</title>
      </head>
      <body>
        <div id="page">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>
  `;
}
