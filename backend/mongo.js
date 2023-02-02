const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('请提供密码')
    process.exit(1)
}


const password = process.argv[2]

const url = 'localhost:27017'

mongoose.connect(url)

// 定义不记得模式，告诉Mongoose如果将笔记对象存储在数据库中
const noteSchema = new mongoose.Schema({
    content: String,
    date: Date,
    important: Boolean
})


//在Note模型定义中，第一个"Note"参数是模型的单数名称。
//集合的名称将是小写的复数notes，因为Mongoose惯例是自动将集合命名为复数(例如：notes)，
//而模式是以单数指代它们(例如：Note)。
// 相当于构造函数
const Note = mongoose.model('Note', noteSchema)

const note = new Note({
    content: 'HTML is Easy',
    date: new Date(),
    important: true
})

const filterInfo = {important: true}
Note.find(filterInfo).then(result => {
    result.forEach(note => {
      console.log(note)
    })
    mongoose.connection.close()
  })

note.save().then(result => {
    console.log('note saved!')
    mongoose.connection.close()
})