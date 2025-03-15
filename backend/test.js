const express = require('express')
const app = express()
const port = 3000


// routes utama method GET
app.get('/', (req, res) => {
  res.send('HEHEHEHEHE')
})

app.post('/login', (req, res) => {
  if (req.body.username !== 'admin' || req.body.password !== 'admin') {
    res.status(401).send('Username atau password salah')
  } else {
    res.send('Login berhasil')
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})