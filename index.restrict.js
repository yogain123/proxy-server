var allowedOrigins = [
  "http://somethingsomething.com",
  "https://somethinggsomething.com",
];
// https://medium.com/@yogendrasaxena56/understanding-cors-and-misconception-of-cors-browser-extensions-aa71912c1872
app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin
      // (like mobile apps or curl requests)
      if (!origin) return callback(null, true); // allowing
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg =
          "The CORS policy for this site does not " +
          "allow access from the specified Origin.";
        return callback(new Error(msg), false); // blocking
      }
      return callback(null, true); //allowing
    },
  })
);
// some testing
/ some more testing
