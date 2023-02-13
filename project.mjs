import {fetcheddata} from './tutorial.mjs'
import express from 'express'
const app = express();


app.get("/",(req,res)=>{
let stringdata = fetcheddata
   let jsondata =  JSON.parse(stringdata)
    res.send(jsondata)
})

app.listen(process.env.PORT,()=>{
    console.log(`the server is listening on ${process.env.PORT}.`)
})


