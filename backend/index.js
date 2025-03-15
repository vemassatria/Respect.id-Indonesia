const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const db = require('./connection')
const response = require('./response')

app.use(bodyParser.json())

// routes utama method GET
app.get('/', (req, res) => {
  const sql = "SELECT * FROM users"
  db.query(sql, (err, result) => {
    //hasil dari data mysql
    response(200, result, "Berhasilll", res)
  })
})

app.get('/find', (req, res) => {
  const sql = "SELECT name FROM users WHERE role = " + db.escape(req.query.role)
  db.query(sql, (err, result) => {
    response(200, result, "Berhasil dapetin nama", res)
  })
})


app.post('/login', (req, res) => {
  if (req.body.username !== 'admin' || req.body.password !== 'admin') {
    res.status(401).send('Username atau password salah')
  } else {
    res.send('Login berhasil')
  }
})

// app.post('/login', (req, res) => {
//   res.send('Login berhasil')
// })


app.put('/username', (req, res) => {
  console.log({ updatedata: req.body })
  res.send('Username berhasil diubah')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})