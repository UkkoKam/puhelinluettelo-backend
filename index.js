const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')

app.use(cors())
app.use(express.static('build'))
app.use(bodyParser.json())
morgan.token('post-content', (req,res) => {
    return JSON.stringify(req.body)
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms - :post-content' ))



let persons = [
    {
        name: "Arto Hellas",
        number: "040-123456",
        id: 1
    },
    {
        name: "Martti Tienari",
        number: "040-123456",
        id: 2
    },
    {
        name: "Arto Järvinen",
        number: "040-123456",
        id: 3
    }

]

app.get('/', (req, res) => {
    res.send('<h1>Hello world!<h1/>')
})

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/api/persons/:id', (req,res) => {
    const id = Number(req.params.id)
    const person = persons.find(person => person.id === id)

    if (person) {
        res.json(person)
    } else {
        res.status(404).end()
    }
    
})

app.delete('/api/persons/:id', (req,res) => {
    const id = Number(req.params.id)
    persons = persons.filter(person => person.id !== id)

    res.status(204).end()
}) 

app.post('/api/persons', (request, response) => {
    
  
    const person = request.body
    console.log(person.name)
    console.log(person.id)
    const name = person.name
    const filterName = persons.find(person => person.name === name)
    console.log(person)
    if (!person.name || !person.number) {
        console.log('error body.content')
        return response.status(400).json({ 
          error: 'content missing' 
        })
      }

    if(filterName) {
        console.log('error filterName')
        return response.status(400).json({
            error: 'name is already in the database'
        })
        
    }
    
    persons = persons.concat(person)
    
    response.json(person)
  })

app.get('/info', (req,res) => {

    let now = new Date()
    res.send(`
    <div>
        <p>Phonebook has info for ${persons.length} people</p>
        <p>${now}</p>
    </div>
    `)
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server runnin on port ${PORT}`)
})