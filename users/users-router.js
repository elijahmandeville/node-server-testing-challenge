const express = require("express");

const Users = require("./users-model");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const users = await Users.get();

    if (!users) {
      res.status(404).json({
        message: "no users found",
      });
    }

    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    await Users.remove(req.params.id);

    res.status(204).json({
      message: "user has been nuked",
    });
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newUser = await Users.add(req.body);

    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
