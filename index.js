const connectToMongo = require('./db');
const express = require('express')

var cors = require('cors')
const corsOption = {
    origin: 'https://online-code-kkw.herokuapp.com',
    credentials: true,
}
connectToMongo();
const app = express()
const port = process.env.PORT || 5000
app.use(cors(corsOption))
app.use(express.json())

//Available Routes
app.use('/api/questions', require('./router/questions'))
app.use('/api/auth', require('./router/auth'))
app.use('/api/admin', require('./router/admin'))
app.use('/api/admin/questions', require('./router/questionsAPI'))
app.use('/api/judge', require('./router/judgeAPI'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})