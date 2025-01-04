import express from "express";
const router = express.Router();

// crud functionalitie for movies
// get operation
router.get("/", (req, res) => {
  res.json({ message: "get movies" });
});

// creationg movies post
router.post("/", (req, res) => {
  res.json({ message: "create movies" });
});

// update function
router.put("/:id", (req, res) => {
  res.json({ message: "update movies" });
});

// delete function
router.delete("/:id", (req, res) => {
  res.json({ message: "delete movies" });
});

export default router;
