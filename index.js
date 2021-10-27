const express = require('express')
const path = require('path')
const port_number = server.listen(process.env.PORT || 3000);

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(port_number, () => console.log(`Listening on ${ port_number }`))