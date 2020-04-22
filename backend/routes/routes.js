import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).send("Welcome to what is going to be the best meli challenge ever")
})

router.route('/home')
    .get((req, res) => {
        res.status(200).json({name: 'This is the placeholder HOME get form meli excercise'})
    })

export default router    
