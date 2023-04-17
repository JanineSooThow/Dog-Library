//index.js is the entry point
const express = require('express') //requiring the express package
const app = express() //create an app using the express() function
const port = 3000  //const port = 3000. 3000 is the port we are binding to. /*1024 -> 65535 are good numbers to use

//require route 
const aPIDataRoute = require('./routes/APIDataRoute')


//create a route to a static html pg - tells the system to fetch pages from the 'frontend' directory
app.use('/', express.static('frontend'))
app.use(express.json())


//create a route to a router - calling APIDataRoute
app.use('/fetch-Dog-API-Data', aPIDataRoute)


//Starts/activates the server - lets the webserver listen on the provided port 3000, once the server starts, if successful (hidden test), send out this message to the console
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

