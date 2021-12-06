function generateInnName() {
    let randomInnFirstName = innFirstName[Math.floor(Math.random() * innFirstName.length)];
    let randomInnSecondName = innSecondName[Math.floor(Math.random() * innSecondName.length)];
    let randomInnName = randomInnFirstName + " " + randomInnSecondName;
    document.getElementById("innName").innerHTML = randomInnName;
}

