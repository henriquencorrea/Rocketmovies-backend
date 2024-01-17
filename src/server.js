const express = require("express");

const app = express();

app.get("/message/:id/:user", (request, response) => {
  const { id, user } = request.params;
  response.send(`Message ID: ${id}. For User ${user}.`)
});

const PORT = 3333;
app.listen(PORT,() => console.log(`server is running on Port ${PORT}`));
