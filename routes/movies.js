import express from "express";
import {
  createMovie,
  deleteMovie,
  getMovie,
  updateMovie,
} from "../controllers/movieController.js";
const router = express.Router();

// crud functionalitie for movies
// get operation
router.get("/", getMovie);

// creationg movies post
router.post("/", createMovie);

// update function
router.put("/:id", updateMovie);

// delete function
router.delete("/:id", deleteMovie);

export default router;
