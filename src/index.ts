import express from 'express';

const port = 3000;


const app = express();


// routes
app.get('/', (req, res) => {
    res.send('<h1>Hello world!</h1>')
})


app.listen(port, () => console.log('server listening on port', port))
