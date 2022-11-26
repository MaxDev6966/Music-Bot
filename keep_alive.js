const express = require('express');
const app = express();
const port = 2323;
app.get('/', (req, res) => res.send('Max Codez On Top!'));

app.listen(port, () => console.log(`Bot is listening to http://localhost:${port}`));