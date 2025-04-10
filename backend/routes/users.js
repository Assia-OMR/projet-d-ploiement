const express = require("express");
const router = express.Router();

// Exemple de données temporaires
let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

// GET all users
router.get("/", (req, res) => {
  res.json(users);
});

// POST create user
router.post("/", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT update user
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const index = users.findIndex(user => user.id == id);
  if (index === -1) return res.status(404).json({ error: "User not found" });
  users[index].name = req.body.name;
  res.json(users[index]);
});

// DELETE user
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  users = users.filter(user => user.id != id);
  res.json({ message: "User deleted" });
});

module.exports = router;
