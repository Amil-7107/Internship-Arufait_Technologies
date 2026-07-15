function calculateMarks(){

    let sub1 = Number(document.getElementById("sub1").value);
    let sub2 = Number(document.getElementById("sub2").value);
    let sub3 = Number(document.getElementById("sub3").value);
    let sub4 = Number(document.getElementById("sub4").value);
    let sub5 = Number(document.getElementById("sub5").value);

    let total = sub1 + sub2 + sub3 + sub4 + sub5;

    let average = total / 5;

    let percentage = average;

    let grade = "";

    if(percentage >= 90)
        grade = "A+";
    else if(percentage >= 80)
        grade = "A";
    else if(percentage >= 70)
        grade = "B";
    else if(percentage >= 60)
        grade = "C";
    else if(percentage >= 50)
        grade = "D";
    else
        grade = "F";

    let status;

    if(percentage >= 50)
        status = "PASS";
    else
        status = "FAIL";

    document.getElementById("total").innerHTML = "Total Marks : " + total;
    document.getElementById("average").innerHTML = "Average : " + average.toFixed(2);
    document.getElementById("percentage").innerHTML = "Percentage : " + percentage.toFixed(2) + "%";
    document.getElementById("grade").innerHTML = "Grade : " + grade;
    document.getElementById("status").innerHTML = "Result : " + status;

}