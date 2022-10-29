const express = require("express");
const cors = require("cors");
const app = express();


app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res
    .status(200)
    .json({
      slackUsername: "Shazzar",
      backend: true,
      age: 22,
      bio: "My brain solves the problem, my code shows the working",
    });
});

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
