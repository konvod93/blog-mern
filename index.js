import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

mongoose
.connect('mongodb+srv://konvod93:Abrahadabra418@cluster0.vlgxfmv.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('DB Ok'))
.catch(() => console.log('DB error', err));

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.post('/auth/login', (req, res) => {
    console.log(req.body);
    const token = jwt.sign({
        email: req.body.email,
        fullName: 'Ivan Ivanov',
    },
    'secret123',
    );
    res.json({
        success: true,
        token,
    });
})

app.listen(4444, (err) => {
    if (err) {
        return console.log(err)
    }

    console.log('Server OK');
});