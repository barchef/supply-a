const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => res.send('14814814814815'))

app.listen(port, () => console.log(`Supply-A listening on port ${port}!`))
