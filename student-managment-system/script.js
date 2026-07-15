let students = JSON.parse(localStorage.getItem("students")) || [];

displayStudents();

function addStudent(){

    let id=document.getElementById("id").value;
    let name=document.getElementById("name").value;
    let department=document.getElementById("department").value;
    let email=document.getElementById("email").value;
    let phone=document.getElementById("phone").value;

    if(id==""||name==""||department==""||email==""||phone==""){
        alert("Please fill all fields");
        return;
    }

    students.push({
        id,
        name,
        department,
        email,
        phone
    });

    localStorage.setItem("students",JSON.stringify(students));

    clearForm();

    displayStudents();

}

function displayStudents(){

    let table="";

    students.forEach((student,index)=>{

        table+=`

        <tr>

        <td>${student.id}</td>
        <td>${student.name}</td>
        <td>${student.department}</td>
        <td>${student.email}</td>
        <td>${student.phone}</td>

        <td>

        <button class="action-btn" onclick="editStudent(${index})">Edit</button>

        <button class="action-btn" onclick="deleteStudent(${index})">Delete</button>

        </td>

        </tr>

        `;

    });

    document.getElementById("studentTable").innerHTML=table;

}

function deleteStudent(index){

    students.splice(index,1);

    localStorage.setItem("students",JSON.stringify(students));

    displayStudents();

}

function editStudent(index){

    let student=students[index];

    document.getElementById("id").value=student.id;
    document.getElementById("name").value=student.name;
    document.getElementById("department").value=student.department;
    document.getElementById("email").value=student.email;
    document.getElementById("phone").value=student.phone;

    students.splice(index,1);

    localStorage.setItem("students",JSON.stringify(students));

    displayStudents();

}

function clearForm(){

    document.getElementById("id").value="";
    document.getElementById("name").value="";
    document.getElementById("department").value="";
    document.getElementById("email").value="";
    document.getElementById("phone").value="";

}