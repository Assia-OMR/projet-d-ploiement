const express = require("express");
const router = express.Router();

let users = [
  { id: 1, name: "Assia" },
  { id: 2, name: "Salma" }
];

router.get("/", (req, res) => {
  res.json(users);
});

router.post("/", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const index = users.findIndex(user => user.id == id);
  if (index === -1) return res.status(404).json({ error: "User not found" });
  users[index].name = req.body.name;
  res.json(users[index]);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  users = users.filter(user => user.id != id);
  res.json({ message: "User deleted" });
});

module.exports = router;
