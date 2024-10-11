const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use(express.json())
app.post('/api/users', (req, res) => {
    const { name, email } = req.body;
    res.json({ name, email });
});

app.put('/api/users/:id', (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    res.json({ id, name, email });
});

app.delete('/api/users/:id', (req, res) => {
    const { id } = req.params;
    res.json({ id });
});

const PORT = process.env.PORT || 8081;

server = app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
module.exports = { app, server } // this is so we can stop the server programmatically 
