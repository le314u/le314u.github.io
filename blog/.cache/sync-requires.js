
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/lucas/Desktop/le314u.github.io/blog/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/lucas/Desktop/le314u.github.io/blog/src/pages/404.js")),
  "component---src-pages-faq-js": preferDefault(require("/home/lucas/Desktop/le314u.github.io/blog/src/pages/faq.js")),
  "component---src-pages-index-js": preferDefault(require("/home/lucas/Desktop/le314u.github.io/blog/src/pages/index.js")),
  "component---src-pages-sobre-js": preferDefault(require("/home/lucas/Desktop/le314u.github.io/blog/src/pages/sobre.js"))
}

