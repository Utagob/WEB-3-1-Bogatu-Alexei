let students = JSON.parse(localStorage.getItem("students"));

function addStudent(){
    const lastnameA = document.getElementById("lastname");
    const firstnameA = document.getElementById("firstname");
    const ageA = document.getElementById("age");
    const classA = document.getElementById("class");
    const emailA = document.getElementById("email");

    if(lastnameA.value !== "" && firstnameA.value !== "" && ageA.value !== "" && emailA.value !== "" && classA.value !== ""){
        let student = {
            firstname: firstnameA.value,
            lastname: lastnameA.value,
            age: ageA.value,
            class: classA.value,
            email: emailA.value,
            date: Date.now()
        }
        students.push(student);

    }

    lastnameA.value = "";
    firstnameA.value = "";
    ageA.value = "";
    emailA.value = "";
    classA.value = "";
}

const stdSub = document.getElementById("studentSubmit");
stdSub.addEventListener("onclick", addstudent())