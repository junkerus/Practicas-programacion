const express = require('express')
const app = express()

    app.get('/', function(req, res)
    {
        res.send("<strong>Te Amo</strong> Dragon")
    })

    app.get('/amor', function (req, res)
    {
        res.send("Y estoy orgulloso de nuestra <strong>familia :3</strong>")
    })

  app.listen(3000)