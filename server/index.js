const express = require('express')
const cors=require('cors')
const {MongoClient}=require('mongodb')

const app = express()
app.use(cors())
app.use(express.json())

const client=new MongoClient('mongodb+srv://nagasiri:firestorm1501@cluster0.3jtalg1.mongodb.net/?retryWrites=true&w=majority')
client.connect()
const db=client.db('counselling2')
const col=db.collection('register')


app.get('/retrieve', req,async res=>{
    const result=await col.find().toArray()
    console.log(result)
    res.send(result)
})
app.get('/',(req,res)=>{
    res.send('<h1>Welcome to KLU</h1>')
})

app.get('/about',(req,res)=>{
    res.send('<h1>This is about page</h1>')
})

app.get('/contact',(req,res)=>{
    res.send('<h1>contact us:7989015973</h1>')
})

app.post('/home',(req,res)=>{
    res.send('<h1>This is home page</h1>')
})


app.listen(32145,()=>{console.log('Express server is running')})