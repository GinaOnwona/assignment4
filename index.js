const express = require ('express');


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/books', require('./route/books'))
app.use('/author', require('./route/author'))


const PORT = process.env.PORT || 5000;


app.listen( PORT, ()=> console.log(`Server started on port ${PORT}`));