const app = require('express')();


app.get('/', (req, res) => {
  return res.send(`I am appId: ${process.env.APPID}. Homepage says hi!`);
})

app.get('/home', (req, res) => {
  return res.send('Hello, from a lightweight container!!!');
});

app.listen(9999, () => console.log('Listening on 9999!'));