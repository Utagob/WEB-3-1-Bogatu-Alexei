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

let selectedFruits = [];
const listSection = document.getElementById("list");

const addSelectedFruits = () => {
    if(listSection.hasChildNodes()) listSection.removeChild(listSection.firstChild);
    
    if(selectedFruits.length !== 0){
        const ul = document.createElement("ul");
        list.appendChild(ul);
        for(let i = 0; i < selectedFruits.length; i++) {
            const li = document.createElement("li");
            li.textContent = selectedFruits[i];
            ul.appendChild(li);
        }
    } else {
        const p = document.createElement("p");
        p.textContent = "Lista este goală!";
        list.appendChild(p);
    }
    
}
addSelectedFruits();

const fruitValue = () => {
    const fruitInput = document.getElementById("fruitInput");
    return fruitInput.value.toLowerCase();
}

const addFirst = () => {
    selectedFruits.unshift(fruitValue());
    addSelectedFruits();
}

const addLast = () => {
    selectedFruits.push(fruitValue());
    addSelectedFruits();
}

const addB1 = document.getElementById("addF");
addB1.addEventListener("click", () => {
    addFirst();
})

const addB2 = document.getElementById("addL");
addB2.addEventListener("click", () => {
    addLast();
})

const delFirst = () => {
    selectedFruits.shift();
    addSelectedFruits();
}

const delLast = () => {
    selectedFruits.pop();
    addSelectedFruits();
}

const delB1 = document.getElementById("delF");
delB1.addEventListener("click", () => {
    delFirst();
})

const delB2 = document.getElementById("delL");
delB2.addEventListener("click", () => {
    delLast();
})