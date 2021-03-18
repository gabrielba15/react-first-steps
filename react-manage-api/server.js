const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

const users = [
  {
    nombre: 'Gabriel',
  },
  {
    nombre: 'Angel',
  },
  {
    nombre: 'Maria',
  },
];

app.set('PORT', 4000);

app.get('/api/users', (req, res) => {
  res.json({
    users: users,
  });
});

app.listen(app.get('PORT'), () =>
  console.log(`server on port ${app.get('PORT')}`)
);
