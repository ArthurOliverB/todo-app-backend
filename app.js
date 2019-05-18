const app = require('express')()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
// Routes
const task = require('./routes/task.route')

// DB

const dbUrl = process.env.MONGOLAB_URI? process.env.MONGOLAB_URI : 'mongodb://localhost:27017/todos'

mongoose.connect(dbUrl, {useNewUrlParser: true});
let db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
});
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));
app.use('/tasks', task)


const porta = 4000
app.listen(porta, function() {
    console.log(`Backend rodando na porta ${porta}`);
})