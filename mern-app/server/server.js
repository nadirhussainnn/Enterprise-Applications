const app=require('./index')

const PORT=process.env.PORT || 3100

app.listen(PORT,()=>{
    console.log(`SERVER RUNNIG AT port ${PORT}`)
})