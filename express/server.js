const express = require('express')
const app = express()
const port = 3001
const Action = require('../BD/bd');
const { Op } = require("sequelize");


app.use(express.json());

//req for load all cashDrawer open event
app.post('/api/', async (req, res) => {
  let startDay = new Date(req.body.date);
  let endDay = new Date (new Date(req.body.date).setHours(23,59,59,999));
  res.send(await Action.findAll({
    where: {
      createdAt: {
        [Op.lt]: endDay,
        [Op.gt]: startDay
      }
    }
  }))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})