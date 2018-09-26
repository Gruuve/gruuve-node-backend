// grab the packages we need
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

// routes will go here

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);

// routes will go here
app.get('/api/users', function(req, res) {
    var qu = req.param('q');

     
    const DuckDuckScrape = require("duck-duck-scrape");
    const ddg = new DuckDuckScrape();
    let search = ddg.search(qu, 1, "en-us"); 

    search.then((data) => {
     //res.end(JSON.stringify(data));
     res.send(JSON.stringify(data));

    });


  
    //res.send(qu);
  });