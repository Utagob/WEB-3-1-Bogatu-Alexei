let students = JSON.parse(localStorage.getItem("students")) || [];
const content = document.getElementsByClassName("content")[0];

function addStudent(e){
    if(e) e.preventDefault();

    const lastname = document.getElementById("lastname");
    const firstname = document.getElementById("firstname");
    const age = document.getElementById("age");
    const clas = document.getElementById("class");
    const email = document.getElementById("email");

    const fname = firstname.value.trim();
    const lname = lastname.value.trim();
    const clasC = clas.value.trim();

    if(fname === "") EmptyError("firstname");

    if(lname === "") EmptyError("lastname");

    if(age.value === "") EmptyError("age");
        else if(age.value < 15 || age.value > 99) InvalidAgeError("age");

    if(clasC === "") EmptyError("class");

    if(email.value === "") EmptyError("email");
        else if(!valid(email.value)) InvalidEmailError("email");

    if(firstname.value !== "" && lastname.value !== "" && 
        age.value !== "" && clas.value !== "" && 
        age.value >= 15 && age.value <= 99 &&
        email.value !== "" && valid(email.value)){
        let student = {
            firstname: firstname.value,
            lastname: lastname.value,
            age: age.value,
            class: clas.value,
            email: email.value,
            date: Date.now()
        }
        students.push(student);
        localStorage.setItem("students", JSON.stringify(students));
        loadOnScreen();

        lastname.value = "";
        firstname.value = "";
        age.value = "";
        email.value = "";
        clas.value = "";

        const offcanvasEl = document.getElementById("offcanvasAddStudent");
        const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasEl);
        if (offcanvasInstance) offcanvasInstance.hide();
    }
}

["firstname", "lastname", "age", "class", "email"].forEach(id => {
    document.getElementById(id).addEventListener("input", () => ClearError(id));
});

function valid(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
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

const capitalize = (e) => {
    return e.charAt(0).toUpperCase() + e.slice(1);
}

function ErrorOnPage(e){
    const div = document.getElementById(e + "Div");
    div.classList.add("p-0", "border-start", "border-danger", "border-4", "on");

    const input = div.getElementsByTagName("input")[0];
    input.classList.add("rounded-0");

    const p = div.getElementsByTagName("p")[0];
    p.classList.add("text-sm", "text-danger", "m-0", "p-1", "alert", "alert-danger", "rounded-0");
}

function EmptyError(e){
    ErrorOnPage(e);
    const p = document.getElementById(e + "Div").getElementsByTagName("p")[0];
    p.innerHTML = '<i class="bi bi-exclamation-triangle"></i>  ' + capitalize(e) + " field is empty";
}

function InvalidEmailError(e){
    ErrorOnPage(e);
    const p = document.getElementById(e + "Div").getElementsByTagName("p")[0];
    p.innerHTML = '<i class="bi bi-exclamation-triangle"></i>  ' + capitalize(e) + " is invalid";
}

function InvalidAgeError(e){
    ErrorOnPage(e);
    const p = document.getElementById(e + "Div").getElementsByTagName("p")[0];
    p.innerHTML = '<i class="bi bi-exclamation-triangle"></i>  ' + capitalize(e) + " must be 15 or older";
}

function ClearError(e) {
    const div = document.getElementById(e + "Div");
    div.classList.remove("p-0", "border-start", "border-danger", "border-4", "on");

    const input = div.getElementsByTagName("input")[0];
    input.classList.remove("rounded-0");

    const p = div.getElementsByTagName("p")[0];
    p.classList.remove("text-sm", "text-danger", "m-0", "p-1", "alert", "alert-danger", "rounded-0");
    p.innerHTML = "";
}

loadOnScreen();