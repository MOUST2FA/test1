
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/test1/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/test1"
  }
],
  assets: {
    'index.csr.html': {size: 507, hash: 'cd2814b19d38a28418e7f223ccdfcf59d776c0f053f1a380ca155ea11092354a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1020, hash: 'a60b562dfe08a9e57473a7649113fe936aa71fe54e7f3e43e2fdbc7bd0cde814', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20830, hash: '7db1a9fd99b6c393eacf8ac4e5264bab70750242501a1b5adf5e9ff08e555346', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
