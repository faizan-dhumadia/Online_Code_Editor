const connectToMongo = require('./db');
const express = require('express')

var cors = require('cors')
const corsOption = {
    origin: 'http://localhost:3000',
    credentials: true,
}
connectToMongo();
const app = express()
const port = 5000
app.use(cors(corsOption))
app.use(express.json())

//Available Routes
app.use('/api/auth', require('./router/auth'))
    // app.use('/api/note', require('./router/notes'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})