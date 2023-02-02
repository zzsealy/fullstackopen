const express = require('express')
const cors = require('cors')
require('dotenv').config()
const PORT = process.env.PORT

const app = express()
app.use(express.json())
app.use(cors())

const Note = require('./models/note')


let notes = [
    {
      id: 1,
      content: "HTML is easy",
      date: "2022-05-30T17:30:31.098Z",
      important: true
    },
    {
      id: 2,
      content: "Browser can execute only Javascript",
      date: "2022-05-30T18:39:34.091Z",
      important: false
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      date: "2022-05-30T19:20:14.298Z",
      important: true
    }
  ]


app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
  })


app.get('/api/notes', (request, response) => {
  Note.find({}).then(
    notes => {
    console.log(Date())
    response.json(notes)
  })
})


// 报错notes 到mongodb
app.get('/api/save_notes', (request, response) => {
  notes.map(note => {
    let noteModel = new Note(note)
    noteModel.save((error, note) => {
      console.log(error, note)
    })
  })
})


app.get('/api/notes/:id', (request, response) => {
  Note.findById(request.params.id)
    .then(note => {
      if (note) {
        response.json(note)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error)) // error会作为一个参数传递给下一个函数
})



app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.find(note => note.id !== id)
  response.status(204).end() // 如果删除成功了就返回204，不返回任何数据， 这里不管是否成功 都返回204
})


const generateId = () => {
  const maxId = notes.length > 0 ? Math.max(...notes.map(note => note.id)) : 0
  return maxId + 1
}


app.post('/api/notes', (request, response) => {
  const body = request.body

  if (body.content === undefined) {
    return response.status(400).json({ error: 'content missing' })
  }

  const note = new Note({
    content: body.content,
    important: body.important || false,
    date: new Date(),
  })

  note.save().then(savedNote => {
    response.json(savedNote)
  })
})


const errorHandler = (error, request, response, next) => {
  console.error(error.message)
  if (error.name === 'CastError') {
    return response.status(400).send({error: 'id 传递错误'})
  }
  next(error)
}

// this has to be the last loaded middleware.
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

