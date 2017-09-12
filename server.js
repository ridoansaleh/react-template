const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

app.use(express.static('./app'));
app.use(express.static('./dist'));
app.use(express.static('./node_modules'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve('./dist/index.html'));
});

app.listen(3000, () => {
  console.log('App listening on http://localhost:3000');
});