const express = require('express')

const app= express()
const port = 4001

app.get('/getinfo',(req,res) =>{
    res.send('you did it first endpoint of get http')
})

app.get('/homepage',(req,res) =>{
    res.sendFile(__dirname+'/public/home.html')
})

app.get('/ourpub',(req,res) =>{
    res.sendFile(__dirname+'/public/public.html')
})

app.listen(port,err=>err?console.log(err):console.log(`you are connected to the port ${port}`))
