let students = JSON.parse(localStorage.getItem("students")) || [];
const content = document.getElementsByClassName("content")[0];

function addStudent(e){
    if (e) e.preventDefault();

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
        localStorage.setItem("students", JSON.stringify(students));
        loadOnScreen();
    }

    lastnameA.value = "";
    firstnameA.value = "";
    ageA.value = "";
    emailA.value = "";
    classA.value = "";
}

const stdSub = document.getElementById("studentSubmit");
stdSub.addEventListener("click", addStudent);

function addStudentOnPage(e){
    const section = document.createElement("section");
    section.className = "card";
    section.setAttribute("style", "max-width: 320px");

    const div = document.createElement("div");
    div.className = "card-body";

    const p1 = document.createElement("p");
    p1.className = "card-student-name h4 fw-bold"
    p1.innerText = e.lastname + " " + e.firstname;

    const p2 = document.createElement("p");
    p2.className = "card-class"
    p2.innerText = "Grupa: " + e.class;

    const p3 = document.createElement("p");
    p3.className = "card-age fw-light"
    p3.innerText = "Varsta: " + e.age;

    const p4 = document.createElement("p");
    p4.className = "card-email fst-italic fw-light"
    p4.innerText = "Email: " + e.email;

    const btn = document.createElement("button");
    btn.className = "btn btn-danger col-12";
    btn.innerHTML = '<i class="bi bi-x-square"></i>';
    btn.addEventListener("click", () => deleteStudent(e.date));

    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    div.appendChild(p4);
    div.appendChild(btn);
    section.appendChild(div);
    content.appendChild(section);
}

function loadOnScreen(){
    if(students == [] || students.length <= 0){
        content.innerHTML = "";
        const studentListError = document.createElement("p");
        studentListError.className = "lead fst-italic";
        studentListError.innerText = "Nu există elevi înregistrați";
        content.appendChild(studentListError);
    } else {
        content.innerHTML = "";
        students.forEach(e => {
            addStudentOnPage(e);
        }); 
    }
}

function deleteStudent(e){
    students = students.filter(student => student.date !== e);
    localStorage.setItem("students", JSON.stringify(students));
    loadOnScreen();
}

loadOnScreen();