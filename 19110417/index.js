const express = require('express');
const app = express();
const PORT = 5000;

const routes = require('./routes/index.js');
const MSSVroutes = require('./routes/MSSV.js');
const messageRouter = require('./routes/message');

app.use(express.json());


app.use((req,res,next)=> {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use('/', routes);
app.use('/19110337', MSSVroutes);
app.use('/message', messageRouter)

app.listen(PORT);