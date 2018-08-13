const Vue = require('vue')
const server = require('express')()
const createRenderer = require('vue-server-renderer').createRenderer

const renderer = createRenderer({
  template: require('fs').readFileSync('./index.template.html', 'utf-8')
})

const context = {
  title: 'peco',
  meta: `
    <meta ...>
    <meta ...>
  `
}

server.get('*', (req, res) => {
  const app = new Vue({
    data: {
      url: req.url
    },
    template: `<div>The visited URL is: {{ url }}</div>`
  })

  renderer.renderToString(app, context, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
    console.log(html);
    res.end(html)
  })
})

server.listen(8080)
