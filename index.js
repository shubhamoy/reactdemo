const express = require('express');
const app = express();

app.disable('x-powered-by');
app.use(express.static('public'));

app.use((req, res, next) => {
  res.status(404).send("Page Not Found");  
});

app.listen(3000, () => {
  console.log('Beast is Running');
});