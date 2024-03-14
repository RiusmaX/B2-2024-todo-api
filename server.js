require('dotenv').config()

const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const morgan = require('morgan')
const { init } = require('./src/services/db')
// Définition du port
const port = 3000
// Création de l'application express
const app = express()

// Installation des middlewares de sécurité
app.use(helmet())
app.use(cors())

// Middlewares de décodage des requêtes
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Middleware de log
app.use(morgan('dev'))

// Connection à la base de donnée
init()

// Route "/"
app.get('/', (req, res) => {
  res.send('COUCOU')
})

app.use('/todos', require('./src/routes/todos'))
app.use('/auth', require('./src/routes/auth'))

// Lancement de l'API
app.listen(port, () => {
  console.log('Server is listening on port : ' + port)
})
