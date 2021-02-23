const app = require('express')();


app.get('/', (req, res) => {
  return res.send(`appId: ${process.env.APPID}. Homepage: says hello!`);
})

app.get('/home', (req, res) => {
  return res.send('Hello, from a lightweight container!!!');
});

app.get('/admin', (req, res) => {
  return res.send(`appId: ${process.env.APPID}. ADMIN page: very few people should see this.`);
});

app.get('/:something', (req, res) => {
  const { something } = req.params;
  return res.send(`appId: ${process.env.APPID}. ${something} page: says hello!`);
});

app.listen(9999, () => console.log('Listening on 9999!'));