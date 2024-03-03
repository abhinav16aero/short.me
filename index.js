const express = require('express');
const { connectToMongoDB } = require("./connect");
const app = express();
const urlRoute = require("./routes/url");
const URL = require("./models/url");
const PORT = 8020;
app.use("/url", urlRoute);
app.use(express.json());
connectToMongoDB("mongodb://localhost:27017/short.me").then(() =>
  console.log("Mongodb connected")
);

app.get("/:shortId", async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
      {
        shortid,
      },
      {
        $push: {
          visit: {
            timestamp: Date.now(),
          },
        },
      }
    );
    res.redirect(entry.redirectURL);
  });

app.listen(PORT, () => console.log('Server is at ${PORT}'))

