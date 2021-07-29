const express = require("express");
const app = express();
const cors = require("cors");
const fetch = require("node-fetch");

// var allowedOrigins = ["http://somethingsomething.com", "https://somethinggsomething.com"];
// // https://medium.com/zero-equals-false/using-cors-in-express-cac7e29b005b
// app.use(
//   cors({
//     origin: function (origin, callback) {
//       // allow requests with no origin
//       // (like mobile apps or curl requests)
//       if (!origin) return callback(null, true); // allowing
//       if (allowedOrigins.indexOf(origin) === -1) {
//         var msg =
//           "The CORS policy for this site does not " +
//           "allow access from the specified Origin.";
//         return callback(new Error(msg), false); // blocking
//       }
//       return callback(null, true); //allowing
//     },
//   })
// );

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
