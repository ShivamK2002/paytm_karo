const express = require("express");
const indexRouter = require("./routes");
const app = express();

app.use(express.json());
app.use("/api/v1", indexRouter);

app.listen(3000, () => {
  console.log("server started at port 3000");
});
