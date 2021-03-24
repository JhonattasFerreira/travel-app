const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('dist'));

const port = process.env.PORT || 3030;

app.listen(port, () => {
  console.log(`Listen in the port: ${port}`);
})