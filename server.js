const express = require("express");

const server = express();
const PORT = process.env.PORT || 5000;
const usersRouter = require("./users/users-router");

server.use(express.json());
server.use("/users", usersRouter);

server.get("/", async (req, res, next) => {
  res.status(200).json({
    message: "Welcome to my API!",
  });
});

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "something went wrong",
  });
});

if (!module.parent) {
  server.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
  });
}

module.exports = server;
