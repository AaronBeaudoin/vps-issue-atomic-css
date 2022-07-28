import { createPageApp } from "./app";

// Stylesheets
import "/pages/index.css";
import "uno.css";

export async function render(pageContext) {
  const page = createPageApp(pageContext, document.getElementById("page").innerHTML === "");
  page.mount("#page");
}
