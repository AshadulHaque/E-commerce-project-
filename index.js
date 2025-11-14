import express from 'express';
import routes from './routes/routes.js';
import cors from 'cors';

const app =express();
//middleware
app.use(cors());
app.use(express.json());
//routes
app.use(routes);

app.get('/' , (req,res) =>{
    res.send('Hello World');
});

const PORT = 3000;
//server setup
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
});

export default app;