import express from 'express'

const app = express()

const PORT =8000

app.get('/',(req,res)=>{
    res.json({msg:"Hello world"})
})

app.listen(PORT,()=>console.log("server is running in port 8000")
)