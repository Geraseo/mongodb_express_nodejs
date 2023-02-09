const Course = require("../models/Course");

// @desc SET Course INSERT INTO DB
// @route SET /api/courses

const createCourse = async (req, res) => {
  if (!req.body.name || !req.body.author) res.status(404).send("Not found");

  const course = await Course.create({
    name: req.body.name,
    author: req.body.author,
    isPublished: true,
  });
  res.status(200).json(course);
};
// ------------------------------------------------

// @desc GET Courses FROM DB
// @route GET /api/courses/
const getCourses = async (req, res) => {
  const courses = await Course.find();
  res.status(200).json(courses);
};
// ------------------------------------------------

// @desc update Course FROM DB
// @route update /api/courses
const updateCourse = async (req, res) => {
  const course = await Course.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    author: req.body.author,
    isPublished: true,
  });
  res.status(200).json(course);
};

// ------------------------------------------------
// @desc delete Course FROM DB
// @route delete /api/courses
const deleteCourse = async (req, res) => {
  const course = await Course.findByIdAndDelete(req.params.id);
  res.status(200).json(course);
};
// ------------------------------------------------

module.exports = {
  createCourse,
  getCourses,
  updateCourse,
  deleteCourse,

  //toliau vardinate get, update,
  //delete metodus-funkcijas, kurias cia busite aprase
};
