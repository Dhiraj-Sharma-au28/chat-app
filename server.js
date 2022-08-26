const express = require('express');
const { env } = require('process');
const app = express();
require('dotenv').config()
const PORT  = process.env.PORT || 3000

const http = require('http').createServer(app)
app.use(express.static(__dirname + '/public'))

app.get('/',(req,res)=>{
    // console.log('jai shree shyam')
    res.sendFile(__dirname + '/index.html')
})

http.listen(PORT,()=>{
    console.log('listining on 3000')
})

//socket 

const io = require('socket.io')(http)

io.on('connection',(socket)=>{
    console.log('Connected....')
    socket.on('message',(msg)=>{
        socket.broadcast.emit('message',msg)
    })
})