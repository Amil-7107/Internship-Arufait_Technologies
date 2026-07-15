function generateGrade(){

    let marks = Number(document.getElementById("marks").value);

    let grade = "";

    if(marks < 0 || marks > 100){
        grade = "Please enter marks between 0 and 100";
    }
    else if(marks >= 90){
        grade = "Grade: A+";
    }
    else if(marks >= 80){
        grade = "Grade: A";
    }
    else if(marks >= 70){
        grade = "Grade: B";
    }
    else if(marks >= 60){
        grade = "Grade: C";
    }
    else if(marks >= 50){
        grade = "Grade: D";
    }
    else{
        grade = "Grade: F";
    }

    document.getElementById("grade").innerHTML = grade;

}