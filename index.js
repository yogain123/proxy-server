const express = require("express");
const app = express();
const cors = require("cors");
const fetch = require("node-fetch");
app.use(cors());

const port = process.env.PORT || 7777;

app.use(async (req, res) => {
  try {
    console.log("Running proxy Server");
    const url = req.url.slice(1);
    const response = await fetch(url, {
      method: req.method,
      headers: req.headers,
    });
    res.json(await response.json());
  } catch (error) {
    res.json({ error });
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
