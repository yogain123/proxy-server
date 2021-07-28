const express = require("express");
const app = express();
const cors = require("cors");
const fetch = require("node-fetch");
app.use(cors());

const port = process.env.PORT || 7777;

app.use("", async (req, res) => {
  try {
    const response = await fetch(
      `https://something/${req.url}`,
      {
        method: req.method,
        headers: req.headers,
      }
    );
    res.json(await response.json());
  } catch (error) {
    console.log({ error });
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
