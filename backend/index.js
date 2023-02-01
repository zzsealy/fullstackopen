const express = require('express')

const app = express()
app.use(express.json())

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
  response.json(notes)
})


app.get('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  const note = notes.find(note => note.id === id)
  if (note) {
    response.json(note)
  } else {
    response.status(404).end()  // 使用end来响应请求, 而不发送任何数据
  }
})


app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.find(note => note.id !== id)
  response.status(204).end() // 如果删除成功了就返回204，不返回任何数据， 这里不管是否成功 都返回204
})


app.post('/api/notes', (request, response) => {
  const note = request.body
  console.log(note)
  response.json(note)
})


const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
