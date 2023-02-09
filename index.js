require("dotenv").config();
const connectDB = require("./config/db");
connectDB();

const express = require("express");
const app = express();
app.use(express.json());

const {
  createCourse,
  getCourses,
  updateCourse,
  deleteCourse,
  //kiti metodai
} = require("./controllers/coursesController");

app.post("/api/course", createCourse);
app.get("/api/course", getCourses);
app.put("/api/course/:id", updateCourse);
app.delete("/api/course/:id", deleteCourse);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT ${process.env.PORT}`);
});
