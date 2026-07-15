const express = require("express");

const app = express();

app.use(express.json());

const students = [
    {
        id: 1,
        name: "Amil",
        department: "Cyber Security"
    },
    {
        id: 2,
        name: "Muaz",
        department: "Computer Science"
    }
];

app.get("/", (req, res) => {
    res.send("Student API is Running");
});

app.get("/students", (req, res) => {
    res.json(students);
});

app.post("/students", (req, res) => {

    students.push(req.body);

    res.json({
        message: "Student Added Successfully"
    });

});

app.put("/students/:id", (req, res) => {

    const id = Number(req.params.id);

    const student = students.find(s => s.id === id);

    if(student){

        student.name = req.body.name;
        student.department = req.body.department;

        res.json({
            message:"Student Updated"
        });

    }else{

        res.status(404).json({
            message:"Student Not Found"
        });

    }

});

app.delete("/students/:id", (req, res) => {

    const id = Number(req.params.id);

    const index = students.findIndex(s => s.id === id);

    if(index !== -1){

        students.splice(index,1);

        res.json({
            message:"Student Deleted"
        });

    }else{

        res.status(404).json({
            message:"Student Not Found"
        });

    }

});

app.listen(3000, () => {

    console.log("Server running on http://localhost:3000");

});