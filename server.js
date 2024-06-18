const express = require('express');

const PORT = 3001;

const app = express();

// Express middlesware
app.use(express.urlencoded({extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
      message: 'Hello World'
    });
  });

app.use((req, res) => {
  res.status(404).end();
})

  app.listen(3001, () => {
    console.log(`Server running on port 3001`);
});