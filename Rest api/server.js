const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Student = require("./models/Student");

console.log(Student);
console.log(typeof Student.find);

const app = express();

app.use(cors());
app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});
app.use(express.json());

app.get("/test", (req, res) => {
    res.send("CORS is working");
});

mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
.then(() => {
    console.log("✅ MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});

app.get("/", (req, res) => {
    res.send("Student API is Running");
});

// GET ALL STUDENTS
app.get("/students", async (req, res) => {

    try {

        const students = await Student.find();

        res.json(students);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

});

// ADD STUDENT
app.post("/students", async (req, res) => {

    try {

        const student = new Student({

            id: req.body.id,
            name: req.body.name,
            department: req.body.department,
            email: req.body.email,
            phone: req.body.phone

        });

        await student.save();

        res.json({
            message: "Student Added Successfully",
            student
        });

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

});

// UPDATE STUDENT
app.put("/students/:id", async (req, res) => {

    try {

        const student = await Student.findOneAndUpdate(

            {
                id: Number(req.params.id)
            },

            req.body,

            {
                new: true
            }

        );

        if (!student) {

            return res.status(404).json({
                message: "Student Not Found"
            });

        }

        res.json({
            message: "Student Updated",
            student
        });

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

});

// DELETE STUDENT
app.delete("/students/:id", async (req, res) => {

    try {

        const student = await Student.findOneAndDelete({

            id: Number(req.params.id)

        });

        if (!student) {

            return res.status(404).json({
                message: "Student Not Found"
            });

        }

        res.json({
            message: "Student Deleted"
        });

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

});

app.listen(3000, () => {

    console.log("Server running on http://localhost:3000");

});