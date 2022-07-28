import { createSSRApp, createApp, h } from "vue";

export function createPageApp(pageContext, clientOnly) {
  const { Page, pageProps } = pageContext;
  const createAppFunc = clientOnly ? createApp : createSSRApp;

  return createAppFunc({
    render() {
      return h(Page, pageProps || {});
    }
  });
}
