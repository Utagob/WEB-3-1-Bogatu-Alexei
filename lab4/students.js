let students = [
    { nume: "Bogatu Alexei", varsta: 17, nota: 9},
    { nume: "Boico Mihai", varsta: 18, nota: 10},
    { nume: "Caliniuc Nikita", varsta: 18, nota: 9},
    { nume: "Culbida Mihai", varsta: 17, nota: 11},
    { nume: "Voljin Polina", varsta: 18, nota: 10},
]

const catalogElec = document.getElementById("catalogElec");
const addElevSection = document.getElementById("adaugaElev");

const afiseazaElevi = () => {
    catalogElec.innerHTML = "";
    const nrElevi = document.createElement("p");
    nrElevi.innerText = "Număr de elevi: " + students.length;

    const title = document.createElement('h1');
    title.innerText = "CATALOG ELECTRONIC";

    const ol = document.createElement("ol");
    students.forEach((student) => {
        const li = document.createElement("li");
        li.innerText = student.nume + "\n" + "Varsta: " + student.varsta + "\n" + "Nota: " + student.nota + "\n\n";
        ol.appendChild(li);
    })

    catalogElec.appendChild(nrElevi);
    catalogElec.appendChild(title);
    catalogElec.appendChild(ol);
}
afiseazaElevi();

function adaugaElev(){
    const name = document.getElementById("newName");
    const varsta = document.getElementById("newVarsta");
    const nota = document.getElementById("newNota");

    if(name.value !== "" && varsta.value !== "" && nota.value !== ""){
        let elev = {
            nume: name.value,
            varsta: varsta.value,
            nota: nota.value
        }
        students.push(elev);
        afiseazaElevi();
    }

    name.value = "";
    varsta.value = "";
    nota.value = "";
}

const adaugaElevBtn = document.getElementById("submitNewElev");
adaugaElevBtn.addEventListener("click", adaugaElev);

function stergeElev() {
    const name = document.getElementById("delName");
    for(let i=0; i<students.length; i++){
        if(students[i].nume.toLowerCase() === name.value.toLowerCase())
            students.splice(i, 1);  
    }
    name.value = "";
    afiseazaElevi();
}

const stergeElevBtn = document.getElementById("delBtn");
stergeElevBtn.addEventListener("click", stergeElev);


const findResult = document.getElementById("output")
function cautaElev() {
    const name = document.getElementById("findName");
    for(let i=0; i<students.length; i++){
        if(students[i].nume.toLowerCase() === name.value.toLowerCase()){
            findResult.innerText = "Elev găsit!\n\n" + "Nume: " + students[i].nume + "\n" + "Varsta: " + students[i].varsta + "\n" + "Nota: " + students[i].nota + "\n\n";
            break;
        } else {
            findResult.innerText = "Elevul nu a fost găsit!";
        }
    }
    name.value = "";
}

const findElevBtn = document.getElementById("findBtn");
findElevBtn.addEventListener("click", cautaElev);