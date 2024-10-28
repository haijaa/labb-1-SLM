const express = require("express"),
  path = require("path");

const dotenv = require("dotenv"),
  { Client } = require("pg");

dotenv.config();

const app = express();

const client = new Client({
  connectionString: process.env.PGURI,
});

client.connect();
app.use(express.json());

app.get("/api/publisher", async (_request, response) => {
  const { rows } = await client.query("SELECT * FROM publisher");
  response.send(rows);
});

app.get("/api", async (_request, response) => {
  const { rows } = await client.query(
    "SELECT magazines.title, magazines.description, magazines.image, magazines.character, publisher.name AS publisher_name FROM magazines JOIN publisher ON publisher.id = publisherid"
  );
  response.send(rows);
});

app.get("/api/marvel", async (_request, response) => {
  const { rows } = await client.query(
    "SELECT magazines.title, magazines.description, magazines.image, magazines.character, publisher.name AS publisher_name FROM magazines JOIN publisher ON publisher.id = publisherid WHERE publisher.id = 1"
  );
  response.send(rows);
});

app.get("/api/dc", async (_request, response) => {
  const { rows } = await client.query(
    "SELECT magazines.title, magazines.description, magazines.image, magazines.character, publisher.name AS publisher_name FROM magazines JOIN publisher ON publisher.id = publisherid WHERE publisher.id = 2"
  );
  response.send(rows);
});

app.post("/api/post", async (req, res) => {
  const { title, description, image, character, publisherid } = req.body;

  try {
    const { rows } = await client.query(
      "INSERT INTO magazines (title, description, image, character, publisherid) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [title, description, image, character, publisherid]
    );
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error("Fel här", error);
    res.status(500).send("Fel vid server");
  }
});

app.use(express.static(path.join(path.resolve(), "dist")));

app.listen(3000, () => {
  console.log("Redo på http://localhost:3000/");
});
