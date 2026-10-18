const students = [
    {
        firstname: "Ana",
        lastname: "Popescu",
        age: 19,
        class: "SI-231",
        specialty: "Securitate informațională",
    },
    {
        firstname: "Mihai",
        lastname: "Rusu",
        age: 20,
        class: "SI-231",
        specialty: "Securitate informațională",
    },
    {
        firstname: "Irina",
        lastname: "Ciobanu",
        age: 18,
        class: "PR-232",
        specialty: "Programare",
    },
    {
        firstname: "Andrei",
        lastname: "Munteanu",
        age: 21,
        class: "PR-232",
        specialty: "Programare",
    },
    {
        firstname: "Vlad",
        lastname: "Mândru",
        age: 20,
        class: "DG-241",
        specialty: "Design grafic",
    },
]

const sl = document.getElementById("studentList");

const addStudentHTML = (e) => {
    const studentID = e.firstname + e.lastname;

    const divE = document.createElement("div");
    divE.className = "student";
    divE.setAttribute("id", e.firstname+e.lastname);
    sl.appendChild(divE);

    const divStInfo = document.createElement("div");
    divStInfo.className = "student-info";
    divE.appendChild(divStInfo);

    const img = document.createElement("img");
    img.className = "student-img";
    img.setAttribute("src", "graduation.png");
    divStInfo.appendChild(img);

    const p = document.createElement("p");
    p.className = "name";
    p.innerText = e.firstname + " " + e.lastname;
    divStInfo.appendChild(p);

    const p1 = document.createElement("p");
    p1.className = "group";
    p1.innerText = e.class;
    divStInfo.appendChild(p1);

    const divC1 = document.createElement("div");
    divC1.className = "column";
    divE.appendChild(divC1);

    const cType1 = document.createElement("p");
    cType1.className = "c-type";
    cType1.innerText = "Varsta:";
    divC1.appendChild(cType1);

    const cValue1 = document.createElement("p");
    cValue1.className = "c-value";
    cValue1.innerText = e.age;
    divC1.appendChild(cValue1);

    const divC2 = document.createElement("div");
    divC2.className = "column";
    divE.appendChild(divC2);

    const cType2 = document.createElement("p");
    cType2.className = "c-type";
    cType2.innerText = "Specialitate:";
    divC2.appendChild(cType2);

    const cValue2 = document.createElement("p");
    cValue2.className = "c-value";
    cValue2.innerText = e.specialty;
    divC2.appendChild(cValue2);

    const dBtn = document.createElement("button");
    dBtn.className = "delete";
    dBtn.innerText = "Sterge";
    dBtn.addEventListener("click", () => {deleteStudent(studentID)});
    divE.appendChild(dBtn);
}

const addStudentsHTML = () => {
    sl.innerHTML = "";
    students.forEach((student) => addStudentHTML(student));
}

addStudentsHTML();

function addStudent(){
    const nume = document.getElementById("newName");
    const prenume = document.getElementById("newPrenume");
    const varsta = document.getElementById("newVarsta");
    const specialitate = document.getElementById("newSpecialitate");
    const clasa = document.getElementById("newClasa");

    if(nume.value !== "" && prenume.value !== "" && varsta.value !== "" && specialitate.value !== "" && clasa.value !== ""){
        let student = {
            firstname: prenume.value,
            lastname: nume.value,
            age: varsta.value,
            class: clasa.value,
            specialty: specialitate.value
        }
        students.push(student);
        addStudentsHTML();
    }

    nume.value = "";
    prenume.value = "";
    varsta.value = "";
    specialitate.value = "";
    clasa.value = "";
}

function deleteStudent(e){
    for(let i=0; i<students.length; i++){
        if(students[i].firstname + students[i].lastname === e){
            students.splice(i, 1); 
            break;
        }  
    }
    addStudentsHTML();
}