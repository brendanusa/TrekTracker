var express = require('express');
var axios = require('axios');
var app = express();

var bodyParser = require('body-parser');
var post = require('../database');


app.use(express.static(__dirname + '/../client/dist'));

app.post('/images', (req, res) => {
  axios.post()
});

// app.get('/post', function (req, res) {
//   post.selectAll(function(err, data) {
//     if(err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//     }
//   });
// });

app.listen(3000, function() {
  console.log('listening on port 3000...');
});