//importing modules

var express= require('express');
var mongoose= require('mongoose');
var bodyparser= require('body-parser');
var cors= require('cors')
var path= require('path');

var app=express();

const route=require('./route/routes')

//connect to mongodb

mongoose.connect('mongodb://nikhil:9450790636@ds135917.mlab.com:35917/shoppinglist');

//on connection
mongoose.connection.on('connected',()=>{
    console.log('MongoDB connected at post 27017');
});

//on connection error
mongoose.connection.on('error',(err)=>{
    console.log('Mongodb connection error: ',err);
});

const PORT=process.env.PORT|| 8080;

//adding middleware-cors
app.use(cors());

//body parser
app.use(bodyparser.json())

app.use('/api', route);

//define the folder of frontend
app.use(express.static(path.join(__dirname,'public')));

//define the path of starting file of frontend
app.get('*',(req,res)=>
 {
    res.sendFile(path.join(__dirname,'public/index.html'))
})

app.get('/',(req,res)=>{
    res.send('We are live....')
});

app.listen(PORT,()=>{
    console.log('Server has been started at port:',PORT);
});
