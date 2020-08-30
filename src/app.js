const path=require('path')
const express=require('express')
const hbs=require('hbs')

const app=express()
const port=process.env.PORT || 3000

const viewsPath=path.join(__dirname,'../templates/views')
const par=path.join(__dirname,'../templates/partials')
const pubdir=path.join(__dirname,'../public')
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(par)
app.use(express.static(pubdir))
app.get('',(req,res)=>{
res.render('index',{
    title:'main'
})
})


app.get('/f',(req,res)=>{
    res.render('f',{
       title:'founder' 
    })
})
app.get('/bod',(req,res)=>{
    res.render('bod',{
        title:'board of director'
    })
})

app.get('/home',(req,res)=>{
res.render('home',{
    title:'NUORI'
})
})
    

app.get('/ca',(req,res)=>{
res.render('ca',{
    title:'skin awakening'
})
})


app.listen(port,()=>{
    console.log('server is up on ')
})


//<h1 class="ani"> nuori</h1><br><div>