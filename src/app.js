const path = require('path')
const express = require('express')
const app=express()
const hbs = require('hbs')
const forecast = require('./utils/forcast')
const geocode = require('./utils/geocode')




console.log(__dirname)
//Define paths for express config
const publicDeirectoryPath=path.join(__dirname, '../public'  )
const viewPath=path.join(__dirname, '../templates/views'  )
const partialath=path.join(__dirname, '../templates/partials'  )

//setup static directory to serve
app.use(express.static(publicDeirectoryPath))

//setup handlebars engine and did define custom view location
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialath)


app.get('/',(req,res)=>{
      res.render('index')
})
app.get('/about',(req,res)=>{
    res.render('about')
})
app.get('/help',(req,res)=>{
    res.render('help')
})

app.listen(3000,()=>{
    console.log('server is up and running ')
})
app.get('',(req,res)=>{
    res.send('hello Friend')
})
app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }

    
        geocode(req.query.address, (error, {latitude,longitude,location} = {}) => {
            if (error) {
                return res.send({ error })
            }
            forecast(latitude, longitude, (error, forcastdata) => {
                if (error) {
                    return res.send({ error })
                }
                res.send({
                    forecast: forcastdata,
                    location,
                    address: req.query.address
                })
    
    

            })
        })
    
})

app.get('*', (req, res) => {
    res.render('errorMessage')
    })









