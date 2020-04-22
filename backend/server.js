import express from 'express'
import morgan from 'morgan'
import routes from './routes/routes.js'

const app = express()

// config
app.set('port', process.env.PORT || 3000)
app.listen()

// middleware
app.use(morgan('dev'))
app.use('/', routes)

app.listen(app.get('port'), () => {
    console.log("Server listening on port ", app.get('port'))
})