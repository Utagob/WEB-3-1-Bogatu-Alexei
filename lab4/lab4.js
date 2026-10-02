let fructe = ["mere", "pere", "banane", "portocale", "kiwi"];
    console.log(fructe);
    console.log(fructe[0]);
    console.log(fructe[-1]);
    console.log(fructe.length);

let orase = ["Chisinau", "Iasi", "Balti", "Stefan Voda"];
    orase.push("Orhei");
    orase.unshift("Soroca");
    orase.pop();
    orase.shift();
    console.log(orase);

const sectieFructe = document.getElementById("fructe");

const FructToPage = (fruct) => {
    const div = document.createElement("div");
    div.className = "fruct";

    const button1 = document.createElement("button");
    button1.textContent = "Adauga la Inceput";
    button1.addEventListener("click", () => {
        addFirst(fruct);
    });

    const p = document.createElement("p");
    p.textContent = fruct;

    const button2 = document.createElement("button");
    button2.textContent = "Adauga la Sfarsit";
    button2.addEventListener("click", () => {
        addLast(fruct);
    });

    div.appendChild(button1);
    div.appendChild(p);
    div.appendChild(button2);
    sectieFructe.appendChild(div);
}

for(let i = 0; i < fructe.length; i++) {
    FructToPage(fructe[i]);
}

let selectedFruits = [];

const listSection = document.getElementById("list");
const addSelectedFruits = () => {
    if(listSection.hasChildNodes()) {
        listSection.removeChild(listSection.firstChild);
    }
    const ul = document.createElement("ul");
    list.appendChild(ul);
    for(let i = 0; i < selectedFruits.length; i++) {
        const li = document.createElement("li");
        li.textContent = selectedFruits[i];
        ul.appendChild(li);
    }
}

const addFirst = (a) => {
    selectedFruits.unshift(a);
    addSelectedFruits();
}

const addLast = (a) => {
    selectedFruits.push(a);
    addSelectedFruits();
}