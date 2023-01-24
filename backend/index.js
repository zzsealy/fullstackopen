
const http = require('http')

const app = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.end('hello world')
})


const PORT = 3001
app.listen(PORT)
console.log(`Service running on port ${PORT}`)

// console.log('hello world!')