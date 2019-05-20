const app = require('express')()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
// Routes
const task = require('./routes/task.route')

// DB

const dbUrl = process.env.MONGODB_URI

mongoose.connect(dbUrl, {useNewUrlParser: true});
let db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
});
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));

app.use('/tasks', task)


const porta = process.env.PORT || 5000

app.listen(porta, function() {
    console.log(` ATT Backend rodando na porta ${porta}`);
})
