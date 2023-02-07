const Course = require('../models/Course');

// @desc SET Course INSERT INTO DB
// @route SET /api/courses

const createCourse = async (req, res) => {
    if(!req.body.name || !req.body.author) res.status(404).body("Not found");


    const course = await Course.create({
        name: req.body.name,
        author: req.body.author,
        isPublished: true
    })
    res.status(200).json(course)

}

module.exports = {
    createCourse,
    //toliau vardinate get, update, 
    //delete metodus-funkcijas, kurias cia busite aprase
}