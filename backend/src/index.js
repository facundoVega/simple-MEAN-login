const express = require('express');
const cors = require('cors');
const app = express();

require('./database');
app.use(cors());
app.use(express.json());

app.use('/api', require('./routes/index'));

app.listen(3000);
console.log("Listen on port 3000");