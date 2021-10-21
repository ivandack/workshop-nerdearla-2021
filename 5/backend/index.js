const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('combined'));

app.set('json spaces', 2);

app.use('/posts/:id/comments', (req, res) => {
  const id = req.params.id;
  res.status(200).json([
    {
      postId: Number.parseInt(id),
      id: 1,
      name: 'Asistente 1',
      email: 'asistente1@email.com',
      body: '¡La charla de Docker estuve muy buena!',
    },
    {
      postId: Number.parseInt(id),
      id: 2,
      name: 'Asistente 2',
      email: 'asistente2@email.com',
      body: 'Asistente 1 tiene razón. Muy buena charla.',
    },
  ]);
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
