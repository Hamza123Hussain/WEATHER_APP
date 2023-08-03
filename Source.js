const express= require('express')
const path = require('path')
const app = express()
const hbs= require('hbs')
const port= 3000

////---------------------------------------STATIC PATH Operations------------------------------------------------------------------------------------------------------------------------


const staticpath=path.join(__dirname,"Public") 
app.use(express.static(staticpath))
////---------------------------------------STATIC PATH Operation------------------------------------------------------------------------------------------------------------------------





////---------------------------------------TEMPLATE ENGINE & PARTIAL OPERATIONS------------------------------------------------------------------------------------------------------------------------


const templatepath=path.join(__dirname,"./Templates/views")
app.set("view engine","hbs");
app.set("views",templatepath)

const PartialPath=path.join(__dirname,"./Templates/partials") 

hbs.registerPartials(PartialPath) 

////---------------------------------------TEMPLATE ENGINE & PARTIAL OPERATIONS------------------------------------------------------------------------------------------------------------------------






////---------------------------------------ROUTING OPERATIONS------------------------------------------------------------------------------------------------------------------------


app.get("/",(request,response)=>{
response.render('weather')

})

app.get("/AboutUs",(Request,Response)=>{
    Response.render('about')
})

// app.get("/WeatherInfo",(request,response)=>{
//     response.render('weather')
// })

app.get("*",(request,Response)=>{
Response.render('404error',{
    COMMNET:"STUPID ITS THE WRONG PAGE"
})
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})

////---------------------------------------ROUTING OPERATIONS------------------------------------------------------------------------------------------------------------------------


